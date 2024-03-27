const cards_container = document.querySelector('.cards_container');
const cards = [
  {
    title: 'Work',
    image: 'images/icon-work.svg',
    time_day: '5hrs', last_time_day: 'Last Day - 7hrs',
    time_week: '32hrs', last_time_week: 'Last Week - 36hrs',
    time_month: '103hrs', last_time_month: 'Last Month - 128hrs'
  },
  {
    title: 'Play',
    image: 'images/icon-play.svg',
    time_day: '1hr', last_time_day: 'Last Day - 2hrs',
    time_week: '10hrs', last_time_week: 'Last Week - 8hrs',
    time_month: '23hrs', last_time_month: 'Last Month - 29hrs'
  },
  {
    title: 'Study',
    image: 'images/icon-study.svg',
    time_day: '0hrs', last_time_day: 'Last Day - 1hr',
    time_week: '4hrs', last_time_week: 'Last Week - 7hrs',
    time_month: '13hrs', last_time_month: 'Last Month - 19hrs'
  },
  {
    title: 'Exercise',
    image: 'images/icon-exercise.svg',
    time_day: '1hr', last_time_day: 'Last Day - 1hr',
    time_week: '4hrs', last_time_week: 'Last Week - 5hrs',
    time_month: '11hrs', last_time_month: 'Last Month - 18hrs'
  },
  {
    title: 'Social',
    image: 'images/icon-social.svg',
    time_day: '1hr', last_time_day: 'Last Day - 3hrs',
    time_week: '5hrs', last_time_week: 'Last Week - 10hrs',
    time_month: '21hrs', last_time_month: 'Last Month - 23hrs'
  },
  {
    title: 'Self Care',
    image: 'images/icon-self-care.svg',
    time_day: '0hrs', last_time_day: 'Last Day - 1hr',
    time_week: '2hrs', last_time_week: 'Last Week - 2hrs',
    time_month: '7hrs', last_time_month: 'Last Month - 11hrs'
  }

];

function loadCardsWeek() {
  cards.forEach(card => {
    cards_container.innerHTML += `
    <div class="card__info__activity">
      <div class="card__info__activity__header ${card.title.replace(/\s/g, '').toLowerCase()}">
        <img src="${card.image}" alt="Image ${card.title}">
      </div>

      <div class="card__info__activity__content">
        <h2 class="card__info__activity__title">${card.title}</h2>
        <div class="card__image__ellipsis">
          <img src="images/icon-ellipsis.svg" alt="Icon ellipsis">
        </div>
        <p class="card__info__activity__time">${card.time_week}</p>
        <p class="card__info__activity__last_time">${card.last_time_week}</p>
      </div>
    </div> `;
  });
}

function loadCardsDay() {
  cards.forEach(card => {
    cards_container.innerHTML += `
    <div class="card__info__activity">
      <div class="card__info__activity__header ${card.title.replace(/\s/g, '').toLowerCase()}">
        <img src="${card.image}" alt="Image ${card.title}">
      </div>

      <div class="card__info__activity__content">
        <h2 class="card__info__activity__title">${card.title}</h2>
        <div class="card__image__ellipsis">
          <img src="images/icon-ellipsis.svg" alt="Icon ellipsis">
        </div>
        <p class="card__info__activity__time">${card.time_day}</p>
        <p class="card__info__activity__last_time">${card.last_time_day}</p>
      </div>
    </div> `;
  });
}

function loadCardsMonth() {
  cards.forEach(card => {
    cards_container.innerHTML += `
    <div class="card__info__activity">
      <div class="card__info__activity__header ${card.title.replace(/\s/g, '').toLowerCase()}">
        <img src="${card.image}" alt="Image ${card.title}">
      </div>

      <div class="card__info__activity__content">
        <h2 class="card__info__activity__title">${card.title}</h2>
        <div class="card__image__ellipsis">
          <img src="images/icon-ellipsis.svg" alt="Icon ellipsis">
        </div>
        <p class="card__info__activity__time">${card.time_month}</p>
        <p class="card__info__activity__last_time">${card.last_time_month}</p>
      </div>
    </div> `;
  });
}

window.onload = loadCardsWeek;

function loadCards(time) {
  cards_container.innerHTML = `
        <div class="card__info">
            <div class="card__info__header">
                <div class="image__container">
                    <img src="images/image-jeremy.png" alt="Profile">
                </div>

                <h1 class="card__name">
                    <span class="card__name__report">Report for</span>
                    Jeremy Robson
                </h1>
            </div>

            <ul class="card__info__time">
                <li class="${time === 'Daily' ? 'active' : ''} " onclick="loadCards('Daily')">Daily</li>
                <li class="${time === 'Weekly' ? 'active' : ''} " onclick="loadCards('Weekly')">Weekly</li>
                <li class="${time === 'Monthly' ? 'active' : ''} " onclick="loadCards('Monthly')">Monthly</li>
            </ul>
        </div>
    `;
    if (time === 'Daily') {
      loadCardsDay();
    } else if (time === 'Weekly') {
      loadCardsWeek();
    } else {
      loadCardsMonth();
    }
}