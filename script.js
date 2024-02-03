// document.addEventListener('DOMContentLoaded', function() {

const table = document.querySelector('#table');
var score = 0;

function removeEvent() {
    const tds = document.querySelectorAll("td");
    for (let j = 0; j < tds.length; j++) {
        tds[j].removeEventListener('click', Addtable);
        tds[j].removeEventListener('click', Scoreminus);
    }
}

function Scoreincrement() {
    const scoretag = document.querySelector('.score span');
    //console.log(scoretag);
    score +=2;
    scoretag.innerHTML = score;
}

function Scoreminus() {
    const scoretag = document.querySelector('.score span');
    //console.log(scoretag);
    score --;
    scoretag.innerHTML = score;
}


function Addtable() {
    Scoreincrement();
    var tr = document.createElement('tr');
    const num_td = document.querySelector('#first_tr').childElementCount;
    // //console.log(num_td);

    for (let i = 0; i < num_td; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);

    const trs = document.querySelectorAll("tr");
    trs.forEach(element => {
        let td = document.createElement('td');
        element.appendChild(td);
    });
    removeEvent();
    RandomBox();
}
// });

function RandomBox() {
    const tds = document.querySelectorAll("td");
    // let r=0;
    tds.forEach(element => {
        element.classList.remove('box');
        element.classList.remove('active');
    });
    //console.log(tds)
    let max = tds.length;
    const num = Number(Math.floor(Math.random() * max));
    for (let i = 0; i < tds.length; i++) {
        if (num != i) {
            tds[i].classList.add('box');
        } else {
            tds[i].classList.add('active');
            // tds[i].style.backgroundColor = "black";
        }
    }

    const active = document.querySelector('.active');
    active.addEventListener('click', Addtable);

    const boxs = document.querySelectorAll('.box');
    // console.log(boxs);
    boxs.forEach(element =>{
        element.addEventListener('click', Scoreminus);
    });

    FillbgColors();

}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function FillbgColors() {
    const color = getRandomColor();
    const tds = document.querySelectorAll("td");
    tds.forEach(element => {
        element.style.background = color;
    });

}


var timer = 10;
let gameInterval;
const timetag = document.querySelector(".timer span");
const start = document.querySelector('#start');
start.addEventListener('click', ()=>{
    const btnstart = document.querySelector("#start");
    btnstart.disabled = true;
    btnstart.style.opacity = 0.5;
    RandomBox();
    gameInterval = setInterval(function() {
        if (timer > 0) {
            timer--;
            // //console.log(timer);
            timetag.innerHTML = timer;
        } else {
            clearInterval(gameInterval);
            alert("Game Over! Your score: " + score);
            window.location.reload();
        }
    }, 1000);
});



