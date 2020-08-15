function isoceles(n){
	if(n <= 0){console.log('Enter a positive number :-)');}
	else{
		var l = (2*n) - 1;
		for(var x = 0; x< n; x++){
			var a = (2*(x+1)) - 1;
			var b = (l - a) / 2;
			console.log(' '.repeat(b)+ '#'.repeat(a)+ ' '.repeat(b));
		}

	}
}



var x = 7; // change this
isoceles(x)
