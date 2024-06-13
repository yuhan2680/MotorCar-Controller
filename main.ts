joystickbit.initJoystickBit()
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendValue("x", -100)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendValue("x", 100)
    } else {
        radio.sendValue("x", 100 - joystickbit.getRockerValue(joystickbit.rockerType.Y) / 5)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendValue("y", 210)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendValue("y", 150)
    } else {
        radio.sendValue("y", joystickbit.getRockerValue(joystickbit.rockerType.X) / 1000 * 180 + 90)
    }
})
