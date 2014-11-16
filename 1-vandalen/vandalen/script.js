"use strict";

var makePerson = function(persArr){

	// Din kod här...
	var result = {};
	//console.log(persArr);

	var minAge = Math.min(function(age){ return age;});
	var maxAge = Math.max(function(age){ return age;});
	var averageAge = Math.round(function(age){ return age;});
	var names = persArr.map(function(name){ return name;});

	result.minAge = minAge;
	result.maxAge = maxAge;
	result.averageAge = averageAge;
	result.names = names;

	console.log(result);
	return result;
	
	/*
    {};
    */
}

//var names = ["John Häggerud", "Johan Leitet", "Mats Loock", ].map(function(persArr){ return "Namn: " + persArr; });
	
// En array som innehåller argumenten name och age
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
// Skapar ett nytt objekt och skickar med arrayen
var result = makePerson(data);
