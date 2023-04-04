const SideCols = ( sketch , cool) => {
    let scroll_offset = 0;
    let r = ~~sketch.random(10);
    // console.log("r = ", r);
    
    sketch.setup = () => {
        var width = document.getElementById('LeftCol').offsetWidth+1;
        var height = document.getElementById('CenterCol').offsetHeight
        sketch.createCanvas(width, height, sketch.P2D);
        
    };
  
    sketch.draw = () => {
        // console.log("1 r = ", r);
        sketch.background(255);
        sketch.NoiseGrid();
        
        
    };

    sketch.NoiseGrid =  () => {
        var gap = sketch.width/10;
        
        sketch.noStroke();
        for (var x = 0; x < sketch.width; x+=10) {
            for (var y = 0; y < sketch.height; y+=10) {
                var c = 255 * sketch.noise(0.01 * x, 0.01 * y, sketch.second()/50+r);
                sketch.fill(c);
                sketch.square(x, y, gap);
            }		

          }
          
    }



    //Resizes canvas when window resizes
    sketch.windowResized = function(){
        var width = document.getElementById('LeftCol').offsetWidth+1;
        var height = document.getElementById('CenterCol').offsetHeight
        sketch.resizeCanvas(width,height);
    };

    sketch.mouseWheel = (event) => {
        scroll_offset += event.delta;
        currImage = currImage+2;
        if (currImage > 20){
            currImage = 1;
            return;
        }        
    };

  };
  let myp5leftCol = new p5(SideCols, "LeftCol");
  let myp5rightCol = new p5(SideCols, "RightCol");







// NOISE DEMO 1 BEGIN
const NoiseDemo1 = ( sketch ) => {
    sketch.setup = () => {
        var width = document.getElementById('NoiseDemo1').offsetWidth+1;
        var height = document.getElementById('NoiseDemo1').offsetHeight
        sketch.createCanvas(width, height, sketch.P2D);
    }
  
    sketch.draw = () => {
        sketch.background(255,255,255);
    }
  
  
    sketch.windowResized = function(){
      var width = document.getElementById('NoiseDemo1').offsetWidth+1;
      var height = document.getElementById('NoiseDemo1').offsetHeight
      sketch.resizeCanvas(width,height);
  };
  
//NOISE DEMO 1 END
}
let myp5NoiseDemo1 = new p5(NoiseDemo1, "NoiseDemo1");



// NOISE DEMO 2 BEGIN
const NoiseDemo2 = ( sketch ) => {
    sketch.setup = () => {
        var width = document.getElementById('NoiseDemo2').offsetWidth+1;
        var height = document.getElementById('NoiseDemo2').offsetHeight
        sketch.createCanvas(width, height, sketch.P2D);
     }
      
      sketch.draw = () => {
          sketch.background(255,255,255);
     }
      
      
    sketch.windowResized = function(){
        var width = document.getElementById('NoiseDemo2').offsetWidth+1;
        var height = document.getElementById('NoiseDemo2').offsetHeight
        sketch.resizeCanvas(width,height);
      };
      
    //NOISE DEMO 2 END
    }
    let myp5NoiseDemo2 = new p5(NoiseDemo2, "NoiseDemo2");