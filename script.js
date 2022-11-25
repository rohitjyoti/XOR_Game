let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isGameover = false 
let reset = document.querySelector(".reset");



// Function to change the turn
const changeTurn = ()=> {
    return turn === "X" ? "0" : "X"
}

// Function to check for a win 
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("box-text");
    let wins = [
        [0,1,2, 3,6,0],
        [3,4,5, 3,18,0],
        [6,7,8, 3,30,0],

        [0,3,6, -9,18,90],
        [1,4,7, 3,18,90],
        [2,5,8, 15,18,90],
        
        [0,4,8, 3,18,45],
        [2,4,6, 3,18,135]
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isGameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px"
            document.querySelector(".line").style.width = "80%"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            gameover.play();
            const foo = document.querySelector('');        
        }
    })
}

// Game logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.box-text')
    element.addEventListener('click',()=>{
        music.play();
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn()
            audioTurn.play();
            checkWin();
            if(!isGameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn
            }
        }
    })
})


// Add onclick listener to reset btn

reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.box-text');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    isGameover = false;
    turn = "X"
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px"
    document.querySelector(".line").style.width = "0%"
})