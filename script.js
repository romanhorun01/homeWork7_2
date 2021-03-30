// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :


// a) отримує текст з параграфа з id "content"
// let par = document.getElementById('content');
//
// console.log(par);


// b) отримує текст з блоку з id "rules"
// const idName = document.getElementById('rules').textContent,
//     nameClass = document.getElementsByClassName('fc bp')
// console.log(idName);
// console.log(nameClass[0].textContent);



// c) замініть текст параграфа з id 'content' на будь-який інший

// let par = document.getElementById('content');
// par.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'


// d) замініть текст параграфа з id 'rules' на будь-який інший

// let divText = document.getElementById('rules');
//
// divText.innerText = 'Если скрипт – внешний, то пока браузер не выполнит его, он не покажет часть страницы под ним.'


// e) змініть кожному елементу колір фону на червоний
//  let par = document.getElementById('content');
// par.style.background  = 'red';
// let divText = document.getElementById('rules');
// divText.style.background = 'red';
// let rul = document.getElementsByClassName('fc_rules');
// console.log(rul);
// for (let i = 0; i < rul.length; i++) {
//     rul[i].style.backgroundColor  = 'red';
//
// }


// f) змініть кожному елементу колір тексту на синій
//  let par = document.getElementById('content');
// par.style.background  = 'blue';
// let divText = document.getElementById('rules');
// divText.style.background = 'blue';
// let rul = document.getElementsByClassName('fc_rules');
// console.log(rul);
// for (let i = 0; i < rul.length; i++) {
//     rul[i].style.backgroundColor  = 'blue';
//
// }
//
//


// g) отримати весь список класів елемента з id=rules і вивести їх в console.log

// let rul = document.getElementsByClassName('fc bp');
// console.log(rul);
//


// h) отримати всі елементи з класом fc_rules

// let fcRul = document.getElementsByClassName('fc_rules');
//  console.log(fcRul);
//


// i) поміняти колір тексту у всіх елементів fc_rules на червоний
//
//  let rul = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < rul.length; i++) {
//     rul[i].style.color = 'red';
//
// }


// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement.
//     Вставити цей блок на сторінку
// const users = [
//     {
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
//for (let i = 0; i < users.length; i++) {
//
//     const studentDiv = document.createElement('div');
//     studentDiv.innerHTML = `
//     Name : ${users[i].name} <br>
//     Age :  ${users[i].age} <br>
//     Status: ${users[i].status} <br>
//     City: ${users[i].address.city }<br>
//     Country : ${ users[i].address.country}<br>
//     Street :  ${ users[i].address.street}<br>
//     HouseNumber:  ${ users[i].address.houseNumber}<br>
//      <br>
//
//
//
//     <hr>
//     `;
//     document.body.appendChild(studentDiv);
// }
//
//
//
//
//


// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address:
//         {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// for (let i = 0; i < users.length; i++) {
//
//     const studentDiv = document.createElement('div');
//     const addDiv = document.createElement('divAdr')
//     studentDiv.innerHTML = `
//     Name : ${users[i].name} <br>
//     Age :  ${users[i].age} <br>
//     Status: ${users[i].status} <br>
//
//
//     <br>
//
//
//
//     `;
//
//     document.body.appendChild(studentDiv);
//     addDiv.innerHTML = `
//          City: ${users[i].address.city}<br>
//         Country : ${users[i].address.country}<br>
//         Street :  ${users[i].address.street}<br>
//         HouseNumber:  ${users[i].address.houseNumber}<br>
//         <hr>
//         `
//     addDiv.style.backgroundColor = 'yellow';
//     addDiv.style.fontSize = '15px';
//
//     document.body.appendChild(addDiv);
// }
//
//







