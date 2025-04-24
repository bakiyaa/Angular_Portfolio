import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component'; // Import the new component

export enum  ROUTER_TOKENS{
  HOME='home',
  EXPERIENCE='experience',
  ABOUT='about',
  CONTACT='contact',
  PROJECT='projects',
  SIDEBAR='sidebar',
  RESUME='resume' // Add token for the new route
}

export const routes: Routes = [
  {
    path : '',
    redirectTo : ROUTER_TOKENS.ABOUT,
    pathMatch: 'full'},
    {
      path: ROUTER_TOKENS.ABOUT,
      component : AboutComponent,
    },
    {
      path: ROUTER_TOKENS.EXPERIENCE,
      component : ExperienceComponent,
    },
    {
      path:ROUTER_TOKENS.SIDEBAR,
      component : SidebarComponent,
    },
    {
      path:ROUTER_TOKENS.PROJECT,
      component : ProjectsComponent,
    },
    {
      path: ROUTER_TOKENS.RESUME, // Use the token for the path
      component: ResumeComponent  // Route to the new component
    }
    //NotFoundComponent
];