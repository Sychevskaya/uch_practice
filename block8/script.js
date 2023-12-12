//52-54 Календарь
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let date  = new Date();
// let year  = date.getFullYear();
// let month = date.getMonth();

// function getLastDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	return date.getDate();
// }
// function range(count) {
// 	let arr = [];
// 	for (let i = 1; i <= count; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }
// console.log(range(getLastDay(year, month)));




//55 Дни недели первого и последнего дней месяца
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let date  = new Date();
// let year  = date.getFullYear();
// let month = date.getMonth();

// function getLastDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	return date.getDate();
// }
// function range(count) {
// 	let arr = [];
// 	for (let i = 1; i <= count; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }

// function getFirstWeekDay(year, month) {
// 	let date = new Date(year, month, 1);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }
// console.log(getFirstWeekDay(year, month));


// function getLastWeekDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }
// console.log(getLastWeekDay(year, month));


//56 Нормализация массива в календаре
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let date  = new Date();
// let year  = date.getFullYear();
// let month = date.getMonth();

// function getLastDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	return date.getDate();
// }
// function range(count) {
// 	let arr = [];
// 	for (let i = 1; i <= count; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }

// function getFirstWeekDay(year, month) {
// 	let date = new Date(year, month, 1);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }



// function getLastWeekDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }

// let arr = range(getLastDay(year, month));
// let firstWeekDay = getFirstWeekDay(year, 
// 	month); 
// let lastWeekDay  = getLastWeekDay(year, 
// 	month); 

//     function normalize(arr, left, right) {
//         for (let i = 0; i < left; i++) {
//             arr.unshift('');
//         }
//         for (var i = 0; i < right; i++) {
//             arr.push('');
//         }
        
//         return arr;
//     }

// let res = normalize(arr, firstWeekDay, 6 - lastWeekDay); 
// console.log(res);


// 57 Разбиение массива на двухмерный в календаре
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let date  = new Date();
// let year  = date.getFullYear();
// let month = date.getMonth();

// function getLastDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	return date.getDate();
// }
// function range(count) {
// 	let arr = [];
// 	for (let i = 1; i <= count; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }

// function getFirstWeekDay(year, month) {
// 	let date = new Date(year, month, 1);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }



// function getLastWeekDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }

// let arr = range(getLastDay(year, month));
// let firstWeekDay = getFirstWeekDay(year, 
// 	month); 
// let lastWeekDay  = getLastWeekDay(year, 
// 	month); 

// function normalize(arr, left, right) {
//     for (let i = 0; i < left; i++) {
//         arr.unshift('');
//     }
//     for (var i = 0; i < right; i++) {
//         arr.push('');
//     }
    
//     return arr;
// }

// function chunk(arr, n) {
//     let result = [];
//     let count = Math.ceil(arr.length / n);
    
//     for (let i = 0; i < count; i++) {
//         let elems = arr.splice(0, n);
//         result.push(elems);
//     }
    
//     return result;
// }
// let res = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7); 
// console.log(res);


//58 Создание таблицы в календаре
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let date  = new Date();
// let year  = date.getFullYear();
// let month = date.getMonth();

// function getLastDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	return date.getDate();
// }
// function range(count) {
// 	let arr = [];
// 	for (let i = 1; i <= count; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }

// function getFirstWeekDay(year, month) {
// 	let date = new Date(year, month, 1);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }



// function getLastWeekDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }

// let arr = range(getLastDay(year, month));
// let firstWeekDay = getFirstWeekDay(year, 
// 	month); 
// let lastWeekDay  = getLastWeekDay(year, 
// 	month); 

// function normalize(arr, left, right) {
//     for (let i = 0; i < left; i++) {
//         arr.unshift('');
//     }
//     for (var i = 0; i < right; i++) {
//         arr.push('');
//     }
    
//     return arr;
// }

// function chunk(arr, n) {
//     let result = [];
//     let count = Math.ceil(arr.length / n);
    
//     for (let i = 0; i < count; i++) {
//         let elems = arr.splice(0, n);
//         result.push(elems);
//     }
    
//     return result;
// }

// function createTable(parent, arr) {
// 	parent.textContent = '';
// 	let cells = [];
	
// 	for (let sub of arr) {
// 		let tr = document.createElement('tr');
		
// 		for (let num of sub) {
// 			let td = document.createElement('td');
// 			td.textContent = num;
// 			tr.appendChild(td);
			
// 			cells.push(td);
// 		}
		
// 		parent.appendChild(tr);
// 	}
	
// 	return cells;
// }

// let nums = chunk(normalize(arr, firstWeekDay, 
// 	6 - lastWeekDay), 7); 
// createTable(body, nums)


//59 Функция для формирования календаря
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let date  = new Date();
// let year  = date.getFullYear();
// let month = date.getMonth();

// function getLastDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	return date.getDate();
// }
// function range(count) {
// 	let arr = [];
// 	for (let i = 1; i <= count; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }

// function getFirstWeekDay(year, month) {
// 	let date = new Date(year, month, 1);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }



// function getLastWeekDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }

// let arr = range(getLastDay(year, month));
// let firstWeekDay = getFirstWeekDay(year, 
// 	month); 
// let lastWeekDay  = getLastWeekDay(year, 
// 	month); 

// function normalize(arr, left, right) {
//     for (let i = 0; i < left; i++) {
//         arr.unshift('');
//     }
//     for (var i = 0; i < right; i++) {
//         arr.push('');
//     }
    
//     return arr;
// }

// function chunk(arr, n) {
//     let result = [];
//     let count = Math.ceil(arr.length / n);
    
//     for (let i = 0; i < count; i++) {
//         let elems = arr.splice(0, n);
//         result.push(elems);
//     }
    
//     return result;
// }

// function createTable(parent, arr) {
// 	parent.textContent = '';
// 	let cells = [];
	
// 	for (let sub of arr) {
// 		let tr = document.createElement('tr');
		
// 		for (let num of sub) {
// 			let td = document.createElement('td');
// 			td.textContent = num;
// 			tr.appendChild(td);
			
// 			cells.push(td);
// 		}
		
// 		parent.appendChild(tr);
// 	}
	
// 	return cells;
// }

// function draw(body, year, month) {
// 	let arr = range(getLastDay(year, month));
	
// 	let firstWeekDay = getFirstWeekDay(year, 
// 		month); 
// 	let lastWeekDay  = getLastWeekDay(year, 
// 		month); 
	
// 	let nums = chunk(normalize(arr, firstWeekDay, 
// 		6 - lastWeekDay), 7); 
// 	createTable(body, nums)
// }


// draw(body, year, month)


// Стрелки для смены месяца в календаре
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let date  = new Date();
// let year  = date.getFullYear();
// let month = date.getMonth();

// function getLastDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	return date.getDate();
// }
// function range(count) {
// 	let arr = [];
// 	for (let i = 1; i <= count; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }

// function getFirstWeekDay(year, month) {
// 	let date = new Date(year, month, 1);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }



// function getLastWeekDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }

// let arr = range(getLastDay(year, month));
// let firstWeekDay = getFirstWeekDay(year, 
// 	month); 
// let lastWeekDay  = getLastWeekDay(year, 
// 	month); 

// function normalize(arr, left, right) {
//     for (let i = 0; i < left; i++) {
//         arr.unshift('');
//     }
//     for (var i = 0; i < right; i++) {
//         arr.push('');
//     }
    
//     return arr;
// }

// function chunk(arr, n) {
//     let result = [];
//     let count = Math.ceil(arr.length / n);
    
//     for (let i = 0; i < count; i++) {
//         let elems = arr.splice(0, n);
//         result.push(elems);
//     }
    
//     return result;
// }

// function createTable(parent, arr) {
// 	parent.textContent = '';
// 	let cells = [];
	
// 	for (let sub of arr) {
// 		let tr = document.createElement('tr');
		
// 		for (let num of sub) {
// 			let td = document.createElement('td');
// 			td.textContent = num;
// 			tr.appendChild(td);
			
// 			cells.push(td);
// 		}
		
// 		parent.appendChild(tr);
// 	}
	
// 	return cells;
// }

// function draw(body, year, month) {
// 	let arr = range(getLastDay(year, month));
	
// 	let firstWeekDay = getFirstWeekDay(year, 
// 		month); 
// 	let lastWeekDay  = getLastWeekDay(year, 
// 		month); 
	
// 	let nums = chunk(normalize(arr, firstWeekDay, 
// 		6 - lastWeekDay), 7); 
// 	createTable(body, nums)
// }


// draw(body, year, month)
// let prev = calendar.querySelector('.prev');
// let next = calendar.querySelector('.next');
// let months = [
// 	'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
// 	'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
// ];
// let info = document.querySelector(".info")
// info.textContent=`${months[month]} ${year}`;
// next.addEventListener('click', function func() {
//     if(month == 11){
//         month = 0;
//         year += 1
//     }
//     else{
//         month += 1
//     }
//     draw(body, year, month);
//     info.textContent =`${months[month]} ${year}`;
//     next.addEventListener("click", func);
// });

// prev.addEventListener('click', function func() {
//     if(month == 0){
//         month = 11;
//         year -= 1
//     }
//     else{
//         month -= 1
//     }
//     draw(body, year, month);
//     info.textContent = `${months[month]} ${year}`;
//     prev.addEventListener("click", func);
// });







