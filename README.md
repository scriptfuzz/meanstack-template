What2Eat
========

##How to run?

1. Install *Node.js 4.3.2 LTS*
2. Clone this repository
3. Open & replace the values in the ```oauth.sh``` with the approriate keys provided by Yelp.
4. Open a terminal a run ```source oauth.sh```
5. In the terminal run ```npm install```
6. In the terminal run ```node server.js```
7. In your browser, navigate to [http://localhost:9000](http://localhost:9000/)
8. [**Optional**] Feel like maximizing perfomance? Run ```node cluster.js``` instead of step 6.

##Testing

* Run ```mocha -R spec test/route-test.js```

##What should I know?

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
* [Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
* [ECMAScript 6](http://es6-features.org/#Constants)
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://github.com/j-diaz/what2eat.git)
* [Mocha](http://mochajs.org/) testing framework
* [Mustache](https://mustache.github.io/) template engine
* [JQuery](http://jquery.com/)
* [Boostrap CSS](http://getbootstrap.com/css/) 
* General knowledge of how the web works (HTTP, HTTP2, WebSockets, HTML, CSS, etc.).

##System Architecture

Block diagram of system component architecture
![Architecture](docs/architecture/w2eThreeTierArch.png)
