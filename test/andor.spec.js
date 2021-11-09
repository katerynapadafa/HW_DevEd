describe('andor', function() {
    describe('1.Если а – четное посчитать а*б, иначе а+б', function() {
        it('should return mult two numbers', function() {
            expect(calculate(10, 5)).to.equal(50);
            expect(calculate(19, 5)).to.equal(24);
        });
        it('should return error for a', function() {
            expect(calculate('10', 5)).to.equal('use numbers only');
        });
        it('should return error for b', function() {
            expect(calculate(10, "5")).to.equal('use numbers only');
        });
    });
    describe('2. Определить какой четверти принадлежит точка с координатами (х,у)', function() {

        it('should return error for x', function() {
            expect(xy('10', 5)).to.equal('use numbers only');
        });
        it('should return error for y', function() {
            expect(xy(10, '5')).to.equal('use numbers only');
        });
        it('should return quadrant 1', function() {
            expect(xy(1, 2)).to.equal('quadrant 1')
        });
        it('should return quadrant 2', function() {
            expect(xy(-1, 2)).to.equal('quadrant 2')
        });
        it('should return quadrant 3', function() {
            expect(xy(-1, -2)).to.equal('quadrant 3')
        });
        it('should return quadrant 4', function() {
            expect(xy(1, -2)).to.equal('quadrant 4')
        });
    });
    describe('3. Найти суммы только положительных из трех чисел', function() {
        it('should return message to use numbers ', function() {
            expect(countSum('10', 5, 3)).to.equal('use numbers only');
            expect(countSum(10, '5', 3)).to.equal('use numbers only');
            expect(countSum(10, 5, '3')).to.equal('use numbers only');
        });
        it('should return sum + a', function() {
            expect(countSum(-1, 3, 1)).to.equal(4)
        });
        it('should return sum + b', function() {
            expect(countSum(1, -3, 1)).to.equal(2)
        });
        it('should return sum + c', function() {
            expect(countSum(1, 3, -1)).to.equal(4)
        });
    });
    describe('4.Посчитать выражение (макс(а*б*с, а+б+с))+3', function() {
        it('should return if a+b+c > a*b*c return sum +3, or vice versa ', function() {
            expect(maxNumber(2, 1, 1)).to.equal(7);
            expect(maxNumber(2, 5, 1)).to.equal(13);
        });
    });
    describe('5.Написать программу определения оценки студента по его рейтингу, на основе следующих правил', function() {
        it('should return error (use numbers only)', function() {
            expect(mark("4")).to.equal('use numbers only')
        });
        it('should return error max 100 min 0', function() {
            expect(mark(101)).to.equal('maximum - 100; minimum - 0')
        });

        it('should return letters A-F ', function() {
            expect(mark(95)).to.equal('A')
            expect(mark(76)).to.equal('B')
            expect(mark(65)).to.equal('C')
            expect(mark(45)).to.equal('D')
            expect(mark(25)).to.equal('E')
            expect(mark(1)).to.equal('F')
        });
    });
});