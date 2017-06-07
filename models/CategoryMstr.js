const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');



const CategoryMstrSchema = mongoose.Schema({

  CategoryID:{
  type: Number
  },

  CategoryName:{
    type: String
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

const CategoryMstr = module.exports = mongoose.model('CategoryMaster', CategoryMstrSchema,'CategoryMaster');

module.exports.getCategoryMstrById = function(id, callback){
	CategoryMstr.findById(id, callback);
}

module.exports.getCategoryMstrByName = function(CategoryName,callback){
	const query = {CategoryName: CategoryName}
	CategoryMstr.findOne(query,callback);}

module.exports.AddCategoryMstr = function(newCategoryMstr, callback){ 
	console.log(newCategoryMstr);
      newCategoryMstr.save(callback);
}	  
	  
module.exports.getAllEvent = function(callback){	
	Event.find("",callback);
}

module.exports.getAllCategory = function(callback){	
	CategoryMstr.find("",callback);}

module.exports.DeleteCategoryById = function(CategoryID, callback){ 
var query = { CategoryID: CategoryID };
CategoryMstr.update(query, {Active: false}, callback);}





