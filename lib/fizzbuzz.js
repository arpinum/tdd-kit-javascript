'use strict';

const _ = require('lodash');

function fizzbuzz() {
    return _.map(_.range(1, 101), valueOf);
    
    function valueOf(i) {
        if (i % 15 === 0) {
            return 'fizzbuzz';
        }
        if (i % 3 === 0) {
            return 'fizz';
        }
        if (i % 5 === 0) {
            return 'buzz';
        }
        return i.toString();
    }
}

module.exports = fizzbuzz;
