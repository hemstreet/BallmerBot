Ballmer Bot
==

***Work in progress***

@TODO: Remove pi-gpio or pi-gpio-promise from package.json
Raspberry pi controller drink maker to reach ballmer's peak.

The concept of Ballmer's peak stems from the xkcd article where it point in which you have had enough drinks to be
at your programming peak. After another drink it is downhill and productivity is hindered.

Original Comic
[https://xkcd.com/323/](https://xkcd.com/323/)

Calculator
[http://www.ballmerpeakathon.com/calc](http://www.ballmerpeakathon.com/calc)

Troubleshooting
===

For errors like
```
Error when trying to open pin 16
gpio-admin: failed to change group ownership of /sys/devices/virtual/gpio/gpio23/direction: No such file or directory
``````
run `gpio-admin export 16`
