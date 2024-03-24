let list = ["tiger", "cat", "bear", "bird"];


console.log(list[0]);


let nestedlist = [
    ["tiger", "cat", "bear", "bird"]
]

console.log(nestedlist[0][2])


let user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    shout: function(){
        console.log('Ahhhhh')
    }
};


let list = [
    {
        username: "Janio",
        password: "Testing123"
    },
    {
        username: "Alba",
        password: "Hola123"
    }
]

/*
For loops
01. For loops on length

Note: ++ is to add
 */

let todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study js",
    "eat healthy"
];

for (let i=0; i < todos.length; i++) {
    console.log(i)
}

/* Add exclamation mark to each text on the list */
for (let i=0; i < todos.length; i++) {
    todos[i] = todos[i] + "!";
}


for (let i=0; i < todos.length; i++) {
    todos.pop();
}


/*

01. While loops
02. counter while loops
03. For each method
Note: The do step goes first and then the while loop.

Most of the time you will use the for looo.
For each is the most popular because for each returns both the index and the value.
 */


// 01. While loops
let todosLength = todos.length

let counterOne = 10;
while (counterOne > 0) {
    console.log(counterOne);
    counterOne--;
}


let counterOne = 10
while (counterOne > 10) {
    console.log(counterOne);
    counterOne--;
}

// 02. Counter while loop

let counterTwo = 10
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0)


// 03. For each loop
let todosLength = todos.length
for (let i=0; i < todosLength; i++) {
    console.log(i)
}

// Also,foreach is good to understand. ForEach method is really great!
todos.forEach(function(todo, i) {
    console.log(todo, i)
})

// Another way of doing it.

let todosLength = todos.length
function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);



// Function to check all the items in a database for users and password
// List of users

var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }

]

let newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preettyyy cool!"
    }
];


function isUserValid(username, password){
    for (let i = 0; i < database.length; i++){
        if(database[i].username === username &&
            database[i].password === password) {
            return true;
        }
    }
    return false
}

function signIn(username, password){

    if (isUserValid(username, password)) {
        console.log(newsfeed)
    } else {
        alert("Sorry, wrong username and password")
    }
}

let userNamePrompt = prompt("What\s your username");
let passwordPrompt = prompt("What's your password");

signIn(userNamePrompt, passwordPrompt)


// const cannot be updated. You make sure the variable is always the same and cannot be updated.
// A function can be a constant.
// Use let if the variable changes and use const if the variable does not change.
// With constant you can change the properties in a json.


// Assign two variables:
const obj = {
    player: 'bobby',
    experience: 100,
    wizardlevel: false
}

// First alternative
const player = obj.player
const experience = obj.experience

// Second alternative
const {player, experience} = obj

const name = "John Snow"

const obj2 = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi'
}

const a = 'simon'
const b = true
const c = {};

const obj3 = {
    a,b,c
}

// Template strings
const name2 = 'Sally'
const age = 15
const pet = 'horse'


const greetingBest = `Hello ${name2} you seem to be tired ${age-10} nice ${pet}`


// default arguments

function greet(name2 = '', age = 30, pet = 'cat'){

    return `Hello ${name2} you seem to be tired ${age-10} nice ${pet}`

}


// Arrow functions
const add = (a, b) => a + b

// is the same as
function add(a,b){
    return a + b
}
































