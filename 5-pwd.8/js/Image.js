"use strict";

function Image(url, width, height){
    this.getUrl = function() { return url; };
    this.setUrl = function(_url) { url = _url; };
    this.getWidth = function() { return width; };
    this.setWidth = function(_width) { width = _width; };
    this.getHeight = function() { return height; };
    this.setHeight = function(_height) { height = _height; };
    
    this.setUrl(url);
    this.setWidth(width);
    this.setHeight(height);
}

Image.prototype.openImage = function(i){
    var desktop = document.getElementById('desktop');
    var imageWindow = document.createElement('div');
    

    imageWindow.setAttribute('class', 'imageWindow');
    imageWindow.setAttribute('class', imageWindow.getAttribute('class') + ' draggable');
    
    console.log(this.getHeight() + 25);
    console.log(Desktop.windowHeight);
    
 
    imageWindow.style.width = this.getWidth() + "px";
    imageWindow.style.height = (this.getHeight() + 25) + "px";
    
    
    
    
    Desktop.arrangeWindow(1, imageWindow);
    
    desktop.appendChild(imageWindow);
    
    var imgHeader = document.createElement('div');
    imgHeader.setAttribute('class', 'imgHeader');
    imageWindow.appendChild(imgHeader);
    
    var closeButton = document.createElement("input");
    closeButton.type = "button";
    closeButton.setAttribute("class", "closeButton");
    
    closeButton.onclick = function(){
        var result = confirm("Är du säker att du vill stänga fönstret?");
        if(result === true){
            imageWindow.parentNode.removeChild(imageWindow);
        }
        
    };
    imgHeader.appendChild(closeButton);
    
    var imageView = document.createElement('div');
    imageView.setAttribute('class', 'imgView');
    imageWindow.appendChild(imageView);
    
    var img = document.createElement('img');
    img.setAttribute('src', this.getUrl());
    img.setAttribute('class', 'image');
    img.style.height = this.getHeight() + "px";
    img.style.width = this.getWidth() + "px";
    imageView.appendChild(img);
    
    imageWindow.style.top = (ImageViewer.positionTop + 20) + "px";
    imageWindow.style.left = (ImageViewer.positionLeft + 20) + "px";
    ImageViewer.positionTop += 20;
    ImageViewer.positionLeft += 20;
    if((ImageViewer.positionTop + (this.getHeight() + 25) + 20) > Desktop.windowHeight){
        ImageViewer.positionTop = 0;
    }
    if((ImageViewer.positionLeft + (this.getWidth() + 25) + 20) > Desktop.windowWidth){
        ImageViewer.positionLeft = 0;
    }
  
    Desktop.dragWindow();
    
    //Desktop.resizeWindow(false);
    
    
    // Lägger appen överst vid mousedown
    imageWindow.addEventListener("mousedown", function(){
        Desktop.arrangeWindow(1, imageWindow);
    });
};