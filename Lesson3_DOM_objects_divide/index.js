// <<<<<<<<<Lesson 3 Homework >>>>>>>>>>

//1. создать 5 объектов. В каждом объекте не менее 3х полей. Все
// объекты разные по набору полей. (Т.е поле name  должно
// присутствовать только 1 раз в одном объекте )
//
// let user= {
//  name: 'Vasya',
//  age: 34,
//  status: 'active',
// }
// let admin = {
//  name: 'Boss',
//  owner: 'Vova',
//  decision: 'delayed',
// }
//
// let payment = {
//  position: 'manager',
//  age: 33,
//  skills: '10 years or experience',
// }
//
// let economics = {
//  job: 'CEO',
//  salary: 150000,
//  employment: 'full',
// }
//
// let responsobilities = {
//  workingDay: '45 hours per week',
//  manage: 'working process',
//  decisions: 'personal',
// }

//2. создать 5 объектов с полностью разным набором полей. В каждом
// объекте должен присутсвовать массив и внутренний объект. Опишите что
// угодно, машину, картину, болт...
// Пример : let man = { name: 'kokos', skills : ['java','js'] ,
// wife: { name: 'cherry' } };
// let user= {
//  name: 'Alex',
//  age: 34,
//  status: {active: 'unclock'}
// }
// let admin = {
//  name: 'Boss',
//  owner: 'John',
//  decision: ['pending'],
// }
//
// let workingPocition = {
//  position: 'software engineer',
//  age: 33,
//  skills: ['js', 'html', 'python', 'Bachelors degree'],
// }
//
// let positionCEO = {
//  job: 'CEO',
//  salary: 150000,
//  employment: 'full',
// }
//
// let obligations = {
//  workingDay: '45 hours per week',
//  manage: 'working process',
//  decisions: 'personal response',
// }

//3. При помощи for in вывести все ключи всех объектов из задания 1 и 2
// console.log(user);
// for (let key in user){
//  console.log('key', key);
// }
// console.log(admin);
// for (let key in admin) {
//  console.log('key', key)
// }
// console.log(workingPocition);
// for (let key in workingPocition){
//  console.log('key', key);
// }
//
// console.log(positionCEO);
// for (let key in positionCEO){
//  console.log('key',key);
// }
//
// console.log(obligations);
// for (let key in obligations){
//  console.log('key', key);
// }

//4. При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// <<<<Object.keys(user).log>>>>
// console.log(Object.keys(user));
//
// console.log(Object.keys(admin));
//
// console.log(Object.keys(workingPocition));
//
// console.log(Object.keys(positionCEO));
//
// console.log(Object.keys(obligations));

//5. Создать массив из 10 объектов cars и заполнить его машинами с
// полями модель, год выпуска, мощность, цвет. (Значаения полей могу
// быть выдуманными)
// let users = [
//     {model: 'Ford', year: 2021, power: 600},
//     {model: 'Tesla', year: 2017, power: 1000},
//     {model: 'Ferrary', year: 1999, power:680},
//     {model: 'Land Rover', year: 2020, power: 550},
//   ];
// 8exercise
// let i = 0;
// while (i < users.length ){
//     console.log(users[i]);
//     i++;
// }
//
// 9 exercise
// for (let j = 0; j < users.length; j++) {
//     console.log(users[j]);
// }
//
// 10 exercise
// for (let items in users){
//     console.log(items);
// }

// /6. Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//  {city: 'Vancuver', country: 'Canada', population: 34000000, region: 'North America', spotRate: '1.28'},
//  {city: 'Oslo', country: 'Norway', population: 2000000, region: 'North Europe', spotRate: '0.88'},]
// 8exercise
// let i = 0
// while (i <cities.length ){
//     console.log(cities[i]);
//     i++;
// }
// 9exercise
// for (let j = 0; j < cities.length; j++) {
//     console.log(cities[j]);
// }
// 10exercise
// for (let items in cities){
//     console.log(items);
// }

//7. Done. Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
//  let cars = [
//   {name: 'Ford',model: 'GT', year: 2021, power: 600, colour: 'white', driver: {name: 'AB', age: 37, sex: 'M', experience: 10,}},
//   {name: 'Tesla',model: 'S', year: 2017, power: 1000, colour:'black', driver: {name: 'BC', age: 33, sex: 'M', experience: 12,}},
//   {name: 'Ferrari',model: 'Italia', year: 1999, power: 680, colour:'navyblue', driver: {name: 'CD', age: 34, sex: 'M', experience: 14,}},
//   {name: 'Land Rover',model: 'Range Rover', year: 2020, power: 550, colour:'gray', driver: {name: 'DE', age: 32, sex: 'M', experience: 11,}},
// ]
// let i = 0
// 8exercise
// while (i <cars.length ){
//  const cars1 = cars[i]
//  console.log(cars1);
//     i++;
// }
// 9exercise
// for (let j = 0; j < cars.length; j++) {
//     console.log(cars[j]);
// }
// // 10exercise
// for (let items in cars){
//     console.log(items);
// }

//8. Done. проитерировать каждый массив из задания 5,6,7 при помощи while.

//9. Done. проитерировать каждый массив из задания 5,6,7 при помощи for.

//10. Done. проитерировать каждый массив из задания 5,6,7 при помощи  for of.

//11. Done. взять объекты из задания 1 и превратить каждый в json.
// let user= {
//  name: 'Vasya',
//  age: 34,
//  status: 'active',
// }
//
// let myJsonUser = JSON.stringify(user);
// console.log(myJsonUser)
// let user1 = JSON.parse(myJsonUser);
// console.log(user1);
//
// let admin = {
//  name: 'Boss',
//  owner: 'Vova',
//  decision: 'delayed',
// }
//
// let myJsonAdmin = JSON.stringify(admin);
// console.log(myJsonAdmin);
//
// let admin1 = JSON.parse(myJsonAdmin);
// console.log(admin1);
//
//
// let payment = {
//  position: 'manager',
//  age: 33,
//  skills: '10 years or experience',
// }
//
// let myJsonPayment = JSON.stringify(payment);
// console.log(myJsonPayment);
//
// let payment1 = JSON.parse(myJsonPayment);
// console.log(payment1);
//
// let economics = {
//  job: 'CEO',
//  salary: 150000,
//  employment: 'full',
// }
//
// let myJsonEconomics = JSON.stringify(economics);
// console.log(myJsonEconomics);
//
// let economics1 = JSON.parse(myJsonEconomics);
// console.log(economics1);
//
// let responsobilities = {
//  workingDay: '45 hours per week',
//  manage: 'working process',
//  decisions: 'personal',
// }
//
// let myJsonRespons = JSON.stringify(responsobilities);
// console.log(myJsonRespons);
//
// let responsob1 = JSON.parse(myJsonRespons);
// console.log(responsob1);

//12. Done. взять json из задания 11 и превратить их обратно в объекты.

//13. взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// let users = [
//     {model: 'Ford', year: 2021, power: 600},
//     {model: 'Tesla', year: 2017, power: 1000},
//     {model: 'Ferrary', year: 1999, power:680},
//     {model: 'Land Rover', year: 2020, power: 550},
//   ];
// let i = 0;
// while (i < users.length ){
//     console.log(users[i]);
//     i++;
// }
//
// let myJsonUsers = JSON.stringify(users[i]);
// console.log(myJsonUsers);

//14. взять массив из задания 6,в цикле перебрать его объекты превратив их в json.
// let cities = [
//  {city: 'Vancuver', country: 'Canada', population: 34000000, region: 'North America', spotRate: '1.28'},
//  {city: 'Oslo', country: 'Norway', population: 2000000, region: 'North Europe', spotRate: '0.88'},]
// 8exercise
// let i = 0
// while (i <cities.length ){
//     console.log(cities[i]);
//     i++;
// }
// let myJsonCities = JSON.stringify(cities);
// console.log(myJsonCities);

//15. взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
//  let cars = [
//   {name: 'Ford',model: 'GT', year: 2021, power: 600, colour: 'white', driver: {name: 'AB', age: 37, sex: 'M', experience: 10,}},
//   {name: 'Tesla',model: 'S', year: 2017, power: 1000, colour:'black', driver: {name: 'BC', age: 33, sex: 'M', experience: 12,}},
//   {name: 'Ferrary',model: 'Italia', year: 1999, power: 680, colour:'navyblue', driver: {name: 'CD', age: 34, sex: 'M', experience: 14,}},
//   {name: 'Land Rover',model: 'Range Rover', year: 2020, power: 550, colour:'gray', driver: {name: 'DE', age: 32, sex: 'M', experience: 11,}},
// ]
// let newArray = [];
// for (let i = 0; i < cars.length; i++){
//  newArray.push(JSON.stringify(cars));
// }
// console.log(newArray);

//16. Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
//  let users = [
//      {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//      {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//      {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//      {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//      {name : 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//
// for (const user of users) {
//  console.log('name:', user.name);
//  for (const skill of user.skills) {
//   console.log(skill);
//  }
// }
// or

// <<<<<<<<<<<<<<HARD Understand>>>>>
// for (const keyUser in users){
//  for (const keySkill in users [keyUser].skills){
//   console.log(users[keyUser].skills[keySkill]);
//  }
//
// }

//17.  Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный масси
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
//  let users = [
//      {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//      {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//      {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//      {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//      {name : 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
//      ]
// newArray = [];
// for (const user of users) {
//  console.log('name:' ,user.name);
//  for (const skill of user.skills) {
//   newArray.push(skill);
//  }
// }
// console.log(newArray);

// 19.  За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//   {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//   {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//   {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//   {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for (const user of users) {
//  console.log(user);
//  for (const skill of user.skills) {
//   console.log(skill);
//  }
// }


// 24. З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//
// 25. За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// 27. За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

            			let users = [  {
            				name: 'vasya',
            				age: 31,
            				status: false,
            				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
            			}, {
            				name: 'petya',
            				age: 30,
            				status: true,
            				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
            			}, {
            				name: 'kolya',
            				age: 29,
            				status: true,
            				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
            			}, {
            				name: 'olya',
            				age: 28,
            				status: false,
            				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
            			}, {
            				name: 'max',
            				age: 30,
            				status: true,
            				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
            			}, {
            				name: 'anya',
            				age: 31,
            				status: false,
            				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
            			}, {
            				name: 'oleg',
            				age: 28,
            				status: false,
            				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
            			}, {
            				name: 'andrey',
            				age: 29,
            				status: true,
            				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
            			}, {
            				name: 'masha',
            				age: 30,
            				status: true,
            				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
            			}, {
            				name: 'olya',
            				age: 31,
            				status: false,
            				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
            			}, {
            				name: 'max',
            				age: 31,
            				status: true,
            				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
            			}];

// 24. З масиву users за допомогою циклу витягнути адреси користувачів і
// записати (скопіювати) їх в інший порожній масив.
// let newArr = [];
// for (const user of users) {
//  newArr.push('address:', user.address);
// }
// console.log(newArr);
// .............................or.......................
// let newArr = [];
// for (const user of users) {
//  newArr.push(user.address);
// }
// newArr[1].name = 'something';
// console.log(users);
// console.log(newArr[0]);

// 25. NEED DEEP EXPLANATION!!! 1:00:36
// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй
// блок за допомоги document.createElement. Всі данні в одному блоці.
// document.addEventListener("DOMContentLoaded", function(event) {
// for (let i = 0; i < users.length; i++){
// 	const user = users[i];
// 	const div = document.createElement('div');
// 	let address = '';
// 	for (const address1 in user.address) {
// 		address = address + ' ' + user.address[address1];
// 	}
// 	div.innerText = `${user.name} ${user.age} ${user.status} ${address}`;
// 	document.body.appendChild(div);
// }

// 26. NEED DEEP EXPLANATION
// За допомоги циклу проітерувати  масив users, записати кожного юзера
// в сівй блок за допомоги document.createElement, розділивши всі властивості
// по своїм блокам (div>div*4)
// for (let i = 0; i < users.length; i++){
// 	const user = users[i];
// 	const div = document.createElement('div');
// 	const h3 = document.createElement('h3');
// 	const p1 = document.createElement('p');
// 	const p2 = document.createElement('p');
// 	let address = '';
// 	for (const address1 in user.address) {
// 		address = address + ' ' + user.address[address1];
// 	}
// 	// div.innerText = `${user.name} ${user.age} ${user.status} ${address}`;
// 	// document.body.appendChild(div);
// 	h3.innerText = user.name;
// 	p1.innerTexr = user.age;
// 	p2.innerText = address;
//
// 	div.appendChild(h3);
// 	div.appendChild(p1);
// 	div.appendChild(p2);
// 	document.body.appendChild(div);
// }

// 27. - За допомоги циклу проітерувати  масив users, за писати кожного
// юзера в сівй блок за допомоги document.createElement, розділивши всі
// властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (let i = 0; i < users.length; i++){
// 	const user = users[i];
// 	const div = document.createElement('div');
// 	const name = document.createElement('h3');
// 	const age = document.createElement('p');
// 	const status = document.createElement('p');
// 	const address = document.createElement('div');
//
// 	for (const item in user.address) {
// 		const temp = document.createElement('div');
// 		tempp.innerHTML = item;
// 		address.appendChild(temp);
// 	}
// 	name.innerText = user.name;
// 	age.innerText = user.age;
// 	status.innerText = user.status;
//
// 	div.appendChild(name);
// 	div.appendChild(age);
// 	div.appendChild(status);
// 	div.appendChild(addresss);
// 	document.body.appendChild(div);
// }

// 87. Дано 2 масиви з рівною кількістю об'єктів. 1:17:00
// Масиви:
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

 // let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// for (const user of usersWithId){
// 	for (const city of citiesWithId){
// 		if(user.id === city.user_id){
// 			user.address = city;
// 		}
// 	}
// }
// console.log(usersWithId);

// or it doesnt work actually.
// usersWithId.forEach(user => {
// 	user.address = cityWithId.find(value => value.user_id === user.id)
// });
// console.log(usersWithId);

// 100. - створити розмітці блок з id, class та текстом в середені.
// Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag




// - 102 змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - 103 за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - 104 за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - 105 за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - 106 за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
//
// --108 Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний















