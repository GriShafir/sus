let mas = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
let to = -1;

function right_arrow() {
    let obj = document.querySelector("#img");

    if (to < mas.length - 1) to++;
    else {
        to = 0;
        obj.src = mas[to];
    }
}

function left_arrow() {
    let obj = document.querySelector("#img");

    if (to > 0) to--;
    else {
        to = mas.length - 1;
        obj.src = mas[to];
    }
}

/*function setCookie (name, value, expires, path, domain, secure) {
    if (!name || !value) return false;
    var 
}*/