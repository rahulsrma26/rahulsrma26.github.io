function Matrix(canvas, context, totalbits, elem){
    self = this;
    this.canvas = canvas;
    this.context = context;
    this.totalbits = totalbits;
    this.elem = elem;
    
    var frame = 0;

    function Bit (distance){
        this.speed = 128/distance;
        this.font = parseInt(this.speed*6).toString() +'pt Calibri';
            
        this.xpos = Math.random() * canvas.width;
        this.ypos = Math.random() * 2 * canvas.height - canvas.height;
            
        this.tick = function(){
            if(this.ypos > canvas.height){
                this.ypos = -50;
                this.xpos = Math.random() * canvas.width;
            }
            else{
                this.ypos += this.speed;
                this.xpos += Math.cos(this.speed*frame/360);
            }
        };

        this.draw = function(){
            context.fillStyle = '#ffffff';
            context.font = this.font;
            context.fillText('*', this.xpos, this.ypos);
        };
    }

    function reDraw(){
        frame ++;
        context.clearRect( 0, 0, canvas.width, canvas.height);
        for(var bit in bits){
            bits[bit].draw();
            bits[bit].tick();
        }
        var dataUrl = canvas.toDataURL();
        elem.style.background = 'url(' + dataUrl + ')';
    }

    var bits = new Array(totalbits);
    var bit;
    for(var i = 0; i < totalbits; ++i){
        bit = new Bit(32 + 96 * Math.random());
        bits[i] = bit;
    }

    setInterval(reDraw, 33);
}

function fall(canvasId, divId, flakes){
    var canvas = document.getElementById(canvasId);
    var context = canvas.getContext('2d');
    var elem = document.getElementById(divId);
    canvas.width = elem.offsetWidth;
    canvas.height = elem.offsetHeight;
    matrix = new Matrix(canvas, context, flakes, elem);
}
