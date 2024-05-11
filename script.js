let yourScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");

let yourScorePara=document.querySelector("#yourScore");
let computerScorePara=document.querySelector("#computerScore");

let msg=document.querySelector("#msg");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame=(userChoice)=>{
    console.log("userChoice is: ",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice is: ",compChoice);
    
    if(userChoice===compChoice){
        drawGame();
    }else {
        let userWin=true;
        if( userChoice === "rock"){
            userWin=compChoice=== "paper" ? false :true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="rock"?true:false;
        }else{
            userWin=compChoice==="rock"?false:true;
        }     
        showWinner(userWin);
    }
};

const genCompChoice=()=>{
    //rock,paper,scissor
    let options=["rock","paper","scissor"];
    const randomInd=Math.floor(Math.random()*3);
    return options[randomInd];
}

const drawGame=()=>{
    console.log("Game was draw!");
    msg.innerText="Game was draw. Play again!";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You WIN!");
        yourScore++;
        yourScorePara.innerText=yourScore;
        msg.innerText=`You WIN!`;
        msg.style.backgroundColor="green";
    }else{
        console.log("You LOSE!");
        computerScore++;
        computerScorePara.innerText=computerScore;
        msg.innerText=`You LOSE!`;
        msg.style.backgroundColor="red";
    }
};