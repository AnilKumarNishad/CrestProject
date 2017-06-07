const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Organization = require('../models/OrganizationMstr');

router.post('/AddOrganization', (req, res, next) => {
	
	 console.log(req.body);
	
  let newOrganization = new Organization({
  	OrgnID: req.body.OrgnID,
  	OrgnName: req.body.OrgnName,
  	Active: req.body.Active,  
	Created_On: req.body.Created_On,
	Created_by: req.body.Created_by,
	Modified_On: req.body.Modified_On,
    Modified_by: req.body.Modified_by
  	});
  Organization.AddOrganizationMstr(newOrganization, (err, Organization)=> {
	  console.log(newOrganization);
  		if(err){
      res.json({success: false, msg:'Failed to Organization Creation.'});
    } else {
      res.json({success: true, msg:'Organization Created.'});
    }
  });
});

router.get('/GetOrganizationByID', (req, res) => {
  var OrganizationID = req.headers["OrganizationID"];  
  Organization.getOrganizationIDMstrById(OrganizationID, (err,Organization)=>{
    if(err) {
		throw err;		
	}
     else
	  {		 
		  res.json(Organization);
	  }
  });  
});



router.get('/getAllOrganization', (req, res) => {

console.log("Test");	
  Organization.getAllOrganization((err,Organization)=>{
    if(err) {	
		throw err;
	}
     else
	  {		console.log(Organization); 
		  res.json(Organization);
	  }
  });  
});

router.post('/RemoveOrganizationByID', (req, res) => {
  var OrganizationID = req.headers["OrganizationID"]; 
console.log(CategoryID);  
  Organization.DeleteOrganizationById(OrganizationID, (err,Organization)=>{
    if(err) {
		throw err;		
	}
     else
	  {	console.log(Organization);	 
		  res.json(Organization);
	  }
  });  
});


module.exports = router;
