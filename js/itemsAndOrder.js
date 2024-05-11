const justIn = document.querySelector('.just-in-box');
const select = document.querySelector('#items');
const totalPrice = document.querySelector('#totalPrice');

const justInData = [
  {
    name: 'Leopard bag',
    price: 20,
    maker: 'ZARA',
    image: './images/just-in/leopard-bag.png',
  },
  {
    name: 'Silky lavander dress',
    price: 800,
    maker: 'ARMANI',
    image: './images/just-in/lavander-dress.png',
  },
  {
    name: 'Red mini dress',
    price: 20,
    maker: 'BERSHKA',
    image: './images/just-in/red-dress.png',
  },
  {
    name: 'Denim jeans',
    price: 30,
    maker: 'LEVIS',
    image: './images/just-in/denim-jeans.png',
  },
  {
    name: 'High heels',
    price: 10,
    maker: 'ZARA',
    image: './images/just-in/high-heels.png',
  },
  {
    name: 'Green top',
    price: 5,
    maker: 'ZARA',
    image: './images/just-in/green-top.png',
  },
];

justIn.innerHTML = justInData
  .map((item) => {
    return `
        <div class="just-in-box-item">
          <img src="${item.image}" alt="${item.name}" />
            <div class="just-in-box-item-info">
                <div class="just-in-box-item-info-title">
                    <p>${item.maker}</p>
                    <p class="disabled-text">${item.name}</p>
                </div>
                <button class="secondary">$${item.price}</button>
            </div>
        </div>
      `;
  })
  .join('');

select.innerHTML = justInData
  .map((item) => {
    return `
        <option value="${item.name}">${item.name}</option>
      `;
  })
  .join('');
const selectedItem = justInData.find((item) => item.name === select.value);

totalPrice.innerHTML = '$' + selectedItem.price;

select.addEventListener('change', (event) => {
  const totalPrice = document.querySelector('#totalPrice');

  const selectedItem = justInData.find((item) => item.name === event.target.value);
  totalPrice.innerHTML = '$' + selectedItem.price;
});
