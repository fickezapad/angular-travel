import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { BookSectionComponent } from './components/book-section/book-section.component';
import { PackageSectionComponent } from './components/package-section/package-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { GalerySectionComponent } from './components/galery-section/galery-section.component';
import { ReviewSectionComponent } from './components/review-section/review-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { BrandSectionComponent } from './components/brand-section/brand-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    HomeComponent,
    BookSectionComponent,
    PackageSectionComponent,
    ServicesSectionComponent,
    GalerySectionComponent,
    ReviewSectionComponent,
    ContactSectionComponent,
    BrandSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
