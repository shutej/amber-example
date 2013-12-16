amber-example
=============

An example that pulls in Amber through Bower and compiles it with r.js.

Installation
------------

    $ npm install
    $ bower install

Hacking
-------

    $ ./bower_components/amber/bin/amber serve
    $ open http://127.0.0.1:4000/devel.html

Running
-------

    $ ./bower_components/amber/bin/amber serve
    $ open http://127.0.0.1:4000

Deploying
---------

Concatenating all the code together is done by using require.js on the
"deploy.js" module.  You can do that with:

    $ grunt requirejs

New Packages
------------

First, you'll need a spot to drop your code.

    $ mkdir -p my_namespace/_source

Then, from within Helios:

    Package
      named: 'MYPackage'
      transport: (AmdPackageTransport namespace: 'my_namespace')

Once you SaveIt you can [C-space k] to commit the package, but you'll probably
also want to add the package to devel.js and/or deploy.js:

    // Add packages here.
    "my_namespace/MYPackage",
