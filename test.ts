// tests go here; this will not be compiled when this package is used as an extension.
for (let i = 0; i < 25; i++){
    ShowOff.fillAtPos(i);
    basic.pause(100);
}
basic.clearScreen()

ShowOff.onLimitReached(function (limit: number) {
    basic.plotLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
})

ShowOff.onLimitNotReached(function (limit: number) {
    basic.plotLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    `)
})
while(true) {
    ShowOff.checkLimit(AnalogPin.P0);
}