function combine2list(arr1, arr2){
	var arr3 = [];
	var x;
	if(arr1.length> arr2.length){x=arr1.length}
		else{x = arr2.length}
	for(var i = 0; i < x; i++){
		if(arr1[i] != undefined){arr3.push(arr1[i]);}
		if(arr2[i] != undefined){arr3.push(arr2[i]);}
	}
	console.log(arr3)
}


//
var a = [11,22,33,44,55]; 
var b = [1,2,3]; //change these

combine2list(a,b)