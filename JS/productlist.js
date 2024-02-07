fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}
function showProduct(product) {
  //FANG TEMPLATE

  const template = document.querySelector("template").content;

  const copy = template.cloneNode(true);

  copy.querySelector("h2").textContent = product.displayname;
  if (product.soldout) {
    //produkt udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }

  document.querySelector("main").appendChild(copy);
}
