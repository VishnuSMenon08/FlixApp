const sumOfNumbers = (arr) => {
    sum = 0
    arr.forEach(element => {
        if(element%2 == 0){
            sum += element
        }
    });
    return sum
}

console.log(sumOfNumbers([2,3,4,5,6]))