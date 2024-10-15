function doMotors (Direction2: number, Duration: number) {
    if (Direction2 == Stop) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showString("S")
    } else if (Direction2 == GoForward) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showString("F")
    } else if (Direction2 == GoBackward) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showString("B")
    } else if (Direction2 == TurnRight) {
        // R
        pins.digitalWritePin(DigitalPin.P8, 0)
        // R
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showString("R")
    } else if (Direction2 == TurnLeft) {
        // R
        pins.digitalWritePin(DigitalPin.P8, 1)
        // R
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showString("L")
    } else if (Direction2 == SoftTurnRight) {
        // R
        pins.digitalWritePin(DigitalPin.P8, 0)
        // R
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showString("R")
    } else if (Direction2 == SoftTurnLeft) {
        // R
        pins.digitalWritePin(DigitalPin.P8, 1)
        // R
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showString("L")
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showString("S")
    }
    basic.pause(Duration)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    doMotors(GoForward, 2000)
    for (let Counter = 0; Counter <= 3; Counter++) {
        basic.showNumber(Counter + 1)
        basic.pause(250)
        doMotors(TurnLeft, pause4Turn90)
    }
    basic.pause(250)
    doMotors(GoForward, 2000)
    basic.showString("D")
})
let pause4Turn90 = 0
let SoftTurnLeft = 0
let SoftTurnRight = 0
let TurnLeft = 0
let TurnRight = 0
let GoBackward = 0
let GoForward = 0
let Stop = 0
Stop = 0
GoForward = 1
GoBackward = 2
TurnRight = 3
TurnLeft = 4
SoftTurnRight = 5
SoftTurnLeft = 6
pause4Turn90 = 300
let pause4SoftTurn90 = 600
music.playTone(262, 500)
basic.showString("CB")
