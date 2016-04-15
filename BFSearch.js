/*


Part 1 : 
	Create  Queue class. The class should have an add function and a remove function
*/

Queue = function(){
	this.storage = []
}

Queue.prototype.add = function (val) {
	this.storage.push(val);
}

Queue.prototype.remove = function() {
	return this.storage.shift();
}





























/*
Part 2: 
	Imagine you are given a basic tree object. Create a function that performs a BF Search on a given tree, with a given target. and 

	var treeLeaf = {
  	value: 7, children: [
  		{
	  		value: 5, children: [
	  			{
		  			value: 3, children: [
		  				{
		  					value: 1, children: []
		  				}
		  			]
	  			},

	  			{
	  				value: 4, children: []
	  			}
	  		]
  		},

  		{
  			value: 6, children: []
  		}
  	]
}

treeLeaf will construct the following tree
  *
  *       7 <- root
  *      / \
  *     5    6 <- leaf
  *    / \
  *   3   4 <- leaf
  *  /
  * 1 <- leaf
  *
  * Your answer should yield the following 

  BFfindLeaf(treeLeaf, 4)  // 'depth is 2'
*/
