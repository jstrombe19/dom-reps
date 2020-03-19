console.log('Heyo!!!');

function getThemPuppies() {
  fetch('http://localhost:3000/puppies')
    .then(response => response.json())
    .then(result => displayPuppyData(result))
    .then(result => adoptablePuppies(result));
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
  return puppies;
}

function adoptablePuppies(puppies) {
  const puppyForm = document.getElementById('puppy-adoption-dropdown');
  const buffaloButtBreath = document.createElement('buffaloButtBreath');
  buffaloButtBreath.innerHTML = `<option value='487'>Billie Jean</option>`;
  puppyForm.append(buffaloButtBreath);
  console.log(puppyForm);
  console.log(puppies);
}
