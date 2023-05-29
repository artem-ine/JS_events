// get footer + initialize counter 
let footer = document.querySelector('footer');
let footerClickCounter = 1

// add click event to footer + increment counter
footer.addEventListener('click', function() {
  console.log('click number ' + footerClickCounter);
  footerClickCounter += 1;
});



// get hamburger menu button
let hamburgerMenu = document.querySelector('.navbar-toggler');

// get navbarHeader element
let navbarHeader = document.getElementById('navbarHeader');

// toggle 'show'
hamburgerMenu.addEventListener('click', function() {
  navbarHeader.classList.toggle('show');
});



// get card body + edit button
let card = document.getElementsByClassName('card-body')[0];
let editButton = card.getElementsByClassName('btn-outline-secondary')[0];

// change text to red
editButton.addEventListener('click', function() {
  card.style.color = 'red';
});



// get card body + edit button
let secondCard = document.getElementsByClassName('card-body')[1];
let secondEditButton = secondCard.getElementsByClassName('btn-outline-secondary')[0];

// change text to green with toggle functionality, if green -> black, if black -> green
secondEditButton.addEventListener('click', function() {
  if (secondCard.style.color === 'green'){
      secondCard.style.color = 'black' ;
    }else {
      secondCard.style.color = 'green';
    }
});



// get header element
let header = document.querySelector('header');

// upon double click, check if link is there. if yes remove, if not add it
header.addEventListener('dblclick', function() {
  let link = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');
  let head = document.querySelector('head');

  if (link) {
    link.remove();
  } else {
    let newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    newLink.integrity = 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T';
    newLink.crossOrigin = 'anonymous';
    head.appendChild(newLink);
  }
});
