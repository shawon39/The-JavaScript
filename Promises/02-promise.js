// resolve(value) — if the job finished successfully, with result value.
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});

// reject(error) — if an error occurred, error is the error object.
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// It calls only one resolve or rejected
let promise = new Promise(function (resolve, reject) {
  resolve("done");
  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});

// The state and result are internal
// The properties state and result of the Promise object are internal. We can’t directly access them. We can use the methods .then/.catch/.finally for that. They are described below.

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------


