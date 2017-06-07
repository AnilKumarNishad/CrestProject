const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const EventPrizeSchema = mongoose.Schema({

  EventPrizeID:{
  type: Number
  },

  EventID:{
    type: String
	
  },
 PrizeNo:{
    type: String
  },
   PrizeDescription :{
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

const EventPrize = module.exports = mongoose.model('EventPrize', EventPrizeSchema,'EventPrize');

module.exports.getEventPrizeById = function(id, callback){
	EventPrize.findById(id, callback);
}

module.exports.getEventPrizeByEventID = function(EventID,callback){
	const query = {EventID: EventID}
	EventPrize.find(query,callback);} 

module.exports.AddEventPrize = function(newEventPrize, callback){ 
	console.log(newEventPrize);
      newEventPrize.save(callback);
}	  
	  
module.exports.getAllEvent = function(callback){	
	Event.find("",callback);
}


module.exports.DeleteEventPrizeByEventPrizeID = function(EventPrizeID, callback){ 
var query = { EventPrizeID: EventPrizeID };
EventPrize.update(query, {Active: false}, callback);}


module.exports.DeleteEventPrizeByEventID = function(EventID, callback){ 
var query = { EventID: EventID };
EventPrize.update(query, {Active: false}, callback);}

