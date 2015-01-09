"use strict";

var Rss = {
    positionTop : 0,
    positionLeft : 0,
    updater : undefined,

    getRss : function(appFooter, appContent) {
        Rss.loadRss(appFooter, appContent);
        
        Rss.updater = setInterval(function() {
            Rss.loadRss(appFooter, appContent);
        }, 2250000);
    },
    
    loadRss : function(appFooter, appContent) {
        console.log("Rss");
        
        
        var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        console.log(xhr.responseText);
                        appFooter.innerHTML = "Done";
                        //Rss.viewRss(JSON.parse(xhr.responseText), appContent);
                        appContent.innerHTML = xhr.responseText;
                    }
                }    
            };
            
            appFooter.innerHTML = "<img src='gif/ajax-loader.gif' border=0/>";
            appFooter.innerHTML += "Loading...";
            
            xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://rt.com/rss/news/"));
            xhr.send(null);
    },
    
    stopInterval : function() {
        clearInterval(Rss.updater);
    }
};