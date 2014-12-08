"use strict";

var Memory = {
    
    init : function() {
        var rows = 4;
        var cols = 4;
        
        Memory.renderMemory(rows, cols);
    },
    
    renderMemory : function(rows, cols) {
        var i;
        var j;
        
        var tableBoard = document.getElementById("memoryBoard");
        var table = document.createElement("table");
        
        
        
        tableBoard.appendChild(table);
        
        for(i = 0; i < rows; i += 1){
            var tr = document.createElement("tr");
            table.appendChild(tr);
            for(j = 0; j < cols; j += 1){
                Memory.renderBricks(tr);
            }
        }
    },
    
    renderBricks : function(tr) {
        var td = document.createElement("td");
        var img = document.createElement("img");
        img.setAttribute("src", "pics/0.png");
        
        tr.appendChild(td);
        td.appendChild(img);
    }
    
};



window.onload = function() {
    Memory.init();
};