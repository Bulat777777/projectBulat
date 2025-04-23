'use strict'

document.addEventListener("DOMContentLoaded", () => {
  console.log('Скрипт отработал корректно');
  /* 
        *   Алгоритм
        *
        *   1. Начало.
        *   2. Получаем все элементы изображений с описанием.
        *   3. Для каждого изображения (проверяем есть ли такие изображения) :
        *       3.1.  Добавляем обработчик наведениия курсору на изображения :
        *           3.1.1 Да:
        *               3.1.1.1. Показываем текст при наведении
        *               3.1.2 Нет: Продолжаем
        *       3.2. Добавляем обрабочтик курсор уходит с изображения:
        *          3.3.1 Да:
        *               3.3.1.1 Скрываем элемент с описанием
        *          3.3.2 Нет: Продолжаем
        *   4. Конец
        *   Блок-схема: /images/block-schema.png
        */
  //3.3 появление описания пиццы
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

  //3.4 	Формируем массив из заголовков карточек 
  const cardsContainer = document.querySelector(".card");

  if (cardsContainer) {
    const dataTitleCards = [
      "Классические пиццы",
      "Детская пицца",
      "От шеф-поваров",
      "На праздник",
    ];
    const titleCard =
      cardsContainer.querySelectorAll(".card__title");

    titleCard.forEach((item, index) => {

      item.textContent = dataTitleCards[index];

    });
  }
  //3.4 	Появление модальной формы 
  const headerButtonModal = document.querySelector(".button__log");
  const modalApplication = document.querySelector(".dialog");
  if (headerButtonModal && modalApplication) {

    headerButtonModal.addEventListener("click", () => {
      modalApplication.removeAttribute("hidden");
    });
  }
  window.addEventListener("click", (event) => {
    // проверяем, был ли клик на фоне модального окна
    if (event.target === modalApplication) {
      //если условие выполняется, добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
      modalApplication.setAttribute("hidden", true);
    }
  });
  const closeModalButton = document.querySelector(".popup__close");

  //Для кнопки «Закрыть» добавляем обработчик события клика по этой кнопке:
  closeModalButton.addEventListener("click", () => {
    // Добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
    modalApplication.setAttribute("hidden", true);
  });


  //3.5
  //Объявляем переменную headerMenu и сохраняем в нее header__menu
  const headerMenu = document.querySelector('.header__nav');
  // Если такой элемент существует
  if (headerMenu) {
    //Объявляем переменную headerList и сохраняем в нее header__list, чтобы мы могли добавить новые элементы
    const headerList = headerMenu.querySelector('.header__list');

    //Создаем объект menuData, который содержит данные для трех ссылок меню.
    const menuData = {
      // Каждая ссылка содержит link (адрес ссылки; если ссылка никуда не ведет, то можно оставить #) и title (текст ссылки).
      link1: {
        link: '#',
        title: 'Главная',
      },
      link2: {
        link: '#',
        title: 'Пиццы',
      },
      link3: {
        link: '#',
        title: 'Супы',
      },
      link4: {
        link: '#',
        title: 'Салаты',
      },
      link5: {
        link: '#',
        title: 'Напитки',
      },
      link6: {
        link: '#',
        title: 'Десерты',
      },
      link7: {
        link: '#',
        title: 'Бакалея',
      },
      link8: {
        link: '#',
        title: 'Акции',
      },
      link9: {
        link: '#',
        title: 'Комбо',
      },
      link10: {
        link: '#',
        title: 'Контакты',
      }
    }

    //Создаем функцию createLink, которая будет добавлять ссылку в меню. Внутри функции 2 переменные: UrlLink – адрес, а title — текст ссылки.
    const createLink = (UrlLink, title) => {
      // создаем переменную  link, которая будет содержать HTML-код ссылки и вставляем в него 2 переменные
      const link = `
            <li class="header__item"><a href="${UrlLink}" class="header__item-link">${title}</a></li>
            `;
      return link;
    }

    // Создаем цикл for и проходим по всем элементам объекта menuData.
    for (const linkItem in menuData) {
      //Получаем данные для ссылки и сохраняем в переменную link.
      const link = menuData[linkItem];
      //Создаем переменную linkIndex и вызываем функцию createLink, куда передаем адрес и заголовок.
      const linkIndex = createLink(link.UrlLink, link.title);
      // С помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка headerList.
      headerList.insertAdjacentHTML('beforeend', linkIndex);

    }
  }


});

