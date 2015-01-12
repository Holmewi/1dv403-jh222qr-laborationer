"use strict";
var PWD = PWD || {};

PWD.Resizer = {
    
    resized : false,

    check : function(desktop){
        //Resizer.reso = document.getElementById('desktop');
        if ($(window).width() > PWD.Desktop.windowWidth && $(window).height() > PWD.Desktop.windowHeight) {
            
            //reso.setAttribute('style', 'width:' + Desktop.windowWidth + 'px; height:' + Desktop.windowHeight + 'px');
            desktop.style.width = PWD.Desktop.windowWidth + "px";
            desktop.style.height = PWD.Desktop.windowHeight + "px";
            //console.log('Greater than 1024');
        }
        
        if ($(window).width() < PWD.Desktop.windowWidth || $(window).height() < PWD.Desktop.windowHeight) {
            //reso.setAttribute('style', 'width: 100%; height: 100%');
            desktop.style.width = '100%';
            desktop.style.height = '100%';
            //console.log('Less than 1024');
        }
    },
    
    resizer : $(window).resize(function() {
        if(document.getElementById('desktop')){
            var reso = document.getElementById('desktop');
            if ($(window).width() > PWD.Desktop.windowWidth && $(window).height() > PWD.Desktop.windowHeight) {
                //reso.setAttribute('style', 'width:' + Desktop.windowWidth + 'px; height:' + Desktop.windowHeight + 'px');
                reso.style.width = PWD.Desktop.windowWidth + "px";
                reso.style.height = PWD.Desktop.windowHeight + "px";
                //console.log('Greater than 1024');
            }
            
            if ($(window).width() < PWD.Desktop.windowWidth || $(window).height() < PWD.Desktop.windowHeight) {
                //reso.setAttribute('style', 'width: 100%; height: 100%');
                reso.style.width = '100%';
                reso.style.height = '100%';
                //console.log('Less than 1024');
            }
        }
    })
};