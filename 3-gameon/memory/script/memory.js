"use strict";

var Memory = {
    
    randomNumbers: [],
    count: 0,

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
        a.href = "#";
        
        var randomImage = "pics/" + Memory.randomNumbers[brickID - 1] + ".png";
        
        tr.appendChild(td);
        td.appendChild(a);
        a.appendChild(img);
        
        a.onclick = function() {
            Memory.turnBrick(img, randomImage);
        };
    },
    
    turnBrick : function(img, randomImage){
        

            if(img.getAttribute("src") === "pics/0.png"){
            
            
                if(Memory.count < 2){
                    img.setAttribute("src", randomImage);
                    Memory.count += 1;
                    //console.log(img.getAttribute("src"));
                    
                    console.log(Memory.count);
                }
                else{
                    console.log("TEST");
                }
            }
        
    }
    
};



window.onload = function() {
    Memory.init();
};