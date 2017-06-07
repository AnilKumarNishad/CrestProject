const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const EventOrganizerSchema = mongoose.Schema({

  EventOrganizerID:{
  type: String
  },

  EventID:{
    type: String
  },
 OrganizerNo:{
    type: String
  },
   OrganizerName :{
    type: String
  },
  
  OrganizerEmail :{
    type: String
  },
  
  OrganizerContact:{
	  type:String
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

const EventOrganizer = module.exports = mongoose.model('EventOrganizer', EventOrganizerSchema,'EventOrganizer');

module.exports.getEventOrganizerById = function(id, callback){
	EventOrganizer.findById(id, callback);
}

module.exports.getEventOrganizerByEventID = function(EventID,callback){
	const query = {EventID: EventID}
	EventOrganizer.findOne(query,callback);}

module.exports.AddEventOrganizer = function(newEventOrganizer, callback){ 
	console.log(newEventOrganizer);
      newEventOrganizer.save(callback);
}	  
	  
module.exports.getAllEventOrganizer = function(callback){	
	EventOrganizer.find("",callback);
}


module.exports.RemoveEventOrganizerByID = function(EventOrganizerID, callback){ 
var query = { EventOrganizerID: EventOrganizerID };
EventOrganizer.update(query, {Active: false}, callback);}


module.exports.DeleteEventOrganizerByEventID = function(EventID, callback){ 
var query = { EventID: EventID };
EventOrganizer.update(query, {Active: false}, callback);}



