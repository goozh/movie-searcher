import { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { mainApi } from '../../utils/MainApi';
import { FETCH_ERROR_TEXT } from '../../utils/constants';
import { MessagePopupContext } from "../../contexts/MessagePopupContext";

function Logout({ isLoggedIn, setIsLoggedIn }) {
  const history = useHistory();
  const { openMessagePopup } = useContext(MessagePopupContext);

  useEffect(() => {
    if (isLoggedIn) {
      mainApi.logout()
        .then((res) => {
          if (res) {
            localStorage.removeItem('jwt');
            setIsLoggedIn(false);
            history.push('/');
          }
        })
        .catch((err) => {
          openMessagePopup(`${FETCH_ERROR_TEXT} ${err}`);
        });
    }
  })

  return (
  <>
    <p className="logout">Выходим из аккаунта ...</p>
  </>);
}

export default Logout;