//4.1 Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10. Компьютер случайным образом запоминает 10 ячеек из этой таблицы. Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.
// let size = 10;
// function createTable(size) {
//     let digit = 1;
// 	let table = document.createElement('table');
// 	for (let i = 0; i<size; i++) {
//         let tr = document.createElement("tr")
// 		for (let j = 0; j < size; j++) {
//             let td = document.createElement("td")
//                 td.textContent = digit;
//                 ++digit
//                 tr.appendChild(td)   
// 		}
//         table.appendChild(tr)
// 	}
// 	return table;
// }
// let div = document.querySelector('#elem1');
// let table1 = createTable(size);
// div.appendChild(table1);
// let tds = document.querySelectorAll("td")
// function func(num, min, max){
//     let rez =[]
//     while(rez.length != num){
//         let rand = Math.floor(Math.random()*(max-min +1 ))+ min;
//         if(rez.indexOf(rand) == -1){
//             rez.push(rand)
//         }
//     }
//     console.log(rez)
//     let end = 0;
//     for(let td of tds){
//         td.addEventListener("click", function(){
//             if(end !=10){
//                 if(rez.includes(Number(td.textContent))){
//                 td.style.background = "green"
//                 ++end
//             }
//             else{
//                 td.style.background = "red"
//             }
//             }
//             else{
//                 alert("Вы отгадали все ячейки")
//             }
            
//         })
//     }

// }
// func(10, 0, 100)


//4.2 Модифицируйте предыдущую задачу, добавив таймер обратного отсчета. Если игрок не успеет угадать числа за отведенное время - он проиграл.
// let size = 10;
// function createTable(size) {
//     let digit = 1;
// 	let table = document.createElement('table');
// 	for (let i = 0; i<size; i++) {
//         let tr = document.createElement("tr")
// 		for (let j = 0; j < size; j++) {
//             let td = document.createElement("td")
//                 td.textContent = digit;
//                 ++digit
//                 tr.appendChild(td)   
// 		}
//         table.appendChild(tr)
// 	}
// 	return table;
// }
// let div = document.querySelector('#elem1');
// let table1 = createTable(size);
// div.appendChild(table1);
// let tds = document.querySelectorAll("td")
// function func(num, min, max){
//     let rez =[]
//     while(rez.length != num){
//         let rand = Math.floor(Math.random()*(max-min +1 ))+ min;
//         if(rez.indexOf(rand) == -1){
//             rez.push(rand)
//         }
//     }
//     console.log(rez)
//     let end = 0;
//     for(let td of tds){
//         td.addEventListener("click", function(){
//             if(end !=10){
//                 if(rez.includes(Number(td.textContent))){
//                 td.style.background = "green"
//                 ++end
//             }
//             else{
//                 td.style.background = "red"
//             }
//             }
//             else{
//                 alert("Вы отгадали все ячейки")
//             }
            
//         })
//     }

// }
// func(10, 0, 100)

// let btn = document.createElement("button")
// btn.textContent = "start"
// let hhh = 10;
// let table = document.querySelector("table")
// let right = 0;
// table.classList.add("none")
// btn.addEventListener("click", function func2(){
//     table.classList.toggle("none");
//     let p = document.createElement("p")
//     let timer = setInterval(function(){
//         p.textContent = hhh--
//         div.prepend(p)
//         if(hhh < -1){
//             clearInterval(timer)
//             for(let td of tds){
//                 if(td.style.background == "green"){
//                     right++
//                 }
//             }            
//             alert(`Time over. Отгадано ${right}/10 ячеек`)
//             table.classList.toggle("none")
//             p.textContent = ""
//         }
//     }, 1000)
//     btn.removeEventListener("click", func2)
// })
// div.appendChild(btn)


//5.1 Давайте реализуем экранную клавиатуру. На ней должны быть кнопочки со всеми буквами и цифрами клавиатуры компьютера. Кликая мышкой по этим кнопочкам мы сможем вводить данные, например, при неработающей клавиатуре. Пусть эта клавиатура будет привязана к какому-нибудь инпуту, то есть кликая по ней, мы будем вводить данные в этот инпут.
// let string = '1234567890qwertyuiopasdfghjklzxcvbnm'
// let div = document.querySelector("#elem1")
// let input = document.querySelector("#input")
// let arr = string.split("")
// console.log(arr)
// for(let i = 0; i<arr.length; i++){
//     let btn = document.createElement("button")
//     btn.textContent = arr[i]
//     btn.addEventListener("click", function(){
//         input.value +=btn.textContent 
        
//     })
//     div.append(btn)
// }


//5.2 Сделайте на вашей клавиатуре кнопку Caps Lock, которая будет делать так, чтобы все буквы переводились в верхний регистр.
// let string = '1234567890qwertyuiopasdfghjklzxcvbnm'
// let div = document.querySelector("#elem1")
// let input = document.querySelector("#input")
// let arr = string.split("")
// console.log(arr)
// for(let i = 0; i<arr.length; i++){
//     let btn = document.createElement("button")
//     btn.textContent = arr[i]
//     btn.addEventListener("click", function(){
//         input.value +=btn.textContent 
        
//     })
//     div.append(btn)
// }
// let btn_all = document.querySelectorAll("button")
// let caps = document.createElement("button")
// caps.textContent = "Caps Lock";
// let lower = true;
// caps.addEventListener("click", function(){
//     for (let btn of btn_all){
//         if(lower){
//             btn.textContent = btn.textContent.toUpperCase()
//         }
//         else{
//             btn.textContent = btn.textContent.toLowerCase()
//         }
//     }
//     lower = !lower
// })
// div.append(caps)


//6.1 Выведите в виде списка ul все числа текущего месяца. Средствами CSS поставьте пункты списка в ряд.
// let ul = document.querySelector(".month")
// let date = new Date()
// let month = date.getMonth()
// let year = date.getFullYear()
// let day = date.getDate()
// let date2 = new Date(year, month+1, 0);
// for(let i = 1; i <= date2.getDate(); i++){
//     let li = document.createElement("li")
//     li.textContent = i
//     ul.appendChild(li)
// }

//6.2 Сделайте так, чтобы текущий день в календаре был выделен каким-нибудь цветом.
// let ul = document.querySelector(".month")
// let date = new Date()
// let month = date.getMonth()
// let year = date.getFullYear()
// let day = date.getDate()
// let date2 = new Date(year, month+1, 0);
// for(let i = 1; i <= date2.getDate(); i++){
//     let li = document.createElement("li")
//     li.textContent = i
//     if(i == date.getDate()){
//         li.style.background = "red"
//     }
//     ul.appendChild(li)
// }

//6.3 Сделайте так, чтобы над списком было написано название текущего месяца по-русски и номер года.
// let ul = document.querySelector(".month")
// let div = document.querySelector("div")
// let date = new Date()
// let month = date.getMonth()
// let year = date.getFullYear()
// let day = date.getDate()
// let date2 = new Date(year, month+1, 0);
// console.log(date2.getDate());

// console.log(month, year, day);
// let months = [
// 	'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
// 	'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
// ];
// let p = document.createElement("p")
// for(let i = 1; i <= months.length; i++){
//     if(i == date.getMonth()){
//         p.textContent = months[i]+ " " + date.getFullYear()

//     }
// }
// div.append(p)
// for(let i = 1; i <= date2.getDate(); i++){
//     let li = document.createElement("li")
//     li.textContent = i
//     if(i == date.getDate()){
//         li.style.background = "red"
//     }
//     ul.appendChild(li)
// }


//6.4 Сделайте так, чтобы над календарем появились ссылки вперед и назад, позволяющие менять месяц. Месяц и год, выводимые над календарем, должны соответствовать отображаемому месяцу.
// let ul = document.querySelector(".month")
// let div = document.querySelector("div")
// let last=document.querySelector("#last");
// let next=document.querySelector("#next");
// let date = new Date()
// let month = date.getMonth()
// let year = date.getFullYear()
// let day = date.getDate()
// let date2 = new Date(year, month+1, 0);
// console.log(date2.getDate());

// console.log(month, year, day);
// let months = [
// 	'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
// 	'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
// ];
// let p = document.createElement("p")
// for(let i = 1; i <= months.length; i++){
//     if(i == date.getMonth()){
//         p.textContent = months[i]+ " " + date.getFullYear()

//     }
// }
// div.append(p)
// for(let i = 1; i <= date2.getDate(); i++){
//     let li = document.createElement("li")
//     li.textContent = i
//     if(i == date.getDate()){
//         li.style.background = "red"
//     }
//     ul.appendChild(li)
// }
// last.addEventListener("click", function(event){
//     event.preventDefault();
//     ul.textContent =""
//     if(month==0){
//         month=11;
//         year-=1
//     }else{
//         month-=1
//     }
//     let data3 = new Date(year, month + 1, 0);  

//     for(let i=1; i<=data3.getDate(); i++){
//         let li = document.createElement("li");
//         li.textContent=i;
//         ul.appendChild(li);
//     }
//     div.textContent=`${months[month]}  ${year}`
// })
// next.addEventListener("click", function(event){
//     event.preventDefault();
//     ul.textContent =""
//     if(month==11){
//         month=0;
//         year+=1
//     }else{
//         month+=1
//     }
//     let data4 = new Date(year, month + 1, 0);  
//     for(let i=1; i<=data4.getDate(); i++){
//         let li = document.createElement("li");
//         li.textContent=i;
//         ul.appendChild(li);
//     }
//     div.textContent=`${months[month]}  ${year}`
// })



//7 Сейчас мы сделаем сайт, который будет помогать определить значение HTML тега. Пусть в этом скрипте будет инпут, в который пользователь будет вводить имя тега. После этого по нажатию на Enter под инпутом пусть выдается описание этого тега.
// let div = document.querySelector("#elem1")
// let input = document.querySelector("#input")
// let obj = {
//     p: "Параграф в тексте",
//     h1: "Заголовок",
//     br: "Перенос текста на новую строку",
//     body: "Представляет тело документа (содержимое, не относящееся к метаданным документа)",
//     a: "Создаёт гипертекстовые ссылки",
//     hr: "Горизонтальная линия",
//     ul: "Создает маркированный список",
//     li: "Элемент маркированного или нумерованного списка",
// }
// input.addEventListener("keypress", function(event){
//     if(event.key === "Enter"){
//         let tag = input.value;
//         if(obj[tag]){
//             div.textContent = obj[tag]
//         }
//         else{
//             div.textContent = "Такого тега нет"
//         }
//     }
// })



//8 Пусть мы хотим написать сайт, показывающий таблицу исторических событий за определенный год. Пусть год будет вводится в инпут. По нажатию Enter давайте выведем таблицу событий, случившихся в этот год. Пусть в качестве информации о событии мы хотим видеть дату, название и описание события.
// let table = document.querySelector("#table")
// let input = document.querySelector("#input")
// let obj = {
//     2001: [
//         {
//             date: "10.02.2001",
//             name: "событие 1",
//             history: "описание события 1"
//         },
//         {
//             date: "12.02.2001",
//             name: "событие 2",
//             history: "описание события 2"
//         },
//         {
//             date: "13.02.2001",
//             name: "событие 3",
//             history: "описание события 3"
//         }
//     ],
//     2002: [
//         {
//             date: "10.02.2002",
//             name: "событие 1",
//             history: "описание события 1"
//         },
//         {
//             date: "12.02.2002",
//             name: "событие 2",
//             history: "описание события 2"
//         },
//         {
//             date: "13.02.2002",
//             name: "событие 3",
//             history: "описание события 3"
//         }
//     ],
//     2003: [
//         {
//             date: "10.02.2003",
//             name: "событие 1",
//             history: "описание события 1"
//         },
//         {
//             date: "12.02.2003",
//             name: "событие 2",
//             history: "описание события 2"
//         },
//         {
//             date: "13.02.2003",
//             name: "событие 3",
//             history: "описание события 3"
//         }
//     ],
// }

// input.addEventListener("keypress", function(event){
//     if(event.key === "Enter"){
//         table.textContent=""
//         let tag = input.value;
//         if(obj[tag]){
//             for(let elem of obj[tag]){
//                 let tr = document.createElement("tr")
//                 for(let key in elem){
//                     let td = document.createElement("td")
//                     td.textContent = elem[key]
//                     tr.appendChild(td)
//                 }
//                 table.appendChild(tr)
//             }
//         input.value = ""

//         }
//         else{
//             table.textContent = "Такого события нет"
//         }
//     }
// })


// 9.1 - 9.2 Сейчас мы реализуем сайт-гороскоп. Этот сайт будет выдавать гороскопы на сегодня. Пусть пользователь по заходу на сайт видит инпут, в который нужно вбить дату своего рождения. Пусть по нажатию Enter наш сайт выдаст пользователю гороскоп на текущий день за его знак Зодиака.
// let div = document.querySelector("#elem1")
// let input = document.querySelector("#input")
// let obj = {
//     "aries": "Успех в личной жизни",
//     "taurus": "Успех в личной жизни,Успех на работе",
//     "gemini": "Успех в личной жизни",
//     "cancer": "Успех на работе",
//     "leo": "Опасность на дороге",
//     "virgo": "Опасность на дороге",
//     "libra": "Успех на работе",
//     "scorpio": "Успех в личной жизниь,Успех на работе",
//     "sagittarius": "Успех в личной жизни",
//     "capricorn": "Успех на работе",
//     "aquarius": "Опасность на дороге",
//     "pisces": "Успех на работе",
// }
// input.addEventListener("keypress", function(event){
//     if(event.key === "Enter"){
        // if(input.value>='03.21' && input.value<="03.31" || input.value>='04.01' && input.value<="04.20"){
        //         div.textContent = obj.aries;
        // }else if(input.value>='04.21' && input.value<="04.30" || input.value>='05.01' && input.value<="05.21"){
        //         div.textContent = obj.taurus;
        // }else if(input.value>='05.22' && input.value<="05.31" || input.value>='06.01' && input.value<="06.21"){
        //         div.textContent = obj.gemini;
        // }else if(input.value>='06.22' && input.value<="06.30" || input.value>='07.01' && input.value<="07.22"){
        //         div.textContent = obj.cancer;
        // }else if(input.value>='07.23' && input.value<="07.30" || input.value>='08.01' && input.value<="08.21"){
        //         div.textContent = obj.leo;
        // }else if(input.value>='08.22' && input.value<="08.30" || input.value>='09.01' && input.value<="09.23"){
        //         div.textContent = obj.virgo;
        // }else if(input.value>='09.24' && input.value<="09.30" || input.value>='10.01' && input.value<="10.23"){
        //         div.textContent = obj.libra;
        // }else if(input.value>='10.24' && input.value<="10.30" || input.value>='11.01' && input.value<="11.22"){
        //         div.textContent = obj.scorpio;
        // }else if(input.value>='11.23' && input.value<="11.30" || input.value>='12.01' && input.value<="12.22"){
        //         div.textContent = obj.sagittarius;
        // }else if(input.value>='12.23' && input.value<="12.31" || input.value>='01.01' && input.value<="01.20" ){
        //        div.textContent = obj.capricorn; 
        // }else if(input.value>='01.21' && input.value<="01.31" || input.value>='02.01' && input.value<="02.19"){
        //        div.textContent = obj.aquarius;
        // }else if(input.value>='02.20' && input.value<="02.31" || input.value>='03.01' && input.value<="03.20"){
        //        div.textContent = obj.pisces;
        // }else{
        //     alert("Неверная дата")
        // }
//     }
// })




// 9.3 Реализуйте работу радиокнопок, позволяющих выбрать день, за который нужно показать гороскоп.
// let input=document.querySelector("#input");
// let div = document.querySelector("#elem1");
// let obj ={
//     "today":{
//         "aries": "Успех в личной жизни",
//         "taurus": "Успех в личной жизни,Успех на работе",
//         "gemini": "Успех в личной жизни",
//         "cancer": "Успех на работе",
//         "leo": "Опасность на дороге",
//         "virgo": "Опасность на дороге",
//         "libra": "Успех на работе",
//         "scorpio": "Успех в личной жизниь,Успех на работе",
//         "sagittarius": "Успех в личной жизни",
//         "capricorn": "Успех на работе",
//         "aquarius": "Опасность на дороге",
//         "pisces": "Успех на работе",
//     },
//     "tomorrow":{
//         "aries": "Успех в личной жизни",
//         "taurus": "Успех в личной жизни",
//         "gemini": "Опасность на дороге",
//         "cancer": "Успех на работе",
//         "leo": "Опасность на дороге",
//         "virgo": "Успех в личной жизни",
//         "libra": "Успех на работе",
//         "scorpio": "Успех в личной жизниь",
//         "sagittarius": "Успех в личной жизни",
//         "capricorn": "Опасность на дороге",
//         "aquarius": "Опасность на дороге",
//         "pisces": "Успех на работе",
//     },
//     "after-tomorrow":{
//         "aries": "Успех в личной жизни",
//         "taurus": "Успех в личной жизни,",
//         "gemini": "Успех на работе",
//         "cancer": "Успех на работе",
//         "leo": "Успех в личной жизни",
//         "virgo": "Опасность на дороге",
//         "libra": "Успех на работе",
//         "scorpio": "Успех на работе",
//         "sagittarius": "Успех в личной жизни",
//         "capricorn": "Успех на работе",
//         "aquarius": "Опасность на дороге",
//         "pisces": "Успех в личной жизни",
//     }
// };
// input.addEventListener("keypress", function(event){
//     if(event.key === "Enter"){
//         let checkedRadio = document.querySelector('[name="day"]:checked');
//         if(checkedRadio.value=="today"){
//             div.textContent = obj["today"][func()]
//         }else if(checkedRadio.value=="tomorrow"){
//             div.textContent = obj["tomorrow"][func()]
//         }else{
//             div.textContent = obj["after-tomorrow"][func()]
//         }
//     }
// })
// function func(){
//     if(input.value>='03.21' && input.value<="03.31" || input.value>='04.01' && input.value<="04.20"){
//         return "aries";
//     }else if(input.value>='04.21' && input.value<="04.30" || input.value>='05.01' && input.value<="05.21"){
//         return "taurus";
//     }else if(input.value>='05.22' && input.value<="05.31" || input.value>='06.01' && input.value<="06.21"){
//         return "gemini";
//     }else if(input.value>='06.22' && input.value<="06.30" || input.value>='07.01' && input.value<="07.22"){
//         return "cancer";
//     }else if(input.value>='07.23' && input.value<="07.30" || input.value>='08.01' && input.value<="08.21"){
//         return "leo";
//     }else if(input.value>='08.22' && input.value<="08.30" || input.value>='09.01' && input.value<="09.23"){
//         return "virgo";
//     }else if(input.value>='09.24' && input.value<="09.30" || input.value>='10.01' && input.value<="10.23"){
//         return "libra";
//     }else if(input.value>='10.24' && input.value<="10.30" || input.value>='11.01' && input.value<="11.22"){
//         return "scorpio";
//     }else if(input.value>='11.23' && input.value<="11.30" || input.value>='12.01' && input.value<="12.22"){
//         return "sagittarius";
//     }else if(input.value>='12.23' && input.value<="12.31" || input.value>='01.01' && input.value<="01.20" ){
//         return "capricorn"; 
//     }else if(input.value>='01.21' && input.value<="01.31" || input.value>='02.01' && input.value<="02.19"){
//         return "aquarius";
//     }else if(input.value>='02.20' && input.value<="02.31" || input.value>='03.01' && input.value<="03.20"){
//         return "pisces";
//     }else{
//         alert("Неверная дата")
//     }
// }


//10.1 Сейчас мы сделаем сайт, который будет выдавать предсказания. Пусть на этом сайте будет кнопка, по нажатию на которую будет запускаться таймер, который будет каждые 0.1 секунд выводить в в какой-нибудь див случайное число от 1 до некоторого максимального. Под дивом пусть будет другая кнопка, по нажатию на которую пользователь нашего сайта может остановить таймер и зафиксировать некоторое число в диве. Это число будет номером предсказания. После этого покажите пользователю предсказание с этим номером, а все лишние кнопки уберите с экрана, чтобы пользователь не мог получить еще одно предсказание. То есть на один заход на сайт - одно предсказание.
// let start = document.querySelector("#start")
// let stopp = document.querySelector("#stop")
// let obj = {
//     1 : "Следите за новостями, они несут важную для вас информацию",
//     2 : "Вскорости бюджет вашей семьи будет пополнен.",
//     3 : "Влюбленность – вот что ожидает вас на этой неделе.",
//     4 : "Будьте внимательны и осторожны в дороге.",
//     5 : "Звезды к вам неблагосклонны.",
//     6 : "Ваше жилище настоятельно требует вашего внимания",
//     7 : "Вам предстоит рандеву с человеком, который играет важную роль в вашей жизни",
//     8 : "Будьте инициативнее – и удача совсем скоро станет вашей спутницей",
//     9 : "Исполнение желаний превзойдет все ожидания.",
//     10 : "Явно сильно чье-то негативное влияние.",
// }
// let div = document.querySelector("#timer")
// let text = document.querySelector("#text")
// let t = 1;
// start.addEventListener("click", function(){
//     let timer = setInterval(function(){
//        div.textContent = t++
//         if(t == 10){
//             t = 1
//         }
//     }, 100)
//     start.classList.toggle("active")
//     stopp.classList.toggle("active")
//     stopp.addEventListener("click", function(){
//         clearInterval(timer)
//         stopp.classList.toggle("active")
//             text.textContent = obj[div.textContent]
//     })
// })


//10.2 Сделайте так, чтобы предсказания были двух видов: хорошие и плохие. Сделайте так, чтобы плохие красились в красный цвет, а хорошие - в зеленый.
// let start = document.querySelector("#start")
// let stopp = document.querySelector("#stop")
// let obj = {
//     1 : "Следите за новостями, они несут важную для вас информацию",
//     2 : "Вскорости бюджет вашей семьи будет пополнен.",
//     3 : "Влюбленность – вот что ожидает вас на этой неделе.",
//     4 : "Будьте внимательны и осторожны в дороге.",
//     5 : "Звезды к вам неблагосклонны.",
//     6 : "Ваше жилище настоятельно требует вашего внимания",
//     7 : "Вам предстоит рандеву с человеком, который играет важную роль в вашей жизни",
//     8 : "Будьте инициативнее – и удача совсем скоро станет вашей спутницей",
//     9 : "Исполнение желаний превзойдет все ожидания.",
//     10 : "Явно сильно чье-то негативное влияние.",
// }
// let div = document.querySelector("#timer")
// let text = document.querySelector("#text")
// let t = 1;
// start.addEventListener("click", function(){
//     let timer = setInterval(function(){
//        div.textContent = t++
//         if(t == 10){
//             t = 1
//         }
//     }, 100)
//     start.classList.toggle("active")
//     stopp.classList.toggle("active")
//     stopp.addEventListener("click", function(){
//         clearInterval(timer)
//         stopp.classList.toggle("active")
//             text.textContent = obj[div.textContent]
//         if(div.textContent == 4 || div.textContent == 5 || div.textContent == 10){
//             text.classList.add("red")
//         }
//         else{
//             text.classList.add("green")

//         }
            
//     })
// })





// 11 Сейчас мы реализуем автодополнение. Под этим термином понимается выпадающая подсказка при вводе текста в инпут. Давайте посмотрим на примере. Ниже я сделал инпут, в который можно ввести название страны. При этом, если ввести какие-то буквы, то под инпутом появится список стран, которые начинаются на введенную строку.
// let arr  = ['Belarus', 'Belgium', 'Bulgaria']; 
// let input = document.querySelector("#elem")
// let ul = document.querySelector("#list")
// input.addEventListener("input", function(){
//     ul.textContent = '';
//     if(input.value !== ""){
//         let arr1 = arr.filter(elem =>
//         elem.startsWith(this.value)  
//         )
//         if(arr1.length > 0){
//             for(let el of arr1){
//                 let li = document.createElement("li");
//                 li.textContent = el;
//                 ul.appendChild(li);
//                 li.addEventListener('click', function() {
//                     elem.value = this.textContent;
//                     list.textContent = '';
//                 });
//         }
//     }
//     }
// })


// 12 В следующем примере кода абзац с классом spoiler является спойлером, а ссылка с классом toggle должна по клику показывать или скрывать этот спойлер
// let p_all = document.querySelectorAll(".spoiler")
// let a_all = document.querySelectorAll(".toggle")
// for(let a of a_all){
//     a.addEventListener("click", function(event){
//         a.parentElement.nextElementSibling.classList.toggle("spoiler")
//         event.preventDefault()
// })
// }


// 13 Сейчас мы реализуем вкладки.
// let all = document.querySelectorAll("a")
// let div_all = document.querySelectorAll(".tab")
// for(let i = 0; i < all.length; i++){
//     all[i].addEventListener("click", function(event){
//         let active = document.querySelectorAll(".active")
//         for(let elem of active){
//             elem.classList.remove("active")
//         }
//         all[i].classList.add("active")
//         div_all[i].classList.add("active")

//        event.preventDefault()
//     })
// }


// 14 Давайте теперь реализуем аккордеон. Он похож на вкладки, перевернутые на бок. При этом в аккордеоне можно закрыть текущую вкладку, если нажать на активную ссылку.
// let all = document.querySelectorAll("a")
// let div_all = document.querySelectorAll(".tab")
// for(let i = 0; i < all.length; i++){
//     all[i].addEventListener("click", function(event){
//         let active = document.querySelectorAll(".active")
//         for(let elem of active){
//             elem.classList.remove("active")
//         }
//         all[i].classList.add("active")
//         div_all[i].classList.add("active")

//        event.preventDefault()
//     })
// }


// 15-16 Пусть играют два человека за одним компьютером. Ходят по очереди. Города вводятся в один инпут и отправляются по нажатию клавиши Enter. Браузер должен запоминать города, которые уже были, и не принимать такие города.





























































