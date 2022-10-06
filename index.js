console.log("\n homework starts here");

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

const arrayOfPositiveNumbers = [1, 2, 3, 4, 5];
console.log(arrayOfPositiveNumbers);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

const meInfo = {
    myName: "Yuanyuan",
    mySurname: "Han",
    email: "405708111@qq.com",
    age: 30
}


/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
meInfo.hasDrivingLicense = false;
console.log(meInfo);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete meInfo.age;
console.log(meInfo);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/
const elseInfo = Object.assign({}, meInfo);
elseInfo.myName = "Ashley";
elseInfo.mySurname = "Kush";
elseInfo.email = "beautyexpresscostumerservice@gmail.com";

console.log("Another one's info: ", elseInfo);

console.log(meInfo.email === elseInfo.email);


/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
let totalShoppingCart = 30;
let shippingCost = 10;
let totalCost = totalShoppingCart >= 50 ? totalShoppingCart : totalShoppingCart + shippingCost;

console.log(totalCost);


/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
let totalShoppingCartBlack = 30;
let shippingCostBlack = 10;
let afterDiscount = totalShoppingCartBlack * (1 - 0.2);
let totalCostBlack = afterDiscount >= 50 ? afterDiscount : afterDiscount + shippingCostBlack;

console.log(totalCostBlack);


/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/
const carInfo = {
    brand: "Benz",
    Model: "C350",
    licesePlate: 88888
};

const carInfo1 = Object.assign({}, carInfo);
carInfo1.licesePlate = 99999;

const carInfo2 = Object.assign({}, carInfo);
carInfo2.licesePlate = 77777;

const carInfo3 = Object.assign({}, carInfo);
carInfo3.licesePlate = 66666;

const carInfo4 = Object.assign({}, carInfo);
carInfo4.licesePlate = 55555;

const carInfo5 = Object.assign({}, carInfo);
carInfo5.licesePlate = 33333;

console.log(carInfo, carInfo1, carInfo2, carInfo3, carInfo4, carInfo5);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

const arrayOfCarsForRent = [
    carInfo, carInfo1, carInfo2, carInfo3, carInfo4, carInfo5
];

console.log(arrayOfCarsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
const removeTheFirstCar = arrayOfCarsForRent.shift();
const removeTheLastCar = arrayOfCarsForRent.pop();
console.log(removeTheFirstCar, removeTheLastCar);


/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(arrayOfCarsForRent);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

const carsForSale = [];
carsForSale.push(carInfo3, carInfo4, carInfo5);
console.log(carsForSale);

const totalCars = carsForSale.concat(arrayOfCarsForRent);
console.log(totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for (let i=0; i<carsForSale.length; i++){
    console.log(i);
    console.log(carsForSale[i])
 };