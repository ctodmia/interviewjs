/*
//construct a basic tree. Create a function that adds leaves.
//removes leaves and checks if any of trees have descendents
//you should be able to create the following Tree

*       7 <- root
*      / \
*     5    6 <- leaf
*    / \
*   3   4 <- leaf
*  /
* 1 <- leaf
*
//extra credit: return the path of a branch based on node selected. 

//Problem analysis
//INPUT: 
var tree = new Tree(7);
var branch1 = tree.addChild(5);
var branch2 = tree.addChild(6);
branch1.addChild(3);
branch1.addChild(4);
branch1.children[0].addChild(1);

A basic tree will have a value and an array of children. 

Add Child Method
Recall: 
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

This means that each child is an object with a value and childrens array
when adding a child I need to know where on the tree it shoudl be added



*/