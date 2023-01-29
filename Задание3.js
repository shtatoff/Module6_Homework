function getSum(x){
    return function(y){
        return x + y;
    }
}
const x = +prompt('Введите число 1');
const y = +prompt('Введите число 2');
const result = getSum(x)(y);
console.log(result);