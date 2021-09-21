let quote = document.getElementById("quote");
let img = document.getElementById("img");
let author = document.getElementById("author");
let num = document.getElementById("num");

// WITH FETCH

// function quoteData() {
//   fetch("https://thatsthespir.it/api")
//     .then((res) => res.json())
//     .then((data) => {
//       quote.innerText = '"' + data.quote + '"';
//       num.innerText = data.total_quotes + " quotes";
//       author.innerText = data.author;
//       if (data.photo === "") {
//         img.setAttribute("style", "display: none");
//       } else {
//         img.src = data.photo;
//       }

//       console.log(data);
//     });
// }

// quoteData();

/// WITH XHR

// let xhr = new XMLHttpRequest;

// xhr.open('GET', 'https://thatsthespir.it/api', true)
// xhr.onload = function() {
//     if (this.status !== 200) {
//         alert("error")
//     } else {
//         var rep  = JSON.parse(this.responseText);
//         document.getElementById("quote").innerHTML = rep.quote
//         document.getElementById("autor").innerHTML = rep.author
//         document.getElementById("img").setAttribute("src", rep.photo)
//     }
// }
// xhr.send();

//  //Common Types of HTTP Statuses
//  // 200: OK
//  // 404: ERROR
//  // 403: FORBIDDEN

// WITH ASYNC/AWAIT

window.onload = function () {
  async function getData() {
    const response = await fetch("https://thatsthespir.it/api");

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();
    return data;
  }

  getData()
    .then((data) => {
      document.getElementById("quote").innerHTML = data.quote;
      document.getElementById("author").innerHTML = data.author;
      if (data.photo) {
        document.getElementById(
          "img"
        ).innerHTML = `<img src='${data.photo}' alt='image'>`;
      }

      console.log(data);
    })
    .catch((error) => {
      error.message; // 'An error has occurred: 404'
    });
};
