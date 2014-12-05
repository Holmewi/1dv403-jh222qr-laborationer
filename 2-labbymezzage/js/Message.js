"use strict";

// Konstruktor som tar hand om meddelandet och datum
function Message(message, date){
    
    console.log(message);
    console.log(date);
    
    this.getString = function() { return message; };
    this.setString = function(_textString) { message = _textString; };
    this.getDate = function() { return date; };
    this.setDate = function(_date) { date = _date; };
    
    this.setString(message);
    this.setDate(date);
}

/*
Message.prototype.showMessage = function() {
    var ul = document.getElementById("commentList");
    var li = document.createElement("li");
    var article = document.createElement("article");
    var aside = document.createElement("aside");
    var time = document.createElement("time");
    
    ul.appendChild(li);
    li.appendChild(article);
    li.appendChild(aside);
    li.appendChild(time);
    article.innerHTML = this.getString();
    time.innerHTML = this.getDate().dateTime();
};*/

// En datumhanterade skapad för att få fram rätt format på tiden
// Källa: http://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
Message.prototype.getDateText = function() {
    // Namngav måndaderna genom att lägga dem i en array och hämta ut dem genom att skriva ut månadens nummer i arrayen
    // Källa: http://stackoverflow.com/questions/1643320/get-month-name-from-date
    var monthNames = [ "januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december" ];
    return "Inlägget skapades den " + this.getDate().getDate() + " " + monthNames[this.getDate().getMonth()] + " " +this.getDate().getFullYear() + " klockan " + this.getDate().toLocaleTimeString();
}

Message.prototype.toString = function() {
    return this.getText() + " (" + this.getDate() + ")";
}

Message.prototype.getHTMLText = function() {
    // Skapar en radbrydning vid utskrift av meddelandet
    // Källa: http://stackoverflow.com/questions/863779/javascript-how-to-add-line-breaks-to-an-html-textarea
    return this.getString().replace(/\r?\n/g, '<br />');
}