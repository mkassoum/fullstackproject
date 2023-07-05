# Mohamed's Learning Process

This is a project called "Mohamed's Learning Process" that consists of a frontend and a backend. It allows users to manage their learning subjects and track their progress.

## Technologies Used

- Frontend: Angular
- Backend: Spring Boot
- Database: MongoDB

Getting Started
Follow the steps below to get the project up and running on your local machine:

1. Clone the repository:

git clone https://github.com/mkassoum/fullstackproject.git

2. add your Mongodb connection string in the application.properties
   and create a database named subjects
  mohameds-learning-process/api/src/main/resources/application.properties

2. Frontend Setup:

Navigate to the frontend directory:
cd fullstackproject/mohameds-learning-process


Install the dependencies:
npm install

Start the frontend development server:
npm start

The frontend should now be running on http://localhost:4200.

3. Backend Setup:

Open a new terminal window.
Navigate to the backend directory:
cd fullstackproject/mohameds-learning-process/api

Build the backend:
mvn clean package -DskipTests


Start the backend server:
java -jar target/demo-0.0.1-SNAPSHOT.jar

The backend should now be running on http://localhost:8080.

4. Access the application:

Open your web browser and visit http://localhost:4200 to access the frontend.
Use the application to manage your learning subjects and track your progress.

Contributing
If you'd like to contribute to this project, please follow these guidelines:

Fork the repository
Create a new branch
Make your changes
Test your changes
Submit a pull request
