Distance = 0
sensor = 0

def on_forever():
    global Distance
    Distance = grove.measure_in_centimeters(DigitalPin.P0)
    if Distance < 4:
        pins.digital_write_pin(DigitalPin.P1, 1)
        basic.show_icon(IconNames.YES)
    else:
        pins.analog_write_pin(AnalogPin.P1, 0)
        basic.clear_screen()
basic.forever(on_forever)

def on_forever2():
    global sensor
    sensor = dht11.read_temperature(dht11.TemperatureType.CELSIUS, dht11.PinKit.P1)
    if input.button_is_pressed(Button.A):
        basic.show_number(sensor)
    if sensor > 50:
        l9110.control_motor(l9110.Motor.MOTOR_A, l9110.Rotate.FORWARD, 50)
        basic.pause(5000)
        l9110.pause_motor(l9110.Motor.MOTOR_A)
        basic.show_icon(IconNames.YES)
    else:
        basic.clear_screen()
basic.forever(on_forever2)
