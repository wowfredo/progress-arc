(function() {
  'use strict';
  describe('Service: Conversion', function() {
    var Conversion;
    beforeEach(module('progressArcApp'));
    Conversion = {};
    beforeEach(inject(function($injector) {
      return Conversion = $injector.get('Conversion');
    }));
    describe('floatToRadians', function() {
      return it('should convert a float decimal number to a radian value', function() {
        return expect(Conversion.floatToRadians(0.5)).toEqual(0.5 * 2 * Math.PI);
      });
    });
    describe('floatToPercent', function() {
      it('should convert a float decimal to a percentage value', function() {
        return expect(Conversion.floatToPercent(0.55)).toEqual(55);
      });
      return it('should round to the nearest whole number', function() {
        expect(Conversion.floatToPercent(0.5555)).toEqual(56);
        return expect(Conversion.floatToPercent(0.554999)).toEqual(55);
      });
    });
    describe('isValidFloat', function() {
      it('should return true if number is between 0 and 1', function() {
        expect(Conversion.isValidFloat(0.1)).toBe(true);
        expect(Conversion.isValidFloat(0.55555555)).toBe(true);
        return expect(Conversion.isValidFloat(1.0)).toBe(true);
      });
      it('should return false if number is greater than 1', function() {
        expect(Conversion.isValidFloat(1.1)).toBe(false);
        return expect(Conversion.isValidFloat(100)).toBe(false);
      });
      it('should return false if number is the number is less than 0', function() {
        expect(Conversion.isValidFloat(-0.5)).toBe(false);
        return expect(Conversion.isValidFloat(-1)).toBe(false);
      });
      it('should return false if the input is not a number type', function() {
        return expect(Conversion.isValidFloat('one')).toBe(false);
      });
      it('should return false if the input is undefined', function() {
        return expect(Conversion.isValidFloat(void 0)).toBe(false);
      });
      return it('should return false if the input is NaN', function() {
        return expect(Conversion.isValidFloat(NaN)).toBe(false);
      });
    });
  });

}).call(this);

//# sourceMappingURL=conversion.js.map
