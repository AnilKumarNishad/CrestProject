import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
	authToken: any;
	student: any;


  constructor(private http:Http) { }
//connect to backend
  registerStudent(student){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');

    //students/register is temporary domain
  	return this.http.post('http://localhost:3777/students/register', student,{headers: headers})
  	.map(res => res.json());
  }


 authenticateStudent(student){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3777/students/authenticate', student,{headers: headers})
    .map(res => res.json());
  }

  //get the profile--will get unauthorized if the token is not sent
  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3777/students/profile',{headers: headers})
    .map(res => res.json());

  }

  storeStudentData(token, student){
    localStorage.setItem('id_token',token); //JWT look directly for this in local storage
    localStorage.setItem('http://localhost:3777/student',JSON.stringify(student));
    this.authToken = token;
    this.student = student;
  }


  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }


  login(){
    return tokenNotExpired();
  }


  logout(){
    this.authToken = null;
    this.student = null;
    localStorage.clear();
  }

}
