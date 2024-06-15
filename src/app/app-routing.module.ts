import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'user', component: UserListingComponent },
  { path: 'create', component: CreateUserComponent },
  { path: '**', redirectTo: '' } // Wildcard route for handling undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
