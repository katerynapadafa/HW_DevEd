//Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function numb() {
    let sum = 0
    let count = 0
    for (let i = 1; i < 99; i++) {
        if (i % 2 == 0) {
            sum += i;
            count++;
        }
    }
    return ` sum ${sum} count ${count}`
}
console.log(numb())
    //Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1) 

function primeNumber(number) {
    let message = " it is a prime number";

    for (let i = 2; i < number; i++) {
        if (number % 2 === 0) {
            message = ' it is not a prime number';
            break;
        }
    }
    return message
}
console.log(primeNumber(4))

//Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

function squareRoot(x) {
    let result = Math.sqrt(x)
    for (let i = 2; i < x; i++) {
        if (Math.sqrt(x) % 2 == 0) {
            result
        }
    }
    return result
}
console.log(squareRoot(5))


//Вычислить факториал числа n. n! = 1*2*…*n-1*n;

function factorial(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(factorial(5));

//Посчитать сумму цифр заданного числа

function sumN(x) {
    let strX = x.toString();
    let sum = 0
    for (let i = 0; i < strX.length; i++) {
        sum = sum + +strX[i];
    }
    return sum;
}
console.log(sumN(123))


//Вывести число, которое является зеркальным отображением последовательности
//цифр заданного числа, например, задано число 123, вывести 321.

function reverse(x) {
    let strX = x.toString()
    let rev = ''

    for (i = strX.length - 1; i >= 0; i--) {
        rev = rev + strX[i]
    }
    return +rev
}
console.log(reverse(321))