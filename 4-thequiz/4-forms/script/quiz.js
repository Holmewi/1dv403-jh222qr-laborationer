"use strict";

var Quiz = {
    init : function() {
        console.log("test");
        Quiz.createQuiz();
    },
    
    createQuiz : function() {
        document.getElementById('startQuiz').setAttribute('class', 'hidden');
        var quizNav = document.getElementById('quizNav');
        var quizBoard = document.getElementById('quizBoard');
        
        // Frågan
        var quesion = document.createElement('p');
        quesion.setAttribute('class', 'question');
        quizBoard.appendChild(quesion);
        // Svarsinput
        var answer = document.createElement('input');
        answer.setAttribute('type', 'text');
        answer.setAttribute('id', 'answer');
        quizBoard.appendChild(answer).focus();
        
        // Svaraknappen
        var button = document.createElement('input');
        button.setAttribute('type','button');
        button.setAttribute('value','Svara');
        button.setAttribute('class', 'button');
        quizNav.appendChild(button);
    },
    
    getQuestion : function() {
        
    }
}

window.onload = function(e) {
    document.getElementById('startQuiz').addEventListener('click', function(){
        e.preventDefault();
        Quiz.init();
    });
};