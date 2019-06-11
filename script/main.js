
function copyTxt() {
    let copyText = document.getElementById("pText");
    copyText.select();
    document.execCommand("copy");
}


//Задание 1
function taskOne() {
    let regexpAllPoints = new RegExp('\'', 'gm');
    let str = document.getElementById('one').value;
    let newstr = str.replace(regexpAllPoints, '"');
    document.getElementById('oneResult').value = newstr;
}
document.getElementById('one').addEventListener("keyup", taskOne);

// Задание 2
function taskTwo() {
    let regexpAllPoints = new RegExp('\'', 'gm');
    let str = document.getElementById('two').value;
    let regexpReturnApostroph = /\b\"\b/gm;
    let newstr = str.replace(regexpAllPoints, '"');
    newstr = newstr.replace(regexpReturnApostroph, '\'');
    document.getElementById('twoResult').value = newstr;
}
document.getElementById('two').addEventListener("keyup", taskTwo);

// Задание 3
function valideForm() {
    let regexp_name = /^[a-zа-яё]+$/gi,
        regexp_email = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
        regexp_phone = /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}(-\d{2}){2}$/,
        regexp_message = /[a-zа-яё0-9]/;

    let name = document.getElementsByName('name')[0].value,
        email = document.getElementsByName('email')[0].value,
        phone = document.getElementsByName('phone')[0].value;
    message = document.getElementsByName('message')[0].value;

    // Проверяем имя
    if (regexp_name.test(name) === true) { }
    else
        document.getElementById('name').className = 'error';
    // Проверяем телефон
    if (regexp_phone.test(phone) === true) {
    } else {
        document.getElementById('phone').className = 'error';
    }
    // Проверяем email
    if (regexp_email.test(email) === true) {
    } else {
        document.getElementById('email').className = 'error';
    }
    //Проверяем сообщение
    if (regexp_message.test(message) === true) {
    } else {
        document.getElementById('message').className = 'error';
    }
}
document.querySelector('.button').addEventListener("click", valideForm);