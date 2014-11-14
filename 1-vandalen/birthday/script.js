"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
			// Din kod här.

			var curDate = new Date();
			var curDateTime = Math.ceil(curDate.getTime() / (1000*60*60*24));
			var birthday = new Date(date);
			var birthdayTime = Math.ceil(birthday.getTime() / (1000*60*60*24));
			var daysToBirthday = Math.ceil((birthdayTime - curDateTime));
			var diffYear = curDate.getYear() - birthday.getYear();
			
			//console.log(curDate);
			//console.log(curDateTime);
			//console.log(birthday);
			//console.log(birthdayTime);
			//console.log(curDate.getFullYear());
			//console.log(birthday.getFullYear());

			//console.log(daysToBirthday);
			
			/*
			if (birthday.getMonth() == curDate.getMonth() && birthday.getDate() == curDate.getDate()){
				return 0;
			}
			if (birthday.getMonth() == curDate.getMonth() && birthday.getDate() == curDate.getDate() + 1){
				return 1;
			}
			*/
			if (curDate.getFullYear() != birthday.getFullYear()){
				var leapYear = birthday.getFullYear();
				for (var i = 0; i <= diffYear; ++i){
					if (leapYear % 4 == 0) {
				        console.log(leapYear);
			        }
			        leapYear++;
			        
				}
					//console.log(birthday.getFullYear());
					//console.log(birthday.getFullYear() % 4 == 0);
			
				birthday.setFullYear(curDate.getFullYear());
				daysToBirthday = daysToBirthday + (365 * diffYear);
			}
			
			/*
			console.log(2014 % 4);
			console.log(2013 % 4);
			console.log(2012 % 4);
			console.log(2011 % 4);
			console.log(2010 % 4);
			console.log(daysToBirthday);
			console.log(birthday.getFullYear());
			console.log(diffYear);
			*/
			
			if (birthdayTime == curDateTime){
				return 0;
			}
			if (birthdayTime == curDateTime + 1){
				return 1;
			}
			
			return daysToBirthday;
			
			
			
		
		
			/*
			if (curDateTime - birthdayTime > 2){
				birthday.setFullYear(curDate.setFullYear() + 1);
				daysToBirthday = birthdayTime - curDateTime;
				return daysToBirthday;
			}
			if (birthdayTime < curDateTime){
				daysToBirthday = 365 - curDateTime - birthdayTime;
				return daysToBirthday;
			}
					
					var diffYear = curDate.getYear() - birthday.getYear();
					birthday.setFullYear(curDate.setFullYear() + 1);
					console.log(diffYear);
					
					if(diffYear >= 1){
						var daysToBirthdayYear = Math.ceil(daysToBirthday - (diffYear * 365));
						return daysToBirthdayYear;
					}

					if(diffYear <= 0){
						return daysToBirthday;
					}
					*/
					
					
					
					
					
			
				

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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};