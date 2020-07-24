/* ADVANCED ARRAY METHODS

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~ Advanced Array Mehtods ~~~

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

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~ Anatomy of forEach ~~~

	
░ [array]<method><callback>(each value & index, entire array) 
░ [1,2,3].forEach( function(value, index, array) {
░ // The callback function will be executed 3 times since 
░    there are 3 values in the array
░ });


• We can call the parameters to the callback whatever we want!
• We do not always need all three parameters, use whichever ones you need, just remember the order is important!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

An example

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

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

How does it work?
├ Iterates through an array
├ Runs a callback function on each value in the array
└ returns `undefined`

░ function forEach(array, callback){
░     for(var i = 0; i < array.length; i++){
░         callback(array[i], i, array);
░     }
░ }

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Using forEach in a function

░ function halfValues(arr){
░     var newArr = [];
░     arr.forEach(function(val){
░         newArr.push(val / 2);
░     });
░     return newArr;
░ }
░ 
░ halfValues([2,4,6]); // [1,2,3]

!! Remember - forEach always returns undefined !!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

>>> map <<<

map
├ Creates a new array
├ Iterates through an array
├ Runs a callback function for each value in the array
├ Adds the result of that callback function to the new array
└ Returns the new array

!! map ALWAYS returns a new array of the SAME length !!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

An example

░ var arr = [1,2,3];
░ 
░ arr.map(function(value, index, array){
░     return value * 2;
░ });
░ 
░ // [2,4,6]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

How does it work?
├ Creates a new array
├ Iterates through an array
├ Runs a callback function for each value in the array
├ Pushes result of the callback function to the new array
└ Returns the new array

░ function map(array, callback){
░     var newArr = [];
░     for(var i = 0; i < array.length; i++){
░         newArr.push(callback(array[i], i, array));
░     }
░     return newArr;
░ }

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~ Using map in a function ~~~

░ function tripleValues(arr){
░     return arr.map(function(value){
░         return value * 3;
░     });
░ }
░ 
░ tripleValues([1,2,3]); // [3,6,9]

░ function onlyFirstName(arr){
░     return arr.map(function(val){
░         return val.first;
░     });
░ }
░ 
░ onlyFirstName([{first: 'Tim', last:'Garcia'}, 
░               {first:'Matt', last: 'Lane'}]); 
░ 
░ // ['Tim', 'Matt]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

>>> filter <<<

filter
├ Creates a new array
├ Iterates through an array
├ Runs a callback function on each value in the array
├ If the callback function returns true, that value will be added to the new array
├ If the callback function returns false, that value will be └ignored from the new array

!! The result of the callback will ALWAYS be a boolean !!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

An example

░ var arr = [1,2,3];
░
░ arr.filter(function(value, index, array){
░     // no need for an if statement
░     // just return an expression 
░     // that evaluates to true or false!
░     return value > 2;
░ });
░
░ // [3] 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Another example

░ var instructors = [{name: "Elie"},
░                    {name: "Tim"},
░                    {name: "Matt"},
░                    {name: "Colt"}
░                   ];

░ instructors.filter(function(value, index, array){
░     return value.name.length > 3;
░ });
░ 
░ // [{name: "Elie"},{name: "Matt"},{name: "Colt"}];

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

How does it work?
├ Creates a new array
├ Iterates through an array
├ Runs a callback function on each value in the array
├ If the callback function returns true, that value will be added to the new array
├ If the callback function returns false, that value will be ignored from the new array
└ Using filter in a function

░ function filter(array, callback){
░     var newArr = [];
░     for(var i = 0; i < array.length; i++){
░         if(callback(array[i], i, array)){
░             newArr.push(array[i]);
░         }
░     }
░     return newArr;
░ }

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Using filter in a function

░ function onlyFourLetterNames(arr){
░     return arr.filter(function(value){
░         return value.length === 4;
░     });
░ }
░ 
░ onlyFourLetterNames(['Rusty', 'Matt', 'Moxie', 'Colt']); 
░ // ['Matt', 'Colt']

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

>>> some <<<

some
├ Iterates through an array
├ Runs a callback on each value in the array
├ If the callback returns true for at least one single value, return true
└ Otherwise, return false

The result of the callback will ALWAYS be a boolean

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

An example

░ var arr = [1,2,3];
░ 
░ arr.some(function(value, index, array){
░     return value < 2;
░ });
░ 
░ // true

░ var arr = [1,2,3];
░ 
░ arr.some(function(value, index, array){
░     return value > 4;
░ });
░ 
░ // false

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

How does it work?
├ Iterates through an array
├ Runs a callback on each value in the array
├ If the callback returns true for at least one single value, return true
└ Otherwise, return false

░ function some(array, callback){
░     for(var i = 0; i < array.length; i++){
░         if(callback(array[i], i, array)){
░             return true;
░         }
░     }
░     return false;
░ }

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~ Using some in a function ~~~

░ function hasEvenNumber(arr){
░     return arr.some(function(value){
░         return value % 2 === 0;
░     });
░ }
░ 
░ hasEvenNumber([1,2,3,4]); // true
░ hasEvenNumber([1,3,5]); // false

░ function hasComma(str){
░     return str.split('').some(function(value){
░         return value === ',';
░     });
░ }
░ 
░ hasComma('This is wonderful'); // false
░ hasComma('This, is wonderful'); // true

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

>>> every <<<

every
├ Iterates through an array
├ Runs a callback on each value in the array
├ If the callback returns false for any single value, return false
└ Otherwise, return true

!! The result of the callback will ALWAYS be a boolean !!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

An example

▒ var arr = [-1,-2,-3];
▒ 
▒ arr.every(function(value, index, array){
▒     return value < 0;
▒ });
▒ 
▒ // true

▒ var arr = [1,2,3];
▒ 
▒ arr.every(function(value, index, array){
▒     return value > 2;
▒ });
▒ 
▒ // false

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

How does it work?
├ Iterates through an array
├ Runs a callback on each value in the array
├ If the callback returns false for any single value, return false
└ Otherwise, return true

▒ function every(array, callback){
▒     for(var i = 0; i < array.length; i++){
▒         if(callback(array[i], i, array) === false){
▒             return false;
▒         }
▒     }
▒     return true;
▒ }

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Using every in a function

▒ function allLowerCase(str){
▒   return str.split('').every(function(value){
▒     return value === value.toLowerCase();
▒   });
▒ }
▒ 
▒ allLowerCase('this is really nice'); // true
▒ allLowerCase('this is Really nice'); // false

▒ function allArrays(arr){
▒     return arr.every(Array.isArray);
▒ }
▒ 
▒ allArrays([[1], [2], [3,4]]); // true
▒ allArrays([[1], [2], {}]); // false

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

>>> reduce <<<

reduce
├ Accepts a callback function and an optional second parameter
├ Iterates through an array
├ Runs a callback on each value in the array
├ The first parameter to the callback is either the first value in the array or the optional second parameter
├ The first parameter to the callback is often called "accumulator"
└ The returned value from the callback becomes the new value of accumulator

Whatever is returned from the callback function, becomes the new value of the accumulator!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

anatomy of reduce
    
▒ [1,2,3]         << array >>
▒  .reduce(       << method >>
▒   function(     << callback function >>
▒    accumulator, << first value in array or optional 
▒                     second parameter >>
▒    nextValue,   << second value in array or first if 
▒                     optional second parameter is passed >>
▒    index,       << each index in the array >>
▒    array        << the entire array >>
▒    )
▒     { 
▒      // Whatever is returned inside here, will be the 
▒      // value of accumulator in the next iteration.
▒     }, optional second parameter)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Let's break it down

var arr = [1,2,3,4,5];

▒ arr.reduce(function(accumulator, nextValue){
▒     return accumulator + nextValue;
▒ });

▒ accumulator	 nextValue	 returned value
▒     1	           2	           3
▒     3	           3	           6
▒     6	           4           	10
▒    10	           5          	15 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Adding a second parameter

▒ var arr = [1,2,3,4,5];
▒ 
▒ arr.reduce(function(accumulator, nextValue){
▒     return accumulator + nextValue;
▒ },10);

▒ accumulator	 nextValue	 returned value
▒     10           1	          11
▒     11           2	          13
▒     13           3	          16
▒     16           4           	20
▒     20           5          	25 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

How about strings?

▒ var names = ['Tim', 'Matt', 'Colt', 'Elie'];
▒ 
▒ names.reduce(function(accumulator, nextValue){
▒     return accumulator += ' ' + nextValue;
▒ },'The instructors are');

▒  accumulator	     
▒ 'The instructors are'           	          
▒ 'The instructors are Tim' 
▒ 'The instructors are Tim Matt'
▒ 'The instructors are Tim Matt Colt'

▒ nextValue	 
▒ 'Tim'
▒ 'Matt'
▒ 'Colt'
▒ 'Elie'

▒ returned value
▒ 'The instructors are Tim'
▒ 'The instructors are Tim Matt'
▒ 'The instructors are Tim Matt Colt'
▒ 'The instructors are Tim Matt Colt Elie'

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

How about objects?

▒ var arr = [5,4,1,4,5];
▒ 
▒ arr.reduce(function(accumulator, nextValue){
▒     if(nextValue in accumulator){
▒         accumulator[nextValue]++;
▒     } else {
▒         accumulator[nextValue] = 1;
▒     }
▒     return accumulator;
▒ },{});

▒   accumulator	   nextValue	   returned value
▒ {}	                 5	      {5:1}
▒ {5:1}	               4	      {5:1, 4:1}
▒ {5:1, 4:1}	         1	      {5:1, 4:1, 1:1}
▒ {5:1, 4:1, 1:1}	     4	      {5:1, 4:2, 1:1}
▒ {5:1, 4:2, 1:1}	     5	      {5:2, 4:2, 1:1} 

Using reduce in a function

▒ function sumOddNumbers(arr){
▒     return arr.reduce(function(accumulator,nextValue){
▒         if(nextValue % 2 !== 0){
▒             accumulator += nextValue;
▒         }
▒         return accumulator;
▒     },0);
▒ }
▒ 
▒ sumOddNumbers([1,2,3,4,5]); // 9
 
▒ function createFullName(arr){
▒     return arr.reduce(function(accumulator, nextValue){
▒       accumulator.push(nextValue.first + " " 
▒                         + nextValue.last);
▒         return accumulator;
▒     }, []);
▒ }
▒ 
▒ createFullName([{first:"Colt", last:"Steele"}, 
▒                 {first:"Matt", last:"Lane"}]);
▒ 
▒ // ["Colt Steele", "Matt Lane"]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Recap

│ forEach 
│ ├ iterates over an array, 
│ ├ runs a callback on each value and 
│ └ returns undefined

│ map 
│ ├ creates a new array, 
│ ├ runs a callback on each value and 
│ └ pushes the result of each callback in the new array
 
│ filter
│ ├ creates a new array, 
│ ├ runs a callback on each value and 
│ └┬ if the result of the callback returns true, 
│  └─ that value is added to the new array
 
│ some 
│ ├ iterates through an array and 
│ ├ runs a callback on each value, 
│ └┬ if the callback for at least one value returns true, 
│  ├ some returns true, 
│  └─otherwise false 

│ every
│ ├ iterates through an array and 
│ ├ runs a callback on each value, 
│ └┬ if the callback at any time returns false, 
│  └─ every returns false

│ reduce
│ └┬ returns an accumulated value  
│  ├ which is determined by the result of 
│  └─ what is returned to each callback

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
