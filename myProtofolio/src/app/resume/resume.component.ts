import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-resume',
  standalone: true, // Make it standalone
  imports: [CommonModule], // Import necessary modules
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  // Component logic will go here if needed
}
