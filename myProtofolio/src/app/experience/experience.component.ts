import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
        role: "Senoir Software Engineer",
        company: "Capgemini",
        duration: "August 2022 – Present",
        description: "Developed scalable microservices and APIs for Barclays' LoanIQ platform using Spring Boot, Kafka, and MongoDB, streamlining loan trading and processing workflows.",
        techStack: ["Java", "Spring Boot", "Kafka", "Angular", "MongoDB", "Oracle","TeamCity","MQ","Microservices"]
    },
    {
        role: "Systems Engineer",
        company: "TCS",
        duration: "June 2018 – August 2022",
        description: "Engineered British Telecom's KCIM service using Spring Boot and Drools, automating XML, SMS, and email notifications to enhance workflow efficiency. Automated telecom processes with Selenium and Python, integrating output data into Grafana for real-time monitoring and insights.",
        techStack: ["Python", "Unix/Linux", "MySQL", "Spring Boot-MVC,JPA,Hibernate", "Drools", "Selenium","HTML5 CSS","CI/CD","Jenkins"]
    }
];

}
