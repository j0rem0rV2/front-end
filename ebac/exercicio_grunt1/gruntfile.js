module.exports = function(grunt){
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files:{
                    'dev/styles/styles.css' : 'src/styles/styles.less'
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files:{
                    'dist/styles/styles.min.css' : 'dev/styles/styles.css'
                }
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['less', 'uglify']);
};
