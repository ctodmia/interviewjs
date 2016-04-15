var wordFind = function (word, dictionary) {

	var results = [];
	findWord = word; 

	for(var i=0; i < dictionary.length; i++) {
		if (dictionary[i][0] === findWord[0]) {
			findWord = findWord.substr(1);
			for(var j=1; j<dictionary[i].length; j++) {
				if(dictionary[i][j] === findWord[0]){
          console.log('findword', findWord[0])
					findWord = findWord.substr(1);
					if(!findWord.length) {
						results.push(dictionary[i]);
					}	
				}
			}
      findWord = word;
		}
	}
     return results;
};
	
var list = ['FooBar', 'AnotherUser', 'OtherDatastoreType', 'FoooooBar', 'FBaaaaaar'];
wordFind('FB', list); // ['FooBar', 'FoooooBar', 'FBaaaaar']

var wordFind = function (word, dictionary) {
	var results = []
	found;

	var subroutine = function () {
		
	}
}