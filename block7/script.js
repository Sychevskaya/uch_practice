//47 Напишите код, который создаст таблицу заданного размера.
// let rows = 3;
// let cols = 3;
// function createTable(rows, cols) {
// 	let table = document.createElement('table');
// 	for (let i = 0; i<rows; i++) {
//         let tr = document.createElement("tr")
// 		for (let j = 0; j < cols; j++) {
//             let td = document.createElement("td")
//                 tr.appendChild(td)   
// 		}
//         table.appendChild(tr)
// 	}
// 	return table;
// }
// let div = document.querySelector('#field');
// let table1 = createTable(rows, cols);
// div.appendChild(table1);


//48 Окраска ячеек в разные цвета
// let colors = ['red', 'green', 'blue'];
// let rows = 3;
// let cols = 3;
// function createTable(rows, cols) {
// 	let table = document.createElement('table');
// 	for (let i = 0; i<rows; i++) {
//         let tr = document.createElement("tr")
// 		for (let j = 0; j < cols; j++) {
//             let td = document.createElement("td")
//             td.classList.add(rand_color(0, 2))
//             tr.appendChild(td)  
// 		}
//         table.appendChild(tr)
// 	}
// 	return table;
// }
// let div = document.querySelector('#field');
// let table1 = createTable(rows, cols);
// div.appendChild(table1);

// function rand_color(min, max){
//     let rand = Math.floor(Math.random()*(max - min + 1 ))+ min;
//     return colors[rand]
// }



// 49 Смена цвета ячеек
// let colors = ['red', 'green', 'blue'];
// let rows = 3;
// let cols = 3;
// function createTable(rows, cols) {
// 	let table = document.createElement('table');
// 	for (let i = 0; i<rows; i++) {
//         let tr = document.createElement("tr")
// 		for (let j = 0; j < cols; j++) {
//             let td = document.createElement("td")
//             td.classList.add(rand_color(0, 2))
//             tr.appendChild(td)
//             td.addEventListener("click", function(){
//                 let color = td.className;
//                 let next_color = change_color(colors, color);
//                 td.className = next_color;
//             })   
// 		}
//         table.appendChild(tr)
// 	}
// 	return table;
// }
// let div = document.querySelector('#field');
// let table1 = createTable(rows, cols);
// div.appendChild(table1);

// function rand_color(min, max){
//     let rand = Math.floor(Math.random()*(max - min + 1 ))+ min;
//     return colors[rand]
// }

// function change_color(colors, color){
//     let index_color = colors.indexOf(color)
//     let index_next;
//     if(index_color == colors.length-1){
//         index_next = 0
//     }
//     else{
//         index_next = index_color + 1
//     }
//     return colors[index_next]
// }


// 50 Победа в игре смена цветов на JavaScript
// let colors = ['red', 'green', 'blue'];
// let rows = 3;
// let cols = 3;
// function createTable(rows, cols) {
// 	let table = document.createElement('table');
// 	for (let i = 0; i<rows; i++) {
//         let tr = document.createElement("tr")
// 		for (let j = 0; j < cols; j++) {
//             let td = document.createElement("td")
//             td.classList.add(rand_color(0, 2))
//             tr.appendChild(td)
//             td.addEventListener("click", function(){
//                 let count = 0;
//                 let color = td.className;
//                 let next_color = change_color(colors, color);
//                 td.className = next_color;
//                 let td_all = document.querySelectorAll("td");
//                 for(let elem of td_all){
//                     if(elem.className == next_color){
//                         count+=1
//                         if(count == 9){
//                             alert("Вы выиграли")
//                         }
//                     }
//                 }
//             })   
// 		}
//         table.appendChild(tr)
// 	}
// 	return table;
// }
// let div = document.querySelector('#field');
// let table1 = createTable(rows, cols);
// div.appendChild(table1);

// function rand_color(min, max){
//     let rand = Math.floor(Math.random()*(max - min + 1 ))+ min;
//     return colors[rand]
// }

// function change_color(colors, color){
//     let index_color = colors.indexOf(color)
//     let index_next;
//     if(index_color == colors.length-1){
//         index_next = 0
//     }
//     else{
//         index_next = index_color + 1
//     }
//     return colors[index_next]
// }





//51 Вывод количества ходов в игре смена цветов на JavaScript
// let p = document.querySelector("#click")
// let colors = ['red', 'green', 'blue'];
// let rows = 3;
// let cols = 3;
// let click = 0;
// function createTable(rows, cols) {
// 	let table = document.createElement('table');
// 	for (let i = 0; i<rows; i++) {
//         let tr = document.createElement("tr")
// 		for (let j = 0; j < cols; j++) {
//             let td = document.createElement("td")
//             td.classList.add(rand_color(0, 2))
//             tr.appendChild(td)
//             td.addEventListener("click", function(){
//                 let count = 0;
//                 click+=1;
//                 p.textContent = `Ход: ${click} `
//                 console.log(click);
//                 let color = td.className;
//                 let next_color = change_color(colors, color);
//                 td.className = next_color;
//                 let td_all = document.querySelectorAll("td");
//                 for(let elem of td_all){
//                     if(elem.className == next_color){
//                         count+=1
//                         if(count == 9){
//                             alert("Вы выиграли")
//                         }
//                     }
//                 }
//             })   
// 		}
//         table.appendChild(tr)
// 	}
// 	return table;
// }
// let div = document.querySelector('#field');
// let table1 = createTable(rows, cols);
// div.appendChild(table1);

// function rand_color(min, max){
//     let rand = Math.floor(Math.random()*(max - min + 1 ))+ min;
//     return colors[rand]
// }

// function change_color(colors, color){
//     let index_color = colors.indexOf(color)
//     let index_next;
//     if(index_color == colors.length-1){
//         index_next = 0
//     }
//     else{
//         index_next = index_color + 1
//     }
//     return colors[index_next]
// }
