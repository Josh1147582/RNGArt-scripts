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

for(var i = 0; i<200; i++){
    //Generate color and size
	var squareSize = Math.floor(Math.random()*4001);
	var squareColor = new RGBColor;
	var stringhex = "";
	for(var j=0; j<6; j++){
		stringhex+=hex[Math.floor(Math.random()*16)];
	}
	squareColor.hexValue = stringhex;
    var newLayer = doc.artLayers.add();
    newLayer.name = "Square - " + squareSize + " - " + squareColor.hexValue;
	//Generate location
    var startx = Math.floor(Math.random()*4001);
	var starty = Math.floor(Math.random()*4001);
	// Generate a centered square
	selectedRegion = Array(Array(startx-(squareSize/2),starty-(squareSize/2)), Array(startx-(squareSize/2), starty+(squareSize/2)), Array(startx+(squareSize/2), starty+(squareSize/2)), Array(startx+(squareSize/2), starty-(squareSize/2)));
    doc.selection.select(selectedRegion);
    doc.selection.fill(squareColor);
	//Set the opacity of the layer
	doc.activeLayer.fillOpacity = Math.random()*100;
	//Apply a filter to the layer
	switch(Math.floor(Math.random()*14)) {
	case 0:
        break; //No filter
    case 1:
        doc.activeLayer.applyAddNoise(Math.random()*400, NoiseDistribution.UNIFORM, true);
        break;
	case 2:
        doc.activeLayer.applyTwirl((Math.random()*1998)-999);
        break;
	case 3:
        doc.activeLayer.applyPolarCoordinates(PolarConversionType.RECTANGULARTOPOLAR);
        break;
	case 4:
        doc.activeLayer.applyPinch((Math.random()*200)-100);
        break;
	case 5:
        doc.activeLayer.applyClouds();
        break;
	case 6:
        doc.activeLayer.applyDespeckle();
        break;
	case 7:
        doc.activeLayer.applyDifferenceClouds();
        break;
	case 8:
        doc.activeLayer.applyDiffuseGlow(Math.random()*10,Math.random()*20, Math.random()*20);
        break;
	case 9:
        doc.activeLayer.applyDustAndScratches((Math.random()*99)+1, Math.random()*255);
		break;
	case 10:
        doc.activeLayer.applyOceanRipple((Math.random()*14)+1, Math.random()*20);
        break;
	case 11:
        doc.activeLayer.applyGlassEffect(Math.random()*20, (Math.random()*14)+1,(Math.random()*150)+50, false, TextureType.BLOCKS);
        break;
	case 12:
        doc.activeLayer.applyMedianNoise((Math.random()*99)+1);
        break;
	case 13:
        doc.activeLayer.applyLensFlare(Math.random()*300, [Math.floor(Math.random()*4000), Math.floor(Math.random()*4000)], LensType.MOVIEPRIME);
        break;
	
	
	
	
} 
	
		
}