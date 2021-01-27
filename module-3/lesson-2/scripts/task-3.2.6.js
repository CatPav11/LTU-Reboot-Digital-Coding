var temperature = 51;
var weather = 'sunny';

if (temperature < 0) {
    document.write("Please stay inside");
} else if (temperature < 30) {
    document.write("Please wear a coat and a hat");
} else if (temperature < 50) {
    document.write("Please wear a coat");
} else if (temperature > 50 && weather === 'sunny') {
    document.write("Just pants and a vest is fine");
} else {
    document.write('wear a shirt');
}
