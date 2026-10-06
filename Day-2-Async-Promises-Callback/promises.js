// let promise = new Promise((resolve , reject)=>{
//     console.log("I am a Promise");
//     resolve("Success");
    
// })

let promise = getdata(123);

function getdata(dataid, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataid);
            resolve("Successful");

            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}