function square(n){
	if(n <= 0){console.log('Enter a positive number.');}
	else{
		for(var i = 0; i < n; i++){
			console.log('#'.repeat(n));
		}
	}
}

//Enter length of square here, i need some help on getting input with 'prompt()'
var n = 7; // change this
square(n)