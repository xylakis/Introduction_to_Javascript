// ------- JavaScript Lists -------

let zygoi = [0,2,4,6,8]
let monoi = [1,3,5,7,9]
let unsorted = [5,2,9,1,5,6]

// console.log(zygoi[2])
// console.log(monoi[1])

let matrix = [
    ["X","O","x"],
    ["O","O","O"],
    ["X","O","x"]
]
// alert(matrix[0][1])
// console.log(matrix.length)
// console.log(structuredClone(matrix));
matrix[0][1] = "X";

// alert(matrix[0][1])
// console.log(matrix)
// console.log(structuredClone(matrix));

// console.log(typeof(isStudent))
// console.log(typeof(height))

// remove by selection of value
zygoi = zygoi.filter(x => x !== 20);

// add element to the end of the list 
zygoi.push(12);

// add element to the beginning of the list 
zygoi.unshift(8);

// FIFO and LIFO 
zygoi.pop();    // removes last
zygoi.shift();  // removes first

//using a clone to keep my initial list intakt 
let unsorted_bak = structuredClone(unsorted)

let sortedList = unsorted.sort()
// console.log(sortedList)
// console.log(unsorted_bak)

unsorted.reverse()
// console.log(unsorted)

let mylist = unsorted.slice(1,-2)
// console.log(mylist)
// console.log(unsorted)

// console.log(zygoi)


// ------- JavaScript Objects -------

let casablance_list = ['Cablanca', '1942', 'Michael Curtiz']

//movie object
let casablanca = {
"title": "Casablanca",
"released": 1942,
"director": "Michael Curtiz",
"awards": ['best_director', 'best_movie', 'best_soundtrack'],
"main_protagonist" : "Mathew Perry",
"crew" : ['peter', 'georgia', 'helen']
}

//accessing object value using dot notation
// console.log(casablanca.title)

// console.log(casablanca['title'])

//accessing object value using array notation
// console.log(casablanca['crew'])

casablanca.released = 1941

// console.log(casablanca)


//pet object
let pet = {};

pet.name = "Fluffy";
pet.age = 3;
pet.type = 'guinea pig';
pet.favorite_foods = ['lettuce', 'carrots', 'cucumbers ']

let myOtherPet = {
    name : "Viktor",
    age : 5,
    type : "dog",
    favorite_foods : ['steak', 'sausages', 'lamb chops', 'dog food']
}

let my_favouritePet = {
    name : "Mars",
    age : 15,
    type : "dog",
    favorite_foods : ['Mpatzetes', 'Skilotrofi', 'Giaourti'] 

}

let my_pets = [pet,myOtherPet,my_favouritePet]

// make a new holder variable
const fs = require('fs');

// Convert object → JSON string
const json = JSON.stringify(my_pets, null, 2);

// Save to file
fs.writeFileSync('../data/my_pets.json', json);

console.log(my_pets);

console.log(JSON.stringify(my_pets))