"use strict";

// Objektet
function Message(textString) {
    
    var li = document.createElement("li");
    //var ul = document.querySelector("#messages");
    li.className = "comment";
    
    document.ul.appendChild(li);
    //ul.innerHTML = "<li>Testar, testar</li>";"
    
    
}

window.onload = function() {
    var submit = document.getElementById("send");
    
    submit.onclick = function() {
        
        // Skapar ett nytt objekt
        new Message("TEMP TEMP");
        return false;
    }
    
    
}