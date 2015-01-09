"use strict";

var Desktop = {
    
    windowWidth : 1024,
    windowHeight : 640,
    resolution : function(){
        
            return String("res" + Desktop.windowWidth + "x" + Desktop.windowHeight);
        
    },     // Working resolutions: browser, res1024x640
    
    apps : [],

    init : function() {
        console.log("Desktop");
        console.log(Desktop.resolution());
        Desktop.createDesktop();
    },
    
    createDesktop : function() {
        var desktop = document.createElement('div');
        var menubar = document.createElement('section');
        console.log(Desktop.resolution());
        desktop.setAttribute('id', Desktop.resolution);
        menubar.setAttribute('id', 'menubar');
        document.getElementsByTagName('body')[0].appendChild(desktop);
        desktop.appendChild(menubar);
        
        Desktop.loadApps(menubar);
    },
    
    loadApps : function(menubar) {
        var imageViewer = new App("Image Viewer", "icons/icon-img-view.png");
        Desktop.apps.push(imageViewer);
        var rss = new App("RSS", "icons/icon-rss.png");
        Desktop.apps.push(rss);
        
        console.log(Desktop.apps);
        Desktop.renderMenuIcons(menubar);
    },
    
    renderMenuIcons : function(menubar) {
        var i;
        
        for(i = 0; i < Desktop.apps.length; i += 1){
            var a = document.createElement('a');
            var img = document.createElement('img');
            console.log(i);
            img.setAttribute('src', Desktop.apps[i].getIcon());
            img.setAttribute('class', 'menuicon');
            menubar.appendChild(a);
            a.appendChild(img);
        }
    }
};

window.onload = function() {
    Desktop.init();
};