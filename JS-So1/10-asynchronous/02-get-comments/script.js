// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires

(() => {
  // your code here

  function callback(error, articles) {
    console.log(error, articles);
  }
  function callback(id, comments) {
    console.log(error, comments);
  }
  document.getElementById("run").addEventListener("click", () => {
    window.lib.getPosts(callback);
    window.lib.getComments(callback);

    function callback(error, articles) {
      console.log(error, articles);
    }
  });
})();
