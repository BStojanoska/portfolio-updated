const accordionDomNode = document.querySelector('.js-badger-accordion');

const accordions = document.querySelectorAll('.js-badger-accordion');

Array.from(accordions).forEach((accordion) => {
    const ba = new BadgerAccordion(accordion);
});