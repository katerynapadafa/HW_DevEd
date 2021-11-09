//1.Если а – четное посчитать а*б, иначе а+б

function calculate(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return ('use numbers only');
    }
    if (a % 2 === 0) {
        return (a * b);
    } else {
        return (a + b);
    }
};
console.log(calculate(1, 3));
console.log(calculate(2, 10));


//2. Определить какой четверти принадлежит точка с координатами (х,у)

function xy(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return ('use numbers only');
    }
    if (x > 0 && y > 0) {
        return ('quadrant 1')
    };
    if (x < 0 && y > 0) {
        return ('quadrant 2')
    };
    if (x < 0 && y < 0) {
        return ('quadrant 3')
    };
    if (x > 0 && y < 0) {
        return ('quadrant 4')
    };
}
console.log(xy(2, 4));
console.log(xy(-2, 4));
console.log(xy(-2, -4));
console.log(xy(2, -4));



//3. Найти суммы только положительных из трех чисел

function countSum(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return ('use numbers only');
    }
    let result = 0
    if (a > 0) {
        result += a
    }
    if (b > 0) {
        result += b
    }
    if (c > 0) {
        result += c
    }
    return result
}

console.log(countSum(1, -2, 3))


//4.Посчитать выражение (макс(а*б*с, а+б+с))+3
function MaxNumber(a, b, c) {
    let res;
    const sum = a + b + c
    const mult = a * b * c
    if (sum > mult) {
        res = sum + 3;
    } else {
        res = mult + 3
    }
    return res
}
console.log(maxNumber(1, 2, 3)) // ответ 9



//5.Написать программу определения оценки студента по его рейтингу, на основе следующих правил

function mark(a) {
    if (typeof a !== 'number') {
        return ('use numbers only')
    }
    if (a > 100 || a < 0) {
        return 'maximum - 100; minimum - 0'
    }
    if (a >= 90 && a <= 100) {
        return 'A'
    }
    if (a >= 75 && a <= 89) {
        return 'B'
    }
    if (a >= 60 && a <= 74) {
        return 'C'
    }
    if (a >= 40 && a <= 59) {
        return 'D'
    }
    if (a >= 20 && a <= 39) {
        return 'E'
    }
    if (a >= 0 && a <= 19) {
        return 'F'
    }
}
console.log(mark(90))