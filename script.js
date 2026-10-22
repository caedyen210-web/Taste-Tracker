console.log("Hello World!");

// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Chicken Wings", "Pizza", "Ramen", "Tacos", "Sushi", "Steak"];

// 2. Loop through the list and print a message for each food.
for (let food of favoriteFoods) {
    console.log(`One of my favorite foods is ${food}.`);
}

// 3. Print out the rating for each food with a ranking.
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log(`My #${i + 1} favorite food is ${favoriteFoods[i]}`);
}

// 4a. Create a function that recommends a food.
function printFoodRecommendation(foodName) {
    console.log(`Have you ever tried ${foodName}?`);
    console.log(`What I would recommend ${foodName} to friends.`);
    console.log(`Personal favorites — ${foodName} is one of my top choices.`);
}

// 4b. Call the function at least 3 times.
printFoodRecommendation("Chicken Wings");
printFoodRecommendation("Pizza");
printFoodRecommendation("Ramen");

// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Sushi", "Pizza", "Burritos", "Salad", "Burgers", "Ramen", "Takis", "Spegittie", "Pickels", "Nachos", "Ice Cream", "Donuts", "Steak", "Lasagna", "Chicken Adobo", "Tacos", "Fries", "Sushi", "Fried Rice", "Crab", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Slasa", "Gyros", "Boa", "Beef Lo Main", "Pancakes", "Muffins", "Meatballs", "Macarons", "Shrimp", "Chicken Parmesan", "Pea Soup", "Okonomiyaki", "Boild Eggs", "Brisket", "Mac and Cheese", "Pears", "Clam Chowder", "Fajitas", "Hot Dogs", "Kimchi", "Tamales", "Omelette", "Biscuits","Spring Rolls","Bacon"
];

// 5. Print out only foods that have an "a" in the name.
for (let food of friendFavorites) {
    if (food.toLowerCase().includes("a")) {
        console.log(food);
    }
}

// 6. Store the result in an array called foodsWithA. Print out the array.
let foodsWithA = friendFavorites.filter(food =>
    food.toLowerCase().includes("a")
);
console.log("Foods with the letter 'a':", foodsWithA);

// 7. Create an array longFoodNames for foods with names longer than 6 characters.
let longFoodNames = friendFavorites.filter(food => food.length > 6);

// 8. Create another array shortFoodNames for foods 6 characters or shorter.
let shortFoodNames = friendFavorites.filter(food => food.length <= 6);

// 9. Print both arrays and compare their lengths.
console.log("Long food names:", longFoodNames);
console.log("Short food names:", shortFoodNames);

if (longFoodNames.length > shortFoodNames.length) {
    console.log("There are more long-named foods.");
} else if (shortFoodNames.length > longFoodNames.length) {
    console.log("There are more short-named foods.");
} else {
    console.log("There are an equal number of long-named and short-named foods.");
}

// 10. STRETCH: Find the longest food name and print its length.
let longestFoodName = friendFavorites[0];

for (let food of friendFavorites) {
    if (food.length > longestFoodName.length) {
        longestFoodName = food;
    }
}

console.log(
    `The longest food name in the list is ${longestFoodName} with ${longestFoodName.length} characters.`
);