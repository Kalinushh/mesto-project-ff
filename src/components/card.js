import { openModal } from "./modal.js";

const cardTemplate = document.querySelector("#card-template").content;

export function createCard(item, onDelete, onLike, onImageClick) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => onDelete(cardElement));

  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => onLike(likeButton));

  cardImage.addEventListener("click", () => onImageClick(item.link, item.name));

  return cardElement;
}

export function renderCard(cardElement, container) {
  container.append(cardElement);
}

export function deleteCard(cardElement) {
  cardElement.remove();
}

export function toggleLike(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}

export function openImagePopup(link, name) {
  const popupImage = document.querySelector(".popup_type_image");
  const imageElement = popupImage.querySelector(".popup__image");
  const captionElement = popupImage.querySelector(".popup__caption");

  imageElement.src = link;
  imageElement.alt = name;
  captionElement.textContent = name;

  openModal(popupImage);
}
