console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http")
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
app.get("/hello", function(req, res){
    res.end(`<h1 style="background:red">Hello World Its me</h1>`)
});

app.get("/gift", function(req, res) {
    res.end(`<h1>Siz sovg'alar bo'limidasiz</h1>`)
}); 

app.get("/send", function(req, res) {
    res.end(`<h1>Siz jo'natilganlar bo'limidasiz</h1>`)
});
 const server = http.createServer(app);
 let PORT = 3000;
 server.listen( PORT, function() {
    console.log(`This service running on :${PORT}`)
 })


