import { initialCards } from "./cards.js";
import "../pages/index.css";
import { createCard, deleteCard, putLike } from "../components/card.js";
import {
  openModal,
  closeModal,
  closePopup,
} from "../components/modal.js";

// Работа с профилем
const formEditProfile = document.querySelector(
  '.popup__form[name="edit-profile"]'
);
const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(
  ".popup__input_type_description"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// Работа с добавлением новой карточки
const formNewCard = document.querySelector('.popup__form[name="new-place"]');
const placeNameInput = formNewCard.querySelector(
  ".popup__input_type_card-name"
);
const placeLinkInput = formNewCard.querySelector(".popup__input_type_url");
const popupAddCard = document.querySelector(".popup_type_new-card");

const editButton = document.querySelector(".profile__edit-button");
const popupEditCard = document.querySelector(".popup_type_edit");
const addButton = document.querySelector(".profile__add-button");

const placesList = document.querySelector(".places__list");
const popups = document.querySelectorAll(".popup");

// Устанавливаем обработчики для всех попапов
closePopup(popups);

// Функция открытия попапа с изображением
function openImagePopup(link, name) {
  const popupImage = document.querySelector(".popup_type_image");
  const imageElement = popupImage.querySelector(".popup__image");
  const captionElement = popupImage.querySelector(".popup__caption");
  imageElement.src = link;
  imageElement.alt = name;
  captionElement.textContent = name;
  openModal(popupImage);
}

// Выводим начальные карточки
initialCards.forEach((card) => {
  const cardElement = createCard(card, deleteCard, putLike, openImagePopup);
  placesList.append(cardElement);
});

function handleNewCardSubmit(evt) {
  evt.preventDefault();
  const newCard = { name: placeNameInput.value, link: placeLinkInput.value };
  const cardElement = createCard(
    newCard,
    deleteCard,
    putLike,
    openImagePopup
  );
  placesList.prepend(cardElement);
  closeModal(popupAddCard);
  formNewCard.reset();
}

formNewCard.addEventListener("submit", handleNewCardSubmit);

// Слушатели на кнопки

addButton.addEventListener("click", () => openModal(popupAddCard));

editButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popupEditCard);
});

formEditProfile.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupEditCard);
});
