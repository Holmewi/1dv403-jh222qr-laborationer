"use strict";

function App(name, icon, w, h){
    console.log(name);
    console.log(icon);
    
    this.getName = function() { return name; };
    this.setName = function(_name) { name = _name; };
    this.getIcon = function() { return icon; };
    this.setIcon = function(_icon) { icon = _icon; };
    
    this.setName(name);
    this.setIcon(icon);
    
    this.openApp(w, h)
}

App.prototype.openApp = function(w, h){
    w = w || 200;
    h = h || 320;
    
    console.log(w + " : " + h);
    return w + " : " + h;
};