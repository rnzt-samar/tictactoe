boxes = document.querySelectorAll(".box");
let turnbox = document.querySelector(".turndecider");

let clickcount = 0;
let resetBtn = document.getElementById("resetbtn");
let verdictbox = document.querySelector(".verdict");
let verdictWrapper = document.querySelector(".verdictWrapper")
let wrapper = document.querySelector(".wrapper");
resetBtn.style.display = "none";
// resetBtn.style.display="block";
// wrapper.style.display="none"

player("O");

function marksign(boxnumber) {

    box = boxes[boxnumber - 1];
    if (box.innerHTML.length == 0) {
        if ((clickcount % 2) == 0) {
            sign = "O"
            box.innerHTML = sign;
            box.style = "background-color:rgb(194, 255, 194)";
            box.style.color = "green";

            checkforwin(sign);
            player("X");

        }
        else {
            sign = "X"
            box.innerHTML = sign;
            checkforwin(sign);
            box.style = "background-color:rgb(255, 194, 194)";
            box.style.color = "red";
            player("O");


        }
        clickcount = clickcount + 1;
    }

}
function checkforwin(sign) {
    console.log("checked");
    boxContent = [];
    for (i = 0; i < 9; i++) {
        boxContent.push(boxes[i].innerHTML);
    }
    console.log(boxContent)
    //possible values for a win

    let possibleWins = [
        [3, 4, 5],
        [6, 7, 8],
        [0, 1, 2],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];
    for (i = 0; i <=7 ; i++) {

        if (
            (((boxContent[possibleWins[i][0]].length != 0) && (boxContent[possibleWins[i][1]].length != 0)) && (boxContent[possibleWins[i][0]] == boxContent[possibleWins[i][1]] && boxContent[possibleWins[i][1]] == boxContent[possibleWins[i][2]]))
        ) {
            // console.log("You won")
            verdictbox.innerHTML = "Player " + sign + " wins the game";
            wrapper.style.display = "none";
            resetBtn.style.display = "block";
            if (sign == "X") {
                verdictbox.style.color = "red";
            }
            else {
                verdictbox.style.color = "green";

            }
        }
    }

    
};


function player(sign) {
    turnbox.innerHTML = "Player " + sign;
    if (sign == "O") {
        turnbox.style.color = "green";
    } else {
        turnbox.style.color = "red";

    }

}
resetBtn.addEventListener("click", () => {
    console.log("Reset Button has been clicked");
    boxes.forEach(element => {
        element.innerHTML = "";
        element.style = "background-color:rgba(202, 199, 199, 0.589)"
    });
    verdictbox.innerHTML = "";
    player("O");
    wrapper.style.display = "block";
    resetBtn.style.display = "none";
    clickcount = 0;

})
/*
    //this is the initially adopted checking mechanism
        if (
            (((boxContent[4].length != 0) && (boxContent[3].length != 0)) && (boxContent[3] == boxContent[4] && boxContent[4] == boxContent[5])) ||
            (((boxContent[7].length != 0) && (boxContent[6].length != 0)) && (boxContent[6] == boxContent[7] && boxContent[7] == boxContent[8])) ||
            (((boxContent[1].length != 0) && (boxContent[0].length != 0)) && (boxContent[0] == boxContent[1] && boxContent[1] == boxContent[2])) ||
            (((boxContent[0].length != 0) && (boxContent[4].length != 0)) && (boxContent[0] == boxContent[4] && boxContent[4] == boxContent[8])) ||
            (((boxContent[2].length != 0) && (boxContent[4].length != 0)) && (boxContent[2] == boxContent[4] && boxContent[4] == boxContent[6])) ||
            (((boxContent[0].length != 0) && (boxContent[3].length != 0)) && (boxContent[0] == boxContent[3] && boxContent[3] == boxContent[6])) ||
            (((boxContent[1].length != 0) && (boxContent[4].length != 0)) && (boxContent[1] == boxContent[4] && boxContent[4] == boxContent[7])) ||
            (((boxContent[2].length != 0) && (boxContent[5].length != 0)) && (boxContent[2] == boxContent[5] && boxContent[5] == boxContent[8]))
        ) {
            // console.log("You won")
            verdictbox.innerHTML = "Player " + sign + " wins the game";
            wrapper.style.display = "none";
            resetBtn.style.display = "block";
            if (sign == "X") {
                verdictbox.style.color = "red";
            }
            else {
                verdictbox.style.color = "green";
    
            }
        }
        */