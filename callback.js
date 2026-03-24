const greet = (name,callback)=>{
    console.log("hello" + name);
    callback();
}

    const sayBye = ()=>{
        console.log("goodbye")
    }

    greet("adebayo",sayBye)