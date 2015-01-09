"use strict";

function App(name, icon){
    console.log(name);
    console.log(icon);
    
    this.getName = function() { return name; };
    this.setName = function(_name) { name = _name; };
    this.getIcon = function() { return icon; };
    this.setIcon = function(_icon) { icon = _icon; };
    
    this.setName(name);
    this.setIcon(icon);
}