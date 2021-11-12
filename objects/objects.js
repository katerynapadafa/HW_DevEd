// 1.1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.
function getCookingTime(eggsAmount) {
    let result
    const pots = Math.ceil(eggsAmount / 5) // 5 eggs in a pot
    result = pots * 5 //min
    return result
}
console.log(getCookingTime(0))
console.log(getCookingTime(5))
console.log(getCookingTime(9))

//2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.

function getEvenNumber(arrayEven) {
    let result = arrayEven.filter(number => number % 2 == 0)
    return result
}

function getOddNumber(arrayOdd) {
    let result = arrayOdd.filter(number => number % 2 !== 0)
    return result
}
console.log(getEvenNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])) //returns 4
console.log(getOddNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])) //returns 13
    //
function getNumber(array) {
    let result = array.filter(number => number % 2 === 0)
    if (result.length == 1) {
        return result[0]
    } else {
        result = array.filter(number => number % 2 !== 0)
        return result[0]
    }
}
console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])) //returns 4
console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])) //returns 13


// 3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм, который
// фильтрует массив, заданный как первый параметр, и возвращает
// массив объектов, которые содержат в своих заголовках заданную строку
// в качестве второго параметра (без учета регистра).

const users = [{
    title: 'Marry A'
}, {
    title: 'Marry B'
}, {
    title: 'Sam'
}, {
    title: 'Dan'
}]

function findTitle(users, string) {
    let result = users.filter(element => element.title.includes(string));
    return result;
}
console.log(findTitle(users, 'Marry'))

// // 4. Принимая строку, ваша функция должна вернуть обьект, в котором
// // ключи – символы строки, значение – количество повторений символов в
// // строке

function countCharacters(word) {
    let string = word.split('');
    let result = string.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1;
        } else {
            acc[curr] = 1;
        }
        return acc
    }, {})
    return result
}
console.log(countCharacters("football"))


// 5. Принимая число, ваша функция должна найти следующий
// положительный палиндром большего размера.
// Палиндром - это слово, фраза, число или другая последовательность
// символов, которая читается так же, как вперед и назад, например,
// «мадам».


function getPalindrome(num) {
    const arr = String(num.split('').reverse().join(''))
    for (let i = 1; i < num; i++)
        if (num == arr) {
            return arr
        }
}
console.log(getPalindrome(19));