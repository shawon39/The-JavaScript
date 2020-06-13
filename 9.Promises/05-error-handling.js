// if any kind of error happens any of then block, it goes to catch block
// fetch("/article/promise-chaining/user.json")
//   .then((response) => response.json())
//   .then((user) => fetch(`https://api.github.com/users/${user.name}`))
//   .then((response) => response.json())
//   .then(
//     (githubUser) =>
//       new Promise((resolve, reject) => {
//         let img = document.createElement("img");
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example";
//         document.body.append(img);

//         setTimeout(() => {
//           img.remove();
//           resolve(githubUser);
//         }, 3000);
//       })
//   )
//   .catch((error) => console.log(error.message));

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// If there have then after catch it will be executed.
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
})
  .catch(function (error) {
    console.log("The error is handled, continue normally");
  })
  .then(() => console.log("Next successful handler runs"));
