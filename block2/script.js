//15-16 Игра в города
// let field   = document.querySelector('#field');
// let message = document.querySelector('#message');
// let arr = [""];
// let a =0; 
// field.addEventListener("keypress", function(event){
//     if(event.key === "Enter"){
//         let arr1 = arr[arr.length-1].split("")
//         if(arr.includes(field.value)){
//             alert("Слово уже есть")
//         }
//         if(a == 0){
//             arr.push(field.value)
//             a++
//         }
//         if(!arr.includes(field.value)){
//             if(field.value.split("")[0] != arr1[arr1.length-1]){
//                 alert("Не подходит")
//             }
//             else{
//                 arr.push(field.value)
//             }
//         }
//         console.log(arr)
//         field.value=""
//     }
// })

//17 Игра в города против робота
// let field   = document.querySelector('#field');
// let message = document.querySelector('#message');
// let cities = [];
// let allCities = ["азов","арамир","бабушкин","вельск","калтан","астана","находка","ногинск","рыбинск","ряжск","кузнецк","кувшиново", "москва"];
// let hod =1
// field.addEventListener("keypress", function(event){
//     if(event.key==="Enter"){
//         if(cities.includes(field.value)){
//             alert("Уже было названо")
//         }else if(cities.length==0 && allCities.includes(field.value)){
//                 cities.push(field.value);
//                 console.log(cities)
//         }else if(!allCities.includes(field.value)){
//             alert("Такого города нет");
//         }else if(hod%2==0){
//             let arr1 = cities[cities.length-1].split('')
//             if(arr1[arr1.length-1]!=field.value.split('')[0] || !allCities.includes(field.value)){
//                alert("Не подходит")
//             }else{
//                 cities.push(field.value)
//                 hod++;
//             }
           
//         }
//         if(hod%2!=0){
//             let arr1 = cities[cities.length-1].split('')
//             for(let elem of allCities){
//                 if(arr1[arr1.length-1]!=elem.split('')[0] || cities.includes(elem)){
//                     continue
//                 }else{
//                     cities.push(elem)
//                     hod++;
//                     break;
//                 }
//             }
//         }  
//         console.log(cities)
//         field.value='';
// }  
  
// })
