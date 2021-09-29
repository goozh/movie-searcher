import { useContext } from "react";
import { MessagePopupContext } from "../../contexts/MessagePopupContext";

function MessagePopup() {
  const { isMessagePopupOpened, message, closeMessagePopup } = useContext(MessagePopupContext);

  function handleClosePopup() {
    closeMessagePopup();
  }

  return (
    <section className={'message-popup' + (isMessagePopupOpened ? ' message-popup_opened' : '')}>
      <div className="message-popup__container">
        <div className="message-popup__close" onClick={handleClosePopup}></div>
        <p className="message-popup__text">{message}</p>
        <button className="message-popup__ok-button" type="submit" onClick={handleClosePopup}>ОК</button>
      </div>
    </section>
  );
}

export default MessagePopup;