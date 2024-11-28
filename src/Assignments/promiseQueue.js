class PromiseQueue {
  constructor() {
    this.queue = [];
  }
  //enqueuing the promises
  enqueue(promise) {
    this.queue.push(promise);
    return this.queue.length;
  }
  //dequeuing the promises
  async dequeue() {
    if (this.queue.length === 0) {
      return null; //queue is empty
    }
    //removing first promise from the queue
    const promiseQueue = this.queue.shift();
    //executing the pomise
    return await promiseQueue;
  }

  async processQueue() {
    while (this.queue.length > 0) {
      try {
        const result = await this.dequeue();
        console.log("Processed", result);
      } catch (error) {
        console.log("Error:", error);
      }
    }
  }
}

//testing with the prvious promiseList
const uniqueNumbers = new Array();
const maxrange = 10;

function getRandomUniqueInt() {
  return new Promise((resolve, reject) => {
    const randomInt = Math.round(Math.random() * 10);
    const randomTimeOut = Math.round(Math.random() * 2000) + 1000;
    if (!uniqueNumbers.includes(randomInt)) {
      uniqueNumbers.push(randomInt);
    } else {
      reject(`${randomInt} not unique`);
    }
    setTimeout(() => {
      resolve(randomInt);
    }, randomTimeOut);
  });
}

//Array of promises
const promiseArrayLenghth = 5;
const promiseList = Array.from(
  { length: promiseArrayLenghth },
  getRandomUniqueInt
);

//new queue
const queue = new PromiseQueue();

//filling/enqueuing the promises
promiseList.forEach((promiseFunc) => {
  queue.enqueue(promiseFunc);
});

//executing/processing the queue
queue.processQueue();
