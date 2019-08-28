import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MyMaterialModule } from './material.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CustomMaterialModule } from './core/material.module';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AddingAReviewComponent } from './adding-a-review/adding-a-review.component';
import { AddEntityComponent } from './add-entity/add-entity.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatGridListModule} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UserComponent,
    AddingAReviewComponent,
    AddEntityComponent,
    LandingPageComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MyMaterialModule,
    MatFormFieldModule,
    FormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
