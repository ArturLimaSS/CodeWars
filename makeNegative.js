function makeNegative(num){
    if (num > 0){
        return num * -1;
    }else if (num < 0){
        return num;
    }else{
        return 0
    }
}

console.log(makeNegative(0))