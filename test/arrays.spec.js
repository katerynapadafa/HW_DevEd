describe('arrays', function() {
    describe('Найти минимальный элемент массива', function() {
        it('should return min number', function() {
            expect(minNumber([10, 2, 5])).to.equal(2);
        });
        describe('Найти максимальный элемент массива', function() {
            it('should return max number', function() {
                expect(maxNumber([10, 2, 5])).to.equal(10);
            });
        });
        describe('Найти индекс минимального элемента массива', function() {
            it('should return index of min number', function() {
                expect(indMinNumber([10, 2, 5])).to.equal(1);
            });
        });
        describe('Найти индекс максимального элемента массива', function() {
            it('should return index of max number', function() {
                expect(indMaxNumber([10, 2, 5])).to.equal(0);
            });
        });
        describe('Посчитать сумму элементов массива с нечетными индексами', function() {
            it('should count sum of elements with odd indexes', function() {
                expect(sumElem([1, 2, 3, 4, 5, ])).to.equal(6);
            });
        });
        describe('Сделать реверс массива (массив в обратном направлении)', function() {
            it('should reverse an array', function() {
                expect(reverseNumbersArray([1, 2, 3, 4])).to.eql([4, 3, 2, 1]);
            })
        });
    });
});