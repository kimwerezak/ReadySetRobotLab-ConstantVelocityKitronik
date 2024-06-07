def move_servo(position_1, position_2, time_1, time_2):# 80, 135, 50, 950
    pins.servo_write_pin(AnalogPin.P15, position_1)
    basic.pause(time_1)
    pins.servo_write_pin(AnalogPin.P15, position_2)
    basic.pause(time_2)

def move_robot(speed):# 50
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, speed)

def main():
    move_robot(25)
    while True:
        move_servo(80, 135, 50, 950)
        
input.on_logo_event(TouchButtonEvent.PRESSED, main)

