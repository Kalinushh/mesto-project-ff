import { initialCards } from "./cards.js";
import "../pages/index.css";
import {
  createCard,
  renderCard,
  deleteCard,
  toggleLike,
  openImagePopup,
} from "../components/card.js";
import { openModal, closeModal } from "../components/modal.js";

// DOM-узлы
const placesList = document.querySelector(".places__list");

// Выводим начальные карточки
initialCards.forEach((card) => {
  const cardElement = createCard(card, deleteCard, toggleLike, openImagePopup);
  renderCard(cardElement, placesList);
});

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

function handleNewCardSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: placeNameInput.value,
    link: placeLinkInput.value,
  };
  const cardElement = createCard(
    newCard,
    deleteCard,
    toggleLike,
    openImagePopup
  );
  placesList.prepend(cardElement);
  closeModal(popupAddCard);
  formNewCard.reset();
}

formNewCard.addEventListener("submit", handleNewCardSubmit);

// Слушатели на кнопки
const addButton = document.querySelector(".profile__add-button");
addButton.addEventListener("click", () => openModal(popupAddCard));

const editButton = document.querySelector(".profile__edit-button");
const popupEditCard = document.querySelector(".popup_type_edit");

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
