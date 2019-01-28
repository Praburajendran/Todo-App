const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Users = require('../models/users.js');
mongoose.connect('mongodb://localhost:27017/todolist', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('mongoose connection succesful'))
  .catch((err) => console.error(err));


// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

//Add User
router.post('/addUser', (req, res) => {
    Users.create(req.body, function (err, data) {
	  if (err) return sendError(err);
	  if(data.id){
		  response.message = 'success';
		} else {
			response.message = 'failure';
		}
		res.json(response);	
	  });
});

//Add User
router.post('/checkLogin', (req, res) => {
    Users.findOne(req.body, function (err, data) {
	  if (err) return sendError(err);
	  if(data){
		  response.message = 'success';
		}else {
			response.message = 'failure';
		}
		res.json(response);
	});
})

module.exports = router;