
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var hour = date.getHours();
    var min = date.getMinutes();

    let txt = document.getElementById("target").innerHTML = date;
    
    

})();
