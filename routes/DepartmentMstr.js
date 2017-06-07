const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Department = require('../models/DepartmentMstr');

router.post('/AddDepartment', (req, res, next) => {
	
	 console.log(req.body);
	
  let newDepartment = new Department({
  	DepartmentID: req.body.DepartmentID,
  	DepartmentName: req.body.DepartmentName,
	OrgnID: req.body.OrgnID,
  	Active: req.body.Active,  
	Created_On: req.body.Created_On,
	Created_by: req.body.Created_by,
	Modified_On: req.body.Modified_On,
    Modified_by: req.body.Modified_by
  	});
	
  Department.AddDepartmentMstr(newDepartment, (err, Department)=> {
	  console.log(newDepartment);
  		if(err){
      res.json({success: false, msg:'Failed to Department Creation.'});
    } else {
      res.json({success: true, msg:'Department Created.'});
    }
  });
});

router.get('/GetDepartmentByID', (req, res) => {
  var DepartmentID = req.headers["DepartmentID"];  
  Department.getDepartmentMstrById(DepartmentID, (err,Department)=>{
    if(err) {
		throw err;		
	}
     else
	  {		 
		  res.json(Department);
	  }
  });  
});

router.get('/GetDepartmentByName', (req, res) => {
  var DepartmentName = req.headers["DepartmentName"];  
  Department.getDepartmentMstrByName(DepartmentName, (err,Department)=>{
    if(err) {
		throw err;		
	}
     else
	  {		 
		  res.json(Department);
	  }
  });  
});


router.get('/getAllDepartment', (req, res) => {

console.log("Test");	
  Department.getAllDepartment((err,Department)=>{
    if(err) {	
		throw err;
	}
     else
	  {		 
		  res.json(Department);
	  }
  });  
});





module.exports = router;
