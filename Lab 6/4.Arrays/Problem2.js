var arrA = ['b','a','n','g','h','t','s','q','c','k','s'];
var arrB = ['b','a','m','g','h','t','s','q','c','k','s'];

var stringA = arrA.join("");
var stringB = arrB.join("");

var result = "";

if (stringA > stringB) {
    result = ">";
} else if (stringA < stringB) {
    result = "<";
} else {
    result = "=";
}

console.log(result);
