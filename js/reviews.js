const reviews = document.querySelector('.reviews-box-item-reviews');

const reviewsData = [
  {
    name: 'Marija Naumovska',
    role: 'customer',
    review: 'I love shopping at Preloved - great selection, unbeatable prices, and guilt-free sustainable fashion!',
    rating: '5.0',
    image: './images/reviews/marija.png',
  },
  {
    name: 'Ivory Betta',
    role: 'seller',
    review:
      'Selling here is a breeze - easy listings, great support, and contributing to a more sustainable fashion industry.',
    rating: '5.0',
    image: './images/reviews/ivory.png',
  },
  {
    name: 'Daisy Mae',
    role: 'partner',
    review:
      "Partnering with Preloved has been fantastic - they're driving positive change in fashion with their user-friendly platform and commitment to sustainability.",
    rating: '5.0',
    image: './images/reviews/daisy.png',
  },
];

reviews.innerHTML = reviewsData
  .map((item) => {
    return `
        <div class="reviews-box-item-reviews-item">
            <div class="reviews-box-item-reviews-item-heading">
                <div class="reviews-box-item-reviews-item-heading-info">
                    <img src="${item.image}" alt="${item.name}" class="reviews-box-item-reviews-item-heading-info-image" />
                    <div class="reviews-box-item-reviews-item-heading-info-title">
                        <p>${item.name}</p>
                        <p class="primary-text">${item.role}</p>
                    </div>
                </div>
                <div class="reviews-box-item-reviews-item-heading-rating">
                    <img src="./images/reviews/reviewsIcon.svg" />
                    <h4>${item.rating}</h4>
                </div>
            </div>
            <p class="normal-text disabled-text">"${item.review}"</p>
        </div>
      `;
  })
  .join('');
