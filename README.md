Placement and Job Application Tracker

A full-stack web application designed to help students organise and track their job and placement applications in one place.

About the Project

The Placement and Job Application Tracker helps users maintain their job application details, monitor application statuses, and view application statistics through a simple dashboard.

I developed this project as part of my learning journey to understand how frontend technologies, Java backend development, REST APIs, and databases work together.

Features

- Add new job applications.
- View saved job application details.
- Delete job applications.
- Track total applications.
- View interview and offer counts.
- Store application data in a MySQL database.
- Retrieve saved records through a REST API.

Technologies Used

Frontend

- HTML
- CSS
- JavaScript

Backend

- Java
- Spring Boot
- Spring Data JPA
- REST API

Database

- MySQL

Tools

- Visual Studio Code
- MySQL Workbench
- Git and GitHub
- Maven

Project Structure

PlacementJobTracker/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
│
└── README.md

Database Setup

1. Install MySQL Server.
2. Create a database:

CREATE DATABASE placement_tracker_db;

3. The application uses a table named "applications". Hibernate can create or update it using the configured JPA settings.

Backend Setup

1. Open the backend folder in the terminal.
2. Configure your database password using an environment variable.

For Windows PowerShell:

$env:DB_PASSWORD="YOUR_MYSQL_PASSWORD"

3. Start the Spring Boot application:

.\mvnw.cmd spring-boot:run

The backend runs at:

"http://localhost:8080"

API Endpoints

Method| Endpoint| Purpose
GET| "/api/applications"| View all applications
POST| "/api/applications"| Add an application
DELETE| "/api/applications/{id}"| Delete an application

Frontend Setup

1. Open the frontend folder.
2. Open "index.html" in your browser.
3. Make sure the Spring Boot backend is running.
4. Start adding and managing job applications.

Learning Outcomes

Through this project, I practised:

- Connecting frontend and backend applications.
- Creating REST API endpoints using Spring Boot.
- Performing database operations using Spring Data JPA.
- Connecting Java applications with MySQL.
- Understanding data persistence.
- Debugging and integrating application components.

Future Improvements

- Edit existing applications.
- Search applications by company name.
- Filter applications by status.
- Add more dashboard analytics.

Author

Vadla Harini

B.Tech Student | Learning Java, Web Development and Full-Stack Development

Built with curiosity, consistency, and a willingness to learn.