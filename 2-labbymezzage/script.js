"use strict";

// Objektet
function Message(textString, date, dateTime) {
    
    var ul = document.getElementById("commentList");
    var li = document.createElement("li");
    var article = document.createElement("article");
    var aside = document.createElement("aside");
    var time = document.createElement("time");
    
    
    ul.appendChild(li);
    li.appendChild(article);
    li.appendChild(aside);
    li.appendChild(time);
    article.innerHTML = textString;
    time.innerHTML = dateTime;
    

    
    
}

window.onload = function() {
    var submit = document.getElementById("send");
    
    submit.onclick = function() {
        
        var date = new Date();
        var dateTime = date.dateTime();
        
        // Skapar ett nytt objekt
        new Message("TEMP TEMP", date, dateTime);
        return false;
    }
 
}

// En datumhanterade skapad för att få fram rätt format på tiden
// Källa: http://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
Date.prototype.dateTime = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes();
}