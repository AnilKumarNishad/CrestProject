const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const DepartmentMstrSchema = mongoose.Schema({

	DeptID:{
  type: Number
  },

  DeptName:{
    type: String
  },
  
	OrgnID:{
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

const DepartmentMstr = module.exports = mongoose.model('DepartmentMstr', DepartmentMstrSchema,'DepartmentMstr');

module.exports.getCategoryMstrById = function(id, callback){
	DepartmentMstr.findById(id, callback);
}

module.exports.getCategoryMstrByName = function(CategoryName,callback){
	const query = {CategoryName: CategoryName}
	DepartmentMstr.findOne(query,callback);}

module.exports.AddDepartmentMstr = function(newDepartmentMstr, callback){ 
      newDepartmentMstr.save(callback);  
}

