// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)

(() => {
  // your code here

  let pass = document.getElementById("pass-one");
  let validity = document.getElementById("validity");

  function checknums(value) {
    let reg = /\d.*\d/g; // \d: find a digit, /g: find a match
    return reg.test(value);
  }

  pass.addEventListener("input", () => {
    if (pass.value.length >= 8 && checknums(pass.value)) {
      validity.innerHTML = "Ok";
    } else {
      validity.innerHTML = "Not ok";
    }
  });
})();
