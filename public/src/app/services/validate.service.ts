import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(student){
    if(student.Student_Name == undefined || student.Email_ID == undefined || student.username == undefined || student.Pwd == undefined || student.Student_ID == undefined || student.DOB == undefined || student.Address == undefined || student.Mobile_No == undefined || student.Orgn_ID == undefined || student.Dept_ID == undefined){
      return false;
    } else {
      return true;
    }
  }

//get this from vaildate email pg
  validateEmail(Email_ID){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(Email_ID);
  }
}





