"use strict";

var makePerson = function(persArr){

	// Din kod här...
	//console.log(persArr);
	//var n = ["John Häggerud", "Johan Leitet", "Mats Loock", ].map(function(names){ return "Namn: " + names; });
	
	
	/*
	var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
	
    var f = function(data){
      	var obj = new Object();
		obj.minAge = 36;
		obj.maxAge = 46;
		obj.avarageAge = 40;
		obj.names = "John Häggerud, Johan Leitet, Mats Loock";
    }
    
    
    {};
    */
};

//var names = ["John Häggerud", "Johan Leitet", "Mats Loock", ].map(function(persArr){ return "Namn: " + persArr; });
	
// En array som innehåller argumenten name och age
var persons = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
// Skapar ett nytt objekt och skickar med arrayen
var person = makePerson(persons){};
