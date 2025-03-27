'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно');

    const menuIcon = document.querySelector(".menu__icon");

    menuIcon.addEventListener('mouseenter', () => {
        console.log('Мышка наведена на изображение, показываем текст');
 });


});
