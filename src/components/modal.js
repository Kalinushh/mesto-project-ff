function handleEscKeyUp(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".popup_is-opened");
    if (openedModal) closeModal(openedModal);
  }
}

export function openModal(modal) {
  modal.classList.add("popup_is-opened", "popup_is-animated");
  document.addEventListener("keydown", handleEscKeyUp);
}

export function closeModal(modal) {
  modal.classList.remove("popup_is-opened", "popup_is-animated");
  document.removeEventListener("keydown", handleEscKeyUp);
}

export function closePopup(popups) {
  popups.forEach((popupElement) => {
    const closeButton = popupElement.querySelector(".popup__close");
    closeButton.addEventListener("click", () => closeModal(popupElement));
    popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target === popupElement) closeModal(popupElement);
    });
  });
}
