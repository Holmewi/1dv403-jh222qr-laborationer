{"filter":false,"title":"script.js","tooltip":"/1-vandalen/birthday/script.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":36,"column":4},"end":{"row":36,"column":5}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":36,"column":5},"end":{"row":36,"column":6}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":36,"column":6},"end":{"row":36,"column":7}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":36,"column":7},"end":{"row":36,"column":8}},"text":"{"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":36,"column":8},"end":{"row":37,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":37,"column":0},"end":{"row":38,"column":0}},"lines":["\t\t\t\t"]},{"action":"insertText","range":{"start":{"row":38,"column":0},"end":{"row":38,"column":4}},"text":"\t\t\t}"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":37,"column":4},"end":{"row":37,"column":6}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":37,"column":5},"end":{"row":37,"column":6}},"text":"F"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":37,"column":6},"end":{"row":37,"column":7}},"text":"E"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":37,"column":7},"end":{"row":37,"column":8}},"text":"L"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":10},"end":{"row":35,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":35,"column":0},"end":{"row":35,"column":4}},"text":"\t\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":35,"column":4},"end":{"row":35,"column":25}},"text":"console.log(curDate);"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":35,"column":16},"end":{"row":35,"column":23}},"text":"curDate"},{"action":"insertText","range":{"start":{"row":35,"column":16},"end":{"row":35,"column":22}},"text":"\"TEST\""}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":4},"end":{"row":38,"column":9}},"text":"\"FEL\""},{"action":"insertText","range":{"start":{"row":38,"column":4},"end":{"row":38,"column":24}},"text":"console.log(\"TEST\");"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":34,"column":0},"end":{"row":34,"column":10}},"text":"\t\t\t\t\"TEST\""}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":33,"column":27},"end":{"row":34,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":37,"column":17},"end":{"row":37,"column":21}},"text":"TEST"},{"action":"insertText","range":{"start":{"row":37,"column":17},"end":{"row":37,"column":18}},"text":"F"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":37,"column":18},"end":{"row":37,"column":19}},"text":"E"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":37,"column":19},"end":{"row":37,"column":20}},"text":"L"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":71,"column":0},"end":{"row":71,"column":25}},"text":"\t\t\treturn daysToBirthday;"},{"action":"removeLines","range":{"start":{"row":40,"column":0},"end":{"row":71,"column":0}},"nl":"\n","lines":["\t\t\t\tvar leapYear = birthday.getFullYear() + 1;","\t\t\t\tfor (var i = 1; i < diffYear; ++i){","\t\t\t\t\tif (leapYear % 4 == 0) {","\t\t\t\t        //console.log(leapYear);","\t\t\t\t        ++daysToBirthday;","\t\t\t        }","\t\t\t        leapYear++;","\t\t\t        ","\t\t\t\t}","\t\t\t\t\t//console.log(birthday.getFullYear());","\t\t\t\t\t//console.log(birthday.getFullYear() % 4 == 0);","\t\t\t","\t\t\t\tbirthday.setFullYear(curDate.getFullYear());","\t\t\t\tdaysToBirthday = daysToBirthday + (365 * diffYear);","\t\t\t\t","\t\t\t\t","\t\t\t}","\t\t\t","\t\t\t","\t\t\t","\t\t\tif (birthdayTime == curDateTime){","\t\t\t\treturn 0;","\t\t\t}","\t\t\tif (birthdayTime == curDateTime + 1){","\t\t\t\treturn 1;","\t\t\t}","\t\t\tif (birthday.getMonth() < curDate.getMonth() || birthday.getDate() < curDate.getDate()){","\t\t\t\tconsole.log(\"TEST\");","\t\t\t\tdaysToBirthday = 365 + daysToBirthday;","\t\t\t}","\t\t\t"]},{"action":"removeText","range":{"start":{"row":39,"column":3},"end":{"row":39,"column":56}},"text":"if (curDate.getFullYear() != birthday.getFullYear()){"},{"action":"removeText","range":{"start":{"row":39,"column":3},"end":{"row":40,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":34,"column":4},"end":{"row":34,"column":24}},"text":"console.log(\"TEST\");"},{"action":"insertText","range":{"start":{"row":34,"column":4},"end":{"row":34,"column":57}},"text":"if (curDate.getFullYear() != birthday.getFullYear()){"},{"action":"insertText","range":{"start":{"row":34,"column":57},"end":{"row":35,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":35,"column":0},"end":{"row":66,"column":0}},"lines":["\t\t\t\tvar leapYear = birthday.getFullYear() + 1;","\t\t\t\tfor (var i = 1; i < diffYear; ++i){","\t\t\t\t\tif (leapYear % 4 == 0) {","\t\t\t\t        //console.log(leapYear);","\t\t\t\t        ++daysToBirthday;","\t\t\t        }","\t\t\t        leapYear++;","\t\t\t        ","\t\t\t\t}","\t\t\t\t\t//console.log(birthday.getFullYear());","\t\t\t\t\t//console.log(birthday.getFullYear() % 4 == 0);","\t\t\t","\t\t\t\tbirthday.setFullYear(curDate.getFullYear());","\t\t\t\tdaysToBirthday = daysToBirthday + (365 * diffYear);","\t\t\t\t","\t\t\t\t","\t\t\t}","\t\t\t","\t\t\t","\t\t\t","\t\t\tif (birthdayTime == curDateTime){","\t\t\t\treturn 0;","\t\t\t}","\t\t\tif (birthdayTime == curDateTime + 1){","\t\t\t\treturn 1;","\t\t\t}","\t\t\tif (birthday.getMonth() < curDate.getMonth() || birthday.getDate() < curDate.getDate()){","\t\t\t\tconsole.log(\"TEST\");","\t\t\t\tdaysToBirthday = 365 + daysToBirthday;","\t\t\t}","\t\t\t"]},{"action":"insertText","range":{"start":{"row":66,"column":0},"end":{"row":66,"column":25}},"text":"\t\t\treturn daysToBirthday;"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":3},"end":{"row":51,"column":4}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":55,"column":0},"end":{"row":55,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":56,"column":0},"end":{"row":56,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":57,"column":0},"end":{"row":57,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":58,"column":0},"end":{"row":58,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":59,"column":0},"end":{"row":59,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":60,"column":0},"end":{"row":60,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":61,"column":0},"end":{"row":61,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":62,"column":0},"end":{"row":62,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":63,"column":0},"end":{"row":63,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":64,"column":0},"end":{"row":64,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":65,"column":0},"end":{"row":65,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":66,"column":0},"end":{"row":66,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":69,"column":23},"end":{"row":70,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":70,"column":0},"end":{"row":70,"column":4}},"text":"\t\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":4},"end":{"row":70,"column":5}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":5},"end":{"row":70,"column":6}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":6},"end":{"row":70,"column":7}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":7},"end":{"row":70,"column":8}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":8},"end":{"row":70,"column":9}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":9},"end":{"row":70,"column":10}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":10},"end":{"row":70,"column":11}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":11},"end":{"row":70,"column":13}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":12},"end":{"row":70,"column":13}},"text":"N"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":13},"end":{"row":70,"column":14}},"text":"å"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":14},"end":{"row":70,"column":15}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":15},"end":{"row":70,"column":16}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":16},"end":{"row":70,"column":17}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":17},"end":{"row":70,"column":18}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":18},"end":{"row":70,"column":19}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":19},"end":{"row":70,"column":20}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":20},"end":{"row":70,"column":21}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":21},"end":{"row":70,"column":22}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":22},"end":{"row":70,"column":23}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":23},"end":{"row":70,"column":24}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":24},"end":{"row":70,"column":25}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":25},"end":{"row":70,"column":26}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":26},"end":{"row":70,"column":27}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":26},"end":{"row":70,"column":27}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":25},"end":{"row":70,"column":26}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":24},"end":{"row":70,"column":25}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":23},"end":{"row":70,"column":24}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":22},"end":{"row":70,"column":23}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":21},"end":{"row":70,"column":22}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":20},"end":{"row":70,"column":21}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":19},"end":{"row":70,"column":20}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":18},"end":{"row":70,"column":19}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":17},"end":{"row":70,"column":18}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":16},"end":{"row":70,"column":17}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":15},"end":{"row":70,"column":16}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":14},"end":{"row":70,"column":15}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":13},"end":{"row":70,"column":14}},"text":"å"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":12},"end":{"row":70,"column":13}},"text":"N"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":12},"end":{"row":70,"column":13}},"text":"F"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":13},"end":{"row":70,"column":14}},"text":"E"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":13},"end":{"row":70,"column":14}},"text":"E"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":12},"end":{"row":70,"column":13}},"text":"F"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":12},"end":{"row":70,"column":13}},"text":"E"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":13},"end":{"row":70,"column":14}},"text":"R"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":14},"end":{"row":70,"column":15}},"text":"R"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":15},"end":{"row":70,"column":16}},"text":"O"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":16},"end":{"row":70,"column":17}},"text":"R"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":17},"end":{"row":70,"column":18}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":132,"column":11},"end":{"row":133,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":133,"column":0},"end":{"row":133,"column":5}},"text":"\t\t\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":133,"column":4},"end":{"row":133,"column":5}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":4},"end":{"row":133,"column":46}},"text":"case 1: message = \"Du fyller år imorgon!\";"},{"action":"insertText","range":{"start":{"row":133,"column":46},"end":{"row":134,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":134,"column":0},"end":{"row":134,"column":11}},"text":"\t\t\t\t\tbreak;"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":133,"column":9},"end":{"row":133,"column":10}},"text":"1"},{"action":"insertText","range":{"start":{"row":133,"column":9},"end":{"row":133,"column":10}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":133,"column":23},"end":{"row":133,"column":44}},"text":"Du fyller år imorgon!"},{"action":"insertText","range":{"start":{"row":133,"column":23},"end":{"row":133,"column":24}},"text":"N"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":24},"end":{"row":133,"column":25}},"text":"å"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":25},"end":{"row":133,"column":26}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":26},"end":{"row":133,"column":27}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":27},"end":{"row":133,"column":28}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":28},"end":{"row":133,"column":29}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":29},"end":{"row":133,"column":30}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":30},"end":{"row":133,"column":31}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":31},"end":{"row":133,"column":32}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":32},"end":{"row":133,"column":33}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":33},"end":{"row":133,"column":34}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":34},"end":{"row":133,"column":35}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":35},"end":{"row":133,"column":36}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":36},"end":{"row":133,"column":37}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":37},"end":{"row":133,"column":38}},"text":"ä"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":38},"end":{"row":133,"column":39}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":39},"end":{"row":133,"column":40}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":40},"end":{"row":133,"column":41}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":41},"end":{"row":133,"column":42}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":42},"end":{"row":133,"column":43}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":133,"column":43},"end":{"row":133,"column":44}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":11},"end":{"row":70,"column":18}},"text":"\"ERROR!"},{"action":"insertText","range":{"start":{"row":70,"column":11},"end":{"row":70,"column":12}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":12},"end":{"row":70,"column":13}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":12},"end":{"row":70,"column":13}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":69,"column":0},"end":{"row":69,"column":23}},"text":"\t\t\t\tconsole.log(\"FEL\");"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":68,"column":8},"end":{"row":69,"column":0}},"text":"\n"}]}]]},"ace":{"folds":[],"scrolltop":283,"scrollleft":0,"selection":{"start":{"row":68,"column":8},"end":{"row":68,"column":8},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":17,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1416012442701,"hash":"7e184f357b4d2b73a2d249e5fd6ed652054d5961"}