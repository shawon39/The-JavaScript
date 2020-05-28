let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
  //setTimeout(() => reject("done"), 1000);
});

promise
  .then((result) => {
    console.log(result);
    return 100;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Hey, I am Finally");
  });
