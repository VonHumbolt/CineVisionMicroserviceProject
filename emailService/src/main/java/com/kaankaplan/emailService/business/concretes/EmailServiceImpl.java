package com.kaankaplan.emailService.business.concretes;

import com.kaankaplan.emailService.business.abstracts.EmailService;
import freemarker.template.*;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Map;


@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender javaMailSender;
    private final FreeMarkerConfigurer configuration;

    @Override
    public void sendEmail(String sender, final String recipient, String subject, Map<String, String> model) {

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                    StandardCharsets.UTF_8.name());

            Template template = configuration.getConfiguration().getTemplate("emailTemplate.ftlh");
            String html = FreeMarkerTemplateUtils.processTemplateIntoString(template, model);

            helper.setFrom(sender);
            helper.setTo(recipient);
            helper.setText(html, true);
            helper.setSubject(subject);

            javaMailSender.send(mimeMessage);

        } catch (MessagingException | TemplateException | IOException e) {
            throw new RuntimeException(e);
        }

    }
}
