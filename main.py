#This will move the position of the servo to create tick marks to measure velocity
def move_servo(position_1, position_2, time_1, time_2):
    pins.servo_write_pin(AnalogPin.P15, position_1)
    basic.pause(time_1)
    pins.servo_write_pin(AnalogPin.P15, position_2)
    basic.pause(time_2)

#This will move the robot at a determined speed.
def move_robot(speed):
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, speed)

#The robot will move at determined speed while leaving tick marks to indicate distance per second.
#The robot will provide 5 tick marks unless loop in increased or decreased.
def main():
    move_robot(25)
    for i in range (5):
        move_servo(0, 180, 200, 800)
    move_robot(0)

#Touch the MicroBit logo to run the main program with 5 tick marks.
input.on_logo_event(TouchButtonEvent.PRESSED, main)

