{"filter":false,"title":"quiz.js","tooltip":"/4-thequiz/4-forms/script/quiz.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":17},"end":{"row":8,"column":1},"action":"insert","lines":["","    ","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":4},"end":{"row":17,"column":6},"action":"insert","lines":["init : function() {","        // Sätter hur många rader och kolumnder tabellen ska innehålla","        var rows = 4;","        var cols = 4;","        var brickID = 0;","        ","","        // Skickar in slumpade nummer i en array","        Memory.randomNumbers = RandomGenerator.getPictureArray(rows, cols);","        //console.log(Memory.randomNumbers);","        ","        // Kör funktionen som renderar spelet","        Memory.renderMemory(rows, cols, brickID);","        Memory.guessCount();","    },"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":8},"end":{"row":16,"column":28},"action":"remove","lines":["// Sätter hur många rader och kolumnder tabellen ska innehålla","        var rows = 4;","        var cols = 4;","        var brickID = 0;","        ","","        // Skickar in slumpade nummer i en array","        Memory.randomNumbers = RandomGenerator.getPictureArray(rows, cols);","        //console.log(Memory.randomNumbers);","        ","        // Kör funktionen som renderar spelet","        Memory.renderMemory(rows, cols, brickID);","        Memory.guessCount();"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":10,"column":2},"action":"remove","lines":["window.onload = {","    ","};"]},{"start":{"row":8,"column":0},"end":{"row":10,"column":2},"action":"insert","lines":["window.onload = function() {","    Memory.init();","};"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":4},"end":{"row":9,"column":10},"action":"remove","lines":["Memory"]},{"start":{"row":9,"column":4},"end":{"row":9,"column":8},"action":"insert","lines":["Quiz"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":8},"end":{"row":4,"column":12},"action":"remove","lines":["cons"]},{"start":{"row":4,"column":8},"end":{"row":4,"column":15},"action":"insert","lines":["console"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":19},"end":{"row":4,"column":21},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":20},"end":{"row":4,"column":22},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":28},"end":{"row":9,"column":0},"action":"insert","lines":["",""]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":4},"end":{"row":9,"column":75},"action":"insert","lines":["document.getElementById(\"button\").addEventListener(\"click\", function(){"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":16},"end":{"row":11,"column":0},"action":"insert","lines":["",""]},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":4},"end":{"row":11,"column":5},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":5},"end":{"row":11,"column":6},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":5},"end":{"row":11,"column":6},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":4},"end":{"row":10,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":29},"end":{"row":9,"column":35},"action":"remove","lines":["button"]},{"start":{"row":9,"column":29},"end":{"row":9,"column":30},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":30},"end":{"row":9,"column":31},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":31},"end":{"row":9,"column":32},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":32},"end":{"row":9,"column":33},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":33},"end":{"row":9,"column":34},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":29},"end":{"row":9,"column":34},"action":"remove","lines":["start"]},{"start":{"row":9,"column":29},"end":{"row":9,"column":38},"action":"insert","lines":["startQuiz"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":28},"end":{"row":5,"column":0},"action":"insert","lines":["",""]},{"start":{"row":5,"column":0},"end":{"row":5,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":8},"end":{"row":5,"column":11},"action":"remove","lines":["doc"]},{"start":{"row":5,"column":8},"end":{"row":5,"column":16},"action":"insert","lines":["document"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["e"]},{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"remove","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":17},"end":{"row":5,"column":20},"action":"remove","lines":["get"]},{"start":{"row":5,"column":17},"end":{"row":5,"column":33},"action":"insert","lines":["getElementById()"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":32},"end":{"row":5,"column":34},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":34},"end":{"row":5,"column":35},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":36},"end":{"row":5,"column":37},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":37},"end":{"row":5,"column":38},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":33},"end":{"row":5,"column":38},"action":"remove","lines":["start"]},{"start":{"row":5,"column":33},"end":{"row":5,"column":42},"action":"insert","lines":["startQuiz"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":44},"end":{"row":5,"column":45},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":45},"end":{"row":5,"column":46},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":46},"end":{"row":5,"column":47},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":46},"end":{"row":5,"column":47},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":45},"end":{"row":5,"column":46},"action":"remove","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":45},"end":{"row":5,"column":46},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":46},"end":{"row":5,"column":47},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":47},"end":{"row":5,"column":48},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":45},"end":{"row":5,"column":48},"action":"remove","lines":["set"]},{"start":{"row":5,"column":45},"end":{"row":5,"column":57},"action":"insert","lines":["setAttribute"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":57},"end":{"row":5,"column":59},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":58},"end":{"row":5,"column":60},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":59},"end":{"row":5,"column":60},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":60},"end":{"row":5,"column":61},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":61},"end":{"row":5,"column":62},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":62},"end":{"row":5,"column":63},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":63},"end":{"row":5,"column":64},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":64},"end":{"row":5,"column":65},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":67},"end":{"row":5,"column":68},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":58},"end":{"row":5,"column":60},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":59},"end":{"row":5,"column":60},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":60},"end":{"row":5,"column":61},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":61},"end":{"row":5,"column":62},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":62},"end":{"row":5,"column":63},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":63},"end":{"row":5,"column":64},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":65},"end":{"row":5,"column":66},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":65},"end":{"row":5,"column":66},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":65},"end":{"row":5,"column":66},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":66},"end":{"row":5,"column":67},"action":"insert","lines":[" "]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":5,"column":67},"end":{"row":5,"column":67},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1418558923607,"hash":"7033e6a3e74854e83b6ebc671c92b330acb0ebd9"}