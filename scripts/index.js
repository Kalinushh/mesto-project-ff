// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

function createCard(item, onDelete) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    cardImage.src = item.link;
    cardTitle.textContent = item.name;
  
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => onDelete(cardElement));
  
    return cardElement;
  };

// @todo: Функция удаления карточки
function DeleteCard(cardElement) {
    cardElement.remove();
  };

// @todo: Функция рендера карточки
    function renderCard(cardElement) {
    placesList.append(cardElement);
  };

// @todo: Вывести карточки на страницу
initialCards.forEach((card) => {
    const cardElement = createCard(card, DeleteCard);
    renderCard(cardElement);
  });

