import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})


  export class UserListingComponent implements OnInit {
    users$: Observable<any[]>;
  
    constructor(private userService: UserService) { }
    
  
    ngOnInit() {
      // Call the getDummyUsers function when the component is initialized
      this.users$=this.userService.getDummyUsers();
    }

  
  }
  





