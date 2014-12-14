"use strict";

var Memory = {
    
    randomNumbers: [],
    memoryValues: [],
    memoryTileIds: [],
    flippedTiles: 0,
    
    init : function(){
        var rows = 4;
        var cols = 4;
        var brickID = 0;
        
        Memory.randomNumbers = RandomGenerator.getPictureArray(rows, cols);
        
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


        
        
        tr.appendChild(td);
        document.td.style.background = "url('pics/0.png')";

        
        a.onclick = function() {
            Memory.turnBrick(img, brickID, a);
        };
    },
    
};



window.onload = function() {
    Memory.init();
};