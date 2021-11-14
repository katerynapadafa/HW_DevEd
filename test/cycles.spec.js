describe('cycles', function() {
    describe('Найти сумму четных чисел и их количество в диапазоне от 1 до 99', function() {
        it('should return sum of even numbers and their number', function() {
            expect(numb()).to.eql(' sum 2450 count 49');
        });
    });
    describe('Проверить простое ли число? ', function() {
        it('should return a prime number', function() {
            expect(primeNumber(4)).to.equal(' it is not a prime number');
        });
        describe('Вычислить факториал числа n. n! = 1*2*…*n-1*n;', function() {
            it('should return a prime number', function() {
                expect(factorial(4)).to.equal(24);
            });
        });
        describe('Посчитать сумму цифр заданного числа', function() {
            it('should return sum', function() {
                expect(sumN(123)).to.equal(6);
            });
        });
        describe('Вывести число, которое является зеркальным отображением последовательности цифр заданного числа,', function() {
            it('should return reverse', function() {
                expect(reverse(123)).to.equal(321);
            });
        });
    });
});