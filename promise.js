class MyPromise {
  constructor(executor) {
    this.onSuccess = null;
    this.onFailed = null;
    this.isFullfilled = false;
    this.isRejected = false;
    this.isCalled = false;
    this.value;
    executor(this.resolve, this.reject);
  }

  then(cb) {
    this.onSuccess = cb;
    if (this.isFullfilled && !this.isCalled) {
      this.isCalled = true;
      this.onSuccess(this.value);
    
    }

    return this;
  }
  catch(cb) {
    this.onFailed = cb;
    if (this.isFullfilled && !this.isCalled) {
      this.isCalled = true;
      this.onFailed(this.value);
    }

    return this;
  }
  resolve = (successdata) => {
    this.isFullfilled = true;
    this.value = successdata;
    if (typeof this.onSuccess == "function") {
      this.onSuccess(successdata);
      this.isCalled=true
    }
  };
  reject = (errorMessage) => {
    this.isRejected = true;
    this.value = errorMessage;
    if (typeof this.onFailed == "function") {
      this.onFailed(errorMessage);
      this.isCalled=true
    }
  };
}

const myPromise = new MyPromise((res, rej) => {
  setTimeout(() => {
    rej("Good data");
  }, 1000);
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("error", err);
  });

// const mypromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = Math.random();
//     if (randomNumber < 0.5) {
//       resolve(randomNumber);
//     } else {
//       reject("Operation failed");
//     }
//   }, 500);
// });
// mypromise.then((result)=>{
//     console.log("success:",result)
// }).catch((err)=>{
//     console.log("error:",err)
// })
