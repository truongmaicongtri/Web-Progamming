
var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
array.forEach(item => {
    if (item === 1||item ==2){
        console.log(item);
    } else if (checkPrime(item)){
        console.log(item);
    }
});

function checkPrime(d) {
	for (let i = 2; i<=Math.sqrt(d); i++){
		if (d%i==0){
			return false;
        }
    }
	return true;
}