import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { EducationComponent } from './components/education/education.component';
import { EducationItemComponent } from './components/education-item/education-item.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsHardComponent } from './components/skills-hard/skills-hard.component';
import { SkillsHardItemComponent } from './components/skills-hard-item/skills-hard-item.component';
import { SkillsSoftComponent } from './components/skills-soft/skills-soft.component';
import { SkillsSoftItemComponent } from './components/skills-soft-item/skills-soft-item.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsItemComponent } from './components/projects-item/projects-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ButtonComponent,
    AboutComponent,
    ExperienceComponent,
    ExperienceItemComponent,
    EducationComponent,
    EducationItemComponent,
    SkillsComponent,
    SkillsHardComponent,
    SkillsHardItemComponent,
    SkillsSoftComponent,
    SkillsSoftItemComponent,
    ProjectsComponent,
    ProjectsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
