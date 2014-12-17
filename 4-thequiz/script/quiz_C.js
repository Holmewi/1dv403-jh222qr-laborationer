"use strict";

var Quiz = {
    count : 0,
    tries : [],
    url : "http://vhost3.lnu.se:20080/question/1",

    init : function() {
        document.getElementById('startQuiz').addEventListener('click', function(){
            Quiz.createBoard();
            Quiz.getResponse("http://vhost3.lnu.se:20080/question/1");
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
        button.setAttribute('id', 'subAnswer');
        button.setAttribute('class', 'button');
        quizNav.appendChild(button);
        
        
    },
    
    getResponse : function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
    			    console.log("TEST:"+xhr.status);
    			    console.log(xhr.responseText);
                    Quiz.renderQuestion(JSON.parse(xhr.responseText));
                    Quiz.sendAnswer(JSON.parse(xhr.responseText));
    			
            }
			
		};

		xhr.open('GET', Quiz.url, true);
		xhr.send(null);
    },
	
	sendAnswer : function(response) {
	    var answer = document.querySelector('#answer');

	    document.getElementById('subAnswer').addEventListener('click', function(){

	        Quiz.count += 1;
	        console.log(Quiz.count);

	        var xhr = new XMLHttpRequest();
	        xhr.onreadystatechange = function(){
	            
	            if(xhr.readyState === 4){
	                Quiz.renderQuestion(JSON.parse(xhr.responseText));
	                if(xhr.status == 200){
	                    
	                    response = JSON.parse(xhr.responseText);
	                    Quiz.tries.push(Quiz.count);
	                    Quiz.count = 0;
	                    Quiz.url = response.nextURL;
	                    if(response.nextURL){
	                        
                            response = JSON.parse(xhr.responseText);
                            document.getElementById('answer').focus();
                        
                            setTimeout(function(){
                                answer.value = "";
                                console.log("STATUS1" + xhr.status);
                                Quiz.getResponse();
                            }, 1000);
	                    } else {
	                        Quiz.viewResult();
	                        console.log("SLUT");
	                    }
                    } else {
                        console.log("FEL");
                        Quiz.renderQuestion(JSON.parse(xhr.responseText));
                        document.getElementById("answer").focus();
                        setTimeout(function(){
                            answer.value = "";
                            console.log("STATUS2" + xhr.status);
                            //Quiz.getResponse(Quiz.url);
                            Quiz.renderQuestion(response);
                        }, 1000);
	                } 
                    
	            }
	        };
	        
	        var input = {
	            answer : answer.value
	        };
	        
	        xhr.open('POST', response.nextURL, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(input));
	            
	        
	    });
	},
	
	renderQuestion : function(response) {
		var text = document.querySelector('.question');
		if(response.question){
		    text.innerHTML = response.question;
		} else {
		    text.innerHTML = response.message;
		}
	},
	
	viewResult : function() {
	    var quizNav = document.getElementById('quizNav');
	    var p = document.createElement('p');
	    var text = document.querySelector('.question');
		text.innerHTML = "The game is over";

		for (var i = 0; i < Quiz.tries.length; i += 1) {
			var p = document.createElement('p');
			quizNav.appendChild(p);
			p.innerHTML = "You needed " + Quiz.tries[i] + " tries on question " + (i + 1) + ".";
		}
	    
	}
    
    
};

window.onload = function() {
    Quiz.init();
};