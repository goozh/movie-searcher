import poster1 from '../../images/1.jpg';

function PromoCard() {
  return (
    <div className="promo-card" style={{ backgroundImage: `url(${poster1})`}}>
      <h2 className="promo-card__title">Главный герой</h2>
      <p className="promo-card__text">У сотрудника крупного банка всё идёт по накатанной, пока однажды он не выясняет, что окружающий его мир — это часть огромной видеоигры, а сам он в ней — всего лишь второстепенный персонаж. Хватит ли у него духу переписать свой код, обратить на себя внимание прекрасной девушки и, наконец, спасти мир? Одним словом, получится ли из него главный герой?</p>
      <button className="promo-card__more-button">Подробнее</button>
    </div>
  );
}

export default PromoCard;