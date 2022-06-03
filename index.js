import Interface from "./modules/Interface.js";
import {addBook, removeBook} from "./modules/bookFunctions.js";

// Event: Display books
document.addEventListener('DOMContentLoaded', Interface.displayBooks); // call the displaybooks method everytime the page loads
document.querySelector('form').addEventListener('submit', addBook); // Event: Add books
document.querySelector('.book-list').addEventListener('click', removeBook); // Event: Remove books

// Single page application
const list = document.querySelector('#book-library');
const addNew = document.querySelector('#add-book');
const contact = document.querySelector('#contact');

const listItem = document.querySelector('.list-item');
const addItem = document.querySelector('.add-item');
const contactItem = document.querySelector('.contact-item');

  listItem.addEventListener('click', (e)=>{
    list.classList.remove('hide');
    addNew.classList.add('hide');
    contact.classList.add('hide');
    });
   addItem.addEventListener('click', ()=>{
    addNew.classList.remove('hide');
    list.classList.add('hide');
    contact.classList.add('hide');
  });
   contactItem.addEventListener('click', ()=>{
    contact.classList.remove('hide');
    list.classList.add('hide');
    addNew.classList.add('hide');
  });


// Use a for loop to iterate through the nav -items
// const navItem = document.querySelectorAll('.nav-items');
// for (let i = 0; i < navItem.length; i += 1) {
//   navItem[i].addEventListener('click', () => {
//     buttonMethods[i]();
//   });
// }

const showDate = document.querySelector('.show-date');
let date;
setInterval(() => {
  const today = new Date();
  date = `${today.getMonth() + 1}-${today.getFullYear()}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  showDate.innerText = date;
}, 1000);
