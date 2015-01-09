"use strict";

var ImageViewer = {
    positionTop : 0,
    positionLeft : 0,

    images : [],
    
    getImg : function(appFooter, appContent, appWindow) {
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4){
                
                if(xhr.status === 200){
                    //console.log(xhr.responseText);
                    appFooter.innerHTML = "Done";
                    ImageViewer.loadImg(JSON.parse(xhr.responseText), appContent, appWindow);
                }
            }
        };
        
        appFooter.innerHTML = "<img src='gif/ajax-loader.gif' border=0/>";
        appFooter.innerHTML += "Loading";
        
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
            
            var image = new Image(response[i].URL, response[i].width, response[i].height);

            ImageViewer.images.push(image);
            
            ImageViewer.viewImg(a, i, appWindow);
            
        }
    },
        
    viewImg : function(a, i, appWindow) {
        
        a.addEventListener("click", function () {
   
            ImageViewer.images[i].openImage(i);
            Desktop.dragWindow();
        });
        
    }
};

