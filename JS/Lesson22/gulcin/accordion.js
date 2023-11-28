const accordionItems = document.querySelectorAll('.accordion__item');
const accordionItemBodies = document.querySelectorAll('.accordion__item-body');


accordionItems.forEach(item => item.addEventListener('click', openAccordion));

function openAccordion(e) {
    accordionItems.forEach(function (item) {
        if (item !== e.currentTarget) {
            item.classList.remove('active');
        }
    });
    e.currentTarget.classList.toggle('active');
};