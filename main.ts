let التعاون = 0
let الرائد = 0
input.onButtonPressed(Button.A, function () {
    التعاون += 1
})
input.onButtonPressed(Button.B, function () {
    الرائد += 1
})
basic.forever(function () {
    basic.showNumber(التعاون)
    basic.showNumber(الرائد)
})
