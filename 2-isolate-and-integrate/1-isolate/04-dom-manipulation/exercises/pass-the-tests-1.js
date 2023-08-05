'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p>
  <section></section>
  <h1></h1>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  replace the <p>
const navEl=document.createElement('nav');
const pEl=divEl.children[0]
pEl.replaceWith(navEl)

//  insert something before the <section>
const h2El=document.createElement('h2');
h2El.innerText ='new h2'
const sectionEl=divEl.children[1]
divEl.insertBefore(h2El,sectionEl)
//  remove the <h1>

divEl.removeChild(divEl.lastElementChild)
//  append something to the end

const appendEl=document.createElement('p')
divEl.appendChild(appendEl)
// --- --- --- --- --- ---
console.log(divEl)
console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4, 'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV', 'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H2', 'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION', 'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P', 'Test: 4th child');
