function longestStr(arr){
	var word;
	word = [''];
	for(var i= 0; i< arr.length; i++){
		if(arr[i].length == word[0].length){
			word.push(arr[i])
		}
		else if (arr[i].length > word[0].length){
			word = [];
			word.push(arr[i]);
		}
		

	}
	for(var c = 0; c<word.length; c++){
		console.log(word[c]);
	}
}

var check = ['test', 'people', 'sixsi']; // change this
longestStr(check);