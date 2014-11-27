"use strict";

// Objektet
function Message(textString) {
    
    var section = document.createElement("section");
    section.className = "message";
    
    document.body.appendChild(section);
    
    
    
}

window.onload = function() {
    var submit = document.getElementById("send");
    
    submit.onclick = function() {
        
        // Skapar ett nytt objekt
        new Message("TEMP TEMP");
        return false;
    }
    
    
}