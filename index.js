let chance="X";
let game=["","","","","","","","",""];
const main=document.querySelector("#container");
main.addEventListener("click",(e)=>{
let curr=e.target;
let name=parseInt(e.target.dataset.name);
if(curr.innerText==""){
    curr.innerText=chance;
game[name]=chance;
let win=checkwin();
if(win){
    setTimeout(()=>{
    alert(`WHo chhose( ${chance} ) Player is win`);
    reset();
    chance="X";
     });
    return;
}
let dra=draw();
if(dra){
     setTimeout(()=>{
    alert(" OOPs Game is Draw");
    reset();
     chance="X";
});
    return;
}
chance=chance=="X"?"O":"X";
}
});
function checkwin(){
  if(checkEqual(0,1,2,chance)||checkEqual(3,4,5,chance)||checkEqual(6,7,8,chance)){
    return true;
  }  
   if(checkEqual(0,3,6,chance)||checkEqual(1,4,7,chance)||checkEqual(2,5,9,chance)){
    return true;
  }  
   if(checkEqual(0,4,8,chance)||checkEqual(2,4,6,chance)){
    return true;
  }  
  return false;
}
function checkEqual(a,b,c,chance){
    if(game[a]==chance && game[b]==chance && game[c]==chance){
        return true;
    }
    return false;
}
function reset(){
    game=["","","","","","","","",""];
    let cells=main.children;
    for(let i=0;i<game.length;i++){
        cells[i].innerText="";
    }
}
function draw(){
    for(let i=0;i<game.length;i++){
        if(game[i]==""){
            return false;
        }

    }
    return true;
}