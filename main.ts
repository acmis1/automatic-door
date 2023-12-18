input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
})
let Distance = 0
pins.digitalWritePin(DigitalPin.P2, 0)
basic.forever(function () {
    Distance = grove.measureInCentimeters(DigitalPin.P0)
    if (Distance < 30) {
        basic.showIcon(IconNames.Yes)
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.InBackground)
        pins.servoWritePin(AnalogPin.P1, 83)
        pins.servoWritePin(AnalogPin.P1, 44)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P1, 158)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        pins.servoWritePin(AnalogPin.P1, 158)
    }
    basic.pause(100)
})
