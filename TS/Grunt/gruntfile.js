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
      }
    });
  
    grunt.loadNpmTasks('grunt-ts');
   
    grunt.registerTask('compileTS', ['ts']);
};
