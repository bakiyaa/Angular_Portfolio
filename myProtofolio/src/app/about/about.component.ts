import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  ngAfterViewInit() {
    this.initSpacecraftAnimation();
  }
  resumeUrl: string = 'assets/resume.pdf';
  initSpacecraftAnimation() {
    const paragraph = document.querySelector('#about p:nth-of-type(2)') as HTMLElement;
    if (!paragraph) return;
  
    const fullText = paragraph.innerHTML;
    paragraph.innerHTML = ''; // Clear first
    let i = 0;
  
    function typeNext() {
      if (i < fullText.length) {
        paragraph.innerHTML += fullText.charAt(i);
        i++;
        setTimeout(typeNext, 40); // ⏱ Adjust typing speed here (smaller = faster)
      }
  }
  typeNext()
  }
}
