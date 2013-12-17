(function(){
  var library_home = "http://localhost:4000/bower_components"
    , amber_home = library_home + "/amber";

  require.config({
    paths: {
      "amber": amber_home + "/support",
      "amber_vm": amber_home + "/support",
      "amber_css": amber_home + "/css",
      "amber_lib": library_home,
      "amber_inc": amber_home + "/support",
      "amber_core": amber_home + "/js",
      "amber_core/_source": amber_home + "/st",
      "amber_html": amber_home,
      "jquery": library_home + "/jquery/jquery.min",
      "jquery-ui": amber_home + "/support/jQuery/jquery-ui-1.8.24.custom.min"
    },
    map: {
      "*": {
        "css": "amber_lib/require-css/css"
      }
    },
    shim: {
      "jquery-ui": {
        deps: [ "jquery" ]
      },
      "amber_lib/bootstrap/js/bootstrap": {
        deps: [ "jquery", "css!amber_lib/bootstrap/css/bootstrap" ]
      },
      "amber_lib/CodeMirror/codemirror": {
        deps: [ "css!amber_lib/codemirror/lib/codemirror" ]
      },
      "amber_lib/jquery-tabby/jquery.textarea": {
        deps: [ "jquery", "jquery-ui" ]
      },
      "amber_inc/CodeMirror/smalltalk": {
        deps: [ "amber_lib/codemirror/lib/codemirror" ]
      },
      "amber_lib/codemirror/addon/hint/show-hint": {
        deps: [ "../../lib/codemirror" ]
      },
      "ensure-console": {
        exports: "console"
      }
    }
  });
})();

require(
  [
    "amber/helios",
    // Add packages here.
  ],
  function(smalltalk) {
    window.onbeforeunload = function() {
      return "Do you want to close Amber? All uncommitted changes will be lost.";
    };
    smalltalk.defaultAmdNamespace = "amber_core";
    smalltalk.initialize();
  });
