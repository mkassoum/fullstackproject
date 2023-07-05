#frontend
FROM node:14.17.6 as frontend
WORKDIR /app/frontend
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

#backend
FROM maven:3.8.3-openjdk-11-slim as backend
WORKDIR /app/backend
COPY api/pom.xml .
COPY api/src ./src
RUN mvn clean package -DskipTests

#final image
FROM openjdk:11-jre-slim
WORKDIR /app
COPY --from=backend /app/backend/target/demo-0.0.1-SNAPSHOT.jar ./app.jar
COPY --from=frontend /app/frontend/dist/frontend ./frontend
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
