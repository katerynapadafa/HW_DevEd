describe('functions', function() {
    describe('Получить строковое название дня недели по номеру дня.', function() {
        it('should return the day of the week', function() {
            expect(dayOfTheWeek(1)).to.eql('Monday');
            expect(dayOfTheWeek(2)).to.eql('Tuesday');
            expect(dayOfTheWeek(3)).to.eql('Wednesday');
            expect(dayOfTheWeek(4)).to.eql('Thursday');
            expect(dayOfTheWeek(5)).to.eql('Friday');
            expect(dayOfTheWeek(6)).to.eql('Saturday');
            expect(dayOfTheWeek(7)).to.eql('Sunday');
        });
    });
    describe('Получить строковое название дня недели по номеру дня.', function() {
        it('should return the day of the week', function() {
            expect(dayOfTheWeek(1)).to.eql('Monday');
            expect(dayOfTheWeek(2)).to.eql('Tuesday');
            expect(dayOfTheWeek(3)).to.eql('Wednesday');
            expect(dayOfTheWeek(4)).to.eql('Thursday');
            expect(dayOfTheWeek(5)).to.eql('Friday');
            expect(dayOfTheWeek(6)).to.eql('Saturday');
            expect(dayOfTheWeek(7)).to.eql('Sunday');

        });
    });
});