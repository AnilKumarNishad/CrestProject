import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../../services/validate.service';
import {AuthService} from '../../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';



@Component({
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.component.html',
  styleUrls: ['./registerstudent.component.scss']
})
export class RegisterstudentComponent implements OnInit {
    Student_Name: String;
  	Email_ID: String;
  	username: String;
  	Pwd: String;
  	DOB: Date;
    Student_ID: String;
    Address: String;
    Mobile_No: String;
    Orgn_ID: Number;
    Dept_ID: Number;
    

  constructor(
   private validateService: ValidateService,
   private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router



    ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
  	const student = {

  	Student_Name: this.Student_Name,
  	Email_ID: this.Email_ID,
  	username: this.username,
  	Pwd: this.Pwd,
    Student_ID: this.Student_ID,
    DOB: this.DOB,
    Address: this.Address,
    Mobile_No: this.Mobile_No,
    Orgn_ID: this.Orgn_ID,
    Dept_ID: this.Dept_ID
   
  	}
  	 // Required Fields
    if(!this.validateService.validateRegister(student)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(student.Email_ID)){
     this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

  // Register user
    this.authService.registerStudent(student).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });

  }

}
