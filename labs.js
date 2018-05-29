let age = window.prompt('What\'s your age in years?');
let gender = window.prompt('what\'s your gender? (m/f)');
let height = window.prompt('what\s your height in centimeters?');
let weight = window.prompt('what\'s your weight in kilograms?');
let exerciseLevel = window.prompt('\n Please note your activity level on this scale;\n 1. little of no exercise \n 2. exercise/sports 1-3 times a week \n 3. exercise/sports 4-5 times a week \n 4. exercise/sports 6-7 times a week \n 5. very hard exercise/sports of physical job');

let heightInCM = height / 100
let bodyWeightSquared = Math.pow(heightInCM,2);
let bmi = weight / Math.pow(height / 100, 2);
let idealBMI = 22.5;
let idealWeight = idealBMI * bodyWeightSquared;

var bmr = 10.0 * weight + 6.25 * height - 5.0 * age;
if (gender === 'm') {
  bmr += 5;
}
if (gender === 'f') {
  bmr -= 161;
}

var caloriesPerDay

switch (exerciseLevel) {
case '1':
  caloriesPerDay = bmr * 1.2
  break
case '2':
  caloriesPerDay = bmr * 1.375
  break
case '3':
  caloriesPerDay = bmr * 1.55
  break
case '4':
  caloriesPerDay = bmr * 1.725
  break
case '5':
  caloriesPerDay = bmr * 1.9
  break
default:
  caloriesPerDay = bmr * 1.2
  break
}

if (weight > idealWeight) {
  dietCaloriesPerDay = caloriesPerDay - 500
  dietWeeks = (weight - idealWeight) / 0.5
} else {
  dietCaloriesPerDay = caloriesPerDay + 500
  dietWeeks = (idealWeight - weight) / 0.5
}

document.write(`Your BMI is ${bmi} .\n At your hight, ideal body weight is ${idealWeight}.\n You need to at ${dietCaloriesPerDay} to reach your ideal weight in ${dietWeeks}.\n In order for you to maintain your ideal weight after you've got there, you need to eat ${caloriesPerDay} calories per day. `);
