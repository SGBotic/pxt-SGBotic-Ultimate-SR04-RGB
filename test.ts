// Test file for SGBotic Ultimate SR04 RGB
// example code initialize the sensor and turn on Red LED 
// In the forever loop, the code trigger the sensor, read
// the distance measured and display the result on LED matrix
// The code uses defalut address of 96 (0x60)

SGBotic.initialize(96)
SGBotic.offAllLeds()
SGBotic.colorLightIntensity(SGBotic.LedEnum.Red, 125)

basic.forever(function () {
    SGBotic.trigger()
    basic.showNumber(SGBotic.readcm())
    basic.pause(100)
})
