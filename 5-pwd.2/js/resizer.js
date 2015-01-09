var Resizer = {
    
    resized : false,
    
    resizer : $(window).resize(function() {
        var reso;

        if ($(window).width() > Desktop.windowWidth || $(window).height() > Desktop.windowHeight) {
            //console.log(Resizer.resized);
            if(Resizer.resized === false){
                reso = document.getElementById('resolution');
            } else {
                reso = document.getElementById('browser');
                reso.setAttribute('id', 'resolution');
                reso.setAttribute('style', 'width:' + Desktop.windowWidth + 'px; height:' + Desktop.windowHeight + 'px');
                Resizer.resized = false;
            }
            //console.log('Greater than 1024');
            
        }
        
        if ($(window).width() < Desktop.windowWidth || $(window).height() < Desktop.windowHeight) {
            //console.log(Resizer.resized);
            if(Resizer.resized === false){
                reso = document.getElementById('resolution');
                reso.setAttribute('id', 'browser');
                reso.setAttribute('style', 'width: 100%; height: 100%');
                Resizer.resized = true;
            } else {
                reso = document.getElementById('browser');
            }
            //console.log('Less than 1024');
            
            
        }
        
    })
    
};