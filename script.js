let bubbleValue;
let timer=60;
let score=0;
let hitval;

function makebubble() {
    var clutter='';
    for(var i=1; i<=176; i++){
    bubbleValue=Math.floor(Math.random()*10);
     clutter += `<div id="bubble">${bubbleValue}</div>`;
    }
    document.querySelector("#game-panel").innerHTML=clutter;
    
}
function runtimer(){
    let timer1 = setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
        }else{
            clearInterval(timer1);
            document.querySelector("#game-panel").innerHTML=`<h1 id="gameover">Game Over</h1>`;           
        }

    },1000);
}
function newHitValue(){
    hitval=(Number(Math.floor(Math.random()*10)));
    document.querySelector("#hitval").textContent = hitval;
}
function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}


document.querySelector("#game-panel").addEventListener("click",(dets)=>{
    var clickedNumber = Number(dets.target.textContent);
    if(clickedNumber==hitval){
        increaseScore();
        makebubble();
        newHitValue();
    }
});

makebubble();
newHitValue();
runtimer();


