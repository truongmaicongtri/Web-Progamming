var arrA = ['b','a','n','g','h','s','s','q','c','k','s'];


var maxFrequency = 0;
arrA.forEach(item => {
    var frequencyOfItem = getFrequencyFromArrayA(item);
    maxFrequency = frequencyOfItem>maxFrequency? frequencyOfItem: maxFrequency;
});

function getFrequencyFromArrayA(key){
    var frequency = 0;
    arrA.forEach(item => {
        if (item===key) frequency++; 
    });
    return frequency;
}

console.log(maxFrequency);
