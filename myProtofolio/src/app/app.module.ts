import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'sidebar', component: SidebarComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component:ExperienceComponent},
  { path: 'projects', component:ProjectsComponent}

];

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
     // Import RouterModule with routes
  ],
  exports : [RouterModule]
})

export class AppModule {}

bootstrapApplication(AppComponent);
