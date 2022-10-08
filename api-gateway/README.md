# Api Gateway
Api gateway manage coming requests from client. It forwards the request to 
the relevant service. In this service, Spring Cloud Gateway was used.

## Technologies
<ul>
    <li>Spring Cloud Gateway</li>
    <li>Spring Cloud Netflix Eureka Client</li>
    <li>Spring Security</li>
    <li>Zipkin</li>
    <li>Sleuth</li>
</ul>

## application.properties File
Other services routes was defined in this file. Gateway forwards requests 
using these routes. Zipkin and sleuth properties are in here. Also, 
Spring Security Cors configurations were specified in application.properties file.
