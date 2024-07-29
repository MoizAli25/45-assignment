#! /usr/bin/env node

// Question # 2: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName :string = "eric";
console.log(`Hello! ${personName}, would you like to learn some Python today?`)



// Question # 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName1 :string = "Moiz Ali";
//lower
console.log("lowercase", personName1.toLocaleLowerCase())
// upper
console.log("uppercase", personName1.toLocaleUpperCase())
//title
console.log("titlecase", personName1.replace(/\b\w/g,c=> c.toUpperCase()))



// Question # 4:Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
let quote : string = "A person who never made a mistake never tried anything new.";
let author : string = "Albert Einstein";
console.log(`${author} once said, ${quote}`)



// Question # 5:Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person : string = "Albert Einstein";
let message : string = `${famous_person} once said, ${quote}`;
console.log(message)



// Question # 6:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName2 : string = "\t\n John doe \t\n"
console.log("Orignal:", personName2);
console.log("Stripped:", personName2.trim())



// Question # 7 & 8:Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3);
console.log(10 - 2);
console.log(4*2);
console.log(16/2);



// Question # 9:Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favNumber :number = 5;
console.log(`My favorite number is ${favNumber}`);



// Question # 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// 1)- These are the arthimetic operators
console.log(5 + 3);
console.log(10 - 2);
console.log(4*2);
console.log(16/2);
// 2)- This is how you print your favorite number and use templete literals
let favNumber1 :number = 5;
console.log(`My favorite number is ${favNumber1}`);



// Question # 11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friends: string[] = ['Ali','Ahmed','Faraz','Bilal','Anas','Moiz']
for (let i = 0; i< friends.length; i++){
       console.log(friends[i]);
}




// Question # 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let friends1: string[] = ['Ali','Ahmed','Faraz','Bilal','Anas','Moiz']
let message1: string= "Good to see you"
for (let i = 0; i< friends.length; i++){
       console.log(`${message1} ${friends1[i]}`);
}




// Question # 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation: string[] = ['Honda civic','land cruiser','hayabusa bike','toyota corolla','vespa bike']
let message2: string= "I would like to own"
for (let i = 0; i< transportation.length; i++){
       console.log(`${message2} ${transportation[i]}`);
}



// Question # 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guests_list: string[] = ['Ali','Ahmed','Faraz']
let message3: string= "You are invited to a dinner tonight."
for (let i = 0; i< guests_list.length; i++){
       console.log(`Mr. ${guests_list[i]}! ${message3} `);
}



// Question # 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.You’ll have to think of someone else to invite.
let guests_list1: string[] = ['Ali','Ahmed','Faraz','Bisma','Laiba'];
let message5: string= "You are invited to a dinner tomorrow.";

let excludedGuest0: string = "Ahmed";
let newGuest0: string = "Sohail";

console.log(`Mr ${excludedGuest0} will not be coming to the dinner tomorrow! `);

guests_list1[1]= newGuest0;
for (let i = 0; i< guests_list1.length; i++){
       console.log(`Dear Mr/Mrs ${guests_list1[i]}! ${message5} `);
}

// Question # 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let guests_list2: string[] = ['Ali','Ahmed','Faraz','Bisma',];
let message4: string= "\n You are invited to a dinner tomorrow. \n";

let excludedGuest: string = "Ahmed";
let newGuest: string = "Sohail";

guests_list2[1]= newGuest;

guests_list2.push('Fahad'); // end
guests_list2.unshift('Aliya'); // start
guests_list2.splice(3,0,'Javeria') //middle

console.log('Congratulations guys we found a bigger dinner table, we will ahve more friends');
guests_list2[1]= newGuest;
for (let i = 0; i< guests_list2.length; i++){
       console.log(`Dear Mr/Mrs ${guests_list2[i]}! ${message4} `);
}




// Question # 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
let guests_list3: string[] = ['Ali','Ahmed','Faraz','Bisma',];

let excludedGuest1: string = "Ahmed";
let newGuest1: string = "Sohail";

guests_list2[1]= newGuest1;

guests_list2.push('Fahad'); // end
guests_list2.unshift('Aliya'); // start
guests_list2.splice(3,0,'Javeria') //middle

console.log('Unfortunately, there is a problem and i can only invite two people');
guests_list2[1]= newGuest1;
for (let i = 0; i< 5; i++){
       guests_list2.pop()
       console.log(`Dear Mr/Mrs ${guests_list3[i]}! \n I'am sorry i can't invite you to the dinner. \n Thankyou `);
}
for (let i = 0; i< 2; i++){
    guests_list2.pop()
    console.log(`Dear Mr/Mrs ${guests_list3[i]}! \n I am happy to welcome you to the dinner \n Thankyou `);
}

console.log(`Empty list ${guests_list3}`);



// Question # 18: Seeing the World: Think of at least five places in the world you’d like to visit.
let places: string[] = ['Baku ','Spain ','Dubai ','Turkey ','France ']
console.log(`\nOrignal array: ${places}\n`);

console.log(`\nAlphabetical order: ${[...places].sort()}\n`);

console.log(`\nOrignal condition: ${places}\n`);

console.log(`\nReverse Alphabetical order: ${[...places].sort().reverse()}\n`);

console.log(`\nOrignal condition: ${places}\n`);

places.reverse()
console.log(`\nReversed list: ${places}\n`);

places.reverse()
console.log(`\nBack to orignal order: ${places}\n`);
places.sort()
console.log(`\nAlphabetical order stored: ${places}\n`);

places.sort().reverse()
console.log(`\nReversed Alphabetical order stored: ${places}\n`);



// Question # 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guests_list4: string[] = ['Ali','Ahmed','Faraz']
console.log(`I'am inviting ${guests_list.length} guests`);



// Question # 20:Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let lang: string[] =['Urdu','English','Chinese','Hindi','Arabic',"Russian"]
for(let i=0; i<lang.length; i++){
    console.log(lang[i]);
}



// Question # 21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface item  {
    name:string
    price:number
}
// two objects

const fruits: item = {
    name: 'apple',
    price: 250,
}

const vegies: item = {
    name: 'Onion',
    price: 300,
}
 console.log(`vegetable name: ${vegies.name}, vegetable price: ${vegies.price}`);
 console.log(`fruit name: ${fruits.name}, fruit price: ${fruits.price}`);
 



// Question # 22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let transport : string[] = ['bike','car','bus','train']
console.log(transport[4]);
console.log(transport[3]);




// Question # 23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car :string = 'subaru';

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

console.log("Is car === 'subaru'? I predict True.")
console.log(car === 'subaru')

console.log("Is car === 'Subaru'? I predict False.")
console.log(car === 'civic')

console.log("Is car != 'subaru'? I predict True.")
console.log(car != 'toyota')

console.log("Is car === 'subaru'? I predict False.")
console.log(car === 'train')

console.log("Is car !== 'subaru'? I predict True.")
console.log(car !== 'Subaru')

console.log("Is car === 'subaru'? I predict True.")
console.log(car === 'subaru')

console.log("Is car === 'subaru'? I predict false.")
console.log(car !== 'subaru')

console.log("Is car === 'subaru'? I predict false.")
console.log(car === ' subaru')

console.log("Is car !== 'subaru'? I predict True.")
console.log(car !== 'bicycle')




// Question # 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// With strings:
console.log('Equality with strings');

let string1: string = 'Fahad'
let string2: string = 'Fahad'
console.log('string1 === string2', string1 === string2); // true
console.log('string1 !== string2', string1 !== string2); // false

// // With lowercase function:
console.log('\n With lowercase function \n');
let car1= 'Civic';
console.log(car1.toLowerCase() === 'civic'); //true
console.log(car1.toLowerCase() !== 'civic'); //false

// // With numbers:
console.log('\n With Numbers \n');
let num1 = 55;
let num2 = 45;
console.log(`num1 = ${num1}, num2 = ${num2}`);
console.log('num1 === num2:', num1 === num2); //false
console.log('num1 !== num2:',num1 !== num2); //true
console.log('num1 > num2:' ,num1 > num2); //true
console.log('num1 < num2:',num1 < num2); //false
console.log('num1 <= 45:',num2 <= 45); //true
console.log('num2 >= 65:',num2 >= 45); //true

// // With AND & OR :
console.log('\n With AND & OR \n');
console.log( num1 > num2 || num1 == num2); //true
console.log( num1 > num2 && num1 == num2); //false

// //With item in array/ not in array:
console.log('\n With item in array/ not in array \n');
let list = [1,2,3,4,5,6]
console.log(list);
console.log('list contain 5 :',list.includes(5)); //true
console.log('list contain 7 :',list.includes(7)); //false
console.log('list does not contain 10 :',!list.includes(10)); //true
console.log('list does not contain 4 :',!list.includes(4)); //false





// Question # 25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// alien color is green
let alien_color = 'green';
console.log(`Green alien`);

if (alien_color === 'green'){
    console.log(`The player earned 5 points.`);
    }else{
    console.log(`{}`);
    
    }
// alien color is red
alien_color ='red';
console.log(`Red alien`);

if(alien_color === "green"){
    console.log(`The player earned 5 points.`); 
}else{
    console.log(`{}`); 
}





// Question # 26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
let alienColor :string = 'Green';
if( alienColor === 'Green'){
       console.log(`The player just earned 5 points for shooting the alien.`);     
}else{
    console.log(`The player just earned 10 points.`); 
}

alienColor = 'Red'
if( alienColor === 'Green'){
    console.log(`The player just earned 5 points for shooting the alien.`);     
}else{
 console.log(`The player just earned 10 points.`); 
}




// Quetion # 27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alienColor2 : string = 'Green';
if( alienColor2 === 'Green'){
        console.log(`There player just earned 5 points for shooting the alien.`);     
 }else if(alienColor2 === 'Red'){
    console.log(`There player just earned 10 points for shooting the alien.`);     
 }else if(alienColor2 === 'Yellow'){
    console.log(`There player just earned 15 points for shooting the alien.`);     
}

alienColor2 = 'Red';
if( alienColor2 === 'Green'){
    console.log(`There player just earned 5 points for shooting the alien.`);     
}else if(alienColor2 === 'Red'){
console.log(`There player just earned 10 points for shooting the alien.`);     
}else if(alienColor2 === 'Yellow'){
console.log(`There player just earned 15 points for shooting the alien.`);     
}

alienColor2 ='Yellow'
if( alienColor2 === 'Green'){
    console.log(`There player just earned 5 points for shooting the alien.`);     
}else if(alienColor2 === 'Red'){
console.log(`There player just earned 10 points for shooting the alien.`);     
}else if(alienColor2 === 'Yellow'){
console.log(`There player just earned 15 points for shooting the alien.`);     
}




// Question # 28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let personAge = 35;

if(personAge < 2 ){
    console.log(`The person is a Baby.`);  
}else if (personAge >= 2 && personAge <4){
    console.log(`The person is a Toddler.`);
}else if (personAge >= 4 && personAge <13){
    console.log(`The person is a Kid.`);
}else if (personAge >= 13 && personAge <20){
    console.log(`The person is a Teenager.`);
}else if (personAge >= 20 && personAge <65){
    console.log(`The person is a Adult.`);
}else if (personAge >= 65){
    console.log(`The person is a Elder.`);
}




// Question # 29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// Array of favorite fruits
let favorite_fruits: string[] = ['mango', 'strawberry', 'banana'];

// Checking for specific fruits
if (favorite_fruits.includes('mango')) {
    console.log("You really like mangoes!");
}

if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}




// Question # 30:Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let userNames :string[] = ['Admin','Feroz','Rameen','Bilal','Haroon','Bisma']
for(let username of userNames){
    if(username === 'Admin'){
        console.log(`Hello Admin! would you like to see the status report?`);
     }else{
        console.log(`Hello ${username}! thanks for logging in.`);
     }
}




// Question # 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let users : string[] = ['hamza','feroz','ahmed','sana','dua','laiba']
if (users.length === 0){
    console.log(`We need to find some users!`);   
}else{
    users = [];
    console.log('All users have been removed.' + users.length);
    
}




// Question # 32:Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
let current_users : string[]= ['hamza','feroz','ahmed','sana','dua','laiba'];
let new_users : string[]= ['ali','feroz','kamran','sadia','jawad','laiba'];
new_users.forEach((new_users) =>{
    if(current_users.some(
        (current_users) => current_users.toLocaleLowerCase() === new_users.toLocaleLowerCase()
    )
  ){
        console.log(`This username already exist, please enter a new username!`);  
    }else{
        console.log(`This usermane is available!`);
        
    }
})


// Question # 33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

const ordinalNumbers : number[] = [1,2,3,4,5,6,7,8,9];
for(let number of ordinalNumbers){
    if(number === 1){
        console.log(`${number}st`);    
    }else if(number === 2){
        console.log(`${number}nd`);    
    }else if(number === 3){
        console.log(`${number}rd`);    
    }else{
        console.log(`${number}th`);    
    }
}




// Question # 34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let pizzaFlav : string[] = ['chicken fajita','pepperoni','chicken tikka'];
for(let flavour of pizzaFlav){
    console.log(`I love ${flavour} pizza.`);
}
console.log(`I really like pizza.`);




// Question # 35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animal : string[] = ['cat','dog','horse'];
for(let name of animal){
    console.log(`A ${name} would make a great pet.`);
}
console.log(`Any of these animals would make a great pet!`);





// Question # 36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size: string, message: string){
    console.log(`The size of shirt is ${size} and the message to print on it is: ${message}`); 
}
make_shirt('Medium', 'learn typescript');





// Question # 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt2(size = 'Large', message ='I love typescript'): void{
    console.log(`The size of shirt is ${size} and the message to print on it is: ${message}`); 
}
make_shirt2()
make_shirt2('Medium')
make_shirt2('Small', 'coding is fun');




// Question # 38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city: string , country = 'Pakistan'):void {
    console.log(`${city} is in ${country}.`);
}
describe_city('karachi')
describe_city('Lahore')
describe_city('Mumbai','India')





// Question # 39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city : string , country:string){
    return`${city}, ${country}`;
}
let city1 = city_country('karachi','pakistan')
let city2 = city_country('Tokyo','japan')
let city3 = city_country('Washinton','USA')

console.log(city1);
console.log(city2);
console.log(city3);





// Question # 40: Album: Write a function called make_album() that builds a Object describing a music album.
function make_album(artistName: string, album_title:string){
    return{artistName,album_title}
}

let album1 = make_album('Pink Floyd', 'The Dark Side of the Moon');
let album2 = make_album('Led Zeppelin', 'Led Zeppelin IV');
let album3 = make_album('The Beatles', 'Abbey Road');

console.log(album1);
console.log(album2);
console.log(album3);

function make_album2(artistName: string, album_title:string, tracks?:number){
    return{artistName,album_title,tracks}
}
let album4 = make_album2('Nirvana', 'Nevermind', 12);

console.log(album4);





// Question # 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette'];

function show_magicians(magicians: string[]): void {
    magicians.forEach( magician =>{
        console.log(magician);
    })
}
show_magicians(magicians);





// Question # 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great1(magicians: string[]): void {
    for(let i=0; i < magicians.length; i++){
        magicians[i]=magicians[i] + ' the great';
    }
}

make_great1(magicians);
show_magicians(magicians)





// Question # 43:Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Function to modify magician's names to add "the Great" and return a new array
function make_great0(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let magician of magicians) {
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}

// Function to show magicians
function show_magicians1(magicians: string[]): void {
    console.log("List of Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Original array of magician's names
let originalMagicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call make_great() with a copy of the original array and store the modified array in a separate array
let modifiedMagicians: string[] = make_great0([...originalMagicians]);

// Show the original list of magicians
console.log("Original Magicians:");
show_magicians1(originalMagicians);

// Show the list of magicians with "the Great" added to each name
console.log("\nModified Magicians:");
show_magicians1(modifiedMagicians);





// Question # 44:Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich1(...items: string[]): void {
    console.log("summary of the sandwich that is being ordered:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function with different number of arguments
makeSandwich1("BLT (Bacon, Lettuce, Tomato)", "Club Sandwich", "Reuben Sandwich", "Philly Cheesesteak", "ham");
makeSandwich1("Grilled Cheese", "Turkey and Avocado", "Ham and Swiss");
makeSandwich1("Tuna Salad", "Chicken Caesar Wrap", "egg", "Veggie Delight");





// Question # 45:Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function who_create_Car1(manufacturer:string,model:string,...properties:[string,any][]):any{
    const car:any={
        manufacturer,
        model,
    };
    for(const [key,value]of properties){
        car[key]=value; 
    }
    return car; 
}
const MyCar=who_create_Car1("toyota","corolla",["color","red"],["optaional","Good speed"],["petrol maylej","1 to 12km"]);
console.log(MyCar);