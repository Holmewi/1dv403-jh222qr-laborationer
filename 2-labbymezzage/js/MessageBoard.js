"use strict";

var MessageBoard = {
    // En array som skall innehålla en lista med alla meddelanden
    messages: [],
    
    init : function(e) {
        var submit = document.getElementById("send");
        var textArea = document.getElementById("textField");
    
        textArea.onkeydown = function(e){				
            if (e.keyCode === 13 && !e.shiftKey) {
                e.preventDefault();
                MessageBoard.createNewMessage();
            }
		};
		
		submit.onclick = MessageBoard.createNewMessage;
		
		MessageBoard.messageCount();
    },
    
    createNewMessage:function(e) {
        // Ett objekt som skall innehålla en sträng och ett datum
        var message = {};
        // Sparar värdet från textfältet med relevant id
        var textString = document.getElementById("textField").value;
        
        
    
            // Kontrollerar att textsträngen inte är tom
            if(textString === ""){
                alert("Du måste skriva något!");
            } else {
                
                // Skapar ett nytt objekt från konstruktorn Message
                message = new Message(textString, new Date());
                
                // Skickar in objektet i en array
                MessageBoard.messages.push(message);
                
                // Renderar ut ett det sista meddelandet i arrayen
                MessageBoard.renderMessage(MessageBoard.messages.length - 1);                
                
                // message.showMessage();
                MessageBoard.messageCount();
        
                console.log(MessageBoard.messages);
                console.log(MessageBoard.messages.length);
                
                
                // Ränsar värdet så att textfältet är tomt efter att man skickat
                document.getElementById('textField').value = "";
            }
        return false;
    },
    
    messageCount : function(){
        var p = document.getElementById("messageCount");
        p.innerHTML = "Antal meddelanden: " + MessageBoard.messages.length;
    },
    
    renderMessages : function() {
        var i;
        // Tar bort alla meddelanden
        document.getElementById("commentList").innerHTML = "";
        
        for(i = 0; i < MessageBoard.messages.length; i += 1) {
            MessageBoard.renderMessage(i);
        }
        MessageBoard.messageCount();
    },
    
    renderMessage : function(messageID) {
        var ul = document.getElementById("commentList");
        var li = document.createElement("li");
        var article = document.createElement("article");
        var aside = document.createElement("aside");
        var time = document.createElement("time");
        
        ul.appendChild(li);
        li.appendChild(article);
        li.appendChild(aside);
        li.appendChild(time);
        article.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        // Sätter datumet till en sträng med enbart tiden (Ett mycket enklare sätt än min tidigare Date.prototyp som finns bortkommenterad i Message.js)
        // Källa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
        time.innerHTML = MessageBoard.messages[messageID].getDate().toLocaleTimeString();
        
        // Datumknappen i aside
        var showDateButton = document.createElement("input");
        showDateButton.type = "button";
        showDateButton.setAttribute("id", "showDateButton");
        
        showDateButton.onclick = function(){
            alert(MessageBoard.messages[messageID].getDateText());
        };
        
        aside.appendChild(showDateButton);
        
        // Deleteknappen i aside
        var showDeleteButton = document.createElement("input");
        showDeleteButton.type = "button";
        showDeleteButton.setAttribute("id", "showDeleteButton");
        
        showDeleteButton.onclick = function(){
            var result = confirm("Är du säker att du vill ta bort inlägget?");
            if(result === true){
                MessageBoard.removeMessage(messageID);
            }
            
        };
        
        aside.appendChild(showDeleteButton);
        console.log(messageID);
    },
    
    
    removeMessage : function(messageID) {
        // Försökte använda slice först men insåg att splice var en bättre lösning
        // Källa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        MessageBoard.messages.splice(messageID, 1);
        MessageBoard.renderMessages();
    }
    
};

window.onload = function() {
    MessageBoard.init();
};



