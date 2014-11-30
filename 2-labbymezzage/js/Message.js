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

Message.prototype.showMessage = function(){
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
    time.innerHTML = this.getDate();
 
};