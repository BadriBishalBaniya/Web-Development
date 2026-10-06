

function asyncfunc1(){

    return new Promise((resolve , reject)=>{

        setTimeout(()=>{

            console.log("deta 1");

            resolve("Successful");

        },2000);

    });

}

function asyncfunc2(){

    return new Promise((resolve , reject)=>{

        setTimeout(()=>{

            console.log("deta 2");

            resolve("Successful");

        },3000);

    });

}

console.log("Getting data 1....");

let p1 = asyncfunc1();

p1.then((res)=>{

    console.log(res);

    console.log("Getting data 2....");

    let p2 = asyncfunc2();

    p2.then((res)=>{

        console.log(res);

    })

})

/*
Or It can be written as:-

console.log("Getting data 1....");

asyncfunc1().then((res)=>{

    console.log(res);

    console.log("Getting data 2....");

    asyncfunc2().then((res)=>{

        console.log(res);

    })

})


/*
Callback Hell Example:

function getData(dataId, getNextData){

    setTimeout(()=>{

        console.log("Data", dataId);

        if(getNextData){
            getNextData();
        }

    },2000);

}

getData(1, ()=>{

    getData(2, ()=>{

        getData(3, ()=>{

            getData(4, ()=>{

                getData(5);

            });

        });

    });

});

The above code is called Callback Hell because callbacks
are nested inside other callbacks.

The structure becomes difficult to read, understand and maintain.

Example structure:

getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4, ()=>{
                getData(5);
            });
        });
    });
});


Promise Chaining:

getdata(1)
.then((res)=>{

    return getdata(2);

})
.then((res)=>{

    console.log(res);

});

In Promise Chaining, instead of nesting callbacks,
we return another Promise from the .then() method.

The returned Promise can then be handled by the next .then().

Example:

getdata(1)
.then((res)=>{

    console.log(res);

    return getdata(2);

})
.then((res)=>{

    console.log(res);

    return getdata(3);

})
.then((res)=>{

    console.log(res);

});


Comparison:

1. Callback Hell

getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4);
        });
    });
});

- Uses nested callbacks.
- Code becomes difficult to read.
- Difficult to maintain.
- Creates a pyramid-like structure.
- Error handling can become complicated.


2. Promise Chaining

getdata(1)
.then((res)=>{
    return getdata(2);
})
.then((res)=>{
    return getdata(3);
})
.then((res)=>{
    console.log(res);
});

- Uses Promises.
- Code is easier to read.
- Easier to maintain.
- Avoids deeply nested callbacks.
- Error handling can be handled using .catch().


Example of error handling with Promise Chaining:

getdata(1)
.then((res)=>{

    return getdata(2);

})
.then((res)=>{

    console.log(res);

})
.catch((err)=>{

    console.log(err);

});


In short:

Callback Hell
        ↓
Nested callbacks
        ↓
Hard to read and maintain

Promise Chaining
        ↓
Promises connected using .then()
        ↓
Cleaner and easier to maintain
*/

