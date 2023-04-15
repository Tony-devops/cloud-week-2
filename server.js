const express = require("express");
const app = express();
const PORT= process.env.PORT || 8080;
app.use(express.json());
  
// app.get('/',function(req, res) {
   // const ipAddress = req.socket.remoteAddress;
    //res.send(ipAddress);
// });
/*
app.post('/', function(req,res) {
const newMessage = {
  ipAddress : req.socket.remoteAddress,
  timeSent:new Date().toLocaleString(),
};
if(!newMessage.ipAddress) {
  return response
  .status(400)
  .json({message: "Hidden IP addresses not valid"});
}
res.send(newMessage);
})
*/
let visitors =0;
app.get('/', function(req,res) {

  const newMessage = {ipAddress : req.socket.remoteAddress,
  timeSent:new Date().toLocaleString(), visitor: visitors++,};
  res.send(newMessage);
  
})

// app.get('/', function(req,res) {
  // res.send(req.socket.remoteAddress,);
  //res.send({new Date().toLocaleString(),})
//})


app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
});
