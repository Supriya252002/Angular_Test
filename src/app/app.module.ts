import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { CreateUserComponent } from './create-user/create-user.component';
// import{MatToolbarModule} from '@angular/material/toolbar';
// import{MatButtonModule}from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    UserListingComponent,
    CreateUserComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // MatToolbarModule,
    // MatButtonModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
