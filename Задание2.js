function numType (num){
    if(num < 1000 && num > 1){
        for(i = 2; i < num; i++){
            if(num % i == 0){
                return alert('Сложное');
             }else{
                return alert('Простое');
              }
            }
    }else if(num <= 1){
        return alert ('Число не является не простым не составным');
     }else{
        alert('данные не верны');
    }
}
numType(+prompt('Введите число меньше 1000'))