"use strict";

var makePerson = function(persArr){

	// Din kod här...
	var result = {};

	// Tar ut åldrarna från arrayen och sorterar dem
	// Sorterar även icke ASCII-bokstäver
	// Källa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
	var names = persArr.map(function(name){ return name.name;}).sort(function(a, b){ return a.localeCompare(b)});
	
	// Tar ut åldrarna från arrayen
	// Varför age.age?
	var ages = persArr.map(function(age){ return age.age;});
	
	// Testar alla elementen i ages för att se om det är ett heltal
	// Källa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
	var isNumber = ages.every(function isNumber(currentValue, index, array){
		if (isNaN(currentValue)) {
			console.log("En ålder är inte ett heltal!");
		};
	});

	// Testar alla elementen i names för att se om det är en sträng
	// Källa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
	var isString = names.every(function isString(currentString, index, array){
		if (typeof currentString != 'string') {
			console.log("Ett namn är inte en sträng!");
		};
	});

	// Lägger ihop alla namn i arrayen och skiljer dem med ett kommatecken
	// Källa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
	names = names.join(', ');
	
	// console.log(ages);
	
	// Egenskaper och uträkning
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
	var minAge = Math.min.apply(this, ages);
	var maxAge = Math.max.apply(this, ages);
	
	// Lägger ihop alla värderna i en array
	// Källa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	var averageAge = ages.reduce(function(a, b) { return a + b });
	
	// Rundar av till närmsta heltal
	averageAge = Math.round(averageAge / ages.length);
	
	// Skickar ett undantag om värdet inte är ett heltal
	/*
	if (isNaN(averageAge, minAge, maxAge)){
		console.log("Värdet är inte ett heltal!");
	}
	*/
	
	// Skickar in egenskaperna i objektet
	result.minAge = minAge;
	result.maxAge = maxAge;
	result.averageAge = averageAge;
	result.names = names;

	return result;
	
};

// En array som innehåller argumenten name och age
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];


	
// Skapar ett nytt objekt och skickar med arrayen
var result = makePerson(data);

console.log(result);
