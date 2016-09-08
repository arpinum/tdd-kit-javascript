'use strict';

require('chai').should();
const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz function', () => {

    let elements;

    before(() => {
        elements = fizzbuzz();
    });

    it('should return 100 elements', () => {
        elements.should.have.lengthOf(100);
    });

    it('should return "1" for 1', () => {
        valueOf(1).should.equal('1');
    });

    it('should return "fizz" for 3', () => {
        valueOf(3).should.equal('fizz');
    });

    it('should return "buzz" for 5', () => {
        valueOf(5).should.equal('buzz');
    });

    it('should return "fizzbuzz" for 15', () => {
        valueOf(15).should.equal('fizzbuzz');
    });

    function valueOf(number) {
        return elements[number - 1];
    }
});
