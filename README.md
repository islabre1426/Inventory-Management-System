# Inventory Management System
A Web Application for Inventory Management, served as a project for Web Application Development Lab at International University, VNU-HCMC.

## Members
- Vũ Quốc Khánh - ITCSIU24039
- Lê Hồ Chí Hải - ITCSIU24025
- Lâm Đạt Sâm - ITCSIU24073

## Technology
- Frontend: React
- Backend: Spring Boot
- Database: MySQL

## How to run this project from source
Requirement:
- MySQL
- NodeJS and npm (for frontend only)
- VSCode

1. Clone this project
2. Open the project in VSCode
3. Import database schema and sample data found in src/main/resources to MySQL
4. Run `npm install` inside src/main/java/iu/wadproject/ims/view/
5. Configure MySQL username and password in application.properties
6. Run the project via Run and Debug tab > Select Full Stack > click run button
7. Wait a few second for backend to initialize and you're all set.

## Run with Docker

Requirements: Docker Desktop with Docker Compose enabled.

1. Copy the environment template and replace both password values with strong passwords:

   ```powershell
   Copy-Item .env.example .env
   notepad .env
   ```

2. Build and start the application:

   ```powershell
   docker compose up --build -d
   ```

3. Open [http://localhost:8080](http://localhost:8080). To follow startup logs, run:

   ```powershell
   docker compose logs -f
   ```

The frontend is served by Nginx, which forwards API requests to Spring Boot. MySQL is
initialized with `schema.sql` and `data.sql` the first time its persistent volume is
created. The database remains in that volume when the containers are stopped or
recreated. To stop the application, run `docker compose down`.

To permanently delete the database and its seeded data, run
`docker compose down --volumes`; the next startup will initialize a fresh database.
Configure `MAIL_USERNAME` and `MAIL_PASSWORD` in `.env` if the password-reset email
feature needs SMTP access. Set `APP_PORT` in `.env` to change the host port.

## Default admin account
Username: admin

Password: admin

Change the default admin password after the first login.