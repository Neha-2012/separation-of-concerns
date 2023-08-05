'use strict';

// fill in the _s

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'are you honest?';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));

const truthTestHandler = () => {
  
  const userName = prompt('are you honest?');
  console.log(userName, userName===null)
  if(userName === null){
    return;
  }
  const password = prompt('think the answer')
  if(password === null){
    return;
  }
  // ask a user to confirm if they are honest
  // let them know what you think of their answer
  alert(`they are honest, ${userName}`);
};


buttonEl.addEventListener('click', truthTestHandler);

// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// "click" the button again
//const clickEvent2 = new Event('click');
//buttonEl.dispatchEvent(clickEvent2);
