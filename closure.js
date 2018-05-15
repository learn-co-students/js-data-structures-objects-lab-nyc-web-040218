function startCar() {
  var hasKeys = true;
  function ignition() {
    if (hasKeys === true) {
      ignitionVar = 'successful';
    }
    ignition()
  }
  ignition()
}
