"use strict";

window.onload = function(){

	
	var birthday = function(date){
		var todaysDate = new Date(); //Skapar ett nytt datumobjekt för dagens datum och sätter det till 12.00
		todaysDate.setHours(12);
		todaysDate.setMinutes(0);
		todaysDate.setSeconds(0)
		todaysDate.setMilliseconds(0);
		var dateObject = new Date(date); //Skapar nytt datumobjekt för det datumet användaren valt
		if(dateObject=="Invalid Date"){ //Om datumet är i felaktigt format kastas ett felmeddelande
			throw new Error("Felaktigt datumformat");
		}
		dateObject.setHours(12); //Sätter också detta till 12.00
		dateObject.setMinutes(0);
		dateObject.setSeconds(0);
		dateObject.setMilliseconds(0);
		var difference = dateObject - todaysDate;
		var year = dateObject.getFullYear();
		var isLeap = new Date(year, 1, 29).getMonth() == 1; //Kontrollerar om det är skottår, men är inte säker på att jag behöver använda det. Om man använder ett datumobjekt sköter det väl sig av sig själv?
		if(difference>=0){ //Om skillnaden mellan datumen är större nän noll omvandlas skillnaden till hela dagar. Om skillnaden är ett negativt värde har datumet redan varit och ett fel kastas
			difference = difference/1000;
			difference = difference/3600;
			difference = difference/24;
			difference = Math.round(difference);
			return difference;
		} else {
			throw new Error("Datumet har redan varit");
		}
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