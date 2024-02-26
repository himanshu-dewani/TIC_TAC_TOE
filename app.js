console.log("welcome to java script");
let boxes=document.querySelectorAll('.boxes');
let btn=document.querySelector('.btn');
let turn='X';

let changeTurn= () =>{
 return turn =="X"?"O":"X";
}

let checkWin =()=>{
   
    let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
// console.log(boxes[wins[0][0]])
wins.forEach(e=>{
    
    if((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[1]].innerText === boxes[e[2]].innerText) && (boxes[e[0]].innerText !== "" )){
        document.querySelector('.gameover').innerText=boxes[e[0]].innerText+" won ";
        console.log("incheck")
    }
})
}
Array.from(boxes).forEach( element =>{
    element.addEventListener('click', ()=>{
        if(element.innerText == ""){
            element.innerText=turn;
            turn=changeTurn();
            checkWin();
            
        }
        
    })
})

btn.addEventListener('click',()=>{
    Array.from(boxes).forEach( e =>{
        e.innerText='';
        document.querySelector('.gameover').innerText='';
})
})






