//find the single character difference between an array of 
//two strings. For example: 

	//array1 = ['ajshdgfrfdfgkh'];
	//array2 = ['ajshdgGfrfdfgkh'];

//Analysis: To solve this I can rebuild my array to be an object. I will iterate 
//through the shortest a array make each index the key value pair. I will then 
//iterate through each character in array2 and use constant time look up to 
//check if the current index is equal to the key value of the first array. 

var differ = function (arr1, arr2) {
	var hash = {}; 

	if(arr1[0].length > arr2[0].length) {
		temp = arr1;
		arr1 = arr2;
		arr2 = temp;
	}

	for (var i=0; i < arr1[0].length; i++) {
		hash[i] = arr1[0][i];
	}

	for (var j=0; j < arr2[0].length; j++) {
		if(hash[j] !== arr2[0][j]) {
			return arr2[0][j];
		} 
	}

	return null;
};

var array1 = ['ajshdgfrfdfgkh'];
var array2 = ['ajshdgGfrfdfgkh'];

differ(array2, array1);
