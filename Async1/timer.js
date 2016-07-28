function timer(time){


let promise = new Promise((resolve, rejected) => {
    setTimeout(() =>{
     resolve("result");
  }, time);
  
});
return promise;
};


module.exports = timer;