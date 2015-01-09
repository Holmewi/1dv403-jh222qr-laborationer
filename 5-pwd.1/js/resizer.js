var Resizer = {
    
    resize : false,
    
    resizer : $(window).resize(function() {
        var reso;

        if ($(window).width() > 1024 || $(window).height() > 640) {
            console.log(Resizer.resize);
            if(Resizer.resize === false){
                reso = document.getElementById('res1024x640');
            } else {
                reso = document.getElementById('browser');
                reso.setAttribute('id', 'res1024x640');
                Resizer.resize = false;
            }
            console.log('Greater than 1024');
            
        }
        
        if ($(window).width() < 1024 || $(window).height() < 640) {
            console.log(Resizer.resize);
            if(Resizer.resize === false){
                reso = document.getElementById('res1024x640');
                reso.setAttribute('id', 'browser');
                Resizer.resize = true;
            } else {
                reso = document.getElementById('browser');
                //resize = false;
            }
            console.log('Less than 1024');
            
            
        }
        
    })
    
};