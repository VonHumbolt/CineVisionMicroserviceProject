# Full Stack Web Project with Microservices
This project is a full-stack web application project
and it was created with Java and React. 
Spring Cloud was used in this project to create
the microservice architecture. Detailed explanations
of the services in the microservice architecture 
are explained in the readme files of the services.

## Subject Of Project
CineVision App is online cinema ticket sale website. Purpose of 
this website is to provide ease of buying tickets for those who 
want to watch movies in the cinema. People can display movies in the theaters or
upcoming movies. They can view the movie details and can learn the plot of the movie, 
actors of the movie, release date and so on. In this detail page, people can choose the city
and movie theater where they want to watch to movie. After this selection, they can automatically
redirect to payment page. In this payment page, they can choose ticket count and type such as 
student and adult. Then, they can choose the chairs they will sit on in the movie theater.
Finally, they complete the payment process after entering information
such as credit card information, email, name and surname.
If the payment is successful, the ticket details are sent to the email which entered by the user.
If people want to share their opinions about the movie, they can write comments on the movie detail page.
However, People must create an account to comments on movies.

## Technologies Of Project
There are many technologies in this project. These are:
<h5> Backend Techologies </h5>
<ul>
    <li>Java 17</li>
    <li>Spring Boot 2.7.0 </li>
    <li>Spring Cloud</li>
    <li>Spring Data Jpa</li>
    <li>Spring Security</li>
    <li>Lombok</li>
    <li>WebFlux</li>
    <li>Apache Kafka</li>
    <li>Jwt</li>
    <li>Java Mail Sender</li>
    <li>Zipkin</li>
    <li>Resilience4j</li>
    <li>PostgreSql</li>
    <li>MongoDB</li>
    <li>Docker</li>
</ul>
<h5> Frontend Techologies </h5>
<ul>
    <li>JavaScript</li>
    <li>React</li>
    <li>Bootstrap</li>
    <li>Redux</li>
</ul>

## Usage Of Technologies In Project
There are 5 services in this project and each service 
are written with N-layered architecture. Spring Cloud
used for microservice infrastructure.
Netflix Eureka Server used to create eureka server. This 
eureka server contains movie service, user service and email service
eureka clients and api-gateway service. In addition,
Zipkin and Sleuth were used to monitor cross-service logs. Also,
Resilience4j used as Circuit Breaker.
<br>
<br>
In the Api Gateway, Spring Cloud Gateway was used for managing
requests.
<br>
<br>
In the Eureka Server, Netflix Eureka Server was used. And Spring
Security was used to secure eureka server.
<br>
<br>
WebFlux was used for communication between Movie and User Services.
And, Apache Kafka was used for asynchronous communication
between Movie and Email Services.
<br>
<br>
In the User Service, MongoDB used as database. Spring Security
was used for encrypting user's passwords and generating Jwt token.
<br>
<br>
In the Movie Service, PostgreSql used as database and Spring Data Jpa
was used. Webflux and Apache Kafka was used for communication with other services.
Resilience4J Circuit Breaker was used here.
<br>
<br>
In the Email Service, Apache Kafka was used for receiving the 
message from Movie Service. Java Mail Sender and FreeMarker template 
was used for creating email template and sending email.
<br>
<br>
PostgreSql, MongoDB, Apache Kafka and Zipkin run as Docker container
in the docker-compose.yml file.

On the Frontend side, JavaScript and React was used. Also,
Axios was preferred to send request to the backend. For state management,
Redux was used. For, design of the UI, Bootstrap and Css are used.

## Architectural Design
<p align="center">
    <img src="architectural_design.jpeg" />
</p>

## Project UI