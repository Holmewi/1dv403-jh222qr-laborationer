var Resizer = {
    
    resized : false,
    
    resizer : $(window).resize(function() {
        var reso = document.getElementById('desktop');

        if ($(window).width() > Desktop.windowWidth && $(window).height() > Desktop.windowHeight) {
            
            //reso.setAttribute('style', 'width:' + Desktop.windowWidth + 'px; height:' + Desktop.windowHeight + 'px');
            reso.style.width = Desktop.windowWidth + "px";
            reso.style.height = Desktop.windowHeight + "px";
            //console.log('Greater than 1024');
            
        }
        
        if ($(window).width() < Desktop.windowWidth || $(window).height() < Desktop.windowHeight) {
            //reso.setAttribute('style', 'width: 100%; height: 100%');
            reso.style.width = '100%';
            reso.style.height = '100%';
            //console.log('Less than 1024');
        }
        
    })
    
};