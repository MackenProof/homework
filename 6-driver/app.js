const hasLicence = true;
const age = 19;
const isDrunk = false;
const checkDriver = hasLicence && (age >= 18) && !isDrunk
console.log(`Ему можно сесть за руль? : ${checkDriver ? 'ДА' : 'Нет!' }`);