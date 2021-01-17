var _canvasColor = "aqua";

var _elemCanvas;
var _canvasWidth;
var _canvasHeight;
var _ctx;

function getCanvas() {
    var canvases = document.getElementsByTagName("canvas");
    _elemCanvas = canvases[0];

    if (_elemCanvas) {
        _canvasWidth = _elemCanvas.width;
        _canvasHeight = _elemCanvas.height;

        _ctx = _elemCanvas.getContext('2d');
        _ctx.clearRect(0, 0, _canvasWidth, _canvasHeight);

        _ctx.fillStyle = _canvasColor;
        _ctx.rect(0, 0, _canvasWidth, _canvasHeight);
        _ctx.fill();
    }
}
