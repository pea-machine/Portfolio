module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
      },
      dist: {
        files: {
          'public/css/main.css': 'public/css/main.scss'
        }
      }
    },
    postcss: {
      options: {
        map: true, // inline sourcemaps

        // or
        map: {
            inline: false, // save all sourcemaps as separate files...
            annotation: 'public/css/maps/' // ...to the specified directory
        },

        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          //require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'public/css/main.css'
      }
    },
    watch: {
      scripts: {
        files: ['public/css/main.scss', 'public/css/main.css'],
        tasks: ['sass', 'postcss'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.registerTask('default', ['sass', 'postcss']);

};