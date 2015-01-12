"use strict";
var PWD = PWD || {};

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
    
    PWD.Desktop.arrangeWindow(1, appWindow);
    
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
    img.setAttribute('src', PWD.Desktop.apps[i].getIcon());
    img.setAttribute('class', 'headericon');
    appHeader.appendChild(img);
    
    var p = document.createElement('p');
    p.setAttribute('class', 'title');
    appHeader.appendChild(p);
    
    p.innerHTML += PWD.Desktop.apps[i].getName();
    
    var closeButton = document.createElement("input");
    closeButton.type = "button";
    closeButton.setAttribute("class", "closeButton");
    
    closeButton.onclick = function(){
        appWindow.parentNode.removeChild(appWindow);
        if(array[i].getName() === "RSS"){
            PWD.Rss.stopInterval();
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
    
    // En dum lösning
    if(array[i].getName() === "Image Viewer"){
        appWindow.setAttribute('class', 'imageViewer');
        appWindow.setAttribute('class', appWindow.getAttribute('class') + ' draggable');
        appWindow.setAttribute('class', appWindow.getAttribute('class') + ' resize');
        appWindow.style.top = (PWD.ImageViewer.positionTop + 20) + "px";
        appWindow.style.left = (PWD.ImageViewer.positionLeft + 20) + "px";
        PWD.ImageViewer.positionTop += 20;
        PWD.ImageViewer.positionLeft += 20;
        if((PWD.ImageViewer.positionTop + array[i].getHeight() + 20) > PWD.Desktop.windowHeight){
            PWD.ImageViewer.positionTop = 0;
        }
        if((PWD.ImageViewer.positionLeft + array[i].getWidth() + 20) > PWD.Desktop.windowWidth){
            PWD.ImageViewer.positionLeft = 0;
        }
        PWD.ImageViewer.getImg(appFooter, appContent, appWindow);
    }
    
    if(array[i].getName() === "RSS"){
        appWindow.setAttribute('class', 'rss');
        appWindow.setAttribute('class', appWindow.getAttribute('class') + ' draggable');
        appWindow.setAttribute('class', appWindow.getAttribute('class') + ' resize');
        appWindow.style.top = (PWD.Rss.positionTop + 20) + "px";
        appWindow.style.left = (PWD.Desktop.imageViewer.getWidth() + PWD.Rss.positionLeft + 40) + "px";
        PWD.Rss.positionTop += 20;
        PWD.Rss.positionLeft += 20;
        if((PWD.Rss.positionTop + array[i].getHeight() + 20) > PWD.Desktop.windowHeight){
            PWD.Rss.positionTop = 0;
        }
        if((PWD.Rss.positionLeft + array[i].getWidth() + 20) > PWD.Desktop.windowWidth){
            PWD.Rss.positionLeft = 0;
        }
        PWD.Rss.getRss(appFooter, appContent);
    }
    
    if(array[i].getName() === "Memory"){
        appWindow.setAttribute('class', 'memory');
        appWindow.setAttribute('class', appWindow.getAttribute('class') + ' draggable');
        //appWindow.setAttribute('class', appWindow.getAttribute('class') + ' resize');
        appWindow.style.top = (PWD.Memory.positionTop + 20) + "px";
        appWindow.style.left = (PWD.Desktop.imageViewer.getWidth() + PWD.Desktop.rss.getWidth() + PWD.Memory.positionLeft + 60) + "px";
        PWD.Memory.positionTop += 20;
        PWD.Memory.positionLeft += 20;
        if((PWD.Memory.positionTop + array[i].getHeight() + 20) > PWD.Desktop.windowHeight){
            PWD.Memory.positionTop = 0;
        }
        if((PWD.Memory.positionLeft + array[i].getWidth() + 20) > PWD.Desktop.windowWidth){
            PWD.Memory.positionLeft = 0;
        }
        PWD.Memory.start(appFooter, appContent);
    }

    PWD.Desktop.dragWindow();

    appWindow.addEventListener("mousedown", function(){
        PWD.Desktop.arrangeWindow(1, appWindow);
    });
};

