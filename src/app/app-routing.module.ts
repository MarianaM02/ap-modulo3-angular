import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IsLoggedGuard } from './services/is-logged.guard';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent, canActivate: [IsLoggedGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
