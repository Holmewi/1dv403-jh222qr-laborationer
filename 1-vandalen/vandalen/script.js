"use strict";

var makePerson = function(persArr){

	// Din kod här...
	var result = {};
	
	// Tar ut åldrarna från arrayen och sorterar dem
	// Sorterar även icke ASCII-bokstäver
	// Källa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
	var names = persArr.map(function(name){ return name.name;}).sort(function(a, b){ return a.localeCompare(b)});
	
	// Lägger ihop alla namn i arrayen och skiljer dem med ett kommatecken
	// Källa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
	names = names.join(', ');
	
	// Tar ut åldrarna från arrayen
	// Varför age.age?
	var ages = persArr.map(function(age){ return age.age;});

	// Egenskaper och uträkning
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
	var minAge = Math.min.apply(this, ages);
	var maxAge = Math.max.apply(this, ages);
	
	// Lägger ihop alla värderna i en array
	// Källa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	var averageAge = ages.reduce(function(a, b) { return a + b });
	
	// Rundar av till närmsta heltal
	averageAge = Math.round(averageAge / ages.length);

	//console.log(averageAge);
	
	// Skickar in egenskaperna i objektet
	result.minAge = minAge;
	result.maxAge = maxAge;
	result.averageAge = averageAge;
	result.names = names;

	
	return result;
	
	/*
    {};
    */
};

//var names = ["John Häggerud", "Johan Leitet", "Mats Loock", ].map(function(persArr){ return "Namn: " + persArr; });
	
// En array som innehåller argumenten name och age
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
// Skapar ett nytt objekt och skickar med arrayen
var result = makePerson(data);

console.log(result);
