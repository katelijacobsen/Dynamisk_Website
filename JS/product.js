//https://kea-alt-del.dk/t7/api/products
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id");


fetch("https://kea-alt-del.dk/t7/api/products/" + id)
    .then(response=>response.json())
    .then((data) => showProduct(data));



function showProduct(product){
    console.log(product);

    document.querySelector(".product_name").textContent = product.productdisplayname;
    document.querySelector(".brand").textContent = product.brandname;
    document.querySelector(".product_articletype").textContent = product.articletype;
    document.querySelector(".price").textContent = product.price;
    document.querySelector(".basecolour").textContent = product.basecolour;
    document.querySelector(".product_image").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

    if(product.discount){
        document.querySelector(".sale_price").classList.add("sale_discount");
        let discountPrice = ((100 - product.discount)/100) * product.price;
        document.querySelector(".sale_price").textContent = `${discountPrice.toFixed(2)} DKK` ;
        document.querySelector(".price").classList.add("price-discount");
    }
    if(product.soldout){
        document.querySelector(".product_image").classList.add("image_soldout");
        document.querySelector(".soldout").classList.remove("hide");
    }

}

/*

	
id	1525
gender	"Unisex"
category	"Accessories"
subcategory	"Bags"
articletype	"Backpacks"
basecolour	"Navy Blue"
season	"Fall"
productionyear	2010
usagetype	"Casual"
productdisplayname	"Deck Navy Blue Backpack"
parsed	1
soldout	0
relid	1525
price	1299
discount	55
variantname	"Deck Backpack"
brandname	"Puma"
brandbio	"PUMA is the World's Fastest Sports Brand"
brandimage	"http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg"
agegroup	"Adults-Unisex"
colour1	"NA"
colour2	"NA"
fashiontype	"Fashion"
materialcaredesc	null
sizefitdesc	null
description	"<p>asfafaf<br> kasjhdkashd</p>"
styledesc	null

*/