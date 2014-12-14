"use strict";

var Quiz = {
    url : "http://vhost3.lnu.se:20080/question/1",
    count : 0,
    tries : [],

    init : function() {
        document.getElementById('startQuiz').addEventListener('click', function(){
            var xhr = new XMLHttpRequest();
            Quiz.createBoard();
            Quiz.getResponse(Quiz.url, xhr);
        });
    },
    
    createBoard : function() {
        document.getElementById('startQuiz').setAttribute('class', 'hidden');
        var quizNav = document.getElementById('quizNav');
        var quizBoard = document.getElementById('quizBoard');
        
        // Frågan
        var question = document.createElement('p');
        question.setAttribute('class', 'question');
        question.setAttribute('id', 'question');
        quizBoard.appendChild(question);
        
        // Svarsinput
        var answer = document.createElement('input');
        answer.setAttribute('type', 'text');
        answer.setAttribute('id', 'answer');
        quizBoard.appendChild(answer).focus();
        
        // Svarsknappen
        var button = document.createElement('input');
        button.setAttribute('type','button');
        button.setAttribute('value','Svara');
        button.setAttribute('id', 'button');
        button.setAttribute('class', 'button');
        quizNav.appendChild(button);
        
        
    },
    
    getResponse : function(url, xhr) {
        
        xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status == 200){
					Quiz.renderQuestion(JSON.parse(xhr.responseText));
					Quiz.postAnswer(JSON.parse(xhr.responseText));
				}
			} else {
				console.log("Läsfel, status:"+xhr.status);
			}
		};

		xhr.open("GET", url , true);
		xhr.send(null);
    },
    
    renderQuestion: function(response){
		var text = document.querySelector(".question");
		
		if(response.question){
			text.innerHTML = response.question;
		} else {
			text.innerHTML = response.message;
		}
	},
    
    
};

window.onload = function() {
    Quiz.init();
};