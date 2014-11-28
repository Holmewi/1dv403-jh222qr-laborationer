"use strict";

// Objektet
function Message(textString, date) {
    
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
    time.innerHTML = date;
    

    
    
}

window.onload = function() {
    var submit = document.getElementById("send");
    
    submit.onclick = function() {
        
        var date = new Date();
        // Skapar ett nytt objekt
        new Message("TEMP TEMP", time);
        return false;
    }
 
}