"use strict";
var PWD = PWD || {};

PWD.Desktop = {
    windowWidth : 12000,
    windowHeight : 8000,
    
    imageViewer : new App("Image Viewer", "icons/icon-img-view.png", 292, 350),
    rss : new App("RSS", "icons/icon-rss.png", 400, 500),
    memory : new App("Memory", "icons/icon-memory.png", ((PWD.Memory.cols * 75) + 60), ((PWD.Memory.rows * 75) + 155)),

    apps : [],
    zindex : 0,
    
    menubar : document.createElement('section'),

    init : function() {
        console.log("Desktop");
        PWD.Desktop.resizeWindow();
        PWD.Desktop.createDesktop();
        
    },
    
    createDesktop : function() {
        var desktop = document.createElement('div');
        
        desktop.setAttribute('id', 'desktop');
        
        if(desktop.id === 'desktop'){
            PWD.Resizer.check(desktop);
        }
        //desktop.setAttribute('class', 'resolution');
        //desktop.setAttribute('style', 'width:' + Desktop.windowWidth + 'px; height:' + Desktop.windowHeight + 'px');
        
        PWD.Desktop.menubar.setAttribute('id', 'menubar');
        document.getElementsByTagName('body')[0].appendChild(desktop);
        desktop.appendChild(PWD.Desktop.menubar);
    
        PWD.Desktop.renderMenuIcons(PWD.Desktop.menubar);
    },
    
    renderMenuIcons : function(menubar) {
        PWD.Desktop.apps.push(PWD.Desktop.imageViewer);
        PWD.Desktop.apps.push(PWD.Desktop.rss);
        PWD.Desktop.apps.push(PWD.Desktop.memory);
        
        var i;
        
        for(i = 0; i < PWD.Desktop.apps.length; i += 1){
            var a = document.createElement('a');
            a.href = "#";
            a.setAttribute('title', PWD.Desktop.apps[i].getName());
            a.setAttribute('class', 'tooltip');
            var img = document.createElement('img');
            img.setAttribute('src', PWD.Desktop.apps[i].getIcon());
            img.setAttribute('class', 'menuicon');
            
            menubar.appendChild(a);
            a.appendChild(img);
            PWD.Desktop.openWindow(a, i);
        }
    },
    
    openWindow : function(a, i) {
        a.addEventListener("click", function () {
            console.log("APP " + PWD.Desktop.apps[i].getName());
            console.log("APP " + PWD.Desktop.apps[i].getWidth() + ", " + PWD.Desktop.apps[i].getHeight());
            PWD.Desktop.apps[i].openApp(i, PWD.Desktop.apps);
            PWD.Desktop.position += 10;
        });
    },
    
    // Ändrar zindex för ett specifikt fönster
    arrangeWindow : function(z, appWindow) {
        //console.log(z);
        //console.log(Desktop.zindex);
        //console.log(appWindow.style.zIndex);

        z += PWD.Desktop.zindex;
        appWindow.style.zIndex = PWD.Desktop.zindex;
        PWD.Desktop.menubar.style.zIndex = PWD.Desktop.zindex + 1;
        PWD.Desktop.zindex = z;
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
            /*
            onend: function (event) {
                var textEl = event.target.querySelector('p');
                
                textEl && (textEl.textContent =
                    'moved a distance of '
                        + (Math.sqrt(event.dx * event.dx +
                            event.dy * event.dy)|0) + 'px');
            }
            */
        });
    },
    
    // Källa: http://interactjs.io/
    resizeWindow : function(){
        interact('.resize')
          .resizable(true)
          .on('resizemove', function (event) {
            var target = event.target;
        
            // add the change in coords to the previous width of the target element
            var newWidth  = parseFloat(target.style.width) + event.dx,
                newHeight = parseFloat(target.style.height) + event.dy;
        
            // update the element's style
            var screen = document.getElementById("desktop");
            var screenWidth = window.innerWidth;
            var screenHeight = window.innerHeight;

            if(screen.style.width === "100%"){
                if(newWidth > screenWidth){
                    newWidth = screenWidth;
                }
                if(newHeight > screenHeight){
                    newHeight = screenHeight;
                }
            } else {
                if(newWidth > PWD.Desktop.windowWidth){
                    newWidth = PWD.Desktop.windowWidth;
                }
                if(newHeight > PWD.Desktop.windowHeight){
                    newHeight = PWD.Desktop.windowHeight;
                }
            }
            target.style.width  = newWidth + 'px';
            target.style.height = newHeight + 'px';
        });
    }
};

window.onload = function() {
    PWD.Desktop.init();
};