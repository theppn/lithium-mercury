function renderBattery(height, percentage, charging, low, color) {
    var canvas = document.createElement("canvas"),
        context = canvas.getContext("2d"),
		imageData;
	canvas.width = height/2;
	canvas.height = height;
	context.fillStyle = "#FFFFFF";
	if(low) context.fillStyle = "#FF3B30";
	if(charging) context.fillStyle = "#0000FF";
	context.font = 18 + "pt Helvetica Neue";
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillText(percentage, 17, 75);
	context.lineCap = 'butt';
	context.lineJoin = 'miter';
	context.miterLimit = 4;
	context.translate(0,60);
	context.scale(0.05,-0.05);
	context.beginPath();
	context.moveTo(78,586);
	context.bezierCurveTo(55,569,56,561,80,530);
	context.bezierCurveTo(100,504,105,489,93,491);
	context.bezierCurveTo(50,498,0,439,0,381);
	context.bezierCurveTo(0,330,19,297,85,232);
	context.bezierCurveTo(165,155,170,116,96,129);
	context.bezierCurveTo(81,132,62,110,64,92);
	context.bezierCurveTo(66,79,77,75,108,75);
	context.bezierCurveTo(150,75,150,75,150,38);
	context.bezierCurveTo(150,1,151,0,185,0);
	context.bezierCurveTo(218,0,220,2,220,35);
	context.bezierCurveTo(220,64,224,70,243,71);
	context.bezierCurveTo(303,74,305,75,306,102);
	context.bezierCurveTo(307,124,303,128,281,128);
	context.bezierCurveTo(202,127,200,145,272,220);
	context.bezierCurveTo(300,249,334,289,347,308);
	context.bezierCurveTo(391,374,366,465,295,495);
	context.lineTo(258,510);
	context.lineTo(279,539);
	context.lineTo(300,569);
	context.lineTo(279,584);
	context.bezierCurveTo(259,598,256,597,240,577);
	context.bezierCurveTo(231,565,215,540,205,523);
	context.bezierCurveTo(194,505,183,490,180,490);
	context.bezierCurveTo(177,490,167,502,158,518);
	context.bezierCurveTo(148,533,131,557,118,572);
	context.bezierCurveTo(98,596,93,598,78,586);
	context.closePath();
	context.moveTo(162,409);
	context.bezierCurveTo(178,393,190,384,190,389);
	context.bezierCurveTo(190,405,240,450,257,450);
	context.bezierCurveTo(287,450,310,419,310,377);
	context.bezierCurveTo(310,342,303,330,248,274);
	context.lineTo(185,210);
	context.lineTo(123,270);
	context.bezierCurveTo(88,304,60,339,59,348);
	context.bezierCurveTo(59,357,57,373,55,382);
	context.bezierCurveTo(53,392,61,411,72,425);
	context.bezierCurveTo(96,456,123,452,162,409);
	context.closePath();
	context.fill();
	imageData = context.getImageData(0, 0, height/2, height);
	context.putImageData(imageData, 0, 0);
    return canvas.toDataURL("image/png");
}
