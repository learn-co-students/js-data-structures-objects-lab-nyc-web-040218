// Write your solution in this file!
driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  newObj = {...driver};
  newObj[key] = value
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {

  return delete {...driver}[key]

}

function destructivelyDeleteFromDriverByKey(driver, key) {

  delete driver[key]
  return driver

}
