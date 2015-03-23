'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var bin = 'node_modules/.bin';

    grunt.initConfig({
        shell: {
            jshint: {
                command: bin + '/jshint .'
            },
            mocha: {
                command: bin + '/mocha --colors --reporter spec --recursive tests'
            },
            istanbul: {
                command: bin + '/istanbul cover ' + bin + '/_mocha -- --reporter dot --recursive tests'
            }
        }
    });

    grunt.registerTask('lint', ['shell:jshint']);
    grunt.registerTask('test', ['shell:mocha']);
    grunt.registerTask('cover', ['shell:istanbul']);
    grunt.registerTask('default', ['lint', 'test', 'cover']);
};
