const influencers = document.querySelector('.influencers-box');

const influencersData = [
  {
    username: '@amelia_gomez',
    review:
      '“You gotta have this dress for the summertime.I’ve been blessed with it last year, now it’s your time to shine!“',
    via: 'via instagram story',
    price: '20',
    image: './images/influencers/amelia_gomez.png',
    avatar: './images/influencers/instagramIcon.svg',
  },
  {
    username: '@tara_montana',
    review: '“Best Coachella boots I’ve ever had. Comfy and modern. What else do you need in shoes?”',
    via: 'via instagram story',
    price: '20',
    image: './images/influencers/tara_montana.png',
    avatar: './images/influencers/instagramIcon.svg',
  },
  {
    username: '@Sofi',
    review: '“This set is everything!!!!”',
    via: 'via instagram story',
    price: '20',
    image: './images/influencers/Sofi.png',
    avatar: './images/influencers/instagramIcon.svg',
  },

  {
    username: '@lost_in_the_lights',
    review: '“Sparkly, romantic, date night bag. After all, you only need lipgloss inside”',
    via: 'via instagram story',
    price: '20',
    image: './images/influencers/lost_in_the_lights.png',
    avatar: './images/influencers/instagramIcon.svg',
  },
];

influencers.innerHTML = influencersData
  .map((item) => {
    return `
        <div class="influencers-box-item">
          <img src="${item.image}" alt="${item.username}" class="influencers-box-item-image" />
          <div class="influencers-box-item-wrapper">
                <div class="influencers-box-item-info">
                    <img src="${item.avatar}" alt="${item.username}" />
                    <div class="influencers-box-item-info-subtitle">
                        <small>${item.username}</small>
                        <small class="disabled-text">${item.via}</small>
                    </div>
                </div>
                <small>${item.review}</small>
            </div>
            <button class="secondary">$${item.price}</button>
        </div>
      `;
  })
  .join('');
