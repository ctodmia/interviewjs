//Given an array of numbers find all pairs that add up to k. 

/*
Walk through the problem:

	Question: Is the array sorted?
		I will assume yes for this problem

	INPUT: 
		An array of numbers 
		A target sum k.

	OUTPUT: 
		Im not sure if there is any spefications on how to return the pairs. 
		Ill assume i can return a new array with strings containing the pair. 


	THOUGHT PROCESS: 
		let me start off by describing what a successful pair would look like
			if you were looking at a binary search array if array[i] + array[mid] = k,
				then push the pair [array[i], array[mid]] into your results object. 
		I know that i will need a target variable which will equal k - array[i] 
			SO...if the value at array[i] equal to target then put the pair array[i], 
		I will create a subroutine that will take a low and a high value as parameters

		In the body of my subroutine i need to create a for loop that will run from 
		0 to the lenght of my sorted array. 
			
			have the variable target = k - i
			(I know that I must iterate through every element, i,  in the array and do a binary search to find
			target in which target = k - i;)

		once i have my sorted array i can perform a binary search on that array

		I know i need a for loop so that i can iterate through every element in the array. 

		I know that b is my target value

		I know that in binary search if you low number is equal to your high number we dont
		then the target value wasnt found and I can return null

		I will need to generate a midpoint value 

		I know that if the midpoint is equal to my target 

*/