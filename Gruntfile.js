module.exports = function(grunt) {

	var library_home = "bower_components/"
	    , amber_home = library_home + "amber";

	grunt.loadNpmTasks("grunt-requirejs");

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		requirejs: {
			compile: {
				options: {
					paths: {
            "amber": amber_home + "/support",
            "amber_vm": amber_home + "/support",
            'amber_lib': library_home,
            "amber_core": amber_home + "/js",
            "amber_core/_source": amber_home + "/st",
            "jquery": library_home + "jquery/jquery.min"
					},
					name: "deploy",
					almond: true,
					wrap: true,
					optimize: "uglify2",
					out: "deploy.min.js"
				}
			}
		}
	});

	grunt.registerTask("default", ["requirejs"]);
};
