const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category")

document.querySelector("h1").textContent = category; 

if (category){
  fetch("https://kea-alt-del.dk/t7/api/products?category=" +category)
  .then((res) => res.json())
  .then(showProducts);
} else{
  fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

}

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}
function showProduct(product) {
  //FANG TEMPLATE
  const template = document.querySelector(".smallProduct").content;
  //lav en kopi af templaten
  const copy = template.cloneNode(true);
  //ændre indholdet i templaten
  copy.querySelector(".price").textContent = `${product.price} DKK`;
  copy.querySelector(".product_name").textContent = product.productdisplayname;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //hvad nu hvis produktet er on sale?
  if(product.discount){
    copy.querySelector(".sale_price").classList.add("sale_discount");
    let discountPrice = ((100 - product.discount)/100) * product.price;
    copy.querySelector(".sale_price").textContent = `${discountPrice.toFixed(2)} DKK` ;
    copy.querySelector(".price").classList.add("price-discount");
  }
  //hvad nu hvis produktet er udsolgt?

  if(product.soldout){
    copy.querySelector(".product_image").classList.add("image_soldout");
    copy.querySelector(".soldout").classList.remove("hide");
}

  
  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`)
//appender
  document.querySelector(".grid_container-3-4").appendChild(copy);
}
