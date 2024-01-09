let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","purple"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false)
    {
        console.log("game started");
        started=true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
   setTimeout(function(){
    btn.classList.remove("userflash");
   },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randCol=btns[randIdx];
    let randBtn=document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);

    gameFlash(randBtn);

}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){

        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else 
      {
        h2.innerHTML=`Game over!Your Score was <b>${level}</b><br>Press any key to start`;
      reset();
      }  
  
}


function btnPress(){
    let btn=this;
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}

