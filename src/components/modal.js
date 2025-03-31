function handleEscKeyUp(evt) {
  if (evt.key === "Escape") {
    closeModal(document.querySelector(".popup_is-opened"));
  }
}

export function openModal(modal) {
  modal.classList.add("popup_is-opened");
  modal.classList.add("popup_is-animated");
  document.addEventListener("keydown", handleEscKeyUp);
}

export function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  modal.classList.remove("popup_is-animated");
  document.removeEventListener("keydown", handleEscKeyUp);
}

export function listenerPopup(popupElement) {
  const closeButton = popupElement.querySelector(".popup__close");
  closeButton.addEventListener("click", () => closeModal(popupElement));
  popupElement.addEventListener("mousedown", (evt) => {
    if (evt.target === popupElement) {
      closeModal(popupElement);
    }
  });
}

document.querySelectorAll(".popup").forEach(listenerPopup);
