"use strict";

var Memory = {
    
    randomNumbers: [],
    count: 0,
    brickOneSrc: undefined,
    brickOneID: undefined,
    brickTwoSrc: undefined,
    brickTwoID: undefined,
    pairs: 0,
    guesses: 0,
    halt: false,

    init : function() {
        // Sätter hur många rader och kolumnder tabellen ska innehålla
        var rows = 4;
        var cols = 4;
        var brickID = 0;
        

        // Skickar in slumpade nummer i en array
        Memory.randomNumbers = RandomGenerator.getPictureArray(rows, cols);
        //console.log(Memory.randomNumbers);
        
        // Kör funktionen som renderar spelet
        Memory.renderMemory(rows, cols, brickID);
        Memory.guessCount();
    },
    
    renderMemory : function(rows, cols, brickID) {
        var i;
        var j;
        
        var tableBoard = document.getElementById("memoryBoard");
        var table = document.createElement("table");
        
        
        
        tableBoard.appendChild(table);
        
        // Loopar i genom antalet rows
        // Skriver ut en rad och kör en nästrlad loop för varje loop
        for(i = 0; i < rows; i += 1){
            var tr = document.createElement("tr");
            table.appendChild(tr);
            // Kör en funktion för varje loop som renderar antal kolumner
            for(j = 0; j < cols; j += 1){
                brickID += 1;
                Memory.renderBricks(tr, brickID);
                //console.log(brickID);
            }
        }
    },
    
    renderBricks : function(tr, brickID) {
        var td = document.createElement("td");
        var a = document.createElement("a");
        var img = document.createElement("img");
        img.setAttribute("src", "pics/0.png");
        img.setAttribute("class", "prevent");
        a.href = "#";
        
        
        tr.appendChild(td);
        td.appendChild(a);
        a.appendChild(img);
        
        a.onclick = function() {
            Memory.turnBrick(img, brickID, a);
            
        };
        
    },
    
    turnBrick : function(img, brickID, a){
        var randomImage = "pics/" + Memory.randomNumbers[brickID - 1] + ".png";

    if(Memory.halt === false){
        if(img.getAttribute("src") === "pics/0.png"){
        
            if(Memory.count < 2){
                img.setAttribute("src", randomImage);
                Memory.count += 1;
                
                //console.log(img.getAttribute("src"));
                console.log(Memory.count);
                console.log(Memory.randomNumbers[brickID]);
                
                if(Memory.count === 1){
                    Memory.brickOneSrc = img;
                    Memory.brickOneID = brickID;
                    //Memory.brickOneImg.setAttribute("id", "brickOne");
                    //var imgOne = document.getElementById("brickOne");
                }
                if(Memory.count === 2){
                    Memory.brickTwoSrc = img;
                    Memory.brickTwoID = brickID;
                    //Memory.brickTwoImg.setAttribute("id", "brickTwo");
                    //var imgTwo = document.getElementById("brickTwo");
                    Memory.halt = true;
                    if(Memory.brickOneSrc.src === Memory.brickTwoSrc.src){
                        Memory.pairs += 1;
                        Memory.halt = false;
                    } else {
                        setTimeout(function(){

        					Memory.brickOneSrc.src = "pics/0.png";
        					Memory.brickTwoSrc.src = "pics/0.png";
        					
        					                                                                    // Hur kan jag sätta en halt på mitt onclick?
        					Memory.halt = false;
        					
                            /*
                            Memory.brickOneSrc.firstChil
                            Memory.brickTwoSrc.setAttribute("src", "pics/0.png");
                            
                            //Memory.randomNumbers[Memory.brickOneID].src = "pics/0.png";
                            
                            /*
                            Memory.brickOneSrc = "pics/0.png";
                            Memory.brickTwoSrc = "pics/0.png";
                            
                            
                            
                            imgOne.setAttribute("src", "pics/0.png");
                            imgOne.setAttribute("id", "")
                            imgTwo.setAttribute("src", "pics/0.png");
                            imgTwo.setAttribute("id", "")
                            */
        
        				},1000);
				        a.href = "#";
                    }
                    Memory.count = 0;
                    Memory.guesses +=1;
                    Memory.guessCount();
                }
                
                console.log("Bricka 1: " + Memory.brickOneSrc.src);
                console.log("Bricka 2: " + Memory.brickTwoSrc.src);
                console.log("Test: " + img.src);
                console.log("Count: " + Memory.count);
                
                

            }
            
            console.log("Antal gissningar: " + Memory.guesses);
        }
        
    }
        
        
    },
    
    guessCount : function(){
        var p = document.getElementById("messageCount");
        p.innerHTML = "Antal gissningar: " + Memory.guesses;
        if(Memory.pairs === Memory.randomNumbers.length / 2){
            p.innerHTML = "Du klarade det på " + Memory.guesses + " försök!";
        }
        
    }
    
};



window.onload = function() {
    Memory.init();
};