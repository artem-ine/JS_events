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



// get view buttons
let viewButtons = document.querySelectorAll('.btn-success');

// loop thru buttons
viewButtons.forEach(function(button) {
  button.addEventListener('mouseenter', function() {
    // get parent card and reduce its image + hide text
    let card = button.closest('.card');
    card.querySelector('.card-img-top').style.transform = 'scale(0.2)';
    card.querySelector('.card-text').style.display = 'none';
  });

  // 'toggle' it  by restoring image size + bring back text
  button.addEventListener('mouseleave', function() {
    let card = button.closest('.card');
    card.querySelector('.card-img-top').style.transform = 'scale(1)';
    card.querySelector('.card-text').style.display = 'block';
  });
});



// get the ==>
let forwardButton = document.querySelector('.btn-secondary');

forwardButton.addEventListener('click', function() {
  // get all the cards
  let cards = document.querySelectorAll('.card');

  // remove last card from list
  let lastCard = cards[cards.length - 1];
  lastCard.remove();

  // insert last card in first place
  let firstCard = cards[0];
  firstCard.parentNode.insertBefore(lastCard, firstCard);
});



// get the <==
let backButton = document.querySelector('.btn-primary');

backButton.addEventListener('click', function(event) {
  // disable link
  event.preventDefault();

  // get all cards
  let cards = document.querySelectorAll('.card');

  // remove first card from the list
  let firstCard = cards[0];
  firstCard.remove();

  // put first card last
  let lastCard = cards[cards.length - 1];
  lastCard.parentNode.appendChild(firstCard);

  // scroll the container to the right 
  let cardContainer = document.querySelector('.row');
  cardContainer.scrollLeft += firstCard.offsetWidth;
});




