const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const EventRule = require('../models/EventRule');

router.post('/AddEventRule', (req, res, next) => {
	
	 console.log(req.body);
	
  let newEventRule = new EventRule({
  	EventRuleID: req.body.EventRuleID,
  	EventID: req.body.EventID,
	RuleNo: req.body.RuleNo,
	RuleDescription: req.body.RuleDescription,
  	Active: req.body.Active,  
	Created_On: req.body.Created_On,
	Created_by: req.body.Created_by,
	Modified_On: req.body.Modified_On,
    Modified_by: req.body.Modified_by
  	});
	
  EventRule.AddEventRule(newEventRule, (err, EventRule)=> {
	  console.log(newEventRule);
  		if(err){
      res.json({success: false, msg:'Failed to EventRule Creation.'});
    } else {
      res.json({success: true, msg:'EventRule Created.'});
    }
  });
});

router.get('/GetEventRuleByID', (req, res) => {
  var EventRuleID = req.headers["EventRuleID"];  
  EventRule.getEventRuleById(EventRuleID, (err,EventRule)=>{
    if(err) {
		throw err;		
	}
     else
	  {		 
		  res.json(EventRule);
	  }
  });  
});

router.get('/GetEventRuleByEventID', (req, res) => {
  var EventID = req.headers["eventid"];  
  
  EventRule.getEventRuleByEventID(EventID, (err,EventRule)=>{
    if(err) {
		throw err;		
	}
     else
	  {		 
		  res.json(EventRule);
	  }
  });  
});


router.get('/getAllEventRule', (req, res) => {

console.log("Test");	
  EventRule.getAllEventRule((err,EventRule)=>{
    if(err) {	
		throw err;
	}
     else
	  {		 
		  res.json(EventRule);
	  }
  });  
});

router.post('/RemoveEventRuleByID', (req, res) => {
  var EventRuleID = req.headers["EventRuleID"]; 
console.log(EventRuleID);  
  EventRule.DeleteEventRuleById(EventRuleID, (err,EventRule)=>{
    if(err) {
		throw err;		
	}
     else
	  {	console.log(EventRule);	 
		  res.json(EventRule);
	  }
  });  
});


router.post('/DeleteEventRuleByEventID', (req, res) => {
  var EventID = req.headers["EventID"]; 
console.log(EventID);  
  EventRule.DeleteEventRuleById(EventID, (err,EventRule)=>{
    if(err) {
		throw err;		
	}
     else
	  {	console.log(EventRule);	 
		  res.json(EventRule);
	  }
  });  
});

router.get('/GetEventRuleByEventID', (req, res) => {
  var EventID = req.headers["eventid"];  
  console.log(EventID);
  EventRule.getEventRuleByEventID(EventID, (err,EventRule)=>{
    if(err) {
		throw err;		
	}
     else
	  {		 
		  res.json(EventRule);
	  }
  });  
}); 


module.exports = router;
