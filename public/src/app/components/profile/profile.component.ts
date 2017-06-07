import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  student:Object;

  constructor(private authService:AuthService, private router:Router) { }

  //load user when initialized 
  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.student = profile.student;
    },
    //observable also returns error
    err => {
      console.log(err);
      return false;
    });
  }

}
