const SideCols = ( sketch) => {
    let scroll_offset = 0;
    let z = 0;
    // let randal = sketch.random(10);
    
    
    sketch.setup = () => {
        var width = document.getElementById('LeftCol').offsetWidth+1;
        var height = document.getElementById('CenterCol').offsetHeight
        sketch.createCanvas(width, height, sketch.P2D);
        
    };
  
    sketch.draw = () => {
        sketch.background(255);
        sketch.NoiseGrid();
        
        
    };

    sketch.NoiseGrid =  () => {
        var gap = sketch.width/10;
        
        sketch.noStroke();
        for (var x = 0; x < sketch.width; x+=10) {
            for (var y = 0; y < sketch.height; y+=10) {
                var c = 255 * sketch.noise(x,y, z/50);
                
                sketch.fill(c);
                sketch.square(x, y, gap);
            }		

          }
          z += 1;
    }



    //Resizes canvas when window resizes
    sketch.windowResized = function(){
        var width = document.getElementById('LeftCol').offsetWidth+1;
        var height = document.getElementById('CenterCol').offsetHeight
        sketch.resizeCanvas(width,height);
    };

    // sketch.mouseWheel = (event) => {
    //     scroll_offset += event.delta;
    //     currImage = currImage+2;
    //     if (currImage > 20){
    //         currImage = 1;
    //         return;
    //     }        
    // };

  };
  let myp5leftCol = new p5(SideCols, "LeftCol");
  let myp5rightCol = new p5(SideCols, "RightCol");







// NOISE DEMO 1 BEGIN
const NoiseDemo1 = ( sketch ) => {
    let currGif;

    sketch.preload = () =>{
        // font = sketch.loadFont('Fonts/Metropolis-Regular.otf');
        
        MusgraveGif = sketch.loadImage("Images/Musgrave.gif");
        PerlinGif = sketch.loadImage("Images/Perlin.gif");
        PerlinAndMusgrave = sketch.loadImage("Images/Musgrave+Perlin.gif");
        VoronoiColor = sketch.loadImage("Images/VoronoiColor.gif");
        VoronoiDistance = sketch.loadImage("Images/VoronoiDistance.gif");

    }

    sketch.setup = () => {
        
        var width = document.getElementById('NoiseDemo1').offsetWidth+1;
        var height = document.getElementById('NoiseDemo1').offsetHeight
        
        
        currGif = MusgraveGif;


        VideoSelect = sketch.createSelect();
       
        VideoSelect.style('background-color: transparent')
        VideoSelect.style('border: none;')
        VideoSelect.style('font-size: 20;')
        VideoSelect.style('color: black;')
        VideoSelect.style('border-radius: 3px;')
        VideoSelect.style('margin-bottom: 15;')
        VideoSelect.style('width:100%;')
        VideoSelect.style('height:5%;')
        VideoSelect.style('text-align:center;')

        VideoSelect.option("Musgrave");
        VideoSelect.option("Perlin");
        VideoSelect.option("Musgrave+Perlin");
        VideoSelect.option("Voronoi Color");
        VideoSelect.option("Voronoi Distance");
        VideoSelect.changed(sketch.VideoSelectChanged);
        sketch.createCanvas(width, height, sketch.P2D);
    }
  
    sketch.draw = () => {
        sketch.background(255,255,255);
        sketch.image(currGif, 0, 0,sketch.width,sketch.height);
        
    }

    sketch.VideoSelectChanged = function(){
        switch (VideoSelect.value()) {
          case "Musgrave":
            currGif = MusgraveGif;
            break;
          case "Perlin":
            currGif = PerlinGif;
            break;
          case "Musgrave+Perlin":
            currGif = PerlinAndMusgrave;
            break;
          case "Voronoi Color":
            currGif = VoronoiColor;
            break;
          case "Voronoi Distance":
            currGif = VoronoiDistance;
            break;
        }
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
    let NumsInnited = false;
    let RandomValue =[];
    let RandomItters = 100;
    var drawMode = false;
    sketch.setup = () => {
        var width = document.getElementById('NoiseDemo2').offsetWidth+1;
        var height = document.getElementById('NoiseDemo2').offsetHeight
        
        sketch.InnitRandomNums();
        button = sketch.createButton('Switch Colors/Numbers');
        button2 =  sketch.createButton('New Noise');

        button.style('background-color: transparent')
        button.style('border: none;')
        button.style('border-right-style: solid;')
        
        button.style('font-size: 20;')
        button.style('color: black;')
        button.style('border-radius: 3px;')
        button.style('margin-bottom: 12;')
        button.style('width:50%;')
        button.style('height:5%;')
        button.style('text-align:center;')
       
        button2.style('background-color: transparent')
        button2.style('border: none;')
        button2.style('border-left-style: solid;')
        button2.style('font-size: 20;')
        button2.style('color: black;')
        button2.style('border-radius: 3px;')
        button2.style('margin-bottom: 12;')
        button2.style('width:50%;')
        button2.style('height:5%;')
        button2.style('text-align:center;')


        button.mousePressed(sketch.SwitchDrawMode);
        button2.mousePressed(sketch.InnitRandomNums);



        
        // VideoSelect.style('text-align:center;')



        sketch.createCanvas(width, height, sketch.P2D);
     }

     sketch.InnitRandomNums = () =>{
        RandomValue = [];
        for (let i = 0; i < RandomItters; i++) {
            RandomValue.push(sketch.random(0,255));
        }
     }
     
      sketch.draw = () => {
          sketch.background(255);
          if (drawMode == false){
            sketch.noStroke();
            sketch.drawSquares();
          }
          else{
            sketch.stroke(0);
            sketch.strokeWeight(0.5);
            sketch.drawGrid();
            sketch.drawText();
          }
     }
      
     sketch.SwitchDrawMode = () =>{
        drawMode = !drawMode;
     }


     sketch.drawText = () =>{
        var c = 0
        var gap = sketch.width/10;
        for (var x = 0; x < sketch.width; x+=gap) {
            for (var y = 0; y < sketch.height; y+=gap) {  
                sketch.fill(0);
                sketch.text(sketch.nf(RandomValue[c]/255,0,2).slice(1),x+15, y+30);
                c++;
            }		
          }
     }
    sketch.drawGrid = () =>{
        var gap = sketch.width/10;
        for (var x = 0; x < sketch.width; x+=gap) {
            for (var y = 0; y < sketch.height; y+=gap) {
              // sketch.stroke(0);
              sketch.fill(255);
                sketch.square(x, y, gap);
                
            }		
          }
     }

     sketch.drawSquares =  () =>{
        var c = 0
        var gap = sketch.width/10;
        for (var x = 0; x < sketch.width; x+=gap) {
            for (var y = 0; y < sketch.height; y+=gap) {
                
                sketch.fill(RandomValue[c]);
                sketch.square(x, y, gap);
                c++;
            }		
          }
     }
    sketch.windowResized = function(){
        var width = document.getElementById('NoiseDemo2').offsetWidth+1;
        var height = document.getElementById('NoiseDemo2').offsetHeight
        sketch.resizeCanvas(width,height);
      };
    }
    //NOISE DEMO 2 END
    let myp5NoiseDemo2 = new p5(NoiseDemo2, "NoiseDemo2");