function GetData(Data , NextData){
    setTimeout(()=>{
        console.log("Data" , Data);
        if(NextData){
            NextData();
        }
    },2000);
}

GetData(1, ()=>{
    GetData(2);
});