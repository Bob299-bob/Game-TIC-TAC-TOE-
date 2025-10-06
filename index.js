let chance="X";          //Initialize Variable Chance as X.
let game=["","","","","","","","",""];  //An Array to Store Value of Index.
const main=document.querySelector("#container"); //To Select the Div through Id .
//An Event Listner that  performs operations on click and it also includes Call Back Function as well. 
main.addEventListener("click",(e)=>{              
let curr=e.target;
let name=parseInt(e.target.dataset.name);
if(curr.innerText==""){
    curr.innerText=chance;
game[name]=chance;
let win=checkwin();   // Calling a Function 
if(win){
    setTimeout(()=>{
    alert(`WHo chhose( ${chance} ) Player is win`);
    reset();
    chance="X";
     });
    return;
}
let dra=draw();       // Calling a Function 
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
// To check which Player is won  either "X" or "O".
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
//It is also a call back function so that we can reuse this .
function checkEqual(a,b,c,chance){
    if(game[a]==chance && game[b]==chance && game[c]==chance){
        return true;
    }
    return false;
}
//After Game has finished , This function will empty Tic Tac Toe .
function reset(){
    game=["","","","","","","","",""];
    let cells=main.children;
    for(let i=0;i<game.length;i++){
        cells[i].innerText="";
    }
}
//This function ensures the game is tie over on not . 
function draw(){
    for(let i=0;i<game.length;i++){
        if(game[i]==""){
            return false;
        }

    }
    return true;

}
