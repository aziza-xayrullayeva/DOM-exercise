// //DOM-Document Object Model

// //HTML teg nomi bilan ulanish
// const title_With_HTML_Tag= document.getElementsByTagName("h2");

// //Class nomi bilan ulanish
// const title_With_Class_Name= document.getElementsByClassName("title");

// //ID nomi bilan ulanish
// const title_With_ID= document.getElementById("mytitle");
// // console.log(title_With_ID);

// // querySelector - querySelectorAll

// const titles = document.querySelectorAll(".title");
// console.log(titles); 

// //JSDA HTML  elementlarini yaratish
// // createElement() - HTML elementini yaratish
// const text = document.createElement("p");
// text.textContent= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.";

// //textContent- HTML elementining ichiga text qo'shish

// const card = document.querySelector(".card");
// card.appendChild(text);
// //appendChild() - HTML elementini boshqa elementning ichiga qo'shish

// //Style yozish
// text.style.color = "red";
// text.style.fontFamily='System-ui';
// text.style.textAlign="center";



// const list = document.querySelector("ol");
// let num=100000;
// while (num>0){
//     const li = document.createElement("li");
//     li.textContent='HII'
//     list.appendChild(li); 
//     num=num-1;

// }

const list = document.querySelector("ol");
let num = 100000;

do {
    const li = document.createElement("li");
    li.textContent = 'HII';
    list.appendChild(li); 
    num=num-1;
} while (num > 0);


const arr =Array.from({length: 100000})

for(key of arr){
     const li = document.createElement("li");
    li.textContent = 'HII';
    list.appendChild(li);
}
