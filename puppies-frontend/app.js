console.log('Heyo!!!');

function getThemPuppies() {
  fetch('http://localhost:3000/puppies')
    .then(response => response.json())
    .then(result => displayPuppyData(result));
}

// const puppies = [];

getThemPuppies();

function displayPuppyData(puppies) {
  const list = document.createElement('ul');
  puppies.forEach(puppy => {
    const listItem = document.createElement('li');
    const name = document.createElement('h2');
    const breed = document.createElement('h3');
    const age = document.createElement('h4');

    name.innerText = puppy.name;
    breed.innerText = puppy.breed;
    age.innerText = puppy.age;

    listItem.append(name, breed, age);
    list.append(listItem);
  });
  document.body.append(list);
}
