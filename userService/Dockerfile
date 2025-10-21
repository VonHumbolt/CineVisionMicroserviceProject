FROM eclipse-temurin:17-jdk-jammy
USER root
RUN apt-get update && apt-get install -y curl
USER 1000
ARG JAR_FILE=target/*.jar
WORKDIR /app
COPY ${JAR_FILE} app.jar
EXPOSE 8082
ENTRYPOINT ["java","-jar","/app/app.jar"]
