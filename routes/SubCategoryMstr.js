const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const SubCategory = require('../models/SubCategoryMstr');

router.post('/AddSubCategory', (req, res, next) => {
	
	 console.log(req.body);
	
  let newSubCategory = new SubCategory({
  	SubCategoryID: req.body.SubCategoryID,
  	SubCategoryName: req.body.SubCategoryName,
  	Active: req.body.Active,  
	Created_On: req.body.Created_On,
	Created_by: req.body.Created_by,
	Modified_On: req.body.Modified_On,
    Modified_by: req.body.Modified_by
  	});
  SubCategory.AddSubCategoryMstr(newSubCategory, (err, SubCategory)=> {
	  console.log(newSubCategory);
  		if(err){
      res.json({success: false, msg:'Failed to SubCategory Creation.'});
    } else {
      res.json({success: true, msg:'SubCategory Created.'});
    }
  });
});

router.get('/GetSubCategoryByID', (req, res) => {
  var SubCategoryID = req.headers["SubCategoryID"];  
  SubCategory.getSubCategoryMstrById(SubCategoryID, (err,SubCategory)=>{
    if(err) {
		throw err;		
	}
     else
	  {		 
		  res.json(SubCategory);
	  }
  });  
});

router.get('/GetSubCategoryByName', (req, res) => {
  var SubCategoryName = req.headers["SubCategoryName"];  
  SubCategory.getSubCategoryMstrByName(SubCategoryName, (err,SubCategory)=>{
    if(err) {
		throw err;		
	}
     else
	  {		 
		  res.json(SubCategory);
	  }
  });  
});


router.get('/getAllSubCategory', (req, res) => {
	
  SubCategory.getAllSubCategory((err,SubCategory)=>{
    if(err) {	
		throw err;
	}
     else
	  {		 
		  res.json(SubCategory);
	  }
  });  
});


router.post('/RemoveSubCategoryByID', (req, res) => {
  var SubCategoryID = req.headers["SubCategoryID"];  
  SubCategory.DeleteSubCategoryById(SubCategoryID, (err,SubCategory)=>{
    if(err) {
		throw err;		
	}
     else
	  {		 
		  res.json(SubCategory);
	  }
  });  
});



module.exports = router;
