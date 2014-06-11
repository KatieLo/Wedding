module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
	        css: {
	           src: [
	                 'css/bootstrap.min.css', 'css/theme.css','css/style.css', 'css/font-awesome.min.css'
	                ],
	            dest: 'css/combined.css'
	        },
	        js : {
	            src : [
	                'js/jquery-1.10.2.min.js', 'js/bootstrap.min.js', 'js/classie.js','js/cbpAnimatedHeader.min.js', 'js/scrollReveal.js', 'js/jquery.scrollTo.js', 'js/jquery.nav.js', 'js/imagesloaded.pkgd.min.js', 'js/custom.js'
	            ],
	            dest : 'js/combined.js'
	        }
    	},
    	cssmin : {
            css:{
                src: 'css/combined.css',
                dest: 'css/combined.min.css'
            }
        },
        uglify : {
	        js: {
	            files: {
	                'js/combined.js' : [ 'js/combined.js' ]
	            }
	        }
    	}
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [ 'concat:css', 'cssmin:css', 'concat:js', 'uglify:js' ]);

};