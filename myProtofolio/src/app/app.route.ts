import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ImpossibleListComponent } from './impossible-list/impossible-list.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';


export enum  ROUTER_TOKENS{
  HOME = 'home',
  BLOG = 'blog',
  IMPOSSIBLE_LIST = 'impossible-list',
  CV = 'cv',
  WORK = 'work',
  EXPERIENCE='experience',
  ABOUT='about',
  CONTACT='contact',
  PROJECT='projects',
  SIDEBAR='sidebar'
}

export const routes: Routes = [
  {
    path: ROUTER_TOKENS.HOME,
    redirectTo: ROUTER_TOKENS.ABOUT,
    pathMatch: 'full' },
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
      path: ROUTER_TOKENS.BLOG,
      component: BlogComponent,
    },
    {
      path: ROUTER_TOKENS.IMPOSSIBLE_LIST,
      component: ImpossibleListComponent,
    },
    {
      path: ROUTER_TOKENS.WORK,
      component: WorkComponent,
    },
    {
      path: ROUTER_TOKENS.CONTACT,
      component: ContactComponent,
    },
    {
      path: ROUTER_TOKENS.CV,
      component: CvComponent,
    }
    //NotFoundComponent
];