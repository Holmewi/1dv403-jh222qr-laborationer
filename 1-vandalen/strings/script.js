"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.
		var convChar = "";
		
		if (str.length > 0) {

			for (var i = 0; i < str.length; i+= 1) {

				// Talar om i fall bokstavskoden är en versal
				// och gör i så fall om den till en gemen
				// samt gör om alla 'a' till '#'
				
				/*
				if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 || str.charCodeAt(i) >= 196 && str.charCodeAt(i) <= 214) {
					convChar += str.charAt(i).toLowerCase().replace(/a/g, "#");
				// Om bokstaven inte är en versal
				// Gör om till gemen samt ändra alla 'A' till '#'
				} else {
					convChar += str.charAt(i).toUpperCase().replace(/A/g, "#");
				};
				*/
				
				if (str.charAt(i) === str.charAt(i).toUpperCase()) {
					convChar += str.charAt(i).toLowerCase().replace(/a/g, "#");
				// Om bokstaven inte är en versal
				// Gör om till gemen samt ändra alla 'A' till '#'
				} else {
					convChar += str.charAt(i).toUpperCase().replace(/A/g, "#");
				};
			};
			return convChar;
		} else {
			return "Du måste skriva något";
		};
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};