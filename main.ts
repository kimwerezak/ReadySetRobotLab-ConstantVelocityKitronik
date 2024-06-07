function move_servo(position_1: number, position_2: number, time_1: number, time_2: number) {
    //  80, 135, 50, 950
    pins.servoWritePin(AnalogPin.P15, position_1)
    basic.pause(time_1)
    pins.servoWritePin(AnalogPin.P15, position_2)
    basic.pause(time_2)
}

function move_robot(speed: number) {
    //  50
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
}

input.onLogoEvent(TouchButtonEvent.Pressed, function main() {
    move_robot(25)
    while (true) {
        move_servo(80, 135, 50, 950)
    }
})
