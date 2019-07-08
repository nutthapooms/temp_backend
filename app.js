var express = require('express')
var app = express()
var body = require('body-parser')
var port = 4001
const fs = require('fs')
const unitList = fs.readFileSync('./item.json', 'utf8')


  const data = JSON.parse(unitList)

// var a = "_4RDK9IH"
//     console.log(data[a]);


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
    res.send(data[barcode]); 

})

app.get('/api/admin/return/:barcode',function(req,res){ //create user or find user
    var barcode = "_"+ req.params.barcode
    res.send(data[barcode]);
})



app.listen(port, function () {
    console.log("ready to launch")
})