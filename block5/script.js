//30.1 Сделайте так, чтобы ввод ответа в инпут завершался нажатием клавиши Enter. Пусть в этом случае инпут сразу проверяет ответ на правильность.
// let input_all = document.querySelectorAll("input")
// for(let input of input_all){
//     input.addEventListener("keypress",function func(event){
//         if(event.key=="Enter"){
//             if(input.value==input.dataset.right){
//                 input.classList.remove('wrong')
//                 input.classList.add('right')
//             }
//             else{
//                 input.classList.remove('right')
//                 input.classList.add('wrong')
//             }
//         }
//     })
// }


//30.2 Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку.
// let input_all = document.querySelectorAll("input")
// let button_all = document.querySelectorAll("button")
// for(let i = 0 ; i<button_all.length; i++){
//     button_all[i].addEventListener("click",function func(event){
//             if(input_all[i].value==button_all[i].dataset.right){
//                 input_all[i].classList.remove('wrong')
//                 input_all[i].classList.add('right')
//             }
//             else{
//                 input_all[i].classList.remove('right')
//                 input_all[i].classList.add('wrong')
//              
//             }
//     })
// }


//31 Тест с ответами в массиве
// let answers = [
// 	'1',
// 	'2',
// 	'3',
// ];
// let input_all = document.querySelectorAll("input")
// let button = document.querySelector("button")
// button.addEventListener("click", function(){
//     for(let i=0; i<answers.length; i++){
//         if(input_all[i].value == answers[i]){
//             input_all[i].classList.remove('wrong')
//             input_all[i].classList.add('right')
//         }
//         else{
//             input_all[i].classList.remove('right')
//             input_all[i].classList.add('wrong')
            
//         }

//     }
// })


//32 Тест с вопросами и ответами в массиве
// let answers = [
// 	'1',
// 	'2',
// 	'3',
// ];
// let questions = [
// 	'вопрос 1?',
// 	'вопрос 2?',
// 	'вопрос 3?'
// ];
// let div = document.querySelector("#test")
// let button = document.querySelector("button")
// for(let i = 0; i<questions.length; i++){
//     let p = document.createElement("p")
//     p.textContent=questions[i]
//     let input = document.createElement('input')
//     div.appendChild(p)
//     div.appendChild(input)

// }
// let input_all = document.querySelectorAll("input")
// button.addEventListener("click", function(){
//     for(let i=0; i<answers.length; i++){
//         if(input_all[i].value == answers[i]){
//             input_all[i].classList.remove('wrong')
//             input_all[i].classList.add('right')
//         }
//         else{
//             input_all[i].classList.remove('right')
//             input_all[i].classList.add('wrong')
            
//         }

//     }
// })


//33.1 Тест с вопросами и ответами в объекте
// let questions = {
// 	'Вопрос 1?': '1',
// 	'Вопрос 2?': '2',
// 	'Вопрос 3?': '3',
// }
// let div = document.querySelector("#test")
// let button = document.querySelector("button")
// for(let key in questions){
//     let p = document.createElement("p")
//     p.textContent=key
//     let input = document.createElement('input')
//     div.appendChild(p)
//     div.appendChild(input)
// }
// let input_all = document.querySelectorAll("input")
// button.addEventListener("click", function(){
//     let i = 0;
//     for(let key in questions){
//         if(input_all[i].value == questions[key]){
//             input_all[i].classList.remove('wrong')
//             input_all[i].classList.add('right')
//             i++
//         }
//         else{
//             input_all[i].classList.remove('right')
//             input_all[i].classList.add('wrong')
//             i++
            
//         }

//     }
// })


//33.2 Пусть вопросы и ответы хранятся в таком объекте:
// let questions = [
// 	{
// 		text:  'вопрос 1?',
// 		right: '1',
// 	},
// 	{
// 		text:  'вопрос 2?',
// 		right: '2',
// 	},
// 	{
// 		text:  'вопрос 3?',
// 		right: '3',
// 	},
// ];
// let div = document.querySelector("#test")
// let button = document.querySelector("button")
// for(let elem of questions){
//     let p = document.createElement("p")
//     p.textContent = elem.text
//     let input = document.createElement('input')
//     div.appendChild(p)
//     div.appendChild(input)
// }
// let input_all = document.querySelectorAll("input")
// button.addEventListener("click", function(){
//     let i = 0;
//     for(let elem of questions){
//         if(input_all[i].value == elem.right){
//             input_all[i].classList.remove('wrong')
//             input_all[i].classList.add('right')
//             i++
//         }
//         else{
//             input_all[i].classList.remove('right')
//             input_all[i].classList.add('wrong')
//             i++
            
//         }

//     }
// })


// 34.1 Тест с вариантами ответов
// let radios = document.querySelectorAll('input[type="radio"]');
// let lbl = document.querySelectorAll('label');
// for(let i = 0 ; i<radios.length; i++){
//     lbl[i].addEventListener("click",function func(event){
//             if(radios[i].hasAttribute("data-right")){
//                 lbl[i].classList.add('right')
//             }
//            else{
//                 lbl[i].classList.add('wrong')
//             }
//     })
// }

//34.1 Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку.
// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('button');
// let lbl = document.querySelectorAll('label');
//     button.addEventListener("click",function func(event){
//         for(let i = 0 ; i<radios.length; i++){
//             // lbl[i].classList.remove('right')
//             // lbl[i].classList.remove('wrong')
//             if(radios[i].checked){
//                 if(radios[i].hasAttribute("data-right")){
//                     lbl[i].classList.add('right')
//                 }
//                 else{
//                     lbl[i].classList.add('wrong')
//             }
//             }

//         }    
// })

//35 Тест с вариантами ответов в массиве
// let answers = [0, 1, 2];
// let button = document.querySelector('#button');
// let div_all = document.querySelectorAll("#test div"); 
// button.addEventListener("click", function(){
//  for(let i=0; i<div_all.length;i++){
//  let lbl = div_all[i].querySelectorAll('#test div label');
//  let radios = div_all[i].querySelectorAll('input[type=radio]');
//  let flag="---"
//  for(let j=0; j<radios.length; j++){
//     lbl[j].classList.remove('right')
//     lbl[j].classList.remove('wrong')
//     if(radios[j].checked){
//         if(j===answers[i]){ 
//             flag = "+++";
//         }
//         if(flag == "+++"){
//             lbl[j].classList.add('right'); 
//         }
//         else{
//             lbl[j].classList.add('wrong');
//         }
//     }
    
//  }
//  console.log(flag)

// }
// })

//36 Тест с вопросами и вариантами ответов в объекте
// let questions = [
// 	{
// 		text: 'вопрос 1?',
// 		right: 0,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// 	{
// 		text: 'вопрос 2?',
// 		right: 1,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// 	{
// 		text: 'вопрос 3?',
// 		right: 2,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// ];
// let button = document.querySelector('#button');
// let test = document.querySelector("#test");
// let i = 1;
// for(let quest of questions){
//     let div=document.createElement("div");
//     let p = document.createElement("p");
//     p.textContent=quest.text;
//     div.appendChild(p);
//  for(let variant of quest.variants){
//         let label = document.createElement("label");
//         label.textContent = variant
//         let input = document.createElement("input");
//         input.type = "radio";
//         input.name = i;

//         label.appendChild(input)
//         div.appendChild(label)
//  }
//  i++
    
//  test.appendChild(div);
// }
// let div_all = document.querySelectorAll("#test div");
// button.addEventListener("click", function(){
//  for(let i=0; i<div_all.length;i++){
//     let lbl = div_all[i].querySelectorAll('#test div label');
//  let radios = div_all[i].querySelectorAll('input[type=radio]');
//  let flag="---"
//  for(let j=0; j<radios.length; j++){
//      if(radios[j].checked){
//         if(j===questions[i].right){ 
//              flag="+++"
//          }
//         if(flag == "+++"){
//             lbl[j].classList.add('right'); 
//         }
//         else{
//             lbl[j].classList.add('wrong');
//         }
//      }
//  }
//  console.log(flag)
// }
// })















































































































