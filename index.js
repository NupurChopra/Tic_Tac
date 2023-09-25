console.log("Welcome to Tic Rac Toe");
let music=new Audio("./music/music.mp3");
let ting = new Audio("./music/ting.mp3");
let gameover = new Audio("./music/gameover.mp3");
let turn = "X";
let isgameover=false;

const changeturn = ()=>{
    return turn==="X"?"0": "X";
}

const checkwin = ()=>{
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[1]].innerHTML === boxtexts[e[2]].innerHTML) && boxtexts[e[1]].innerHTML !==""){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
       }
    })
}

let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", ()=>{
        if(boxtext.innerHTML ===""){
            boxtext.innerHTML = turn;
            turn= changeturn();
            ting.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerHTML ="Turn for "+turn;
            }
            
        }
    })
})

reset.addEventListener("click", ()=>{
    let boxtexts=document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element =>{
        element.innerHTML = "";
    })
    turn = "X";
    isgameover= false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerHTML ="Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})

