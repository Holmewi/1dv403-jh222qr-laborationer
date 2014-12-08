{"changed":true,"filter":false,"title":"memory.js","tooltip":"/3-gameon/memory/script/memory.js","value":"\"use strict\";\n\nvar Memory = {\n    \n    randomNumbers: [],\n    \n    init : function() {\n        // Sätter hur många rader och kolumnder tabellen ska innehålla\n        var rows = 4;\n        var cols = 4;\n        var brickID = 0;\n        \n        // Skickar in slumpade nummer i en array\n        Memory.randomNumbers = RandomGenerator.getPictureArray(rows, cols);\n        console.log(Memory.randomNumbers);\n        \n        // Kör funktionen som renderar spelet\n        Memory.renderMemory(rows, cols, brickID);\n    },\n    \n    renderMemory : function(rows, cols, brickID) {\n        var i;\n        var j;\n        \n        var tableBoard = document.getElementById(\"memoryBoard\");\n        var table = document.createElement(\"table\");\n        \n        \n        \n        tableBoard.appendChild(table);\n        \n        // Loopar i genom antalet rows\n        // Skriver ut en rad och kör en nästrlad loop för varje loop\n        for(i = 0; i < rows; i += 1){\n            var tr = document.createElement(\"tr\");\n            table.appendChild(tr);\n            // Kör en funktion för varje loop som renderar antal kolumner\n            for(j = 0; j < cols; j += 1){\n                brickID += 1;\n                Memory.renderBricks(tr, brickID);\n                console.log(brickID);\n            }\n        }\n    },\n    \n    renderBricks : function(tr, brickID) {\n        var td = document.createElement(\"td\");\n        var a = document.createElement(\"a\");\n        var img = document.createElement(\"img\");\n        \n        img.setAttribute(\"src\", \"pics/0.png\");\n        a.href = \"#\";\n        \n        tr.appendChild(td);\n        td.appendChild(a);\n        a.appendChild(img);\n        \n        a.onclick = function() {\n            var randomImage = \"pics/\" + Memory.randomNumbers[brickID - 1g] + \".png\";\n            img.setAttribute(\"src\", randomImage);\n        }\n    }\n    \n};\n\n\n\nwindow.onload = function() {\n    Memory.init();\n};","undoManager":{"mark":99,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":11,"column":46},"end":{"row":11,"column":47},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":47},"end":{"row":11,"column":48},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":40},"end":{"row":55,"column":93},"action":"remove","lines":["RandomGenerator.getPictureArray(this.rows, this.cols)"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":40},"end":{"row":55,"column":41},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":51},"end":{"row":56,"column":0},"action":"insert","lines":["",""]},{"start":{"row":56,"column":0},"end":{"row":56,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":12},"end":{"row":56,"column":46},"action":"insert","lines":["img.setAttribute(\"src\", newSorce);"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":36},"end":{"row":56,"column":44},"action":"remove","lines":["newSorce"]},{"start":{"row":56,"column":36},"end":{"row":56,"column":47},"action":"insert","lines":["randomImage"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":29},"end":{"row":54,"column":30},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":40},"end":{"row":55,"column":41},"action":"remove","lines":["1"]},{"start":{"row":55,"column":40},"end":{"row":55,"column":41},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":41},"end":{"row":55,"column":42},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":42},"end":{"row":55,"column":43},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":43},"end":{"row":55,"column":44},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":40},"end":{"row":55,"column":44},"action":"remove","lines":["rand"]},{"start":{"row":55,"column":40},"end":{"row":55,"column":51},"action":"insert","lines":["randomImage"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":51},"end":{"row":55,"column":52},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":51},"end":{"row":55,"column":52},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":50},"end":{"row":55,"column":51},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":49},"end":{"row":55,"column":50},"action":"remove","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":48},"end":{"row":55,"column":49},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":47},"end":{"row":55,"column":48},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":46},"end":{"row":55,"column":47},"action":"remove","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":45},"end":{"row":55,"column":46},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":44},"end":{"row":55,"column":45},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":43},"end":{"row":55,"column":44},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":42},"end":{"row":55,"column":43},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":41},"end":{"row":55,"column":42},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":40},"end":{"row":55,"column":41},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":40},"end":{"row":55,"column":41},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":41},"end":{"row":55,"column":42},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":42},"end":{"row":55,"column":43},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":40},"end":{"row":55,"column":43},"action":"remove","lines":["Mem"]},{"start":{"row":55,"column":40},"end":{"row":55,"column":46},"action":"insert","lines":["Memory"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":46},"end":{"row":55,"column":47},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":47},"end":{"row":55,"column":48},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":48},"end":{"row":55,"column":49},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":49},"end":{"row":55,"column":50},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":50},"end":{"row":55,"column":51},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":47},"end":{"row":55,"column":51},"action":"remove","lines":["rand"]},{"start":{"row":55,"column":47},"end":{"row":55,"column":60},"action":"insert","lines":["randomNumbers"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":60},"end":{"row":55,"column":62},"action":"insert","lines":["[]"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":61},"end":{"row":55,"column":62},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":61},"end":{"row":55,"column":62},"action":"remove","lines":["1"]},{"start":{"row":55,"column":61},"end":{"row":55,"column":62},"action":"insert","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":61},"end":{"row":55,"column":62},"action":"remove","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":61},"end":{"row":55,"column":62},"action":"insert","lines":["9"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":21},"end":{"row":10,"column":0},"action":"insert","lines":["",""]},{"start":{"row":10,"column":0},"end":{"row":10,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":13},"end":{"row":10,"column":14},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":14},"end":{"row":10,"column":15},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":15},"end":{"row":10,"column":16},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":16},"end":{"row":10,"column":17},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":17},"end":{"row":10,"column":18},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":18},"end":{"row":10,"column":19},"action":"insert","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":38},"end":{"row":20,"column":39},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":39},"end":{"row":20,"column":40},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":40},"end":{"row":20,"column":47},"action":"insert","lines":["brickID"]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":41},"end":{"row":38,"column":0},"action":"insert","lines":["",""]},{"start":{"row":38,"column":0},"end":{"row":38,"column":16},"action":"insert","lines":["                "]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":16},"end":{"row":38,"column":23},"action":"insert","lines":["brickID"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":23},"end":{"row":38,"column":24},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":24},"end":{"row":38,"column":25},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":24},"end":{"row":38,"column":25},"action":"remove","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":24},"end":{"row":38,"column":25},"action":"insert","lines":["+"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":25},"end":{"row":38,"column":26},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":26},"end":{"row":38,"column":27},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":27},"end":{"row":38,"column":28},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":28},"end":{"row":38,"column":29},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":38},"end":{"row":39,"column":39},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":39},"end":{"row":39,"column":40},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":40},"end":{"row":39,"column":47},"action":"insert","lines":["brickID"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":30},"end":{"row":44,"column":31},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":31},"end":{"row":44,"column":32},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":32},"end":{"row":44,"column":39},"action":"insert","lines":["brickID"]}]}],[{"group":"doc","deltas":[{"start":{"row":57,"column":61},"end":{"row":57,"column":62},"action":"remove","lines":["9"]},{"start":{"row":57,"column":61},"end":{"row":57,"column":68},"action":"insert","lines":["brickID"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":49},"end":{"row":40,"column":0},"action":"insert","lines":["",""]},{"start":{"row":40,"column":0},"end":{"row":40,"column":16},"action":"insert","lines":["                "]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":16},"end":{"row":40,"column":17},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":17},"end":{"row":40,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":18},"end":{"row":40,"column":19},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":16},"end":{"row":40,"column":19},"action":"remove","lines":["con"]},{"start":{"row":40,"column":16},"end":{"row":40,"column":23},"action":"insert","lines":["console"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":23},"end":{"row":40,"column":24},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":24},"end":{"row":40,"column":25},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":25},"end":{"row":40,"column":26},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":26},"end":{"row":40,"column":27},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":27},"end":{"row":40,"column":29},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":28},"end":{"row":40,"column":29},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":28},"end":{"row":40,"column":29},"action":"remove","lines":["b"]},{"start":{"row":40,"column":28},"end":{"row":40,"column":35},"action":"insert","lines":["brickID"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":36},"end":{"row":40,"column":37},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":38},"end":{"row":17,"column":39},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":39},"end":{"row":17,"column":40},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":40},"end":{"row":17,"column":47},"action":"insert","lines":["brickID"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":68},"end":{"row":58,"column":69},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":69},"end":{"row":58,"column":70},"action":"insert","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":70},"end":{"row":58,"column":71},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":71},"end":{"row":58,"column":72},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":72},"end":{"row":58,"column":73},"action":"insert","lines":["g"]}]}]]},"ace":{"folds":[],"scrolltop":420,"scrollleft":0,"selection":{"start":{"row":58,"column":73},"end":{"row":58,"column":73},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":23,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1418067680412}