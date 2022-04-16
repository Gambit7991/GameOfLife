function startGame(){
    if(document.getElementById('startButton').value == "STOP"){
        nextScreen(createDoubleArray());
        setTimeout(startGame, 500);
    }
}
function nextScreen(array){
    let btnArray = document.querySelectorAll('.cell');
    let arrayToShow = finalArray(array);
    for(let i = 0, k = 0; i < arrayToShow.length; i++){
        for(let j = 0; j < arrayToShow[i].length; j++, k++){
            if(arrayToShow[i][j] != getCellNum(btnArray[k].className)){
                document.getElementById(i + ' ' + j).click();
            }
        }
    }
}
function getCellNum(element){
    return 1*element.split(' ')[0];
}
function qtyLife(array){
    let temp = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            temp = i == 1 && j == 1 ?  temp : temp+array[i][j] ;
        }
    }
    return temp;
}
function isGonnaBurn(array){
    return qtyLife(array) == 3  || (qtyLife(array) == 2 && array[1][1] == 1) ? 1 : 0;
}
function finalArray(array){
    let arrayToReturn =[];
//    alert(array);
    for(let i = 0;i<array.length;i++){
	    let temp = [];
	    for(let j = 0;j<array[i].length;j++){
	        temp.push(isGonnaBurn(createArray(array, i, j)));
	    }
	    arrayToReturn.push(temp);
    }
    return arrayToReturn;
}
function createArray(array, x, y){
    let arrayToReturn = [[0,0,0],
			             [0,0,0],
			             [0,0,0]];
    for(let i =x-1,k = 0; i <= x+1; i++, k++){
	    if(i >= array.length){
	        break;
	    }
	    if(i<0){
	        continue;
	    }
	for(let j = y-1, z = 0; j <= y+1; j++, z++){
	    if(j>=array[i].length){
		    break;
	    }
	    if(j<0){
		    continue;
	    }
	    arrayToReturn[k][z] = array[i][j];
	    }
    }
    return arrayToReturn;
}
function createDoubleArray(){
    let arrayToReturn = [];
    for(let i = 0, k = 0; i < (window.screen.height - 300)/15; i++){
        let temp = [];
        for(let j = 0; j < (window.screen.width - 150)/15; j++, k++){
            temp.push(document.querySelectorAll('.cell')[k].className == '1 cell' ? 1 : 0);
        }
        arrayToReturn.push(temp);
    }
    return arrayToReturn;
}