"use strict";

// Konstruktor som tar hand om meddelandet och datum
function Message(message, date){
    
    console.log(message + date);
    
    this.getString = function() {
        return message;
    };
    
    this.setString = function(_textString) {
        message = _textString;
    };
    
    this.getDate = function() {
        return date;
    };
    
    this.setDate = function(_date) {
        date = _date;
    };
}