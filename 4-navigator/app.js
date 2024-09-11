// Текущая широта и долгота 
let positionLatitude;
let positionLongitude;
// Широта и долгота  точки назначения
let destinationLatitude;
let destinationLongitude;
// Формула расчета расстояния от текущей точки до точки назначения
positionLatitude = 2;
destinationLatitude = -4;
positionLongitude = -5;
destinationLongitude = 3;
const distance = Math.sqrt((positionLatitude - destinationLatitude) ** 2 + (positionLongitude - destinationLongitude) ** 2);

console.log(distance);