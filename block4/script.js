//25.1, 25.2 Добавление новой покупки в калькуляторе продуктов
// let namee   = document.querySelector('#name');
// let price  = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add    = document.querySelector('#add');
// let table  = document.querySelector('#table');
// let total  = document.querySelector('#total');

// function createCell(tr, value, name) {
// 	td = document.createElement('td');
// 	td.textContent = value;
// 	td.classList.add(name);
// 	tr.appendChild(td);
// }

// add.addEventListener('click', function() {
// 	let tr = document.createElement('tr');
	
// 	createCell(tr, namee.value, 'name');
// 	createCell(tr, price.value, 'price');
// 	createCell(tr, amount.value, 'amount');
// 	createCell(tr, price.value * amount.value, 
// 		'cost'); 
// 	createCell(tr, 'удалить', 'remove');
	
// 	table.appendChild(tr);
// });

//25.3 Модифицируйте функцию createCell так, чтобы она возвращала через return созданную ячейку таблицы.
// let namee   = document.querySelector('#name');
// let price  = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add    = document.querySelector('#add');
// let table  = document.querySelector('#table');
// let total  = document.querySelector('#total');

// function createCell(tr, value, name) {
// 	td = document.createElement('td');
// 	td.textContent = value;
// 	td.classList.add(name);
//     return td
// }

// add.addEventListener('click', function() {
// 	let tr = document.createElement('tr');
// 	tr.appendChild(createCell(tr, namee.value, 'name'))
// 	tr.appendChild(createCell(tr, price.value, 'price'))
//     tr.appendChild(createCell(tr, amount.value, 'amount'))
//     tr.appendChild(	createCell(tr, price.value * amount.value, 'cost'))
//     tr.appendChild(createCell(tr, 'удалить', 'remove'))
// 	table.appendChild(tr);
// });


//26 Общая сумма в калькуляторе продуктов
// let namee   = document.querySelector('#name');
// let price  = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add    = document.querySelector('#add');
// let table  = document.querySelector('#table');
// let total  = document.querySelector('#total');

// function createCell(tr, value, name) {
// 	td = document.createElement('td');
// 	td.textContent = value;
// 	td.classList.add(name);
// 	tr.appendChild(td);
// }

// add.addEventListener('click', function() {
// 	let tr = document.createElement('tr');
	
// 	createCell(tr, namee.value, 'name');
// 	createCell(tr, price.value, 'price');
// 	createCell(tr, amount.value, 'amount');
// 	createCell(tr, price.value * amount.value,'cost'); 
// 	createCell(tr, 'удалить', 'remove');
	
// 	table.appendChild(tr);
//     recountTotal();
// });
// function recountTotal() {
// 	let costs = table.querySelectorAll('.cost');
// 	if (costs) {
//         let sum = 0;
//         for(let i = 0; i<costs.length; i++){
//             sum += +costs[i].textContent
//         }
//         total.textContent = sum
//         console.log(sum);
// 	}
// }



// 27 Удаление покупок в калькуляторе
// let namee   = document.querySelector('#name');
// let price  = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add    = document.querySelector('#add');
// let table  = document.querySelector('#table');
// let total  = document.querySelector('#total');

// function createCell(tr, value, name) {
// 	td = document.createElement('td');
// 	td.textContent = value;
// 	td.classList.add(name);
// 	tr.appendChild(td);
// 	return td
// }

// add.addEventListener('click', function() {
// 	let tr = document.createElement('tr');
	
// createCell(tr, namee.value, 'name');
// createCell(tr, price.value, 'price');
// createCell(tr, amount.value, 'amount');
// 	createCell(tr, price.value * amount.value,'cost'); 
// 	let remove = createCell(tr, 'удалить', 'remove'); 
//     remove.addEventListener('click', function() {
// 		this.parentElement.remove();
// 		recountTotal();
//     });
	
// 	table.appendChild(tr);
//     recountTotal();
// });
// function recountTotal() {
// 	let costs = table.querySelectorAll('.cost');
// 	if (costs) {
//         let sum = 0;
//         for(let i = 0; i<costs.length; i++){
//             sum += +costs[i].textContent
//         }
//         total.textContent = sum
//         console.log(sum);
// 	}
// }





//28 Редактирование покупок
// let namee   = document.querySelector('#name');
// let price  = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add    = document.querySelector('#add');
// let table  = document.querySelector('#table');
// let total  = document.querySelector('#total');

// function createCell(tr, value, name) {
// 	td = document.createElement('td');
// 	td.textContent = value;
// 	td.classList.add(name);
// 	tr.appendChild(td);
// 	return td
// }

// add.addEventListener('click', function() {
// 	let tr = document.createElement('tr');
	
// 	allowEdit(createCell(tr, namee.value, 'name'));
// 	allowEdit(createCell(tr, price.value, 'price'));
// 	allowEdit(createCell(tr, amount.value, 'amount'));
// 	createCell(tr, price.value * amount.value,'cost'); 
// 	let remove = createCell(tr, 'удалить', 'remove'); 
//     remove.addEventListener('click', function() {
// 		this.parentElement.remove();
// 		recountTotal();
//     });
	
// 	table.appendChild(tr);
//     recountTotal();
// });
// function recountTotal() {
// 	let costs = table.querySelectorAll('.cost');
// 	if (costs) {
//         let sum = 0;
//         for(let i = 0; i<costs.length; i++){
//             sum += +costs[i].textContent
//         }
//         total.textContent = sum
//         console.log(sum);
// 	}
// }

// function allowEdit(td) {
// 	td.addEventListener('dblclick', function() {
// 	 	let input = document.createElement('input')
// 	 	input.value = td.textContent
// 		td.textContent = ""
// 		input.addEventListener("blur",function(){
// 			td.textContent = input.value
// 			input.remove()
// 		})
	
// 		td.appendChild(input)

// 	});
// }


//29 Редактирование с перерасчетом
// let namee   = document.querySelector('#name');
// let price  = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add    = document.querySelector('#add');
// let table  = document.querySelector('#table');
// let total  = document.querySelector('#total');

// function createCell(tr, value, name) {
// 	td = document.createElement('td');
// 	td.textContent = value;
// 	td.classList.add(name);
// 	tr.appendChild(td);
// 	return td
// }

// add.addEventListener('click', function() {
// 	let tr = document.createElement('tr');
	
// 	allowEdit(createCell(tr, namee.value, 'name'));
// 	allowEdit(createCell(tr, price.value, 'price'));
// 	allowEdit(createCell(tr, amount.value, 'amount'));
// 	createCell(tr, price.value * amount.value,'cost'); 
// 	let remove = createCell(tr, 'удалить', 'remove'); 
//     remove.addEventListener('click', function() {
// 		this.parentElement.remove();
// 		recountTotal();
//     });
	
// 	table.appendChild(tr);
//     recountTotal();
// });
// function recountTotal() {
// 	let costs = table.querySelectorAll('.cost');
// 	if (costs) {
//         let sum = 0;
//         for(let i = 0; i<costs.length; i++){
//             sum += +costs[i].textContent
//         }
//         total.textContent = sum
//         console.log(sum);
// 	}
// }

// function allowEdit(td) {
// 	td.addEventListener('dblclick', function() {
// 	 	let input = document.createElement('input')
// 	 	input.value = td.textContent
// 		td.textContent = ""
// 		input.addEventListener("blur",function(){
// 			td.textContent = input.value
// 			input.remove()
// 			if (td.classList.contains('price') || td.classList.contains('amount')) {
// 				let tr = td.parentElement
// 				let price  = tr.querySelector('.price');
// 				let amount = tr.querySelector('.amount');	
// 				let cost = tr.querySelector('.cost');
// 				cost.textContent = price.textContent * amount.textContent	
// 				recountTotal()
// 			}
// 		})
	
// 		td.appendChild(input)

// 	});
// }