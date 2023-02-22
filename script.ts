import { Coordinates, CalculationMethod, PrayerTimes } from 'adhan';

// coordinates in Malaysia
const coordinates = new Coordinates(2.971156, 101.714447);

// Using Singapore calculation method
// fajrAngle = 20, ishaAngle = 18
// https://github.com/batoulapps/Adhan/issues/78#issuecomment-322657059
const params = CalculationMethod.Singapore();

const date = new Date();
const prayerTimes = new PrayerTimes(coordinates, date, params);

// print all the prayer times
console.log(prayerTimes.fajr.toLocaleString());
console.log(prayerTimes.sunrise.toLocaleString());

// add 1m 4s to calculated Dhuhr time
let dhuhr = prayerTimes.dhuhr;
dhuhr.setMinutes(dhuhr.getMinutes() + 1);
dhuhr.setSeconds(dhuhr.getSeconds() + 4);

console.log(dhuhr.toLocaleString());
console.log(prayerTimes.asr.toLocaleString());
console.log(prayerTimes.maghrib.toLocaleString());
console.log(prayerTimes.isha.toLocaleString());

