import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/portfolio/header/header.component';
import { AboutComponent } from './components/portfolio/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceComponent } from './components/portfolio/experience/experience.component';
import { EducationComponent } from './components/portfolio/education/education.component';
import { SkillsComponent } from './components/portfolio/skills/skills.component';
import { ProjectsComponent } from './components/portfolio/projects/projects.component';
import { ProjectItemComponent } from './components/portfolio/project-item/project-item.component';
import { SkillItemComponent } from './components/portfolio/skill-item/skill-item.component';
import { ExperienceItemComponent } from './components/portfolio/experience-item/experience-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    PortfolioComponent,
    FooterComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ProjectItemComponent,
    SkillItemComponent,
    ExperienceItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
