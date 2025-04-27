import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-background-animation',
  templateUrl: './background-animation.component.html',
  styleUrls: ['./background-animation.component.css']
})
export class BackgroundAnimationComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createConstellation();
  }



  createConstellation() {
    const canvas = document.getElementById('constellation-canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars: { x: number, y: number, radius: number }[] = [];
    //const starCount = 60;
    const starCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
    const connectionDistance = 150;

    // Create random stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
       // radius: Math.random() * 1.5 + 0.5
      // radius: Math.random() * 1.0 + 0.3
      radius: Math.random() * 0.8 + 0.2
      });
    }

    // Add mouse/touch star
    const mouse = { x: width / 2, y: height / 2, radius: 2 };
    stars.push(mouse);

    // Mouse move event
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Touch move event
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    });

    // Reset on touch end
    window.addEventListener('touchend', () => {
      mouse.x = width / 2;
      mouse.y = height / 2;
    });

    function drawGalaxy() {
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height));
    //  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');  // Light center glow
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');  // Dark outer edge
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }
    

    function draw() {
      ctx.clearRect(0, 0, width, height);
        // Draw galaxy effect first
      drawGalaxy();


      // Draw stars
      //ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // ✨ slightly transparent stars
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw lines between close stars
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / connectionDistance) * 0.6})`; // ✨ smooth line transparency
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      // Slight random movement
      for (let star of stars) {
        if (star !== mouse) { // Do not move the mouse/touch star
        //  star.x += Math.random() * 0.5 - 0.25;
        //  star.y += Math.random() * 0.5 - 0.25;
        star.x += Math.random() * 0.25 - 0.125; // Reduced movement to keep them in place
        star.y += Math.random() * 0.25 - 0.125;

          if (star.x < 0) star.x = width;
          if (star.x > width) star.x = 0;
          if (star.y < 0) star.y = height;
          if (star.y > height) star.y = 0;
        }
      }

      requestAnimationFrame(draw);
    }

    draw();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const canvas = document.getElementById('constellation-canvas') as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
}
