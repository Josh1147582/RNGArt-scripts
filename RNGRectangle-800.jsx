/*
Josh Bicking
May 29th, 2015
AP Calc Final Project
*/


/* 
Modified code from 
http://design.tutsplus.com/articles/powerful-task-automation-with-photoshop-scripting--psd-12870
*/

var doc = app.activeDocument;
var hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

for(var i = 0; i<800; i++){
    //Generate color
	var squareColor = new RGBColor;
	var stringhex = "";
	for(var j=0; j<6; j++){
		stringhex+=hex[Math.floor(Math.random()*16)];
	}
	squareColor.hexValue = stringhex;
    var newLayer = doc.artLayers.add();
    newLayer.name = "Rectangle - " + squareColor.hexValue;
	//Generate location
    var startx = Math.floor(Math.random()*4000);
	var starty = Math.floor(Math.random()*4000);
	var endx = Math.floor(Math.random()*4000);
	var endy = Math.floor(Math.random()*4000);
	//Generate a rectangle
	selectedRegion = Array(Array(startx,starty), Array(startx, endy), Array(endx, endy), Array(endx, starty));
    doc.selection.select(selectedRegion);
    doc.selection.fill(squareColor);
}