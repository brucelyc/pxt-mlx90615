basic.forever(function () {
    serial.writeLine("O:" + MLX90615.temperature(TemperatureLocation.Object))
    serial.writeLine("A:" + MLX90615.temperature(TemperatureLocation.Ambiant))
    serial.writeLine("")
    basic.pause(500)
})
