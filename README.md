Game Jam Boilerplate
--
This project is a jumping-off point for building browser-based games with the
[Phaser](http://phaser.io/) JavaScript framework.

### Getting Started
Install all dependencies and run the dev server:
```
$ npm install
$ npm start
```
When it completes your server should be available at http://localhost:8080

Best Practices
--
Here are some opinions and guidelines for future additions to this repo.

### Package services (index.js files)
* **DO** include a package service inside every package
* **DO** provide access to other package members through package services
* **DON'T** make package services instantiable
* **DON'T** maintain any state inside package services

### Abstract classes (_*.js files)
* **DO** prefix abstract classes with an "_" character
* **DO** provide base implementations inside your abstract classes
* **DO** use abstract classes to adapt and/or extend third-party libraries
* **DON'T** make your abstract classes available through package services

### Concrete classes (*.js files)
* **DO** extend abstract classes from within the package
* **DO** import classes from within the package
* **DO** import services from outside the package
* **DO** favor composition over inheritance whenever possible
* **DO** inject dependencies through the constructor
* **DON'T** extend classes from outside the package
* **DON'T** import classes from outside the package

### Testing
* **DO** unit test package services
* **DO** unit test abstract classes
* **DO** unit test concrete classes
* **DO** mock all dependencies
* **DON'T** bother testing anything from a third-party

TODOs
--
* [ ] Add a behaviors package
* [ ] Add some group management services
* [ ] Add some debugging services
* [ ] Write some tests ya bum!
