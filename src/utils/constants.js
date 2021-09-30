export const BASE_URL='https://api.movies-explorer.gzzzh.nomoredomains.monster';
export const IMAGE_URL='https://api.nomoreparties.co';
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
export const NAME_REGEX = /\S[^a-z][^а-я]/i;
export const FETCH_ERROR_TEXT = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
export const SHORT_DURATION = 40;
export const COUNT_MOVIES_1024 = 12;
export const COUNT_MOVIES_768 = 8;
export const COUNT_MOVIES_320 = 5;
export const MORE_COUNT_MOVIES_1024 = 3;
export const MORE_COUNT_MOVIES_768 = 2;
export const MORE_COUNT_MOVIES_320 = 2;
export const MOVIES_DATA = [
  {id: 0, title: "Главный герой", poster: "http://localhost:3000/static/media/1.d96548f2.jpg", poster_min: "http://localhost:3000/static/media/hero.bdce38e1.jpg", genre: "Фантастика", director: "Шон Леви", duration: "115 мин. / 01:55", trailer: "https://www.youtube.com/embed/wnS4A5-vtFA", sinopsys: "У сотрудника крупного банка всё идёт по накатанной, пока однажды он не выясняет, что окружающий его мир — это часть огромной видеоигры, а сам он в ней — всего лишь второстепенный персонаж. Хватит ли у него духу переписать свой код, обратить на себя внимание прекрасной девушки и, наконец, спасти мир? Одним словом, получится ли из него главный герой?" },
  {id: 1, title: "Воспоминания", poster: "http://localhost:3000/static/media/6.0cb18b7c.jpg", poster_min: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/a56a1f89-1988-4e50-8a11-b8b0ca05063e/orig", genre: "Драма", director: "Лиза Джой", duration: "116 мин. / 01:56", trailer: "https://www.youtube.com/embed/WnKPm-3Wbow", sinopsys: "Недалёкое будущее, Майами почти полностью ушёл под воду из-за глобального потепления. Частный детектив Ник Баннистер с помощью специальной технологии выискивает в человеческой памяти нужные моменты, чтобы заказчик мог заново пережить прошлое и вспомнить что-то важное. Однажды на пороге его офиса появляется клиентка с простой просьбой: она забыла, где оставила ключи. Обычная сессия превращается в полноценный роман, пока в один день женщина не исчезает без следа." },
  {id: 2, title: "Дом надругой стороне", poster: "http://localhost:3000/static/media/12.3add84c6.jpg", poster_min: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/b351314e-d6a1-4b9d-aa6e-1e06b901a137/orig", genre: "Ужасы", director: "Дэвид Брукнер", duration: "107 мин. / 01:47", trailer: "https://www.youtube.com/embed/Iww_ikGKptI", sinopsys: "После внезапной смерти мужа скорбящая вдова разбирает его вещи в загородном доме на берегу озера, где начинает замечать всякие странности. Сначала женщина грешит на призраков, но вскоре выясняется, что у муженька от нее были секреты." },
  {id: 3, title: "Дюна", poster: "http://localhost:3000/static/media/7.d9c639af.jpg", poster_min: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/1f270385-327f-4084-aea4-bdfd1f7c4ac1/orig", genre: "Фантастика", director: "Дени Вильнёв", duration: "155 мин. / 02:35", trailer: "https://www.youtube.com/embed/Q6nepw3fskg", sinopsys: "Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным." },
]