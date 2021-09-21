// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    document.getElementById('target') = localStorage.getItem('number');
    if (!localStorage.getItem('number')) {
        localStorage.setItem('number', 0);
    }

    document.getElementById("increment").addEventListener("click", () => {
        number++;
        localStorage.setItem('number', count);
        console.log(count);
    })

    // localStorage.clear(); (clear)

})();
})();
