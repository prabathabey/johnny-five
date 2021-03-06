var five = require("../lib/johnny-five.js");

five.Board().on("ready", function() {
  var temperature = new five.Temperature({
    controller: "TMP36",
    pin: "A0"
  });

  temperature.on("data", function(err, data) {
    console.log(data.celsius + "°C", data.fahrenheit + "°F");
  });
});

// @markdown
// - [TMP36 - Temperature Sensor](https://www.sparkfun.com/products/10988)
// @markdown
