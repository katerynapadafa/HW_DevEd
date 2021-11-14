//Найти минимальный элемент массива

function minNumber(x) {
    const min = Math.min.apply(null, x)
    return min
}
console.log(minNumber([100, 2, 10]))


//Найти максимальный элемент массива

function maxNumber(x) {
    const max = Math.max.apply(null, x)
    return max
}
console.log(maxNumber([100, 2, 10]))


//Найти индекс минимального элемента массива

function indMinNumber(x) {
    const min = minNumber(x)
    return x.indexOf(min)
}

console.log(indMinNumber([100, 2, 10]))


//Найти индекс максимального элемента массива

function indMaxNumber(x) {
    const max = maxNumber(x)
    return x.indexOf(max)
}
console.log(indMaxNumber([100, 2, 10]))


//Посчитать сумму элементов массива с нечетными индексами
//это задание мне помогали делать, можете его не засчитывать 

function sumElem(x) {
    const reducer = (accumulator, current, index) => {
        if (index % 2) {
            return accumulator + current
        }
        return accumulator
    }
    return x.reduce(reducer, 0)
}
console.log(sumElem([1, 2, 3, 4, 5]))


// Сделать реверс массива (массив в обратном направлении)

function reverseNumbersArray(array) {
    return array.reverse();
}
console.log(reverseNumbersArray([1, 2, 3]))



//Посчитать количество нечетных элементов массива


//Поменять местами первую и вторую половину массива (1234=> 3412)