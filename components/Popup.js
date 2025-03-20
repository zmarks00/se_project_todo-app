class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keyup", this._handleEscapeClose);
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup") ||
        evt.target.classList.contains("popup__close")
      ) {
        this.close();
      }
    });
  }
}

export default Popup;

// The purpose of the Popup class is to create a popup that can be opened and closed.
// The class has a constructor that takes an object with a popupSelector property.
// The constructor sets the _popupElement property to the element that matches the popupSelector.
// The class has a method called open that adds the class popup_visible to the _popupElement and adds
// an event listener to the document that listens for the keyup event and calls the close method if that
// key is the Escape key. The class has a method called close that removes the class popup_visible from the
// _popupElement and removes the event listener from the document. The class has a method called
// setEventListeners that adds an event listener to the _popupElement that listens for the mousedown event
// and calls the close method if the target of the event is the popup or the close button.
// The class is exported as the default export.
