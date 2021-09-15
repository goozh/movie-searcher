import poster1 from '../../images/1.jpg';
import poster2 from '../../images/6.jpg';
import poster3 from '../../images/12.jpg';
import poster4 from '../../images/7.jpg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__card promo__card_main" style={{ backgroundImage: `url(${poster1})`}}>
        <div className="promo__content-container">
          <h2 className="promo__card-title promo__card-title_main">Главный герой</h2>
          <p className="promo__card-text">У сотрудника крупного банка всё идёт по накатанной, пока однажды он не выясняет, что окружающий его мир — это часть огромной видеоигры, а сам он в ней — всего лишь второстепенный персонаж. Хватит ли у него духу переписать свой код, обратить на себя внимание прекрасной девушки и, наконец, спасти мир? Одним словом, получится ли из него главный герой?</p>
          <button className="promo__card-more-button">Подробнее</button>
        </div>
      </div>
      <div className="promo__card promo__card_top-right" style={{ backgroundImage: `url(${poster2})`}}>
        <div className="promo__content-container">
          <h2 className="promo__card-title promo__card-title_top-right">Воспоминания</h2>
          <button className="promo__card-more-button promo__card-more-button_top-right">Подробнее</button>
        </div>
      </div>
      <div className="promo__card" style={{ backgroundImage: `url(${poster3})`}}>
        <h2 className="promo__card-title promo__card-title_small">Дом на другой стороне</h2>
      </div>
      <div className="promo__card" style={{ backgroundImage: `url(${poster4})`}}>
        <h2 className="promo__card-title promo__card-title_small">Дюна</h2>
      </div>
    </section>
  );
}

export default Promo;