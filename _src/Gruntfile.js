/* jshint node:true */

(function () {
  "use strict";

  module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      // Metadata.
      pkg: grunt.file.readJSON('package.json'),

      app: {
        name: "<%= pkg.name %>",
        www: "./templates"
      },


      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',


      // Task configuration.
      concat: {
        options: {
          banner: '<%= banner %>',
          stripBanners: true
        },
        dist: {
          src: ['lib/<%= pkg.name %>.js'],
          dest: 'dist/<%= pkg.name %>.js'
        }
      },


      uglify: {
        options: {
          banner: '<%= banner %>'
        },
        dist: {
          src: '<%= concat.dist.dest %>',
          dest: 'dist/<%= pkg.name %>.min.js'
        }
      },


      jshint: {
        options: {
          curly: true,
          eqeqeq: true,
          immed: true,
          indent: 2,
          latedef: true,
          newcap: true,
          noarg: true,
          sub: true,
          undef: true,
          unused: true,
          boss: true,
          eqnull: true,
          browser: true,
          globals: {
            'require': true
          }
        },
        gruntfile: {
          src: 'Gruntfile.js'
        },
        lib_test: {
          src: ['lib/**/*.js', 'test/**/*.js']
        },
        www: {
          src: ['<%= app.www %>/js/**/*.js']
        }
      },


      qunit: {
        files: ['test/**/*.html']
      },


      clean: {
        plugins: ['plugins'],
        platforms: ['platforms']
      },


      componentbuild: {
        dev: {
          options: {
            dev: true,
            sourceUrls: true
          },
          src: './',
          dest: '<%= app.www %>/build'
        },
        dist: {
          src: './',
          dest: '<%= app.www %>/build'
        }
      },

      shell: {
        punch_server: {
          command: "./node_modules/punch/bin/punch s"
        },
        punch_generate: {
          command: "./node_modules/punch/bin/punch g"
        }
      },

      watch: {
        gruntfile: {
          files: "<%= jshint.gruntfile.src %>",
          tasks: ['jshint:gruntfile']
        },
        lib_test: {
          files: "<%= jshint.lib_test.src %>",
          tasks: ['jshint:lib_test', 'qunit']
        },
        www: {
          files: "<%= jshint.www.src %>",
          tasks: ['jshint:www', 'componentbuild:dev']
        }
      },

      concurrent: {
        dev: {
          tasks: ['watch', 'shell:punch_server'],
          options: {
            logConcurrentOutput: true
          }
        }
      }
    });

    // These plugins provide necessary tasks.
    require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);


    grunt.registerTask('build', [
      'jshint',
      'qunit',
      'concat',
      'uglify'
    ]);


    // Default task.
    grunt.registerTask('default', [
      'jshint',
      'componentbuild:dev',
      'concurrent:dev'
    ]);

    grunt.registerTask('build', [
      'jshint',
      'componentbuild:dist',
      'shell:punch_generate'
    ]);
  };

}());
