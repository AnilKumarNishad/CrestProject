const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Schema
const EventSchema = mongoose.Schema({

	EventID:{
  type: String,
  required: false
  },
  EventTitle:{
    type: String
  },

	Description:{
		type: String
	},

	CategoriesMstr:{
		type: String,
		
	},
	CategoriesSubMstr:{
		type: String,
		
	},

	StartDt:{
		type: Date,
		required: true
	},

	 EndDt:{
		type: Date,
		required: true

	},

	EventRegisterEndDt:{
    type: Date
  },

   EventType:{
    type: String
  },
  
   POCRequired:{
    type: String
  },

  POCDeadLine:{
    type: String
  },

  Location:{
    type: String
  },

   Status:{
    type: String
  },

    
    Event_Logo:{
    type: String
  },
  
    Published_Tag:{
    type: String
  },
  
   

   Created_On:{
    type: Date
	
  },

   Created_by:{
    type: String
  },

   Modified_On:{
    type: Date
  },

   Modified_by:{
    type: String
  }

});

const Event = module.exports = mongoose.model('Events', EventSchema,'Events');

 module.exports.getEventById = function(EventID,callback){
	const query = {_id: EventID};
	Event.findOne(query, callback);	
}


module.exports.getEventByEventTitle = function(EventTitle,callback){
	const query = {EventTitle: EventTitle}
	Event.findOne(query,callback);
}

module.exports.getAllEvent = function(callback){	
	Event.find("",callback);
}



module.exports.addEvent = function(newEvent, callback){
  newEvent.save(callback);
}

