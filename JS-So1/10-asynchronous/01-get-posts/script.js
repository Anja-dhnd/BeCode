// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", () => {
    window.lib.getPosts(callback);

    function callback(error, articles) {
      console.log(error, articles);
    }
  });
})();
