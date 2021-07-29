// Constants

const X_AXIS = 1;
let b1, b2, c1, c2;
let xoff = 0
let links = document.getElementsByClassName('main-link');
function setup() {  
 let cnv = createCanvas(windowWidth/2, windowHeight);
 cnv.position(0, 0);
 cnv.style('z-index', '-2');
 
}
function draw() {
  
 
   xoff = xoff + 0.01;
  let n = noise(xoff) * 222;
  // Background  
 
  c1 = color(n, mouseX, 0);
  c2 = color(mouseY, n, n*2);
  setGradient(0, 0, windowWidth, windowHeight, c2, c1, X_AXIS);
  
  for(let i=0;i<20;i++){
    stroke(255)
   point(70+i*3,n*i/2,1)}
    

    [...links].forEach(x=> {
        x.style.fontSize = 100 + mouseX/400 + mouseY/400+ 'px';
     });
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
      
  }
}

