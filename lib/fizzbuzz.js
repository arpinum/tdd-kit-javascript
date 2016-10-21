'use strict';

function fizzbuzz() {
    let values = [];
    for (let i = 1; i < 101; i++) {
        values.push(valueOf(i));
    }
    return values;

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
