var arrA = ['b','a','n','g','h','t','s','q','c','k','s'];

for (let i =0; i< arrA.length; i++){
    for (let j=i; j<arrA.length; j++){
        if (arrA[i]>arrA[j]){
            var temp = arrA[i];
            arrA[i] = arrA[j];
            arrA[j]= temp;
        }
    }
}

console.log(arrA);
