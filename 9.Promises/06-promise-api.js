/*-------- Promise.all --------*/

// Let’s say we want many promises to execute in parallel and wait until all of them are ready.
// For instance, download several URLs in parallel and process the content once they are all done.
// That’s what Promise.all is for.

Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
]).then((res) => {
  res.forEach((element) => {
    console.log(element);
  });
});
// So it returns Array.

let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
];

// map every url to the promise of the fetch
let requests = urls.map((url) => fetch(url));

Promise.all(requests).then((responses) =>
  responses.forEach((response) =>
    console.log(`${response.url}: ${response.status}`)
  )
);
