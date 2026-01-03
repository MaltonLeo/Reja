console.log("Web serverni boshlash");
const express = require("express");
const app = express();

const db = require("./server").db();
const mongodb = require("mongodb")
const fs = require("fs")


let user;
fs.readFile("database/user.json","utf-8", (err, data) => {
    if(err) {
        console.log("ERROR:", err)
    } else {
        user = JSON.parse(data)
    }
})

//MongoDB Connect

// 1 Kirish Code lari
app.use(express.static("public"))// har qanday clientlardan kelayotgan so'rovlarga
// public folder ochiqligini bildiradi
app.use(express.json());// bu operatsiyamiz kirib kelayotgan json datani object holatiga o'girib beradi
app.use(express.urlencoded({extended:true}))// html dan traditional request form bor va form dan biror 
//narsani post qilsak express server qabul qilib oladi agar buni yozmasak shu formdan kiritilgan datani 
//server ignor qiladi


//2 Session Codes

//3 Views Codes 
//Biz traditional usulda loyiha qilganimiz uchun backend dan front end yasaymiz ya'ni backend da html 
//yasab uni clientga yuboramiz
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing Codes
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja : new_reja}, (err, data) => {
       console.log(data.ops)
        res.json(data.ops[0])
    })
});

app.post("/delete-item", (req , res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne(
        {_id: new mongodb.ObjectId(id)}, 
        function(err, data){
        res.json({state:"success"})
    })
    
})

app.get("/", function (req ,res) { 
    console.log("user entered /")
    db.collection("plans")
    .find()
    .toArray((err,data) => {
        if(err) {
            console.log(err);
            res.end("somethning went wrong");
        } else {
            
            res.render("reja",{items: data});
        }
    })

});

module.exports = app;


