// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

initialCards.forEach( function (element) {
    let cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').src = element.link;
    cardElement.querySelector('.card__image').alt = element.name;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function () {
        deleteCard(cardElement);
    });

    placesList.append(cardElement);
});

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
    cardElement.remove();
  }


// @todo: Вывести карточки на страницу
