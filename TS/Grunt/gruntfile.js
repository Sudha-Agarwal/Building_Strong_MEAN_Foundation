module.exports = function(grunt) {
    grunt.initConfig({
        ts: {
            default: {
                src: ['**/*.ts', '!node_modules/**/*.ts'],
                outDir: 'dist',
                options: {
                    module: 'es6',
                    target: 'es6'
                }
            }
        },
        watch: {
            ts: {
                files: ['**/*.ts', '!node_modules/**/*.ts'],
                tasks: ['ts:default'],
                options: {
                    spawn: false, // Important! Without this option, Grunt watch may not detect changes properly on some systems
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['ts:default']);
    grunt.registerTask('watchTS', ['watch']);
};
