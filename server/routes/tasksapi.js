const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Tasks = require('../models/tasks.js');
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


//Add task
router.post('/addtask', (req, res) => {
    Tasks.create(req.body,function (err, data) {
	  if (err) return sendError(err);
	  if(data.id){
		  response.message = 'success';
		}else {
			response.message = 'failure';
		}
		res.json(response);	
	  });
});

//Get tasks
router.get('/gettasks', (req, res) => {
    Tasks.find(function (err, data) {
	  if (err) return sendError(err);
	  response.data = data;
        res.json(response);
	  });
});

//Get task for Id
router.get('/getTaskforId', (req, res) => {
    Tasks.findById(req.query.index,function (err, data) {
	  if (err) return sendError(err);
	  response.data = data;
        res.json(response);
	  });
});

//Delete task
router.delete('/deletetask', (req, res) => {
    Tasks.findByIdAndRemove(req.query.index, function (err, data) {
	  if (err) return sendError(err);
	  if(data.id){
		  response.message = 'success';
		}else {
			response.message = 'failure';
		}
		res.json(response);	
	  });
});

//Update task
router.put('/updatetask', (req, res) => {
	var data = {};
	data.status = req.body.status;
	data.description = req.body.description;
	data.title = req.body.title;
	data.createddate = req.body.createddate;
	
    Tasks.findByIdAndUpdate(req.body._id,data,function (err, dataVal) {
	  if (err) return sendError(err);
	  if(dataVal.id){
		  response.message = 'success';
		}else {
			response.message = 'failure';
		}
		res.json(response);	
	  });
});

module.exports = router;