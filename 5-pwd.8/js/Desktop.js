"use strict";

var Desktop = {
    
    windowWidth : 1024,
    windowHeight : 640,
    
    imageViewer : new App("Image Viewer", "icons/icon-img-view.png", 292, 350),
    rss : new App("RSS", "icons/icon-rss.png", 400, 500),

    apps : [],
    zindex : 0,
    
    menubar : document.createElement('section'),

    init : function() {
        console.log("Desktop");
        Desktop.resizeWindow();
        Desktop.createDesktop();
    },
    
    createDesktop : function() {
        var desktop = document.createElement('div');
        //var menubar = document.createElement('section');
        desktop.setAttribute('id', 'desktop');
        desktop.setAttribute('class', 'resolution');
        desktop.setAttribute('style', 'width:' + Desktop.windowWidth + 'px; height:' + Desktop.windowHeight + 'px');
        Desktop.menubar.setAttribute('id', 'menubar');
        document.getElementsByTagName('body')[0].appendChild(desktop);
        desktop.appendChild(Desktop.menubar);
    
        Desktop.renderMenuIcons(Desktop.menubar);
        
    },
    
    renderMenuIcons : function(menubar) {
        Desktop.apps.push(Desktop.imageViewer);
        Desktop.apps.push(Desktop.rss);
        
        var i;
        
        for(i = 0; i < Desktop.apps.length; i += 1){
            
            var a = document.createElement('a');
            a.href = "#";
            var img = document.createElement('img');
            img.setAttribute('src', Desktop.apps[i].getIcon());
            img.setAttribute('class', 'menuicon');
            menubar.appendChild(a);
            a.appendChild(img);
            Desktop.openWindow(a, i);
        }
    },
    
    openWindow : function(a, i) {
        a.addEventListener("click", function () {
            console.log("APP " + Desktop.apps[i].getName());
            console.log("APP " + Desktop.apps[i].getWidth() + ", " + Desktop.apps[i].getHeight());
            Desktop.apps[i].openApp(i, Desktop.apps);
            Desktop.position += 10;
        });
    },
    
    // Ändrar zindex för ett specifikt fönster
    arrangeWindow : function(z, appWindow) {
        
        //console.log(z);
        //console.log(Desktop.zindex);
        //console.log(appWindow.style.zIndex);

        z += Desktop.zindex;
        appWindow.style.zIndex = Desktop.zindex;
        Desktop.menubar.style.zIndex = Desktop.zindex + 1;
        Desktop.zindex = z;
        
    },
    
    // Källa: http://interactjs.io/
    dragWindow : function() {
        interact('.draggable')
            .draggable({
                // enable inertial throwing
                inertia: true,
                // keep the element within the area of it's parent
                restrict: {
                  restriction: "parent",
                  endOnly: true,
                  elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
        
            // call this function on every dragmove event
            onmove: function (event) {
                var target = event.target,
                // keep the dragged position in the data-x/data-y attributes
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
        
                // translate the element
                target.style.webkitTransform =
                    target.style.transform =
                        'translate(' + x + 'px, ' + y + 'px)';
                
                // update the posiion attributes
                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            },
            // call this function on every dragend event
            onend: function (event) {
                var textEl = event.target.querySelector('p');
                
                textEl && (textEl.textContent =
                    'moved a distance of '
                        + (Math.sqrt(event.dx * event.dx +
                            event.dy * event.dy)|0) + 'px');
            }
        });
    },
    
    // Källa: http://interactjs.io/
    resizeWindow : function(){
        interact('.resize')
          .resizable(true)
          .on('resizemove', function (event) {
            var target = event.target;
        
            // add the change in coords to the previous width of the target element
            var newWidth  = parseFloat(target.style.width ) + event.dx,
                newHeight = parseFloat(target.style.height) + event.dy;
        
            // update the element's style
            target.style.width  = newWidth + 'px';
            target.style.height = newHeight + 'px';
        
        });
    }

};

window.onload = function() {
    Desktop.init();
};