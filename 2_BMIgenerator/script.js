//we use submit event bcz it is a form 
//in last project we used click event
//and we input a value

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;

  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;

      } else if ( weight < 18.6 || isNaN(weight)) {
    results.innerHTML = `User is under weight ${weight}`;

        } else if (weight > 18.6 && weight <24.9 || isNaN(weight)) {
    results.innerHTML = `User has normal weight ${weight}`;

    
        } else if (weight > 24.9 || isNaN(weight)) {
    results.innerHTML = `User is overweight ${weight}`;



  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); //to fixed used to avoid large number after point
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
    //The formula for Body Mass Index (BMI) is: BMI = weight (kg) / [height (m)]² or BMI = weight (lb) / [height (in)]² x 703.

    //BMI Weight Guide
// Under Weight = Less than 18.6

// Normal Range = 18.6 and 24.9

// Overweight = Greater than 24.9



