/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Kevin Cuchon";
let currentYear = new Date().getFullYear();
let profilePicture = 'images/Kevin.jpeg';

/* Step 3 - Element Variables */


let nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('#profile-image');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);




/* Step 5 - Array */

let favFoods = ['Pizza', 'Sushi', 'Chocolate', 'Ice Cream'];
foodElement.innerHTML = favFoods.join('<br>');
let newFavoriteFood = 'Burgers';
favFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${newFavoriteFood}`;
favFoods.shift();
foodElement.innerHTML += '<br>' + favFoods.join('<br>');
favFoods.pop();
foodElement.innerHTML += '<br>' + favFoods.join('<br>');




