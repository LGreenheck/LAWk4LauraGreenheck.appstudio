var petNames = ["Darcy", "Jack", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]

function withSal(arr) {
  arr.push('Sal');
}
withSal(petNames);
console.log(petNames)

console.log(`The third pet is named ${petNames[2]}.`)

console.log(`The array has ${petNames.length} names in it.`)

petNames.pop()
