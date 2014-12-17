"use strict";

var Quiz = {
    url : "http://vhost3.lnu.se:20080/question/1",
    count : 0,
    tries : [],

    init : function() {
        document.getElementById('startQuiz').onclick = function(){
            Quiz.createBoard();
            Quiz.getResponse("http://vhost3.lnu.se:20080/question/1");
        };
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
    
    getResponse : function(url) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status == 200){
					Quiz.renderQuestion(JSON.parse(xhr.responseText));
                    Quiz.sendAnswer(JSON.parse(xhr.responseText), url);
                    console.log("TESTAR: " + xhr.responseText);
				} else {
				console.log("Läsfel, status:"+xhr.status);
			    }
			} 
		};

		xhr.open('GET', url , true);
		xhr.send(null);
    },
	
	sendAnswer : function(response, url) {
	    var answer = document.querySelector('#answer');
	    
	    document.getElementById('subAnswer').onclick = function(){
	        var xhr = new XMLHttpRequest();
	        Quiz.count += 1;
	        console.log(Quiz.count);
	        console.log(answer.value);
	        console.log(response);
	        
	        
	        xhr.onreadystatechange = function(){
	            
	            if(xhr.readyState === 4){
	                
	                if(xhr.status == 200){
	                    console.log(xhr.responseText);
	                    response = JSON.parse(xhr.responseText);
	                    Quiz.tries.push(Quiz.count);
	                    Quiz.count = 0;
	                    
                        if(response.nextURL){
                            answer.value = "";
                            document.getElementById('answer').focus();
                            Quiz.renderQuestion(JSON.parse(xhr.responseText));
                            //Quiz.url = response.nextURL;
                            
                            setTimeout(function(){
                                Quiz.getResponse(response.nextURL);
                                console.log("URL :" + response.nextURL);
                            }, 1000);
                            
                            
                        } else {
                            Quiz.viewResult();
							console.log("SLUT");
						}
                    } else if(xhr.status == 400) {
                        
						console.log("FEL SVAR");
						Quiz.renderQuestion(JSON.parse(xhr.responseText));
                        document.getElementById("answer").focus();
                        setTimeout(function(){
                            answer.value = "";
                            console.log("STATUS2 " + xhr.status);
                            Quiz.renderQuestion(response);
                        }, 1000);
			        } else {
                    console.log("Läsfel, status:"+xhr.status);
                    console.log(xhr.responseText);
				    }
                } 
	        };
	        
	        var input = JSON.stringify({
	            answer : answer.value
	        });
	        
	        xhr.open('POST', response.nextURL, true);
	        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            //xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(input); 
        };
	},
	
	renderQuestion: function(response) {
		var text = document.querySelector('.question');
		if(response.question){
		    text.innerHTML = response.question;
		} else {
		    text.innerHTML = response.message;
		}
	}, 
	
	viewResult : function() {
	    var quizNav = document.getElementById('quizNav');
	    var text = document.querySelector('.question');
	    var hr = document.createElement('hr');
	    quizNav.appendChild(hr);
		text.innerHTML = "The game is over";

		for (var i = 0; i < Quiz.tries.length; i += 1) {
			var p = document.createElement('p');
			p.setAttribute('class', 'result');
			quizNav.appendChild(p);
			p.innerHTML = "You needed " + Quiz.tries[i] + " attept(s) on question " + (i + 1) + ".";
			//p.innerHTML = "Question " + (i + 1) + ", " + Quiz.tries[i] + " Attept(s)";
		}
	}
    
    
};

window.onload = function() {
    Quiz.init();
};