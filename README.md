# Makecode extensions for Ultimate SR04 RGB Ultrasonic Sensor

Makecode extensions for [Ultimate SR04 RGB Ultrasonic Sensor](https://www.sgbotic.com/index.php?dispatch=products.view&product_id=3248), an I2C ultrasonic sensor with illuminate transceiver.

Additional inforamtion:
* [User guide](https://www.sgbotic.com/index.php?dispatch=pages.view&page_id=54)
* [Microbit makecode tutorial](https://www.sgbotic.com/index.php?dispatch=pages.view&page_id=56)
* [Microbit microPython examples code](https://github.com/SGBotic/Microbit-microPython-Examples-for-Ultimate-SR04-RGB)

## Single sensor

* Initialize SR04 RGB
```blocks
sgbotic.initialize(96)
```

* Turn off all the LEDs
```blocks
sgbotic.offAllLeds()
```

* Set the color and light intensity of the RGB LED
```blocks
sgbotic.colorLightIntensity(sgbotic.LedEnum.Red, 125)
```

* Start distance measurement
```blocks
sgbotic.trigger()
```

* Read back the result in centimeter
```blocks
sgbotic.readcm()
```

* Read back the result in micro-second
```blocks
sgbotic.readUs()
```

* Read firmware version
```blocks
sgbotic.readVersion()
```

## Multiple sensors

* Turn off all the LEDs
```blocks
sgbotic.offAllLedMultiSr04(96)
```

* Set the color and light intensity of the RGB LED
```blocks
sgbotic.colorLightIntensityMultiSr04(sgbotic.LedEnum.Red, 125, 96)
```

* Start distance measurement
```blocks
sgbotic.triggerMultiSr04(96)
```

* Read back the result in centimeter
```blocks
sgbotic.readCmMultiSr04(96)
```

* Read back the result in micro-second
```blocks
sgbotic.readUsMultiSr04(96)
```

* Read firmware version
```blocks
sgbotic.readVersionMultiSr04(96)
```

## Advanced

* Change I2C address
```blocks
sgbotic.changeAddr(96, 86)
```

## License

MIT

## Supported targets

* for PXT/microbit

