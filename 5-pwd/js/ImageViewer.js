"use strict";
var PWD = PWD || {};

PWD.ImageViewer = {
    positionTop : 0,
    positionLeft : 0,

    images : [],
    
    getImg : function(appFooter, appContent, appWindow) {

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4){
                
                if(xhr.status === 200){
                    //console.log(xhr.responseText);
                    appFooter.innerHTML = "<p>Done</p>";
                    PWD.ImageViewer.loadImg(JSON.parse(xhr.responseText), appContent, appWindow);
                }
            }
        };
        
        appFooter.innerHTML = "<img src='gif/ajax-loader.gif' border=0/>";
        appFooter.innerHTML += "<p>Loading...</p>";
        
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
    },
    
    loadImg : function(response, appContent, appWindow) {
        var i, j;
        var thumbBoxWidth = [];
        var thumbBoxHeight = [];
        
        for(j = 0; j < response.length; j += 1){
            thumbBoxWidth.push(response[j].thumbWidth);
            thumbBoxHeight.push(response[j].thumbHeight);
        }
        
        thumbBoxWidth.sort(function(a, b){return b-a});
        thumbBoxHeight.sort(function(a, b){return b-a});
        
        console.log(thumbBoxWidth);
        console.log(thumbBoxHeight);
        console.log(thumbBoxWidth[0]);
            
        for(i = 0; i < response.length; i += 1){
            
            var div = document.createElement('div');
            var a = document.createElement('a');
            var img = document.createElement('img');

            
            div.setAttribute('class', 'thumbBox');
            div.style.width = thumbBoxWidth[0] + "px";
            div.style.height = thumbBoxHeight[0] + "px";
            
            a.setAttribute('href', '#');
            
            img.setAttribute('src', response[i].thumbURL);
            img.setAttribute('height', response[i].thumbHeight);
            img.setAttribute('width', response[i].thumbWidth);
            
            
            appContent.appendChild(div);
            div.appendChild(a);
            a.appendChild(img);
            
            //appContent.innerHTML += thumbImages[i].thumbURL + "<br />";
            var image;
            
            if((response[i].height + 25 + 60) > window.innerHeight || (response[i].width) > window.innerWidth){
                //console.log("BILD FÖR STOR");
                var fixedHeight = response[i].height * 0.7;
                var fixedWidth = response[i].width * 0.7;
                image = new Image(response[i].URL, fixedWidth, fixedHeight);
            } else {
                image = new Image(response[i].URL, response[i].width, response[i].height);
            }
            
            PWD.ImageViewer.images.push(image);
            
            PWD.ImageViewer.viewImg(a, i, appWindow);
        }
    },
        
    viewImg : function(a, i, appWindow) {
        a.addEventListener("click", function () {
            PWD.ImageViewer.images[i].openImage(i);
        });
    }
};

