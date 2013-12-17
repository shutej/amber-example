(function(){
  var library_home = "http://localhost:4000/bower_components"
    , amber_home = library_home + "/amber";

  require.config({
    paths: {
      "amber": amber_home + "/support",
      "amber_vm": amber_home + "/support",
      'amber_lib': library_home,
      "amber_core": amber_home + "/js",
      "amber_core/_source": amber_home + "/st",
      "jquery": library_home + "/jquery/jquery.min"
    }
  });
})();

require(
  [
    "amber/deploy",
    // Add packages here.
  ],
  function(smalltalk) {
    smalltalk.defaultAmdNamespace = "amber_core";
    smalltalk.initialize();
  });
