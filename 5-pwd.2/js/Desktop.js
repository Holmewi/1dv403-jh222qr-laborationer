"use strict";

var Desktop = {
    
    windowWidth : 1024,
    windowHeight : 640,

    apps : [],

    init : function() {
        console.log("Desktop");
        Desktop.createDesktop();
    },
    
    createDesktop : function() {
        var desktop = document.createElement('div');
        var menubar = document.createElement('section');
        desktop.setAttribute('id', 'resolution');
        desktop.setAttribute('style', 'width:' + Desktop.windowWidth + 'px; height:' + Desktop.windowHeight + 'px');
        menubar.setAttribute('id', 'menubar');
        document.getElementsByTagName('body')[0].appendChild(desktop);
        desktop.appendChild(menubar);
        
        Desktop.loadApps(menubar);
    },
    
    loadApps : function(menubar) {
        var imageViewer = new App("Image Viewer", "icons/icon-img-view.png", 200, 320);
        Desktop.apps.push(imageViewer);
        var rss = new App("RSS", "icons/icon-rss.png", 400, 520);
        Desktop.apps.push(rss);
        
        console.log(Desktop.apps);
        Desktop.renderMenuIcons(menubar);
    },
    
    renderMenuIcons : function(menubar) {
        var i;
        
        for(i = 0; i < Desktop.apps.length; i += 1){
            
            var a = document.createElement('a');
            a.href = "#";
            var img = document.createElement('img');
            console.log(i);
            img.setAttribute('src', Desktop.apps[i].getIcon());
            img.setAttribute('class', 'menuicon');
            menubar.appendChild(a);
            a.appendChild(img);
            Desktop.openWindow(a, i)
        }
    },
    
    openWindow : function(a, i) {
        a.addEventListener("click", function () {
            console.log("APP " + Desktop.apps[i].getName());
            console.log("APP " + Desktop.apps[i].openApp());
        });
    }
};

window.onload = function() {
    Desktop.init();
};