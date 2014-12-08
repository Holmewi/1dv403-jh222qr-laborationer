"use strict";

var Memory = {
    
    init : function() {
        // Sätter hur många rader och kolumnder tabellen ska innehålla
        var rows = 4;
        var cols = 4;
        
        // Kör funktionen som renderar spelet
        Memory.renderMemory(rows, cols);
    },
    
    renderMemory : function(rows, cols) {
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
                Memory.renderBricks(tr);
            }
        }
    },
    
    renderBricks : function(tr) {
        var td = document.createElement("td");
        var a = document.createElement("a");
        var img = document.createElement("img");
        
        img.setAttribute("src", "pics/0.png");
        a.href = "#";
        
        tr.appendChild(td);
        td.appendChild(a);
        a.appendChild(img);
    }
    
};



window.onload = function() {
    Memory.init();
};