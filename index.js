// Code your solution here
function findMatching(driver, name) {
    return driver.filter(driver => driver.toLowerCase() === name.toLowerCase());
    
}
function fuzzyMatch(driver, name) {
    return driver.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));
    
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  