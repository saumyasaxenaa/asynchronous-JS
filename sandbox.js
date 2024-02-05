// async & await

const getTodos = async () => {
  // always returns a promise
  const response = await fetch("todos.json");

  if (response.status !== 200) {
    throw new Error("cannot fetch data");
  }

  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => {
    console.log("resolved: ", data);
  })
  .catch((err) => {
    console.log(err.message);
  });

// fetch API

// fetch("todos.json")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

// const getTodos = (callback) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("error getting resource");
//       }
//     });

//     request.open("GET", "todos.json");
//     request.send();
//   });
// };

// getTodos("tods.json")
//   .then((data) => {
//     console.log("promise resolved: ", data);
//   })
//   .catch((err) => {
//     console.log("promise rejected: ", err);
//   });

//promise example

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     resolve("some data");
//     // reject("some error");
//   });

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
