//ACCESSING ELEMENTS OF GAME 
let boxes=document.querySelectorAll(".btn1");
let resetbutton=document.querySelector("#resetbtn");
let new_game=document.querySelector("#new-game");
let msg_container =document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
let turnO=true;//player o //player X

//winning patterns
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
//boxes clicks 
boxes.forEach((box) => {
    box.addEventListener("click", () => { 
      console.log("box was clicked");
      if(turnO){
        box.innerText='O';
        box.style.color="rgb(151, 124, 90)"
        turnO=false;
      }
      else{
        box.innerText='X';
        box.style.color="#BF5F5F"
        turnO=true;
      }
     box.disabled=true;

     checkwinner();
    });
});
//TO EMPTY& DISABLED BOXES FOR NEW OR RESET GAME 
const disabledbtns=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
//TO ENABLED  BOXES TO CLICK FOR  NEW GAME 
const enabledbtns=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
//SHOW WINNER MSG AND NEW GAME BTN
const showWinner=(winner)=>{
      msg.innerText= `Congratulations Winner is ${winner}` ;
      msg_container.classList.remove("hide");
     msg_container.style.backgroundColor = "white";
     msg_container.style.backgroundImage = "url('gif2.gif')";

      disabledbtns();
}
//WINNER CHECKING FUNC.
 const checkwinner=()=>{
    for( let pattern of winpatterns){
       // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val=== pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
}
//TO RESET GAME
const resetgame=()=>{
 
   turnO=true;
    enabledbtns();
    msg_container.classList.add("hide");
}
//EVENTS ON NEW GAME OR RESET GAME BTNS..
new_game.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);



