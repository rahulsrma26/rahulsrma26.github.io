function Matrix(canvas, context, totalbits){
    self = this;
    this.canvas = canvas;
    this.context = context;
    this.totalbits = totalbits;

    var frame = 0;
    var colors = ['#008800', '#00FF00', '#55FF55', '#BBFFBB'];
    var words = [ 
    "안녕하", "셨습", "니까", "근데", "그래서", "환영합니다", "안녕하", "십니까", "手伝っ", "てくれますか",
    "むずかしい", "昨天", "小时", "钟表", "漂亮", "做去", "的事情", "笑好玩儿", "没有地", "好吃的食物",
    "丑陋的", "常见", "說這", "么希奇的", "左右拐", "下多少", "洗手在", "早上好",
    "NEO", "ONE", "NEO", "ONE", "404", "404", "404", "404", "404", "404", "404", "404", "404"];

    words.sort(function(item1, item2){
        return item1.length - item2.length;
    });

    function Bit (distance){
        var TWO_PI = Math.PI * 2;
        this.size = 500/distance;
        this.speed = 160/distance;
            
        if( this.size <= 10){
            this.font = '8pt Calibri';
            this.color = colors[0];
        }
        else if( this.size <= 15){
            this.font = '11pt Calibri';
            this.color = colors[1];
        }
        else if( this.size <= 20){
            this.font = '14pt Calibri';
            this.color = colors[2];
        }
        else{
            this.font = '18pt Calibri';
            this.color = colors[3];
        }
            
        this.xpos = Math.random() * canvas.width;
        this.ypos = Math.random() * 2 * canvas.height - canvas.height;
        this.text = Math.floor(Math.random() * words.length);
            
        this.tick = function(){
            if(this.ypos > canvas.height){
                this.ypos = - canvas.height;
                this.xpos = Math.random() * canvas.width;
                this.text = Math.floor(Math.random() * words.length);
            }
            else
                this.ypos += this.speed;
                
            var c = Math.random();
            if( c < .01)
                this.text = (this.text + 1) % words.length;
            else if( c < .02)
                this.text = (this.text - 1 + words.length) % words.length;
        };

        this.draw = function(){
            context.fillStyle = this.color;
            // glow effect
            context.shadowColor = '#007700';
            context.shadowOffsetX = 0; 
            context.shadowOffsetY = 0; 
            context.shadowBlur = (this.size-5)/3;
            context.font = this.font;
            var text = words[this.text];
            var l = text.length;
            var h = context.measureText("W.").width;
            for(var i=0; i<l; i++){
                var w = context.measureText(text[i]).width;
                context.fillText( text[i], this.xpos - w/2, this.ypos + i*h);
            }
        };
    } // end of bit object

    function reDraw(){
        frame ++;
        // motion blur
        context.fillStyle = "rgba(0,0,0,0.4)";
        //context.clearRect( 0, 0, canvas.width, canvas.height);
        context.fillRect(0, 0, canvas.width, canvas.height);
        for(var bit in bits){
            bits[bit].draw();
            bits[bit].tick();
        }
    }

    function resize() {
	    canvas.width = window.innerWidth;
	    canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize, false); 
    resize();

    var bits = new Array(totalbits);
    var bit;
    for(var i = 0; i < totalbits; ++i){
        bit = new Bit(20 + 80 * Math.random());
        bits[i] = bit;
    }

    setInterval(reDraw, 33);
}

function fallingMatrix(){
    var canvas = document.getElementById('background');
    var context = canvas.getContext('2d');
    //context.globalAlpha = 0.7;
    var totalBits = Math.round(window.innerWidth * window.innerHeight / 2000);
    matrix = new Matrix(canvas, context, totalBits);
}
