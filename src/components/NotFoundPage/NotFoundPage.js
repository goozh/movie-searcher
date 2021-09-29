import { useHistory} from 'react-router-dom';

function NotFoundPage() {
  const history = useHistory();
  return (
    <section className="not-found-page">
      <div className="not-found-page__container">
        <h2 className="not-found-page__title">404</h2>
        <p className="not-found-page__subtitle">Страница не найдена</p>
      </div>
      <button className="not-found-page__link" onClick={() => history.goBack()}>Назад</button>
    </section>
  );
}

export default NotFoundPage;