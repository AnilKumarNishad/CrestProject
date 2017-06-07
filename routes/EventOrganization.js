const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const EventOrganization = require('../models/EventOrganization');

router.post('/EventOrganization', (req, res, next) => {
	
	 console.log(req.body);
	
  let newEventOrganization = new EventOrganization({
  	EventOrganizationID: req.body.EventOrganizationID,
  	EventID: req.body.EventID,
	OrgnID: req.body.OrgnID,
	
  	Active: req.body.Active,  
	Created_On: req.body.Created_On,
	Created_by: req.body.Created_by,
	Modified_On: req.body.Modified_On,
    Modified_by: req.body.Modified_by
  	});
	
  EventOrganization.AddEventOrganization(newEventOrganization, (err, EventOrganization)=> {
	  console.log(newEventOrganization);
  		if(err){
      res.json({success: false, msg:'Failed to EventRule Creation.'});
    } else {
      res.json({success: true, msg:'EventRule Created.'});
    }
  });
});

router.get('/GetEventOrganizationByID', (req, res) => {
  var EventOrganizationID = req.headers["EventOrganizationID"];  
  EventOrganization.getEventOrganizationById(EventOrganizationID, (err,EventOrganization)=>{
    if(err) {
		throw err;		
	}
     else
	  {		 
		  res.json(EventOrganization);
	  }
  });  
});

router.get('/GetEventOrganizationByEventID', (req, res) => {
  var EventID = req.headers["eventid"];  
  
  EventOrganization.getEventOrganizationByEventID(EventID, (err,EventOrganization)=>{
    if(err) {
		throw err;		
	}
     else
	  {		 
		  res.json(EventOrganization);
	  }
  });  
});


router.get('/getAllEventOrganization', (req, res) => {

console.log("Test");	
  EventOrganization.getAllEventOrganization((err,EventOrganization)=>{
    if(err) {	
		throw err;
	}
     else
	  {		 
		  res.json(EventOrganization);
	  }
  });  
});

router.post('/RemoveEventOrganizationByID', (req, res) => {
  var EventOrganizationID = req.headers["EventOrganizationID"]; 
console.log(EventOrganizationID);  
  EventOrganization.DeleteEventOrganizationById(EventOrganizationID, (err,EventOrganization)=>{
    if(err) {
		throw err;		
	}
     else
	  {	console.log(EventOrganization);	 
		  res.json(EventOrganization);
	  }
  });  
});


router.post('/DeleteEventOrganizationByEventID', (req, res) => {
  var EventID = req.headers["EventID"]; 
console.log(EventID);  
  EventOrganization.DeleteEventOrganizationById(EventID, (err,EventOrganization)=>{
    if(err) {
		throw err;		
	}
     else
	  {	console.log(EventOrganization);	 
		  res.json(EventOrganization);
	  }
  });  
});

router.get('/GetEventOrganizationByEventID', (req, res) => {
  var EventID = req.headers["eventid"];  
  console.log(EventID);
  EventOrganization.getEventOrganizationByEventID(EventID, (err,EventOrganization)=>{
    if(err) {
		throw err;		
	}
     else
	  {		 
		  res.json(EventOrganization);
	  }
  });  
}); 


module.exports = router;
