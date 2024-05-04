let turns = document.querySelector(".turns");
let turn = "X";
let squars = [];



function game(id) {
    let element = document.getElementById(id);
    if (turn === "X" && element.innerHTML === "") {
      element.innerHTML = "X";
      turn = "O";
      turns.innerHTML = "O";
    } else if (turn === "O" && element.innerHTML == "") {
      element.innerHTML = "O";
      turn = "X";
      turns.innerHTML = "X";
    }
    winner();
  }


  function winner() {
    for (let i = 1; i < 10; i++) {
      squars[i] = document.getElementById("item" + i).innerHTML;
    }
  
    /////////rows////////
    if (squars[1] == squars[2] && squars[2] == squars[3] && squars[1] !== "") {
      endGame(1,2,3)
    }
    if (squars[4] == squars[5] && squars[5] == squars[6] && squars[4] !== "") {
      endGame(4,5,6)
    }
    if (squars[7] == squars[8] && squars[8] == squars[9] && squars[7] !== "") {
      endGame(7,8,9)
    }
    ////////////end rows////////////
    /////////// colomns //////////////
    if (squars[1] == squars[4] && squars[4] == squars[7] && squars[1] !== "") {
      endGame(1,4,7)
    }
    if (squars[2] == squars[5] && squars[5] == squars[8] && squars[5] !== "") {
      endGame(2,5,8)
    }
    if (squars[3] == squars[6] && squars[6] == squars[9] && squars[3] !== "") {
      endGame(3,6,9)
    }
    ////////////end colomns ////////
    ///////////////tways //////////
    if (squars[3] == squars[5] && squars[5] == squars[7] && squars[3] !== "") {
      endGame(3,5,7)
    }
    if (squars[1] == squars[5] && squars[5] == squars[9] && squars[1] !== "") {
      endGame(1,5,9)
    }
    
    /////////////end tways /////////
  }
  
function endGame(num1,num2,num3){
    turns.innerHTML = `${squars[num1]} winner`;
    document.getElementById("item" + num1).style.background = "blueviolet";
    document.getElementById("item" + num2).style.background = "blueviolet";
    document.getElementById("item" + num3).style.background = "blueviolet";

    setInterval(function () {
      turns.innerHTML += ".";
    }, 1000);
    setTimeout(function () {
      location.reload();
    }, 4000);
}

function reload (){
    setInterval(function(){
        location.reload()
    },1000)
}



