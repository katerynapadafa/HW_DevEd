//Получить строковое название дня недели по номеру дня.

function dayOfTheWeek(x) {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    switch (x) {
        case 1:
            {
                return days[0]
            }
        case 2:
            {
                return days[1]
            }
        case 3:
            {
                return days[2]
            }
        case 4:
            {
                return days[3]
            }
        case 5:
            {
                return days[4]

            }
        case 6:
            {
                return days[5]

            }
        case 7:
            {
                return days[6]
            }
        default:
            {
                return 'there are only 7 days of the week. try number 1-7'

            }
    }
}

console.log(dayOfTheWeek(2))

// или 


function dayOfTheWeek2(x) {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return days[x - 1]
}
console.log(dayOfTheWeek(2))


//Найти расстояние между двумя точками в двухмерном декартовом пространстве.




//Вводим число(0-999), получаем строку с прописью числа.