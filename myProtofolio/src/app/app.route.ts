import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
// ResumeComponent import removed

export enum  ROUTER_TOKENS{
  HOME='home',
  EXPERIENCE='experience',
  ABOUT='about',
  CONTACT='contact',
  PROJECT='projects',
  SIDEBAR='sidebar'
  // RESUME token removed
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
    }
    // Cleaned up duplicated route and leftover comment
    //NotFoundComponent
];