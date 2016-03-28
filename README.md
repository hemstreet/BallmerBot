Ballmer Bot
==

***Work in progress***

Intro
===
Raspberry pi controller drink maker to reach ballmer's peak.

The concept of Ballmer's peak stems from the xkcd article where it point in which you have had enough drinks to be
at your programming peak. After another drink it is downhill and productivity is hindered.

`20000 milliseconds @12V DC for the following was pump was 1 oz http://www.amazon.com/gp/product/B00F9MXFFQ?psc=1&redirect=true&ref_=oh_aui_detailpage_o02_s01`

Original Comic
[https://xkcd.com/323/](https://xkcd.com/323/)

Calculator
[http://www.ballmerpeakathon.com/calc](http://www.ballmerpeakathon.com/calc)

Getting Started
====
run `node server.js -h` for help

Initial setup run `npm install`
to start the script run

`node server.js`


If you want to develop locally ( without rpi, use the mock option mock ) to simulate gpio actions

`node server.js --mock`


Troubleshooting
===



For errors like
```
Error when trying to open pin 16
gpio-admin: failed to change group ownership of /sys/devices/virtual/gpio/gpio23/direction: No such file or directory
``````
run `gpio-admin export 16`

@TODO
===
* [ ] web dashboard to add drinks
* [ ] Implement prep / flushing of the tubes
* [ ] "Mixologist" Menu, on the fly drinks w/ input from the user at certain amount pours
* [ ] Voice controlled drink delivery [Wit quickstart](https://wit.ai/docs/nodejs/2.0.0/quickstart)

Resources
===
[http://www.thecocktaildb.com/](http://www.thecocktaildb.com/)