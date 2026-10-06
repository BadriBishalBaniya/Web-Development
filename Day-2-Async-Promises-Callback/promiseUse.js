const getPromise = ()=>{
    return new Promise((resolve , reject)=>{
        console.log("I am promise");
        resolve("Successful");
        // reject("Network Error");
    });
};

let promise =getPromise();
promise.then((res)=>{
    console.log("Promise fulfulled" , res);
});

// promise.catch((err)=>{
//     console.log("rejected",err);
// });