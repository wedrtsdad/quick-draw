function setup(){
    canvas = createCanvas(1400,450);
    canvas.center();
    canvas.mouseReleased(classifyCanvas);
}

function preload(){
    classifier= ml5.imageClassifier("DoodleNet",modelLoaded);
 }
 
 function modelLoaded(){
     console.log("model loaded");
 }
 
function classifyCanvas() {
    classifier.classify(canvas,gotresult);
}

function gotresult(error,result){
    if (error) {
        console.error(error);
    }

    else{
        console.log(result);
        document.getElementById("camouflage").innerHTML= result[0].label;
    }
}

a1= ['apple','bat','ball','bird'];
bg1= "";
random_num= 0;

function drawn() {
    bg1= "set";
   if (bg1 == "set") {
    background("white");
    alert('times up');
}

random_num= Math.floor(Math.random()*4);
r_a= a1[random_num];
document.getElementById("to_d").innerHTML= r_a;

}

function draw(){
    stroke(0);
    strokeWeight(13);

    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}

