//42 Давайте для начала сделаем так, чтобы по нажатию на любую ячейку таблицы в этой ячейке просто появлялся крестик.
// function start(cells) {
//     for(let cell of cells){
//         cell.addEventListener("click",function func(event){
//             cell.textContent = "X"
//         })
//     }

// }
// let cells = document.querySelectorAll('#field td');
// start(cells);


//43 Реализуйте описанное чередование крестика и нолика.
// function start(cells) {
//     let i = 0;
//     for(let cell of cells){
//         cell.addEventListener("click",function func(){
// 			if (i % 2 == 0) {
// 				cell.textContent = 'X';
// 			} else {
// 				cell.textContent = 'O';
// 			}
// 			i++
//            cell.removeEventListener("click", func) 
//         })
        
//     }

// }
// let cells = document.querySelectorAll('#field td');
// start(cells);


//44 Самостоятельно, не подсматривая в мой код, внесите описанную правку.
// function start(cells) {
// 	let i = 0;
// 	for (let cell of cells) {
// 		cell.addEventListener('click', function func() {
// 			this.textContent = ['X', 'O'][i % 2]; 
// 			i++;
//             cell.removeEventListener("click", func) 
// 		});
// 	}
// }
// let cells = document.querySelectorAll('#field td');
// start(cells);

//45 Проверка победы в игре крестики-нолики
// function start(cells) {
// 	let i = 0;
// 	for (let cell of cells) {
// 		cell.addEventListener('click', function step(){ 
// 			this.textContent = ['X', 'O'][i % 2]; 
// 			this.removeEventListener('click', step);
// 			if (isVictory(cells)) {
// 				alert(this.textContent);
// 			}
//             else if (i == 8) {
// 				alert('ничья');
// 			}
			
// 			i++;
// 		});
// 	}
// }
// function isVictory(cells) {
// 	let combs = [
// 		[0, 1, 2],
// 		[3, 4, 5],
// 		[6, 7, 8],
// 		[0, 3, 6],
// 		[1, 4, 7],
// 		[2, 5, 8],
// 		[0, 4, 8],
// 		[2, 4, 6],
// 	];

// 	for (let comb of combs) {
// 		if (cells[comb[0]].textContent == cells[comb[1]].textContent && cells[comb[1]].textContent == cells[comb[2]].textContent && cells[comb[0]].textContent != '') {
// 			return true;
// 		}
        
// 	}
	
// 	return false;
// }
// let cells = document.querySelectorAll('#field td');
// start(cells);




















