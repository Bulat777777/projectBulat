'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно');

    const menuIcons = document.querySelectorAll(".menu__icon");

    menuIcons.forEach((item, index) => {
        const menuText = document.querySelectorAll('.menu__description');
        item.addEventListener('mouseenter', () => {
            item.style.opacity = 0.5;
            // И удаляем атрибут hidden и текст становится видимым
              menuText[index].removeAttribute('hidden');
            });
        
 });


});
