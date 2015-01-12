"use strict";

var Memory = {
    positionTop : 0,
    positionLeft : 0,
    // Tänk på att det måste vara jämnt antal brickor.
    // Spelplanen får max innehålla 56 brickor
    rows : 4,
    cols : 4,

    memoryArray : [],
    score : undefined,
    
    start : function(appFooter, appContent){
        var gameID = 0 + Memory.memoryArray.length;
        var guesses = 0;
        var count = 0;
        var pairs = 0;
        var halt = false;
        var randomBricks = Math.floor(Math.random() * (27)) + 0;
        console.log("KOLLAR" + randomBricks);
        
        console.log(gameID);
        console.log("IMAGE " + randomBricks);
        
        var memory = new MemoryBoard(RandomGenerator.getPictureArray(Memory.rows, Memory.cols), gameID, guesses, count, pairs, halt, randomBricks);
        Memory.memoryArray.push(memory);
        
        memory.init(appFooter, appContent, memory);
        
    }
};

function MemoryBoard(randomNumber, gameID, guesses, count, pairs, halt, randomBricks){
    this.getRandomNumber = function() { return randomNumber; };
    this.setRandomNumber = function(_randomNumber) { randomNumber = _randomNumber; };
    this.setRandomNumber(randomNumber);
    
    this.getGameID = function() { return gameID; };
    this.setGameID = function(_gameID) { gameID = _gameID; };
    this.setGameID(gameID);
    
    this.getGuesses = function() { return guesses; };
    this.setGuesses = function(_guesses) { guesses = _guesses; };
    this.setGuesses(guesses);

    this.getCount = function() { return count; };
    this.setCount = function(_count) { count = _count; };
    this.setCount(count);
    
    this.getPairs = function() { return pairs; };
    this.setPairs = function(_pairs) { pairs = _pairs; };
    this.setPairs(pairs);
    
    this.getHalt = function() { return halt; };
    this.setHalt = function(_halt) { halt = _halt; };
    this.setHalt(halt);
    
    this.getRandomBricks = function() { return randomBricks; };
    this.setRandomBricks = function(_randomBricks) { randomBricks = _randomBricks; };
    this.setRandomBricks(randomBricks);

}

MemoryBoard.prototype.init = function(appFooter, appContent, memory){
    console.log(memory.getRandomNumber());
    
    this.brickID = 0;
    this.brickOneSrc = undefined; 
    this.brickTwoSrc = undefined; 

    var tableBoard = document.createElement('div');
    var table = document.createElement('table');
    var counter = document.createElement('div');
    var p = document.createElement('p');
    p.setAttribute('id', 'id' + memory.getGameID());
    console.log(memory.getGameID());
    
    
    
    tableBoard.setAttribute('class', 'memoryBoard');
    counter.setAttribute('class', 'counter');
    
    appContent.appendChild(tableBoard);
    tableBoard.appendChild(table);
    appContent.appendChild(counter);
    counter.appendChild(p);
    
    appFooter.innerHTML = "<img src='gif/ajax-loader.gif' border=0/>";
    appFooter.innerHTML += "<p>Loading...</p>";
    
    // Kör funktionen som renderar spelet
    memory.renderMemory(Memory.rows, Memory.cols, table, p, memory.getRandomNumber(), memory, this.brickID, appFooter);
    memory.guessCount(p, memory.getRandomNumber(), memory);
    
};

MemoryBoard.prototype.renderMemory = function(rows, cols, table, p, randomNumbers, memory, brickID, appFooter){
    var i;
    var j;
    console.log(memory.getRandomBricks());
    
    console.log("HOOOOO " + (memory.getRandomBricks() + randomNumbers.length));
    if(Memory.rows * Memory.cols / 2 > 28){
        console.log("Spelplanen är för stor");
    }
    if(memory.getRandomBricks() + randomNumbers.length > 28){
        memory.setRandomBricks(28 - randomNumbers.length);
        // console.log("FÖR MÅNGA BRICKOR" + (memory.getRandomBricks() + randomNumbers.length - 1));
    }
    console.log("BRICK " + memory.getRandomBricks());
    
    // Loopar i genom antalet rows
    // Skriver ut en rad och kör en nästrlad loop för varje loop
    for(i = 0; i < rows; i += 1){
        var tr = document.createElement("tr");
        table.appendChild(tr);
        // Kör en funktion för varje loop som renderar antal kolumner
        for(j = 0; j < cols; j += 1){
            brickID += 1;
            memory.renderBricks(tr, p, randomNumbers, memory, brickID, appFooter);
            //console.log(brickID);
        }
    }
    
};

MemoryBoard.prototype.renderBricks = function(tr, p, randomNumbers, memory, brickID, appFooter){
    
    var td = document.createElement("td");
    var a = document.createElement("a");
    var img = document.createElement("img");
    img.setAttribute("src", "pics/0.png");
    img.setAttribute("class", "prevent");
    a.href = "#";
    
    
    tr.appendChild(td);
    td.appendChild(a);
    a.appendChild(img);
    
    appFooter.innerHTML = "<p>Done</p>";
    
    a.onclick = function() {
        
        memory.turnBrick(img, a, p, randomNumbers, memory, brickID);
        
    };
};

MemoryBoard.prototype.turnBrick = function(img, a, p, randomNumbers, memory, brickID){

    console.log(memory.getRandomBricks());
    this.randomImage = "pics/" + (memory.getRandomBricks() + randomNumbers[brickID - 1]) + ".png";

    if(memory.getHalt() === false){
        if(img.getAttribute("src") === "pics/0.png"){
            console.log("GETCOUNT " + memory.getCount());
            if(memory.getCount() < 2){
                img.setAttribute("src", this.randomImage);
                
                console.log("C1 " + memory.getCount());
                memory.setCount(memory.getCount() + 1);
                console.log("C2 " + memory.getCount());
                
                //console.log(img.getAttribute("src"));
                //console.log(randomNumbers[brickID]);
                
                
                if(memory.getCount() === 1){
                    
                    this.brickOneSrc = img;
                    // console.log(Memory.brickOneSrc);
                    //Memory.brickOneID = brickID;
                    // console.log(Memory.brickOneID);

                }
                if(memory.getCount() === 2){
                    this.brickTwoSrc = img;
                    //Memory.brickTwoID = brickID;

                    memory.setHalt(true);
                    if(this.brickOneSrc.src === this.brickTwoSrc.src){
                        memory.setPairs(memory.getPairs() + 1);
                        memory.setHalt(false);
                    } else {
                        setTimeout(function(){

        					memory.brickOneSrc.src = "pics/0.png";
        					memory.brickTwoSrc.src = "pics/0.png";
        					
        			        memory.setGuesses(memory.getGuesses() + 1);
                            memory.guessCount(p, randomNumbers, memory);                                                             
        					memory.setHalt(false);
        					
                           
        
        				},1000);
				        a.href = "#";
                    }
                    memory.setCount(0);
                    if(memory.getPairs() === randomNumbers.length / 2){
                        memory.guessCount(p, randomNumbers, memory);
                    }
                }
                
                //console.log("Bricka 1: " + Memory.brickOneSrc.src);
                //console.log("Bricka 2: " + Memory.brickTwoSrc.src);
                console.log("Test: " + img.src);
                console.log("Count: " + memory.getCount());
                
                

            }
            
            console.log("Antal gissningar: " + memory.getGuesses());
        }
        
    }
};

MemoryBoard.prototype.guessCount = function(p, randomNumbers, memory){
        //console.log(memory.getGuesses());
        
        //for(var i = 0; i < Memory.memoryArray.length; i += 1){
            //if(Memory.memoryArray[i].getGameID() === i){
                //score = document.getElementById('id' + Memory.memoryArray[i].getGameID());
                p.innerHTML = "Antal felvända brickor: " + memory.getGuesses();
        
                if(memory.getPairs() === randomNumbers.length / 2){
                p.innerHTML = "Du klarade det med " + memory.getGuesses() + " fel!";
                }
            
            //}
        //}
        
        
};