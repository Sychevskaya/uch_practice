//18.1 Допишите недостающую часть кода для решения описанной задачи.
// let input = document.querySelector('#input');
// let ul = document.querySelector('#list');

// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
//         let li = document.createElement("li")
//         li.textContent = input.value
//         ul.appendChild(li)


// 	}
// });

//18.2 Модифицируйте предыдущую задачу так, чтобы после нажатия клавиши Enter происходила очистка текста инпута.
// let input = document.querySelector('#input');
// let ul = document.querySelector('#list');

// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
//         let li = document.createElement("li")
//         li.textContent = input.value
//         input.value = ""
//         ul.appendChild(li)


// 	}
// });


//20 Давайте теперь реализуем удаление дел из списка.
// let input = document.querySelector('#input');
// let ul = document.querySelector('#list');
// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
//         let li = document.createElement("li")
//         let task = document.createElement('span');
// 		task.classList.add('task');
// 		task.textContent = input.value;
// 		li.appendChild(task);
		
// 		let remove = document.createElement('span');
// 		remove.classList.add('remove');
// 		remove.textContent = 'удалить';
// 		remove.addEventListener('click', function() {
// 			this.parentElement.remove();
// 		});
// 		li.appendChild(remove);
		
// 		let mark = document.createElement('span');
// 		mark.classList.add('mark');
// 		mark.textContent = 'сделано';
// 		li.appendChild(mark);
//         input.value = ""

//         ul.appendChild(li)
// 	}
// });


//21 Завершение дела в чеклисте 
// let input = document.querySelector('#input');
// let ul = document.querySelector('#list');
// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
//         let li = document.createElement("li")
//         let task = document.createElement('span');
// 		task.classList.add('task');
// 		task.textContent = input.value;
// 		li.appendChild(task);
		
// 		let remove = document.createElement('span');
// 		remove.classList.add('remove');
// 		remove.textContent = 'удалить';
// 		remove.addEventListener('click', function() {
// 			this.parentElement.remove();
// 		});
// 		li.appendChild(remove);
		
// 		let mark = document.createElement('span');
// 		mark.classList.add('mark');
// 		mark.textContent = 'сделано';
// 		mark.addEventListener('click', function() {
// 			this.parentElement.classList.add('done');
// 		});
// 		li.appendChild(mark);
//         input.value = ""

//         ul.appendChild(li)
// 	}
// });


//22 Редактирование дела в чеклисте
// let input = document.querySelector('#input');
// let ul = document.querySelector('#list');
// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
//         let li = document.createElement("li")
//         let task = document.createElement('span');
// 		task.classList.add('task');
// 		task.textContent = input.value;
// 		task.addEventListener('dblclick', function() {
// 			let text = this.textContent;
// 			this.textContent = '';
			
// 			let edit = document.createElement('input');
// 			edit.value = text;
// 			this.appendChild(edit);
			
// 			let self = this;
// 			edit.addEventListener('keypress', function(event) {
// 				if (event.key == 'Enter') {
// 					self.textContent = this.value;
// 				}
// 			});
// 		});
// 		li.appendChild(task);
		
// 		let remove = document.createElement('span');
// 		remove.classList.add('remove');
// 		remove.textContent = 'удалить';
// 		remove.addEventListener('click', function() {
// 			this.parentElement.remove();
// 		});
// 		li.appendChild(remove);
		
// 		let mark = document.createElement('span');
// 		mark.classList.add('mark');
// 		mark.textContent = 'сделано';
// 		mark.addEventListener('click', function() {
// 			this.parentElement.classList.add('done');
// 		});
// 		li.appendChild(mark);
//         input.value = ""

//         ul.appendChild(li)
// 	}
// });




































