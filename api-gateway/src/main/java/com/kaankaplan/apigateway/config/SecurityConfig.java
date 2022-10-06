package com.kaankaplan.apigateway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
//import org.springframework.security.config.web.server.ServerHttpSecurity;
//import org.springframework.security.web.server.SecurityWebFilterChain;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
//import org.springframework.web.cors.reactive.CorsWebFilter;
//import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
import java.util.Collections;

@Configuration
//@EnableWebFluxSecurity
//@CrossOrigin
public class SecurityConfig {

//    @Bean
//    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity serverHttpSecurity){
//
//        serverHttpSecurity.cors().and().csrf().disable()
//                .authorizeExchange(exchange -> exchange
////                        .pathMatchers(HttpMethod.POST ,"/api/movie/comments/add")
////                        .authenticated()
////                        .pathMatchers("/api/movie/comments/delete/**")
////                        .authenticated()
//                        .anyExchange()
//                        .permitAll())
//                .oauth2ResourceServer(ServerHttpSecurity.OAuth2ResourceServerSpec::jwt);
//        return serverHttpSecurity.build();
//    }

//    @Bean
//    public CorsWebFilter corsWebFilter() {
//
//        final CorsConfiguration corsConfig = new CorsConfiguration();
//        corsConfig.setAllowedOrigins(Collections.singletonList("*"));
//        corsConfig.addAllowedOrigin("http://localhost:3000");
//        corsConfig.setMaxAge(3600L);
//        corsConfig.setAllowedMethods(Arrays.asList("GET", "POST"));
//        corsConfig.addAllowedHeader("*");
//
//        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", corsConfig);
//
//        return new CorsWebFilter(source);
//    }
}
