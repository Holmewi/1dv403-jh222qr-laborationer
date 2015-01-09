"use strict";

function App(name, icon, width, height){
    //console.log(name);
    //console.log(icon);
    
    this.getName = function() { return name; };
    this.setName = function(_name) { name = _name; };
    this.getIcon = function() { return icon; };
    this.setIcon = function(_icon) { icon = _icon; };
    this.getWidth = function() { return width; };
    this.setWidth = function(_width) { width = _width; };
    this.getHeight = function() { return height; };
    this.setHeight = function(_height) { height = _height; };
    
    this.setName(name);
    this.setIcon(icon);
    this.setWidth(width);
    this.setHeight(height);
}

App.prototype.openApp = function(i, array){
    var desktop = document.getElementById('desktop');
    var appWindow = document.createElement('div');
    
    appWindow.style.width = this.getWidth() + "px";
    appWindow.style.height = this.getHeight() + "px";
    
    Desktop.arrangeWindow(1, appWindow);
    
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
    
    if(array[i].getName() === "Image Viewer"){
        appWindow.setAttribute('class', 'imageViewer');
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
    }
    if(array[i].getName() === "RSS"){
        appWindow.setAttribute('class', 'rss');
        appWindow.style.top = (Rss.positionTop + 20) + "px";
        appWindow.style.left = (Desktop.imageViewer.getWidth() + Rss.positionLeft + 40) + "px";
        Rss.positionTop += 20;
        Rss.positionLeft += 20;
        if((Rss.positionTop + array[i].getHeight() + 20) > Desktop.windowHeight){
            Rss.positionTop = 0;
        }
        if((Rss.positionLeft + array[i].getWidth() + 20) > Desktop.windowWidth){
            Rss.positionLeft = 0;
        }
        
        appContent.innerHTML += Rss.test();
    }
    
    
    appWindow.addEventListener("mousedown", function(){
        console.log(Desktop.zindex);
        Desktop.arrangeWindow(1, appWindow);
    });
};

