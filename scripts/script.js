'use strict'

document.addEventListener("DOMContentLoaded", () => {
  console.log('Скрипт отработал корректно');

  const menuIcons = document.querySelectorAll(".menu__icon");

  const menuText = document.querySelectorAll('.menu__popup');
  menuIcons.forEach((item, index) => {
    console.log(item, index);
    item.addEventListener('mouseenter', () => {
      item.style.opacity = 0.5;
      // И удаляем атрибут hidden и текст становится видимым
      menuText[index].removeAttribute('hidden');
    });
    item.addEventListener('mouseleave', () => {
      item.style.opacity = 1;
      // И добавляем атрибут hidden и текст становится невидимым
      menuText[index].setAttribute('hidden', true);

    });

  });


});
