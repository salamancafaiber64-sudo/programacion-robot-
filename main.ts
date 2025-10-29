input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("atras")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("izquierda")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("adelante")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("derecha")
})
radio.setGroup(1)
// Si no se presiona nada (detenerse)
basic.forever(function () {
    radio.sendString("stop")
    basic.pause(500)
})
