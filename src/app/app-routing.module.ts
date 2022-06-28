import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookSectionComponent } from './components/book-section/book-section.component';
import { BrandSectionComponent } from './components/brand-section/brand-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { GalerySectionComponent } from './components/galery-section/galery-section.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PackageSectionComponent } from './components/package-section/package-section.component';
import { RegisterComponent } from './components/register/register.component';
import { ReviewSectionComponent } from './components/review-section/review-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'register', component: RegisterComponent},
  {path:'verify-email', component : VerifyEmailComponent},
  {path:'forgot-password', component : ForgotPasswordComponent},
  {path:'book', component: BookSectionComponent},
  {path:'brands', component: BrandSectionComponent},
  {path:'contacts', component: ContactSectionComponent},
  {path:'galery', component : GalerySectionComponent},
  {path:'home', component : HomeComponent},
  {path:'reviews', component: ReviewSectionComponent},
  {path:'services', component : ServicesSectionComponent},
  {path:'packages', component : PackageSectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
