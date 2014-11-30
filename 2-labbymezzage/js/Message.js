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
    
};

// En datumhanterade skapad för att få fram rätt format på tiden
// Källa: http://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
Date.prototype.dateTime = function() {
    return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}