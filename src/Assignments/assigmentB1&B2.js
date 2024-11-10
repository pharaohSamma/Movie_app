//Function that resolves a unique number

const uniqueNumbers = new Array();
const maxrange =  10;

function checkUnique(){
    return new Promise((resolve, reject) =>{
        const randomInt = Math.round(Math.random() * 10);
        const randomTimeOut = Math.round(Math.random() * 2000) + 1000;

    setTimeout(() => {
        
        if(!uniqueNumbers.includes(randomInt)){
            uniqueNumbers.push(randomInt);
            resolve(randomInt);
        } else{
            reject(`${randomInt} not unique`);
        }
    }, randomTimeOut);
    })
    
}

//testing the function
for(let i=0;i<maxrange; i++){
    checkUnique().then((uniqueInt) => {
        console.log(`${uniqueInt} is unique`);
        
    }).catch((err) => {
        console.log(err);
    });
}


//assignment B2 
//Array of promises
    const promiseArrayLenghth = 5;
    const promiseList = Array.from({length:promiseArrayLenghth} , ()=>checkUnique());
    


