/*global module, require*/
module.exports = function (grunt) {
    'use strict';

    // The Grunt task configurations are split into several files for readability.
    grunt.initConfig({});
    //require('src/test/javascript/grunt.dev.js')(grunt);
    /**
     * Development utility tasks.
     */

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.config.set('watch', {
        options: {
            livereload: true
        },
        js: {
            files: ['src/main/resources/assets/js/**/*.js'],
            tasks: ['jshint:dev']
        },
        templates: {
            files: ['src/main/resources/assets/js/**/*.handlebars'],
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.config.set('connect', {
        client: {
            options: {
                port: 9090,
                hostname: '*',
                base: '../../',
                keepalive: true,
                livereload: true
            }
        }
    });

    grunt.registerTask('serve', ['connect:client']);

    //require('src/test/javascript/grunt.test.js')(grunt);
    /**
     * Testing and quality related tasks.
     */

    var jsFiles = [
        'src/main/resources/assets/js/*.js',
        'src/main/resources/assets/js/app/**/*.js',
        'src/test/javascript/**/*.js',
        'Gruntfile.js'
    ];

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.config.set('jshint', {
        options: {
            jshintrc: '.jshintrc'
        },
        dev: {
            src: jsFiles
        },
        ci: {
            options: {
                reporter: 'checkstyle',
                reporterOutput: 'build/jshint.xml'
            },
            src: jsFiles
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.config.set('karma', {
        options: {
            configFile: 'karma.conf.js'
        },
        unit: {
            browsers: ['Chrome'],
            singleRun: false,
            preprocessors: {},
            reporters: ['progress']
        },
        ci: {
            // Empty on purpose, as we're just reusing the karma.conf settings.
        }
    });

    grunt.registerTask('default', ['jshint:dev']);
    grunt.registerTask('maven-test', ['jshint:dev', 'karma:ci']);
};
