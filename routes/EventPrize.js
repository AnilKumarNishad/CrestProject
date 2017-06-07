const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const EventPrize = require('../models/EventPrize');

router.post('/AddEventPrize', (req, res, next) => {
	
	 console.log(req.body);
	
  let newEventPrize = new EventPrize({
  	EventPrizeID: req.body.EventPrizeID,
  	EventID: req.body.EventID,
	EventPrizeNo: req.body.EventPrizeNo,
	EventPrizeDescription: req.body.EventPrizeDescription,
  	Active: req.body.Active,  
	Created_On: req.body.Created_On,
	Created_by: req.body.Created_by,
	Modified_On: req.body.Modified_On,
    Modified_by: req.body.Modified_by
  	});
	
  EventPrize.AddEventPrize(newEventPrize, (err, EventPrize)=> {
	  console.log(newEventPrize);
  		if(err){
      res.json({success: false, msg:'Failed to EventPrize Creation.'});
    } else {
      res.json({success: true, msg:'EventPrize Created.'});
    }
  });
});

router.get('/GetEventPrizeByID', (req, res) => {
  var EventPrizeID = req.headers["EventPrizeID"];  
  EventPrize.getEventPrizeById(EventPrizeID, (err,EventPrize)=>{
    if(err) {
		throw err;		
	}
     else
	  {		 
		  res.json(EventPrize);
	  }
  });  
});

router.get('/GetEventPrizeByName', (req, res) => {
  var EventPrizeName = req.headers["EventPrizeName"];  
  EventPrize.getEventPrizeMstrByName(EventPrizeName, (err,EventPrize)=>{
    if(err) {
		throw err;		
	}
     else
	  {		 
		  res.json(EventPrize);
	  }
  });  
});


router.get('/getAllEventPrize', (req, res) => {

console.log("Test");	
  EventPrize.getAllEventPrize((err,EventPrize)=>{
    if(err) {	
		throw err;
	}
     else
	  {		 
		  res.json(EventPrize);
	  }
  });  
});

router.post('/RemoveEventPrizeByID', (req, res) => {
  var EventPrizeID = req.headers["EventPrizeID"]; 
console.log(EventPrizeID);  
  EventPrize.DeleteEventPrizeById(EventPrizeID, (err,EventPrize)=>{
    if(err) {
		throw err;		
	}
     else
	  {	console.log(EventPrize);	 
		  res.json(EventPrize);
	  }
  });  
});

router.get('/GetEventPrizeByEventID', (req, res) => {
  var EventID = req.headers["eventid"];  
  EventPrize.getEventPrizeByEventID(EventID, (err,EventPrize)=>{
    if(err) {
		throw err;		
	}
     else
	  {		 
		  res.json(EventPrize);
	  }
  });  
}); 


module.exports = router;
