const http = require("http")

const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://khudaynazrovs:Petronas%40007@adminbackend.tjenqln.mongodb.net/reja=AdminBackend";
mongodb.connect(
   connectionString,
   {
   useNewUrlParser: true, 
   useUnifiedTopology: true,
   } , 
(err, client) => {
   if(err) console.log("Error on connection MongoDB");
   else {
      console.log("MongoDB connection succeed")
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
         let PORT = 3003;
         server.listen( PORT, function() {
            console.log(`This service running on :${PORT}, http://localhost:${PORT}`)
 })
   }
})

