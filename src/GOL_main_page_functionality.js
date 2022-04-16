window.onload=function(){
    createArrayButtons();
}
function createArrayButtons(){
    for(let i = 0; i <(window.screen.height-150*2)/15; i++){
        for(let j = 0; j < (window.screen.width-150)/15; j++){
            document.body.appendChild(createButton(i, j));
        }
    }
}
function createButton(i, j){
    let btn = document.createElement('button');
    btn.id = i + ' ' + j;
    btn.className = '0 cell';
    btn.style.backgroundColor = btn.className == '0 cell' ? 'black' : 'white';
    btn.style.width = '15px';
    btn.style.height = '15px';
    btn.onclick = function(){
            btn.className == '1 cell' ? btn.className = '0 cell' : btn.className = '1 cell';
            btn.className == '1 cell' ? btn.style.backgroundColor ='white' : btn.style.backgroundColor ='black';
        }
    return btn;
}
function buttonStart() {
    let temp = document.getElementById('startButton').value;
    document.getElementById('startButton').value = temp == 'Start' ?  'STOP' : 'Start' ;
    startGame();
    }
