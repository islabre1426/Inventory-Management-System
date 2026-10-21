FROM node:22-alpine AS frontend-build

WORKDIR /app
COPY src/main/java/iu/wadproject/ims/view/package*.json ./
RUN npm ci
COPY src/main/java/iu/wadproject/ims/view/ ./
RUN npm run build

FROM nginx:alpine AS frontend
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=frontend-build /app/dist /usr/share/nginx/html

FROM maven:3.9-eclipse-temurin-25 AS backend-build

WORKDIR /app
COPY pom.xml .
COPY src ./src
COPY --from=frontend-build /app/dist ./src/main/resources/static
RUN mvn -B -DskipTests package

FROM eclipse-temurin:25-jre AS backend

WORKDIR /app
COPY --from=backend-build /app/target/ims-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-XX:MaxRAMPercentage=75.0", "-jar", "/app/app.jar"]
