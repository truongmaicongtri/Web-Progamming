var strings = document.getElementsByClassName("strings");
var parseInts = document.getElementsByClassName("parseInts");
var parstFloats = document.getElementsByClassName("parstFloats");
var number = document.getElementsByClassName("number");
var plusStr = document.getElementsByClassName("plusStr");
var str0 = document.getElementsByClassName("str0");

for (let index = 0; index < strings.length; index++) {
    parseInts[index].innerText = parseInt(strings[index].innerText);
}

for (let index = 0; index < strings.length; index++) {
    parstFloats[index].innerText = parseFloat(strings[index].innerText);
}

for (let index = 0; index < strings.length; index++) {
    number[index].innerText = Number(strings[index].innerText);
}

for (let index = 0; index < strings.length; index++) {
    plusStr[index].innerText = +strings[index].innerText;
}

for (let index = 0; index < strings.length; index++) {
    str0[index].innerText = strings[index].innerText|0;
}