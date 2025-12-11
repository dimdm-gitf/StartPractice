const hamburger = document.querySelector('.header_burger');
const navMenu = document.querySelector('.headerMenu');
const navLink = document.querySelectorAll('.header-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLink.forEach(link => link.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));


let postOne = document.querySelector('.post_one');
let postTwo = document.querySelector('.post_two');
let postThree = document.querySelector('.post_three');
let firstIn = 0;
let sliderIt = [postOne, postTwo, postThree];

function showSl(index) {
    sliderIt.forEach(item => {
        item.style.display = 'none';
    });
    
    sliderIt[index].style.display = 'flex';
    firstIn = index;
}

function nextSl() {
    let nextIndex = (firstIn + 1) % sliderIt.length;
    showSl(nextIndex);
}

function prevSl() {
    let prevIndex = (firstIn - 1 + sliderIt.length) % sliderIt.length;
    showSl(prevIndex);
}


document.querySelector('.next-btn').onclick = nextSl;
document.querySelector('.prev-btn').onclick = prevSl;



const cart = [];

const modal = document.getElementById('cartModal');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');

function openModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}


document.querySelector('.modal__close').onclick = closeModal;
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});


document.querySelectorAll('.pizzaBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    const price = Number(btn.dataset.price);

    // ищем, есть ли такая пицца уже в корзине
    let item = cart.find(p => p.name === name);
    if (item) {
      item.qty++;
    } else {
      cart.push({ name, price, qty: 1 });
    }

    renderCart();   
    openModal();
  });
});

function renderCart() {
  cartItemsEl.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'cartItem';

    const info = document.createElement('span');
    info.textContent = `${item.name} × ${item.qty}`;

    const sum = document.createElement('span');
    sum.textContent = item.price * item.qty + ' ₽';
    total += item.price * item.qty;

    
    const minus = document.createElement('button');
    minus.textContent = '−';
    minus.onclick = () => {
      item.qty--;
      if (item.qty <= 0) cart.splice(index, 1);
      renderCart();
    };

    const plus = document.createElement('button');
    plus.textContent = '+';
    plus.onclick = () => {
      item.qty++;
      renderCart();
    };

    const controls = document.createElement('span');
    controls.appendChild(minus);
    controls.appendChild(plus);

    row.appendChild(info);
    row.appendChild(controls);
    row.appendChild(sum);

    cartItemsEl.appendChild(row);
  });

  cartTotalEl.textContent = total + ' ₽';
}

