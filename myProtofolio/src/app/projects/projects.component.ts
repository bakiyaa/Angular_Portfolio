import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      techHeader:"AWS ",
      title: "- Standard Settlement Instructions Automation",
      description: `Automated the settlement instructions for payments using AWS Lambda, CloudFormation, Bedrock, Textract, SNS, and SQS. Streamlined workflows and ensured seamless integration for processing and notifying payment settlements.`,
      link: "",
      techStack: ["AWS", "Lambda", "Docker", "Textract", "SQS", "IAM","SAM","AWS bedrock","Python"],
    },
    {
      techHeader:"GCP",
      title: "- Carbon Emissions Analysis with RAG Framework",
      description: `Conducted a comprehensive analysis of Carbon 3 emissions using the Retrieval-Augmented Generation (RAG) framework. Utilized Google BigQuery, Gemini, and Vector AI search to gather insights and drive sustainability efforts.`,
      link: "",
      techStack: ["GCP", "Vertex AI Studio", "Python", "RAG", "Bigquery", "Google sheets","Search and Conversation","AI","Terraform"],
    }
  ];
}

