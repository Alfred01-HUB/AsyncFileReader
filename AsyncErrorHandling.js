const loginUser = (password,username,callback)=>{
    setTimeout(function(){
        if(password === "123"){
            callback (null, "login sucesfully")
        }else{
            callback("invalid password", null);
        }
    },1000)
}

loginUser("Alfred", "1234", function (error, success) {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log(success);
  }
});