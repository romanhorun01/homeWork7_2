// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
//  let header = document.getElementById('main_header');
//  header.style.color = 'blue';
//  header.innerText = 'FEB-2021';
//


// b) робить шириниу елементу ul 400px
//  let allUl = document.getElementsByTagName('ul');
// for (let i = 0; i < rules.length; i++) {
//     allUl[i].style.width = '400px';
//
// }
//


// c) робить шириниу всіх елементів з класом linkList шириною 50%
//  let allLink = document.getElementsByClassName('linkList');
// for (let i = 0; i < allLink.length; i++) {
//
//  allLink[i].style.width = '50%';
//
// }
//
//
//


// d) отримує текст який зберігається в елементі з класом listElement2
// let text = document.getElementsByClassName('listElement2');
// console.log(text)
//


// e) отримує всі елементи li та змінює ім колір фону на сірий
// let text = document.getElementsByClassName('linkList');
// for (let i = 0; i < text.length; i++) {
//
//  text[i].style.backgroundColor = 'silver';
//
// }


// f) отримує всі елементи 'a' та додає їм клас anchor
// let aHref = document.getElementsByTagName('a')
//
// for (let i = 0; i < aHref.length; i++) {
//     aHref[i].classList.add('anchor');
//
// }
//


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let text = document.getElementsByTagName('a');
// for (let i = 0; i < text.length; i++) {
//     if (text[i].innerText === 'link3'){
//         text[i].style.fontSize = '40px';
//     }
//
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let text = document.getElementsByTagName('a');
// for (let i = 0; i < text.length; i++) {
//     text[i].classList.add('element_'${text[i].innerText})
//
// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let color = prompt('Enter color');
// let sub = document.getElementsByClassName('sub-header');
// for (let i = 0; i < sub.length; i++) {
//     sub[i].style.backgroundColor = color;
// }
//


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let color = prompt('Enter color');
// let sub = document.getElementsByClassName('sub-header');
// for (let i = 0; i < sub.length; i++) {
//      if (sub[i].innerText === 'content 2 segment'){
//         sub[i].style.color = color;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
//
// let content = document.getElementsByClassName('content_1');
// for (let i = 0; i < content.length; i++) {
//     content[i].innerText = prompt('enter text ...');
// }
//


// l) отримати елементи p та змінити їм padding на 20px
// let par = document.getElementsByTagName('p');
// for (let i = 0; i < par.length; i++) {
//     par[i].style.padding = '20px';
//
// }
//


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// let text = document.getElementsByClassName('text2')
// for (let i = 0; i < text.length; i++) {
//
//     text[i].innerText = 'FEB-2021';
//
// }


// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
//



//
// for (let i = 0; i < rules.length; i++) {
//
//     let rul = document.createElement('div');
//     document.body.appendChild(rul);
//     let title = document.createElement('div');
//     title.style.border = '2px black solid';
//     document.body.appendChild(title);
//     rul.innerHTML=`<h2>${rules[i].title}<h2/>`;
//         title.innerHTML=`<p>${rules[i].body}<p/>`;
//
//
// }







//
// ===========================================================================
//
//- Дано 2 масиви з рівною кількістю об'єктів.

    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },


//
// const full = []
// for (let i = 0; i < 4; i++) {
//     citiesWithId[i].user_id = usersWithId[i].id;
//     usersWithId[i].address = citiesWithId[i];
//     full.push(usersWithId[i]);
//
// }
//
//
//
// console.log(full);