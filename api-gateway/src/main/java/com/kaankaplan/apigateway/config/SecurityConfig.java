package com.kaankaplan.apigateway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity serverHttpSecurity){

        serverHttpSecurity.csrf().disable()
                .authorizeExchange(exchange -> exchange
                        .pathMatchers("/api/user/customers/add")
                        .authenticated()
                        .pathMatchers(HttpMethod.POST ,"/api/movie/comments/add")
                        .authenticated()
                        .pathMatchers("/api/movie/comments/delete/**")
                        .authenticated()
                        .anyExchange()
                        .permitAll())
                .oauth2ResourceServer(ServerHttpSecurity.OAuth2ResourceServerSpec::jwt);
        return serverHttpSecurity.build();
    }
}
