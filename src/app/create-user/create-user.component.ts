import { Component,inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Subscribable } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  formdata: any = {};
  issubmit:boolean=false;

  userservice:UserService=inject(UserService)
  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.pattern(/^\d{10}$/)]),
      address:new FormGroup({
        street: new   FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        pincode: new FormControl('', [Validators.required]),
       
       
      })
    });
  }

       
       OnFormSubmitted() {
        if (this.reactiveForm.valid) {
          this.formdata = this.reactiveForm.value;
          this.issubmit = true;
          const newUser = { ...this.formdata, id: Date.now() }; // Add a unique ID for each user
          this.userservice.addUser(newUser);
          // Optionally, reset the form after submission
          this.reactiveForm.reset();
        } else {
          this.reactiveForm.markAllAsTouched();
        }
      }
  }
  
    
    
   