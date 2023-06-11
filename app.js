const express = require("express");
const app=express();
const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://waaz:123@cluster0.b6zpwsk.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("db connected"));

mongoose.connection.on('error',err => {

    console.log('conn error:')
})

const schema = new mongoose.Schema({ name: String, address: String, phonenum: Number  });
userModel = mongoose.model('User', schema);

userArr = []
var tphonenum = 1;
for( let i=0;i<20;i++) 
{
  var tname="maaz";
  var taddress="xyz";
  var tempUser = {
    name : tname,
    address: taddress,
    phonenum: tphonenum
  }
  userArr.push(tempUser);
  tphonenum++;
  
}

function saveUsers(arr){
  for(let i=0; i<5;i++){
    console.log(arr[i]);
    const newUser = new userModel(arr[i]);
    newUser.save();
  }
}

function mainFunction(userArr) {
  for(let i=0;i<4;i++){
    const newArr=[]
    //populating new arr for sending
    for(let j=i;j<j+5;j++)newArr[j]=userArr[i];
    const myTimeout = setTimeout(saveUsers(newArr), 5000);
    console.log("waited 5 sec");
  }
}

//mainFunction(userArr);

app.listen(8080, ()=>{
console.log("api running");
})