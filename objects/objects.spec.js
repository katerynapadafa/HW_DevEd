describe('objects', function() {
    describe('1.1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.', function() {
        it('should return cooking time', function() {
            expect(getCookingTime(9)).to.eql(10);
        });
    });
    describe('2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.', function() {
        it('should return odd or even number from the array', function() {
            expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).to.eql(4);
            expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).to.eql(13);
        });
    });
    describe('3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов, которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).', function() {
        it('should return key and value that include string', function() {
            expect(findTitle(users, 'Marry')).to.eql([{ title: 'Marry A' }, { title: 'Marry B' }]);
        });
    });
    describe('4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке', function() {
        it('should return an array where keys are letters and values are their number', function() {
            expect(countCharacters("football")).to.eql({ f: 1, o: 2, t: 1, b: 1, a: 1, l: 2 });
        });
    });
});