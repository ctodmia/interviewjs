// Write a javascript program that displays the numbers from 10 to 100. But for multiples of 4 print "Dr." instead of the 
// number and for multiples of 6 print "Who". For numbers which are multiples of both 4 and 6 print "Dr. Who"

var drWho = function () {
	for (var i=10; i<=100; i++) {
		if(i%4 === 0) {
			console.log('Dr.');
		}
		if(i%6 === 0) {
			console.log('Who');
		}
		if(i%4 === 0 && i%6 === 0) {
			console.log('Dr. Who');
		}
		if(i%4 !==0 && i%6 !==0) {
			console.log(i);
		}
	}
}
drWho();

//Commented code 

var drWho = function () {
	//iterate through the numbers 10 through 100
	for (var i=10; i<=100; i++) {
		//if the current number divided by 4 return a remainder of 0
		if(i%4 === 0) {
			//print 'Dr.' to the console
			console.log('Dr.');
		}
		//if the current number divided by 6 returns a remainder of 0
		if(i%6 === 0) {
			//print 'Who' to the console
			console.log('Who');
		}
		//if the current number divided by 4 AND 6 both return 0 
		if(i%4 === 0 && i%6 === 0) {
			//print 'Dr. Who' to the console
			console.log('Dr. Who');
		}
		//a number is only printed if it is neither divisible by 6 nor 4
		if(i%4 !==0 && i%6 !==0) {
			console.log(i);
		}
	}
}
//invoke the function drWho
drWho();