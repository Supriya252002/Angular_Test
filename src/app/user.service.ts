import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from './Models/Task';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<any[]>([]);
  users$ = this.usersSubject.asObservable();
  private apiUrl = 'https://angularhttp-d2cfd-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }

  //Task-3(First One)CreateUser Method from user service

  createuser(task: Task) {
    const headers = new HttpHeaders({ 'my-header': 'Hello World' });
    this.http.post<{ name: string }>(
      'https://angularhttp-d2cfd-default-rtdb.firebaseio.com/tasks.json', task, { headers: headers }
    ).subscribe(response => {
      console.log(response);
    });

    // If you want to return a custom message, you can do it like this
    return of('User saved successfully!');
  }

  //Task-3(Second one)
  // New function to return a list of dummy users
  getDummyUsers(): Observable<any[]> {

    const dummyUsers: any[] = [
      { id: 1, name: 'abc', email: 'abc@example.com' },
      { id: 2, name: 'xyz', email: 'xyz@example.com' },
    ];

    // Return the dummy users as an observable
    return of(dummyUsers);
  }
  
  
    addUser(user: any) {
      const currentUsers = this.usersSubject.value;
      this.usersSubject.next([...currentUsers, user]);
    }
  
    getUsers(): Observable<any[]> {
      return this.users$;
    }

}
