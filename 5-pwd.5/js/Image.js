"use strict";

function Image(response){
    console.log("test");
    this.openImage(response);
    
}

Image.prototype.openImage = function(response){
    console.log("test");
    var desktop = document.getElementById('desktop');
    var appWindow = document.createElement('div');
    
    appWindow.style.width = this.getWidth() + "px";
    appWindow.style.height = this.getHeight() + "px";
    
    desktop.appendChild(appWindow);
    
    // Innehåller header och appcontent
    var appWrapper = document.createElement('div');
    appWrapper.setAttribute('class', 'appWrapper');
    appWindow.appendChild(appWrapper);
    
    // Application header
    var appHeader = document.createElement('div');
    appHeader.setAttribute('class', 'appHeader');
    appWrapper.appendChild(appHeader);
    
    var img = document.createElement('img');
    img.setAttribute('src', Desktop.apps[i].getIcon());
    img.setAttribute('class', 'headericon');
    appHeader.appendChild(img);
    
    appHeader.innerHTML += Desktop.apps[i].getName();
    
    var closeButton = document.createElement("input");
    closeButton.type = "button";
    closeButton.setAttribute("class", "closeButton");
    
    closeButton.onclick = function(){
        var result = confirm("Är du säker att du vill stänga fönstret?");
        if(result === true){
            appWindow.parentNode.removeChild(appWindow);
        }
        
    };
    appHeader.appendChild(closeButton);
    
    // Application content
    var appContent = document.createElement('div');
    appContent.setAttribute('class', 'appContent');
    appWrapper.appendChild(appContent);
    
    // Application footer
    var appFooter = document.createElement('div');
    appFooter.setAttribute('class', 'appFooter');
    appWindow.appendChild(appFooter);
    
        appWindow.setAttribute('class', 'imageView');
        appWindow.style.top = (ImageViewer.positionTop + 20) + "px";
        appWindow.style.left = (ImageViewer.positionLeft + 20) + "px";
        ImageViewer.positionTop += 20;
        ImageViewer.positionLeft += 20;
        if((ImageViewer.positionTop + array[i].getHeight() + 20) > Desktop.windowHeight){
            ImageViewer.positionTop = 0;
        }
        if((ImageViewer.positionLeft + array[i].getWidth() + 20) > Desktop.windowWidth){
            ImageViewer.positionLeft = 0;
        }
        
        ImageViewer.getImg(appFooter, appContent);
    
    
};