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

App.prototype.openApp = function(w, h){
    w = w || 200;
    h = h || 320;
    
    console.log(w + " : " + h);
    return w + " : " + h;
};