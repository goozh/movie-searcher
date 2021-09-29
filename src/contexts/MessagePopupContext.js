import React from 'react';

export const MessagePopupContext = React.createContext({
  isMessagePopupOpen: false,
  message: '',
  openMessagePopup: () => {},
  closeMessagePopup: () => {},
});