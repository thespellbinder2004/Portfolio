let myPromise = new Promise(function(resolve, reject){
    
    setTimeout(function(){
        const error = false;
        if (error === false){
            resolve("No error");
        }else{
            reject("There is an ERROR");
        }
    }, 3000);
    
})
console.log("jesus")
myPromise
.then((resolve) => {console.log(resolve)})
.catch((reject) => {console.log(reject)})