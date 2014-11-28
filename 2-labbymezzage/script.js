"use strict";

// Objektet
function Message(textString) {
    
    var ul = document.getElementById("commentList");
    var li = document.createElement("li");
    var article = document.createElement("article");
    var aside = document.createElement("aside");
    var time = document.createElement("time");
    
    
    ul.appendChild(li);
    li.appendChild(article);
    article.innerHTML = textString;
    

    
    
}

window.onload = function() {
    var submit = document.getElementById("send");
    
    submit.onclick = function() {
        
        // Skapar ett nytt objekt
        new Message("TEMP TEMP");
        return false;
    }
    
    
}