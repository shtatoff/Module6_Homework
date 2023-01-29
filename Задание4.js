let x = +prompt('Введите число 1')
let y = +prompt('Введите число 2')

function getNumArea(x,y){
    let num = x;
    let timeID = setInterval(function(){
        console.log(num);
    if(num == y){
        clearInterval(timeID);
    }
    num++;
}, 1000)
}
getNumArea(x, y);