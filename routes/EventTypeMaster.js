const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const EventTypeMaster = require('../models/EventTypeMaster');

// router.post('/AddCategory', (req, res, next) => {
	
	 // console.log(req.body);
	
  // let newCategory = new Category({
  	// CategoryID: req.body.CategoryID,
  	// CategoryName: req.body.CategoryName,
  	// Active: req.body.Active,  
	// Created_On: req.body.Created_On,
	// Created_by: req.body.Created_by,
	// Modified_On: req.body.Modified_On,
    // Modified_by: req.body.Modified_by
  	// });
  // Category.AddCategoryMstr(newCategory, (err, Category)=> {
	  // console.log(newCategory);
  		// if(err){
      // res.json({success: false, msg:'Failed to Category Creation.'});
    // } else {
      // res.json({success: true, msg:'Category Created.'});
    // }
  // });
// });

// router.get('/GetCategoryByID', (req, res) => {
  // var CategoryID = req.headers["CategoryID"];  
  // Category.getCategoryMstrById(CategoryID, (err,Category)=>{
    // if(err) {
		// throw err;		
	// }
     // else
	  // {		 
		  // res.json(Category);
	  // }
  // });  
// });

// router.get('/GetCategoryByName', (req, res) => {
  // var CategoryName = req.headers["CategoryName"];  
  // Category.getCategoryMstrByName(CategoryName, (err,Category)=>{
    // if(err) {
		// throw err;		
	// }
     // else
	  // {		 
		  // res.json(Category);
	  // }
  // });  
// });


router.get('/getAllEventTypeMaster', (req, res) => {

console.log("Testecevt");	
  EventTypeMaster.getAllEventTypeMaster((err,EventTypeMaster)=>{
    if(err) {	
		throw err;
	}
     else
	  {		console.log(EventTypeMaster); 
		  res.json(EventTypeMaster);
	  }
  });  
});

// router.post('/RemoveCategoryByID', (req, res) => {
  // var CategoryID = req.headers["CategoryID"]; 
// console.log(CategoryID);  
  // Category.DeleteCategoryById(CategoryID, (err,Category)=>{
    // if(err) {
		// throw err;		
	// }
     // else
	  // {	console.log(Category);	 
		  // res.json(Category);
	  // }
  // });  
// });


module.exports = router;
