Ballmer Bot
==

Intro
===
Raspberry pi controller drink maker to reach ballmer's peak.

The concept of Ballmer's peak stems from the xkcd article where it point in which you have had enough drinks to be
at your programming peak. After another drink it is downhill and productivity is hindered.

[This was the pump I used](http://www.amazon.com/Priming-Diaphragm-Spray-Motor-Dispenser/dp/B00HR8MS7G)

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


If the problem still exists, build the newest version of gpio-admin yourself.

Choose a directory you want to put gpio-admin in, and run

`git clone https://github.com/quick2wire/quick2wire-gpio-admin.git`
`cd quick2wire-gpio-admin`

If src/gpio-admin.c has

`int size = snprintf(path, PATH_MAX, "/sys/devices/virtual/gpio/gpio%u/%s", pin, filename);`
change it to

`int size = snprintf(path, PATH_MAX, GPIO_CLASS_PATH "gpio%u/%s", pin, filename);`
Then, run 
`make`

Then, run

`sudo make install`

@TODO
===
* [ ] web dashboard to add drinks
* [ ] Implement prep / flushing of the tubes
* [ ] "Mixologist" Menu, on the fly drinks w/ input from the user at certain amount pours
* [ ] Voice controlled drink delivery [Wit quickstart](https://wit.ai/docs/nodejs/2.0.0/quickstart)

Resources
===
[http://www.thecocktaildb.com/](http://www.thecocktaildb.com/)
[http://raspberrypi.stackexchange.com/questions/27572/how-to-auto-start-chromium-after-boot-on-the-raspberry-2-2015-01-31-debian-whee](Start chromium on boot)

`sudo crontab -e` for @reboot sudo /usr/bin/node /path/to/script.js &
