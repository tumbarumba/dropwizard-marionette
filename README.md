# Dropwizard with Marionette Template Application

Kickstart new full stack web applications using this template application. It works out of the box without any changes, though it doesn't actually do anything useful until you make changes.

The application consists of a back-end server application, and a front-end single-page Javascript application.

## Back-end Server Application

The back-end application consists of:
* [Dropwizard](http://dropwizard.io), a module that provides most things you'll need. It includes:
  * [Jetty](http://www.eclipse.org/jetty/), a high-performance HTTP server.
  * [Jersey](https://jersey.java.net/), a full-featured RESTful web framework.
  * [Jackson](https://github.com/FasterXML/jackson), the best JSON library for the JVM.
  * [Metrics](https://dropwizard.github.io/metrics), an excellent library for application metrics.
  * [Guava](https://code.google.com/p/guava-libraries/), Google’s excellent utility library.
  * [Logback](http://logback.qos.ch/), the successor to Log4j, Java’s most widely-used logging framework.
  * [Hibernate Validator](http://hibernate.org/validator/), the reference implementation of the Java Bean Validation standard.
* A small amount of code and configuration to serve up the Javascript application.

## Front-end Javascript Application

The front-end application consists of:
* [Requre.js](http://requirejs.org), a Javascript module loader.
* [Backbone.Marionette](http://marionettejs.com), a composite application library for [Backbone.js](http://backbonejs.org) that aims to simplify the construction of large scale Javascript applications.
* [Handlebars](http://handlebarsjs.org), a Javascript implementation of the [Mustache](http://mustache.org) templating language.
* [jQuery](http://jquery.org), a library for cross-browser DOM manipulation in Javascript.
* [Underscore.js](http://underscorejs.org), a functional utility library for Javascript.
* [Twitter Bootstrap](http://getbootstrap.com/), a Javascript, CSS and HTML framework for responsive web apps.

## Getting Started

Build the application by running:

```
gradle assemble
```

Start the application like this:

```
java -jar application/build/libs/lava-application-all-0.0.1-SNAPSHOT.jar server application/src/main/configuration/hello-world.yml
```

You can now view the running application by pointing your browser at [http://localhost:8080](http://localhost:8080)

You can also see some other features from Dropwizard by browsing to the administration console at [http://localhost:8081](http://localhost:8081)

## Testing Framework

TODO
