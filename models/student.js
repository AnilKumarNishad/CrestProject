const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Schema
const StudentSchema = mongoose.Schema({

	Student_Auto_ID:{
  type: Number
  },

  Student_ID:{
    type: String
  },

	Student_Name:{
		type: String
	},

	Email_ID:{
		type: String,
		required: true
	},

	username:{
		type: String,
		required: true
	},

	 Pwd:{
		type: String,
		required: true

	},

	Enroll_No:{
    type: String
  },

   DOB:{
    type: Date
  },

   Address:{
    type: String
  },

  Mobile_No:{
    type: String
  },

  Orgn_ID:{
    type: Number
  },

   Dept_ID:{
    type: Number
  },

  DOJ_Fin_YR_ID:{
    type: Number
  },

   Active:{
    type: Boolean
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

const Student = module.exports = mongoose.model('Student', StudentSchema,'Student');

module.exports.getStudentById = function(id, callback){
	console.log(id);
	Student.findById(id, callback);
}

module.exports.profile = function(id, callback){
	console.log(id);
	Student.findById(id, callback);
}

module.exports.getStudentByUsername = function(username,callback){
	const query = {username: username}
	Student.findOne(query,callback);
}

module.exports.addStudent = function(newStudent, callback){
 console.log(newStudent);
  newStudent.save(callback);
 // if(err) throw err;
}

module.exports.comparePwd = function(candidatePwd, hash, callback){
	console.log(candidatePwd);
	console.log(hash);
  bcrypt.compare(candidatePwd, hash, (err, isMatch) => {
     if(err) throw err;
    callback(null, isMatch);
  });
}
