'use strict';
navigator.clipboard
  .readText()
  /*Alert for accepting access to clipboard appears, user accepts*/
  .then((text) => {
    alert(text);
  });
let batteryIsCharging = false;

navigator.getBattery().then((battery) => {
  console.log(
    'Time to charge ' +
      new Date(battery.dischargingTime).toISOString().slice(11, 19)
  );
});
let a = new Promise(function executer(resolve, reject) {
  let randome = Math.random();
  if (randome > 0.5) {
    resolve(randome);
    return;
  } else {
    reject(randome);
  }
  return new Promise(executer);
});
a.then((data) => {
  console.log(`${data} is above 0.5`);
}).catch((data) => {
  console.log(`${data} is below 0.5`);
});
