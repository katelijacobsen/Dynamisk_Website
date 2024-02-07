fetch("https://kea-alt-del.dk/t7/api/categories")
    .then(res => res.json())
    .then(showCategories)
    
function showCategories(cats){
    cats.forEach(showCategory)
}

function showCategory(cat){
    //fanger vores template
    const template = document.querySelector("template").content;
    //kloner
    const clone = template.cloneNode(true);
    //ændre indhold
    clone.querySelector("a").textContent=cat.category;
    clone.querySelector("a").href=`produktliste.html?category=${cat.category}`;
    //appender
    document.querySelector(".categories_grid").appendChild(clone);
}