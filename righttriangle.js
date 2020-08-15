function rightTriangle(n){
	if(n <= 0){console.log('enter a positive number :-)');}
	else{
		for(var i = 1; i<=n;i++){
			console.log('#'.repeat(i));
		}
	}
}


var n = 7; // change this
rightTriangle(n)