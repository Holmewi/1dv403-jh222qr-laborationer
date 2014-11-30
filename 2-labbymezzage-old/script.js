"use strict";
var messageList = [];


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
    
    // Datumknappen i aside
    var showDateButton = document.createElement("input");
    showDateButton.type = "button";
    showDateButton.setAttribute("id", "showDateButton");
    
    showDateButton.onclick = function(){
        alert("Inlägget skapades den " + date);
    }
    
    aside.appendChild(showDateButton);
    
    
    
    
    
    
    
    
    
    
    
    // Deleteknappen i aside
    var showDeleteButton = document.createElement("input");
    showDeleteButton.type = "button";
    showDeleteButton.setAttribute("id", "showDeleteButton");
    
    showDeleteButton.onclick = function(){
        var result = confirm("Är du säker att du vill ta bort inlägget?");
        if(result === true){
            ul.removeChild(li);

        }
        
    };
    
    aside.appendChild(showDeleteButton);
}



window.onload = function() {
    var submit = document.getElementById("send");
    
    submit.onclick = function() {
        
        var date = new Date();
        var dateTime = date.dateTime();
        
        // Sparar värdet från textfältet med relevant id
        var textString = document.getElementById("textField").value;
        
        // Kontrollerar att textsträngen inte är tom
        if(textString === ""){
            alert("Du måste skriva något!");
        } else {
            // Skapar ett nytt objekt och skickar in objektet i en array
            // Källa: http://stackoverflow.com/questions/9543805/add-new-object-to-array
            
            // new Message(textString, date, dateTime);
            messageList.push(new Message(textString, date, dateTime));
            console.log(messageList);
            
            // Ränsar värdet så att textfältet är tomt efter att man skickat
            document.getElementById('textField').value = "";
        }
        return false;
    }
 
}

// En datumhanterade skapad för att få fram rätt format på tiden
// Källa: http://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
Date.prototype.dateTime = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes();
}