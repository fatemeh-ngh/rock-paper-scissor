let userchoise = prompt("choose rock or paper or scissor")

const choises = ["paper","rock","scissor"];
if(userchoise === ""){
    console.log("you cheated");
} else{
    console.log(`you choise: ${userchoise}`);
}
let randomnumber =Math.floor( Math.random()*3);
let computerchoise = choises[randomnumber];
console.log(`computer choise: ${computerchoise}`);

 if (userchoise === computerchoise) {
    console.log("this is a tie");
} else if (userchoise === "paper") {
    if(computerchoise === "rock"){
        console.log("you win");
    } else if (computerchoise === "scissor") {
        console.log("you lose");
    }
} else if (userchoise === "rock") {
    if(computerchoise === "paper"){
        console.log("you lose");
    } else if (computerchoise === "scissor") {
        console.log("you win");
    }
} else if (userchoise === "scissor") {
    if (computerchoise === "paper"){
        console.log("you lose");
    } else  if (computerchoise === "rock"){
        console.log("you win");
    }
}
