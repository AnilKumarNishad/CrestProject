const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');



const SubCategoryMstrSchema = mongoose.Schema({

	SubCategoryID:{
  type: Number
  },

  SubCategoryName:{
    type: String
  },

  	CategoryID:{
  type: Number
  },
	Active:{
		type: Boolean
	},

	
   CreatedOn:{
    type: Date
  },

   Createdby:{
    type: String
  },

   ModifiedOn:{
    type: Date
  },

   Modifiedby:{
    type: String
  }


});

const SubCategoryMstr = module.exports = mongoose.model('SubCategoryMstr', SubCategoryMstrSchema,'SubCategoryMstr');

module.exports.getSubCategoryMstrById = function(id, callback){
	SubCategoryMstr.findById(id, callback);
}

module.exports.getSubCategoryMstrByName = function(SubCategoryName,callback){
	const query = {SubCategoryName: SubCategoryName}
	SubCategoryMstr.findOne(query,callback);}

module.exports.AddSubCategoryMstr = function(newSubCategoryMstr, callback){ 
      newSubCategoryMstr.save(callback);  
}


module.exports.getAllSubCategory = function(callback){	
	SubCategoryMstr.find("",callback);}

module.exports.DeleteSubCategoryById = function(SubCategoryID, callback){ 
var query = { SubCategoryID: SubCategoryID };
SubCategoryMstr.update(query, {Active: false}, callback);}



