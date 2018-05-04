if (document.body.offsetWidth < 768) {
    document.getElementById("menuPrin").classList.add("hide");
}

window.addEventListener("resize", menuResize);

function menuResize() {
    var w = document.getElementById("menuPrin");
    var b = document.body.offsetWidth;
    if (b < 768) {
        w.classList.add('hide');
    } else {
        w.classList.remove("hide");
    }
}

function abreMenu() {
    var m = document.getElementById("menuPrin");
    m.classList.add("contMenuMobile");
}

function cierraMenu() {
    var m = document.getElementById("menuPrin");
    m.classList.remove("contMenuMobile");
}

function validaForm() {
    var nombre = document.getElementById("nombre");
    if (nombre.value.length == 0) {
        document.getElementById("error").innerHTML = "<p>Debes ingresar tu nombre.</p>";
        document.getElementById("error").style.display = "block";
        return false;
    }
    var email = document.getElementById("email");
    var re = /^\w+([\.\-\+]\w+)*@\w+(\-\w+)*\.\w+(\-\w+)*(\.\w+(\-\w+)*)*$/;
    if (!email.value.match(re)) {
        document.getElementById("error").innerHTML = "<p>Email inválido <strong>" + email.value + "</strong></p>";
        document.getElementById("error").style.display = "block";
        return false;
    }
    var mensaje = document.getElementById("mensaje");
    if (mensaje.value.length < 10) {
        document.getElementById("error").innerHTML = "<p>Debes agregar un mensaje (min 10 char).</p>";
        document.getElementById("error").style.display = "block";
        return false;
    }

    // Capctha
    var string1 = removeSpaces(document.getElementById("txtCaptcha").value);
    var string2 = removeSpaces(document.getElementById("txtInput").value);
    if (string1 == string2) {
        return true;
    } else {
        document.getElementById("error").innerHTML = "<p>No coincide el captcha, vuelve a interntarlo.</p>";
        document.getElementById("error").style.display = "block";
        return false;
    }

    document.getElementById("error").style.display = "none";
    return true;
}

function Captcha() {
    var alpha = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var codigo = a + " " + b + " " + " " + c + " " + d + " " + e + " " + f + " " + g;
    document.getElementById("txtCaptcha").innerHTML = codigo;
    document.getElementById("txtCaptcha").value = codigo;
}

function removeSpaces(string) {
    return string.split(" ").join("");
}