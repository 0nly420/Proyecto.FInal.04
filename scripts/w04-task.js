/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};
/* Populate Profile Object with placesLive objects */


/* DOM Manipulation - Output */

/* Name */

myProfile.name = "Kevin Cuchon Morales";

/* Photo with attributes */

myProfile.photo = "images/Kevin.jpeg";

/* Favorite Foods List*/
myProfile.favoriteFoods = [
    'Rice',
    'Tikka Masala',
    'Prioshki',
    'Shrimp',
    'Banana Cream Pie'
  ];

/* Hobbies List */

myProfile.hobbies = ['Play Soccer', 'Travel', 'Play Guitar'];

/* Places Lived DataList */
myProfile.placesLived = [];

myProfile.placesLived.push(
  {
    place: 'Mollendo, Arequipa',
    length: '8 year'
  },
  {
    place: 'Arequipa (City), Arequipa',
    length: '14 years'
  }
);

/* DOM Manipulation */


document.querySelector('#name').textContent = myProfile.name;


document.querySelector('#photo').src = myProfile.photo;


document.querySelector('#photo').alt = myProfile.name;


myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});


myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});


const dl = document.querySelector('#places-lived');


myProfile.placesLived.forEach(placeInfo => {
  let dt = document.createElement('dt');
  dt.textContent = placeInfo.place;

  let dd = document.createElement('dd');
  dd.textContent = placeInfo.length;

  dl.appendChild(dt);
  dl.appendChild(dd);
});
