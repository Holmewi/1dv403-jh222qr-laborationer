"use strict";

var Resizer = {
    
    resized : false,
    //reso : undefined,
    
    check : function(desktop){
        //Resizer.reso = document.getElementById('desktop');
        if ($(window).width() > Desktop.windowWidth && $(window).height() > Desktop.windowHeight) {
            
            //reso.setAttribute('style', 'width:' + Desktop.windowWidth + 'px; height:' + Desktop.windowHeight + 'px');
            desktop.style.width = Desktop.windowWidth + "px";
            desktop.style.height = Desktop.windowHeight + "px";
            //console.log('Greater than 1024');
            
        }
        
        if ($(window).width() < Desktop.windowWidth || $(window).height() < Desktop.windowHeight) {
            //reso.setAttribute('style', 'width: 100%; height: 100%');
            desktop.style.width = '100%';
            desktop.style.height = '100%';
            //console.log('Less than 1024');
        }
    },
    
    resizer : $(window).resize(function() {
        if(document.getElementById('desktop')){
            var reso = document.getElementById('desktop');
            if ($(window).width() > Desktop.windowWidth && $(window).height() > Desktop.windowHeight) {
                
                //reso.setAttribute('style', 'width:' + Desktop.windowWidth + 'px; height:' + Desktop.windowHeight + 'px');
                reso.style.width = Desktop.windowWidth + "px";
                reso.style.height = Desktop.windowHeight + "px";
                //console.log('Greater than 1024');
                
            }
            
            if ($(window).width() < Desktop.windowWidth || $(window).height() < Desktop.windowHeight) {
                //reso.setAttribute('style', 'width: 100%; height: 100%');
                reso.style.width = '100%';
                reso.style.height = '100%';
                //console.log('Less than 1024');
            }
        }
         
        
    })
    
};