"use strict";

function App(name, icon, width, height){
    console.log(name);
    console.log(icon);
    
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
    var div = document.createElement('div');
    

    if(array[i].getName() === "Image Viewer"){
        div.setAttribute('class', 'imageViewer');
        div.style.top = (ImageViewer.positionTop + 20) + "px";
        div.style.left = (ImageViewer.positionLeft + 20) + "px";
        ImageViewer.positionTop += 20;
        ImageViewer.positionLeft += 20;
        if((ImageViewer.positionTop + array[i].getHeight() + 20) > Desktop.windowHeight){
            ImageViewer.positionTop = 0;
        }
        if((ImageViewer.positionLeft + array[i].getWidth() + 20) > Desktop.windowWidth){
            ImageViewer.positionLeft = 0;
        }
    }
    if(array[i].getName() === "RSS"){
        div.setAttribute('class', 'rss');
        div.style.top = (Rss.positionTop + 20) + "px";
        div.style.left = (Desktop.imageViewer.getWidth() + Rss.positionLeft + 40) + "px";
        Rss.positionTop += 20;
        Rss.positionLeft += 20;
        if((Rss.positionTop + array[i].getHeight() + 20) > Desktop.windowHeight){
            Rss.positionTop = 0;
        }
        if((Rss.positionLeft + array[i].getWidth() + 20) > Desktop.windowWidth){
            Rss.positionLeft = 0;
        }
    }
    
    
    div.style.width = this.getWidth() + "px";
    div.style.height = this.getHeight() + "px";
    
    desktop.appendChild(div);
    
    var header = document.createElement('div');
    header.setAttribute('class', 'header');
    div.appendChild(header);
    
    var img = document.createElement('img');
    img.setAttribute('src', Desktop.apps[i].getIcon());
    img.setAttribute('class', 'headericon');
    header.appendChild(img);
    
    header.innerHTML += Desktop.apps[i].getName();
    
    var closeButton = document.createElement("input");
    closeButton.type = "button";
    closeButton.setAttribute("class", "closeButton");
    
    closeButton.onclick = function(){
        var result = confirm("Är du säker att du vill stänga fönstret?");
        if(result === true){
            div.parentNode.removeChild(div);
        }
        
    };
    header.appendChild(closeButton);
    
    var content = document.createElement('div');
    content.setAttribute('class', 'content');
    div.appendChild(content);
    
    var footer = document.createElement('div');
    footer.setAttribute('class', 'footer');
    div.appendChild(footer);
};