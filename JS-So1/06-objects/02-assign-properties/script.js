//06-objects/02-assign-properties/script.js - 6.2: assign properties

(() => {
  const computers = [
    { id: "0001", available: false, user: "leny", os: "macOS" },
    { id: "0002", available: false, user: "Nicolas" },
    { id: "0003" },
    { id: "0004", os: "Windows" },
    { id: "0005" },
    { id: "0006", os: "macOS" },
    { id: "0007" },
    { id: "0008" },
    { id: "0009", available: false, user: "Anthony" },
  ];
  const defaultProps = {
    available: true,
    os: "linux",
    user: null,
  };
  // your code here

  // use forEach to loop array + object.hasOwnProperty to find out if an object has a property

  document.getElementById("run").addEventListener("click", () => {
    computers.forEach((element) => {
      if (element.hasOwnProperty("available") === false) {
        element.available = defaultProps.available;
      }
      if (element.hasOwnProperty("os") === false) {
        element.os = defaultProps.os;
      }
      if (element.hasOwnProperty("user") === false) {
        element.user = defaultProps.user;
      }

      console.log(element);
    });
  });
})();
