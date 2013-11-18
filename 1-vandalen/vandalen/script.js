"use strict";

var makePerson = function(persArr){
	var returnObject = new Object();
	var namesArr = new Array();
	var agesArr = new Array();
	var totalAge = 0;
	for(var i=0;i<persArr.length;i++){
		namesArr.push(persArr[i].name);
		agesArr.push(persArr[i].age);
		totalAge += persArr[i].age;
	}
	var averageAge = totalAge/persArr.length;
	namesArr = namesArr.sort(function(a, b){
		return a.localeCompare(b, 'sv', {sensitivity: "base"});
	});
	var names = namesArr.join(', ');
	returnObject.maxAge = Math.max.apply(Math, agesArr);
	returnObject.minAge = Math.min.apply(Math, agesArr);
	returnObject.names = names;
	returnObject.averageAge = Math.round(averageAge);
	
	return returnObject
}

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);