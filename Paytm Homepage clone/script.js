const scrollContainer = document.querySelector('.paytmMoneyInstruments');

const scrollLeft = () => {
  scrollContainer.scrollBy({
    left: -200,
    behavior: 'smooth'
  });
};

const scrollRight = () => {
  scrollContainer.scrollBy({
    left: 200,
    behavior: 'smooth'
  });
};

const leftButton = document.getElementById("leftScroll");
leftButton.classList.add('scroll-button');

leftButton.addEventListener('click', scrollLeft);

const rightButton = document.getElementById("rightScroll")

rightButton.classList.add('scroll-button');
rightButton.addEventListener('click', scrollRight);

scrollContainer.parentNode.insertBefore(leftButton, scrollContainer);
scrollContainer.parentNode.insertBefore(rightButton, scrollContainer.nextSibling);
