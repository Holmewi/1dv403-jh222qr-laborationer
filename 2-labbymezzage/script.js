"use strict";

// Objektet
function Message(textString, date, dateTime) {
    
    // Meddelandefönster
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
    
    // Aside-fönster
    //aside.innerHTML += "<img src='pics/iconTime.png' class='showDate' alt='Show date'/><img src='pics/iconDelete.png' class='deleteMessage' alt='Delete message'/>";
    var showDateButton = document.createElement("input");
    showDateButton.type = "button";
    showDateButton.setAttribute("id", "showDateButton");
    var showDeleteButton = document.createElement("input");
    showDeleteButton.type = "button";
    showDeleteButton.setAttribute("id", "showDeleteButton");
    
    aside.appendChild(showDateButton);
    aside.appendChild(showDeleteButton);
    
}

window.onload = function() {
    var submit = document.getElementById("send");
    
    submit.onclick = function() {
        
        var date = new Date();
        var dateTime = date.dateTime();
        // Sparar värdet från textfältet med relevant id
        var textString = document.getElementById("textField").value;
        
        // Skapar ett nytt objekt
        new Message(textString, date, dateTime);
        
        return false;
    }
 
}

// En datumhanterade skapad för att få fram rätt format på tiden
// Källa: http://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
Date.prototype.dateTime = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes();
}

