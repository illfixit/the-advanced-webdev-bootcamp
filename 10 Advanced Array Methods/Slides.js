/* ADVANCED ARRAY METHODS

▒ Advanced Array Mehtods ▒

Objectives
├ Use forEach to iterate through arrays
├ Use map to transform arrays into new ones 
├ Filter arrays into arrays of different lengths
├ Use some and every to return booleans from callbacks
└ Use reduce to accumulate values and transform arrays into other data types

Why do I need to know this?
├ Foundation for functional programming
├ Reenforcement of more challenging JavaScript concepts
├ Foundation for declarative programming
├ Used everywhere in modern libraries and frameworks
└ Write cleaner and more concise code

forEach
├ Iterates through an array
├ Runs a callback function on each value in the array
└ returns `undefined`

!! forEach ALWAYS returns undefined !!

▒ Anatomy of forEach ▒

	
░ [array]<method><callback>(each value & index, entire array) 
░ [1,2,3].forEach( function(value, index, array) {
░ // The callback function will be executed 3 times since 
░    there are 3 values in the array
░ });


• We can call the parameters to the callback whatever we want!
• We do not always need all three parameters, use whichever ones you need, just remember the order is important!

	
░	var arr = [1,2,3];
░	
░	arr.forEach(function(value, index, array){
░  	console.log(value);
░	});
░		 
░	// 1
░	// 2
░	// 3
░	// undefined



