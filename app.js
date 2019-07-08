var express = require('express')
var app = express()
var body = require('body-parser')
var port = 4001
const fs = require('fs')
const unitList = fs.readFileSync('./item.json', 'utf8')
const lockerList = fs.readFileSync('./locker.json', 'utf8')

const unit_data = JSON.parse(unitList)
const locker_data = JSON.parse(lockerList)



var axios = require('axios');


app.get('/', function (req, res) {
    console.log("kuy")
    axios.get('http://smartlocker.azurewebsites.net/api/admin/barcode/loanlist')
        .then(response => {
            // console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
})

app.get('/api/admin/finduser/:user',function(req,res){ //create user or find user
    console.log(req.params.user); 
})

app.get('/api/admin/barcode/:barcode',function(req,res){ //create user or find user
    var barcode = "_"+ req.params.barcode
    res.send(unit_data[barcode]); 

})
app.get('/api/admin/lockerno/80017/:locker',function(req,res){
    var locker = req.params.locker
    console.log(locker)
    res.send(locker_data[locker])
})

app.get('/api/admin/return/:barcode',function(req,res){ //create user or find user
    var barcode = "_"+ req.params.barcode
    res.send(unit_data[barcode]);
})



app.listen(port, function () {
    console.log("ready to launch")
})