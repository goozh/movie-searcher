import poster1 from '../../images/1.jpg';
import poster2 from '../../images/6.jpg';
import poster3 from '../../images/11.jpg';
import poster4 from '../../images/7.jpg';
import PromoCard from '../PromoCard/PromoCard';

function Promo() {
  return (
    <section className="promo">
      <PromoCard />
      {/* <div className="promo__card promo__card_main" style={{ backgroundImage: `url(${poster1})`}}></div> */}
      <div className="promo__card promo__card_top-right" style={{ backgroundImage: `url(${poster2})`}}></div>
      <div className="promo__card" style={{ backgroundImage: `url(${poster3})`}}></div>
      <div className="promo__card" style={{ backgroundImage: `url(${poster4})`}}></div>
    </section>
  );
}

export default Promo;