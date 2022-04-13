/* 
[ ][*][ ]
[ ][ ][*]
[*][*][*]
*/


var doubleArray = [[0,0,0,0,0,0,0,0,0,0],
		   [0,0,1,0,0,0,0,0,0,0],
		   [0,0,0,1,0,0,0,0,0,0],
		   [0,1,1,1,0,0,0,0,0,0],
		   [0,0,0,0,0,0,0,0,0,0],
		   [0,0,0,0,0,0,1,0,0,0],
		   [0,0,0,0,0,0,1,0,0,0],
		   [0,0,0,0,0,0,1,0,0,0],
		   [0,0,0,0,0,0,0,0,0,0],
		   [0,0,0,0,0,0,0,0,0,0]];
/*function toPrint(array){
    for(let i = 0; i < array.length; i++){
	for(let j = 0; j < array[i].length;j++){
	    process.stdout.write(array[i][j] == 0 ? '[ ]' : '[*]');
	}
    console.log();
    }
}
*/

//todo : change IsExist to check length;
/*function isExist(array, x, y){
    return array[x] != undefined && array[x][y] != undefined ? array[x][y] : 0;
}
*/
/*
function isExist(array, x, y){
    if(array.length >= x && x >=0){
	if(array[x].length >= y && y >= 0){
	    return array[x][y];
	}
    }
    return 0;
}
*/
//todo: use try catch for funstion ISEXIST
/*в пустой (мёртвой) клетке, рядом с которой ровно три живые клетки, зарождается жизнь;
если у живой клетки есть две или три живые соседки, то эта клетка продолжает жить;
в противном случае, если соседей меньше двух или больше трёх, клетка умирает («от одиночества» или «от перенаселённости»)*/

//todo: finish isGonnaBurn;
//todo: new function isGonnaBurn to each cell of matrix and build new matrix out of results is gonna burn function;
/*
function qtyLife(array, x, y){
    return isExist(array, x-1, y-1) + isExist(array, x, y-1) + isExist(array, x+1, y-1) + 
           isExist(array, x-1, y)   + isExist(array, x+1, y) + isExist(array, x+1, y+1) + 
	   isExist(array, x, y+1)   + isExist(array, x, y-1);
}
function isExist(array, x, y){
    try{
	return array[x][y] == undefined ? 0 : array[x][y];
    }catch{
        return 0;
    }
}

function isGonnaBurn(array, x , y){
    if(qtyLife(array, x, y) == 3  || (qtyLife(array, x, y) == 2) && array[x][y] == 1){
	return 1;
    }
    return 0;
}

*/
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
function startGame(array){
    let arrayToReturn =[];
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
function toPrint(array){
    array.forEach(element => process.stdout.write(element == 0 ? '[ ]' : '[*]'));
    console.log();
}
startGame(doubleArray).forEach(element => toPrint(element));

let strToRead = '[ ][*][ ]\n[ ][*][ ]\n[ ][ ][ ]';
function toRead(str){
let temp = true;
    var array = str.split('\n');
    var regex = /^(\[ \]|\[\*\])+$/;
    str.split('\n').forEach(element => {
	if(element.match(regex) == null){
	    temp = false;
    }
    });
    return temp;
//    console.log(str.match(regex));
//     console.log("aaaaabbbbb".match(/a|b+/));
}
function getArray(array){
    let arrayToReturn= [] ;
    array.forEach(element => {
	let temp =[];
//	console.log(element);
	element.forEach(subElement =>{
	    temp.push(subElement == ' ' ? 0 : 1);
	});
	arrayToReturn.push(temp);
});
    return arrayToReturn;
}
let temp = [[' ',' ',' ', ' ', ' ', ' '],
            [' ',' ',' ', '*', ' ', '*'],
            [' ',' ',' ', ' ', '*', '*'],
	    [' ',' ',' ', ' ', '*', ' '],
	    [' ',' ',' ', ' ', '*', ' ']];
getArray(temp);
console.log(getArray(temp));
console.log(toRead(strToRead));
//console.log(startGame(doubleArray));

//console.log(main(doubleArray));
//toPrint(doubleArray);
//console.log(qtyLife(doubleArray, 2, 2));
//console.log(isGonnaBurn(doubleArray, 2, 2));