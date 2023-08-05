'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li>toad</li>
  <li>frog</li>
  <li>salamander</li>
`;
console.log(ulEl.nodeName, ulEl.cloneNode(true));

// --- write some code ---
document.body.appendChild(ulEl)



// --- --- --- --- --- ---

console.log(ulEl.nodeName, ulEl.cloneNode(true));

const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
  const actual = ulEl.children[i].innerHTML;
  const expected = expectedInnerHTMLs[i];
  console.assert(actual === expected, `Test child ${i}`);
}
