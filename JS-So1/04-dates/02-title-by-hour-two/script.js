// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)

// to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

// your code here

(() => {
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  if (hour >= 18) {
    if (minute >= 30) {
      document.getElementById("target").innerHTML = "Good evening!";
    }
  } else {
    document.getElementById("target").innerHTML = "Hello!";
  }
})();
