//Function that resolves a unique number

const uniqueNumbers = new Array();
const maxrange = 10;

function checkUnique() {
  return new Promise((resolve, reject) => {
    const randomInt = Math.round(Math.random() * 10);
    const randomTimeOut = Math.round(Math.random() * 2000) + 1000;

    setTimeout(() => {
      if (!uniqueNumbers.includes(randomInt)) {
        uniqueNumbers.push(randomInt);
        resolve(randomInt);
      } else {
        reject(`${randomInt} not unique`);
      }
    }, randomTimeOut);
  });
}

//testing the function
// for (let i = 0; i < maxrange; i++) {
//   checkUnique()
//     .then((uniqueInt) => {
//       console.log(`${uniqueInt} is unique`);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

//assignment B2
//Array of promises
const promiseArrayLenghth = 5;
const promiseList = Array.from({ length: promiseArrayLenghth }, () =>
  checkUnique()
);

const resolvePromisesSeq = async (promises) =>{
  const results = [];
  for(const promise of promises){
    try {
      const result = await promise;
      console.log('Promise resolved with',result);
      
      results.push( result);
    } catch (error) {
      console.log('Promise rejacted for',error);
    }
    
  }
  return results;
}
//IIFE : executing without defining a function

(async () => {
  console.log("Starting...");
  try {
    const resolvedPromises = await resolvePromisesSeq(promiseList);
    console.log("Resolved Promises:", resolvedPromises);
  } catch (error) {
    console.log('Error in resolving promises:', error);
  }
})();

