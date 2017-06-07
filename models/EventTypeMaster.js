const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');



const EventTypeMasterSchema = mongoose.Schema({

  EventTypeID:{
  type: Number
  },

  EventTypeName:{
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

const EventTypeMaster = module.exports = mongoose.model('EventTypeMaster', EventTypeMasterSchema,'EventTypeMaster');

module.exports.getEventTypeMasterById = function(id, callback){
	EventTypeMaster.findById(id, callback);
}

module.exports.getEventTypeMasterByName = function(EventTypeName,callback){
	const query = {EventTypeName: EventTypeName}
	EventTypeMaster.findOne(query,callback);}

module.exports.AddEventTypeMaster = function(newEventTypeMaster, callback){ 
	console.log(newCategoryMstr);
      newEventTypeMaster.save(callback);
}	  
	  
module.exports.getAllEventTypeMaster = function(callback){	
	EventTypeMaster.find("",callback);
}

module.exports.DeleteEventTypeNameById = function(EventTypeID, callback){ 
var query = { EventTypeID: EventTypeID };
EventTypeMaster.update(query, {Active: false}, callback);}





