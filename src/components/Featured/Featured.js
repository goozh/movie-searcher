import poster from '../../images/13.jpg';

function Featured() {
  return (
    <section className="featured" style={{ backgroundImage:  `linear-gradient(transparent, 70%, #252B42), url(${poster})`}}>
      <div className="featured__content-container">
        <h2 className="featured__title">Дюна</h2>
        <p className="featured__text">Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.</p>
        <button className="featured__more-button">Подробнее</button>
      </div>
    </section>
  )
}

export default Featured;