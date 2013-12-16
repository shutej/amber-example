require(
	[
		"bower_components/amber/support/deploy",
		// Add packages here.
	],
	function(smalltalk) {
		smalltalk.defaultAmdNamespace = "amber_core";
		smalltalk.initialize();
	});
