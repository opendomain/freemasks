
var _canvasColor = "aqua";

var _elemCanvas;
var _canvasWidth;
var _canvasHeight;
var _ctx;

var _canvasColor2 = "teal";

var _elemCanvas2;
var _canvasWidth2;
var _canvasHeight2;
var _ctx2;

function getCanvas() {
    var _elemCanvas = document.getElementById("canvasElem");

    if (_elemCanvas) {
        _canvasWidth = _elemCanvas.width;
        _canvasHeight = _elemCanvas.height;

        _ctx = _elemCanvas.getContext('2d');
        _ctx.clearRect(0, 0, _canvasWidth, _canvasHeight);

        _ctx.fillStyle = _canvasColor;
        _ctx.rect(0, 0, _canvasWidth, _canvasHeight);
        _ctx.fill();
    }

    var _elemCanvas2 = document.getElementById("canvasElem2");

    if (_elemCanvas2) {
        _canvasWidth2 = _elemCanvas2.width;
        _canvasHeight2 = _elemCanvas2.height;

        _ctx2 = _elemCanvas2.getContext('2d');
        _ctx2.clearRect(0, 0, _canvasWidth2, _canvasHeight2);

        _ctx2.fillStyle = _canvasColor2;
        _ctx2.rect(0, 0, _canvasWidth2, _canvasHeight2);
        _ctx2.fill();
    }

}
