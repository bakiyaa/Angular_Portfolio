import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RouterOutlet,
} from '@angular/router';
import { LoggerService } from './logger.service';
import { LoadingService } from './loading.service';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { LoadingComponent } from "./loading/loading.component";
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SidebarComponent, FooterComponent, RouterOutlet, LoadingComponent, CommonModule, AboutComponent, ExperienceComponent, ProjectsComponent], // Fixed typo
})
export class AppComponent implements OnInit {

  title = 'Portfolio';
  isLoading: boolean = false; // Added property
  private currentIndex: number = 0;
  private routes: string[] = ['/about', '/experience', '/projects'];

  constructor(
    private router: Router,
    private logger: LoggerService,
    private loadingService: LoadingService // Ensure service is injected
  ) {}

  ngOnInit(): void {
    // Subscribe to router events for loading state
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loadingService.show();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loadingService.hide();
      }
    });

    // Subscribe to loading state
    this.loadingService.isLoading$.subscribe((loading) => {
      this.isLoading = loading;
    });

    this.logger.info('AppComponent initialized');
  }

  onScroll(event: Event): void {
    console.log('Scroll event triggered');
    const element = event.target as HTMLElement;

    this.logger.info(
      `Scroll details - ScrollTop: ${element.scrollTop}, ClientHeight: ${element.clientHeight}, ScrollHeight: ${element.scrollHeight}`
    );

    if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
      this.logger.info('Scrolled to the bottom');
      this.navigateToNextRoute();
    } else if (element.scrollTop === 0) {
      this.logger.info('Scrolled to the top');
      this.navigateToPreviousRoute();
    }
  }

  private navigateToNextRoute(): void {
    if (this.currentIndex < this.routes.length - 1) {
      this.currentIndex++;
      this.logger.info(`Navigating to next route: ${this.routes[this.currentIndex]}`);
      this.router.navigate([this.routes[this.currentIndex]]);
    } else {
      this.logger.warn('Already at the last route');
    }
  }

  private navigateToPreviousRoute(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.logger.info(`Navigating to previous route: ${this.routes[this.currentIndex]}`);
      this.router.navigate([this.routes[this.currentIndex]]);
    } else {
      this.logger.warn('Already at the first route');
    }
  }
}
