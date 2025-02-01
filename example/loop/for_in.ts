const persons = {
  name: 'Chamnan',
  age: 25,
  from: 'Svay rieng',
  major: 'Computerr Science',
}

for(let key in persons) {
   
    console.log(key + ': ', persons[key]);
}