// This will move the position of the servo to create tick marks to measure velocity
function move_servo(position_1: number, position_2: number, time_1: number, time_2: number) {
    pins.servoWritePin(AnalogPin.P15, position_1)
    basic.pause(time_1)
    pins.servoWritePin(AnalogPin.P15, position_2)
    basic.pause(time_2)
}

// This will move the robot at a determined speed.
function move_robot(speed: number) {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
}

// The robot will move at determined speed while leaving tick marks to indicate distance per second.
// The robot will provide 5 tick marks unless loop in increased or decreased.
// Touch the MicroBit logo to run the main program with 5 tick marks.
input.onLogoEvent(TouchButtonEvent.Pressed, function main() {
    move_robot(25)
    for (let i = 0; i < 5; i++) {
        move_servo(0, 180, 200, 800)
    }
    move_robot(0)
})
