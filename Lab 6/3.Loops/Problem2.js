var array = [1.2234,2,3,5.7,76.9,8,8,34.2,4,6,7.1,5,3.5,4.8,67.12,7.27323232,5];

var min = Infinity;
var max = -Infinity;
var sum = 0;

array.forEach(item =>{
    sum += item;
    max = item>max?item:max;
    min = item<min?item:min; 
})

console.log("min: "+min);
console.log("max: "+max);
console.log("sum: "+sum);
console.log("avg: "+sum/array.length);