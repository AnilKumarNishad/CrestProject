const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const EventRuleSchema = mongoose.Schema({



  EventID:{
    type: String
  },
 RuleNo:{
    type: String
  },
   RuleDescription :{
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

const EventRule = module.exports = mongoose.model('EventRule', EventRuleSchema,'EventRule');

module.exports.getEventRuleById = function(id, callback){
	EventRule.findById(id, callback);
}

module.exports.getEventRuleByEventID = function(EventID,callback){
	const query = {EventID: EventID}
	EventRule.find(query,callback);}

module.exports.AddEventRule = function(newEventRule, callback){ 
	console.log(newEventRule);
      newEventRule.save(callback);
}	  
	  
module.exports.getAllEventRule = function(callback){	
	EventRule.find("",callback);
}


module.exports.RemoveEventRuleByID = function(EventRuleID, callback){ 
var query = { EventRuleID: EventRuleID };
EventRule.update(query, {Active: false}, callback);}


module.exports.DeleteEventRuleByEventID = function(EventID, callback){ 
var query = { EventID: EventID };
EventRule.update(query, {Active: false}, callback);}



