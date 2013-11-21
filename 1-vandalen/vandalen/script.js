"use strict";

var makePerson = function(persArr){
	var returnObject = new Object();	//Ett nytt objekt skapas
	var namesArr = new Array();
	var agesArr = new Array();
	var totalAge = 0;
	for(var i=0;i<persArr.length;i++){	//Itererar genom arrayen som skickas in. För varje steg läggs namet till en egen array. Likadant med ålder. Åldern ökas också på för att få den totala åldern
		namesArr.push(persArr[i].name);
		agesArr.push(persArr[i].age);
		totalAge += persArr[i].age;
	}
	var averageAge = totalAge/persArr.length;	//Räknar ut medelåldern
	namesArr = namesArr.sort(function(a, b){	//Sorterar namnarrayen där jämförelsen även gäller svenska tecken
		return a.localeCompare(b, 'sv', {sensitivity: "base"});
	});
	var names = namesArr.join(', ');	//Skapar en sträng av namnarrayen skiljt med ett kommatecken
	returnObject.maxAge = Math.max.apply(Math, agesArr);	//Hittar maxvärdet i åldersarrayen
	returnObject.minAge = Math.min.apply(Math, agesArr);	//Hittar minimumvärdet i åldersarrayen
	returnObject.names = names;	//Tilldelar egenskapen "names" i objektet namnsträngen
	returnObject.averageAge = Math.round(averageAge);	//Rundar av medelåldern
	
	return returnObject
}

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);