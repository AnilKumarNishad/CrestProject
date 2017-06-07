const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');



const OrganizationMstrSchema = mongoose.Schema({

  OrgnID:{
  type: String
  },

  OrgnName:{
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

const OrganizationMaster = module.exports = mongoose.model('OrganizationMaster', OrganizationMstrSchema,'OrganizationMaster');

module.exports.getOrganizationMstrById = function(id, callback){
	OrganizationMaster.findById(id, callback);
}

module.exports.getOrganizationMstrByName = function(CategoryName,callback){
	const query = {CategoryName: CategoryName}
	OrganizationMaster.findOne(query,callback);}

module.exports.AddOrganizationMstr = function(newOrganizationMstr, callback){ 
	console.log(newOrganizationMstr);
      newOrganizationMstr.save(callback);
}

module.exports.getAllOrganization = function(callback){	
	OrganizationMaster.find("",callback);}

module.exports.DeleteOrganizationById = function(OrgnID, callback){ 
var query = { OrgnID: OrgnID };
OrganizationMaster.update(query, {Active: false}, callback);}





