var currentTemperature

currentTemperature = window.prompt('Hi, what is the current temperature?');

if (currentTemperature < 4) {
  alert('Parka weather');
} else if (currentTemperature > 4 && currentTemperature < 18) {
  alert('Jacket weather');
} else {
  alert('T-shirt weather');
}

function fits(x) {
if (Number.isInteger(x / 2)) {
  return `${currentTemperature} is an even number`;
} else return `${currentTemperature} is an odd number`;
}

document.write(fits(currentTemperature));

var favoriteLanguage = window.prompt('What is your favorite programming language?');

favoriteLanguage = favoriteLanguage.toLowerCase();

if (favoriteLanguage === 'javascript') {
  alert('I love Javascript!');
} else if (favoriteLanguage === 'php') {
  alert('I kinda not love PHP');
} else alert('Sorry, I mostly like Javascript');
