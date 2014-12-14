"use strict";

var Quiz = {
    init : function() {
        console.log("test");
        document.getElementById("startQuiz").setAttribute("class", "hidden");
    }
}

window.onload = function() {
    document.getElementById("startQuiz").addEventListener("click", function(){
        Quiz.init();
    });
};