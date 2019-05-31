const goods = [
  { title: "monitor", price: 150, imgName: "Monitor-PNG-Picture.png" },
  { title: "work-station", price: 250, imgName: "desktop.png" },
  { title: "laptop", price: 350, imgName: "laptop-png-design-png_60227.jpg" },
  { title: "keyboard", price: 70, imgName: "KYB-MINIMUS-BTWW-2.jpg" },
  { title: "mouse", price: 30, imgName: "mouse.jpg" },
  { title: "phone", price: 200, imgName: "phone.png" }
];

const renderProduct = (title, price) => {
  return `<div class="product-item">
            <span class="title">${title}</span>
            <img class="product_img" src="${calcLink(title)}" 
              width="100" height="60" alt="#">
            <p>${price}$</p>
            <button class="cart-button">Добавить в корзину</button>
          </div>`;
};

const renderPage = list => {
  const productList = list.map(item => renderProduct(item.title, item.price));
  document.querySelector(`.goods-list`).innerHTML = productList.join(""); /*избавляемся от запятой*/
};

renderPage(goods);

function calcLink(title) {
  return `img/${goods.find(g => g.title == title).imgName}`;
}
