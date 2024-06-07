input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.stop()
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P15, 90)
    basic.pause(50)
    pins.servoWritePin(AnalogPin.P15, 135)
    basic.pause(950)
})



> Open this page at [https://kimwerezak.github.io/readysetrobotlab-constantvelocitykitronik/](https://kimwerezak.github.io/readysetrobotlab-constantvelocitykitronik/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/kimwerezak/readysetrobotlab-constantvelocitykitronik** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/kimwerezak/readysetrobotlab-constantvelocitykitronik** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
