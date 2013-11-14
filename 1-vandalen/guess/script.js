"use strict";

window.onload = function(){
	
	
	
	var secret = Math.floor( Math.random() * 100)+1; // Detta tal behöver bytas ut mot ett slumpat tal.
	var iterator = 0;
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		iterator++;
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
		var answer = new Array();
		
		if (number.length == 0) {
			answer[0] = false;
			answer[1] = "Du måste ange ett tal!";
		} else if(isNaN(parseFloat(number)) && !isFinite(number)) {
			answer[0] = false;
			answer[1] = "Du måste ange ett tal mellan 1 och 100!";
		} else {
			if(number == secret) {
				answer[0] = true;
				answer[1] = "Grattis du vann! Det hemliga talet var " + secret + " och du behövde " + iterator + " gissningar för att hitta det."
			} else if (number > secret) {
				answer[0] = false;
				answer[1] = "Det hemliga talet är lägre!";
			} else if (number<1 || number>100) {
				answer[0] = false;
				answer[1] = "Talet är utanför intervallet 1 - 100";
			} else if(number < secret) {
				answer[0] = false;
				answer[1] = "Det hemliga talet är högre!";
			}
		}
				
		return answer;
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};