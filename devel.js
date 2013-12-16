require(
	[
		"bower_components/amber/support/helios",
		// Add packages here.
	],
	function(smalltalk) {
		window.onbeforeunload = function() {
			return "Do you want to close Amber? All uncommitted changes will be lost.";
		};
		smalltalk.defaultAmdNamespace = "amber_core";
		smalltalk.initialize();
	});
