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

export function deleteCard(cardElement) {
  cardElement.remove();
}

export function putLike(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}
