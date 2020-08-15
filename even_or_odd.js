function evenOrOdd(num){
	if(num <= 0){console.log('Enter a positive Integer!!!');}
	else{
		if(num % 2 == 0){console.log(num + ' is an even number.');}
		else{
			console.log(num + ' is an odd number.');
		}
	}
}

//Enter number Here
var n = 234;
evenOrOdd(n);