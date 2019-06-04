class ProductsList {
  constructor(container = '.goods-list') {
    this.data = [];
    this.container = container;
    this.productsAll = [];
    this.init();
  }
  init() {
    this._fetchProducts();
    this._render();
  }
  _fetchProducts() {
    this.data = [
      { id: 1, title: 'Notebook', price: 2000 },
      { id: 2, title: 'Mouse', price: 30 },
      { id: 3, title: 'Keyboard', price: 55 },
      { id: 4, title: 'Gamepad', price: 65 },
      { id: 5, title: 'Chair', price: 120, template: 1 },
    ];
  }
  _render() {
    const block = document.querySelector(this.container);
    for (let product of this.data) {
      const prod = new ProductItem(product);
      this.productsAll.push(prod);
      block.insertAdjacentHTML('beforeend', prod.render());
    }
  }
  // Добавьте для каталога метод, определяющий суммарную стоимость всех товаров.
  calcAllProducts() {
    let costAllProducts = 0;
    this.productsAll.forEach((product) => { 
      costAllProducts += product.price;
    });
  }
}

class ProductItem {
  constructor(product, img = `https://placehold.it/200x150`) {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img
  }

  render() {
    return `<div class="product-item">
                <img src="${this.img}" alt="${this.title}">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
  }
}

const products = new ProductsList();

// Добавьте пустые классы для корзины товаров и элемента корзины товаров. 
// Продумайте, какие методы понадобятся для работы с этими сущностями.

// Класс корзины товаров
class CartList {
  constructor() {
    // добавленные товары в корзине
    // this.title = product.title;
    // this.price = product.price;
    // this.id = product.id;
    // this.img = img
  }
  render() {
    // что то рендерим
  }
}
// Класс элементов корзины товаров
class CartItems {
  constructor() {
    this.cartProducts = [];
  }
  addCartProduct() {
    //добавляем товар в корзину.
  }
  removeCartProduct() {
    //удаляем товар из корзины.
  }
  calcPriceCartProduct() {
    // считаем стоимость всех товаров в корзине.
  }
  calcItemsCartProduct() {
    //считаем количиство товаров в корзине.
  }
  render() {
    // что то рендерим
  }
}