let mas = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
let to = -1;

function right_arrow() {
    let obj = document.querySelector("#img");

    if (to < mas.length - 1) to++;
    else {
        to = 0;
        obj.src = mas[to];
    }
    setCookie("foo", mas[to], "", "/");
}

function left_arrow() {
    let obj = document.querySelector("#img");

    if (to > 0) to--;
    else {
        to = mas.length - 1;
        obj.src = mas[to];
    }
    setCookie("foo", mas[to], "", "/");
}

function setCookie (name, value, expires, path, domain, secure) {
    if (!name || !value) return false;
        var str = name + "=" +encodeURIComponent(value);
            if (expires) str += "; expires=" + expires.toGMTString();
            if (path) str += "; path=" + path;
            if (domain) str += "; domain=" + domain;
            if (secure) str += "; secure";
    document.cookie = str;
    return true;
}

function getCookie (name) {
    var pattern = "(?:; )?" + name + "=([^;]*);?";
    var regexp = new RegExp(pattern);
    if (regexp.test(document.cookie)) {
        return decodeURIComponent(RegExp["$1"]);
        return false;
    }
}

function Load () {
    var cook_val = getCookie("foo");
    for (var i = 0; i < mas.length; i++) {
        if (mas[i] == cook_val) {
            document.querySelector("#img").src = mas[i];
            to = i;
            break;
        }
    }
}