function longest(arr){
	var long = arr[0];
	for(var i = 0; i < arr.length; i++){
		if (arr[i].length>long.length) {
			long = arr[i];
		}
	}
	return long;
}

function frame(arr){
	var l = longest(arr);
	var frameWidth = l.length + 4;
	console.log('*'.repeat(frameWidth));
	for(var c = 0; c < arr.length; c++){
		var x = l.length - arr[c].length;
		console.log('* '+arr[c]+' '.repeat(x)+' *');
	}
	console.log('*'.repeat(frameWidth));

}

var array = ["Write","good","code","every","day"]; // change this
frame(array)