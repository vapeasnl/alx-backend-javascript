//1-block-scoped.js

export default function taskBlock(trueOrFalse) {
	    let task = false; // Use let instead of var
	    let task2 = true; // Use let instead of var
	  
	    if (trueOrFalse) {
		          task = true; // Do not use var here
		          task2 = false; // Do not use var here
		        }
	  
	    return [task, task2];
	  }
