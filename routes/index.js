const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_Controller');
const { route } = require('./interview');
const students = require('../models/student');



const fs = require('fs');
const moment = require('moment');
const mdq = require('mongo-date-query');
const json2csv = require('json2csv').parse;
const path = require('path');
const Student = require('../models/student');
const fields = ['._id', 'name', 'batch' ,'college','dsa'];


console.log('router loaded');
router.get('/',homeController.home);
router.use('/students', require('./students'));
router.use('/interview', require('./interview'));
router.use('/interview_detail/:id',require('./interview_details'));


router.get('/exporttocsv', async function(req,res){
    var fields = ['name', 'batch', 'college', 'dsa', 'webd', 'react'];
    var fieldNames = ['name', 'batch', 'college', 'dsa', 'webd', 'react'];
    var jsondata = await students.find({}).lean().then(res);
    console.log(jsondata);
    const dateTime = moment().format('YYYYMMDDhhmmss');
    
    let csv = json2csv({data:jsondata , fields : fields , fieldNames: fieldNames});
    const filePath = path.join(__dirname, "..", "public", "exports", "filename" + ".csv");
    fs.writeFile(filePath, csv, function (err) {
        if (err) {
          return res.json(err).status(500);
        }
        else {
          setTimeout(function () {
            fs.unlinkSync(filePath); // delete this file after 30 seconds
          }, 30000)
          return res.json("/exports/csv-" + dateTime + ".csv");
        }
      });

})




module.exports = router;

