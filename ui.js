
 export function displayProducts(products){
    console.log("displaying product:", products.length);

    //find the gallery area on the page
    const gallery = document.getElementById("product-gallery");
    gallery.innerHTML = "";

    products.forEach(product => {
        console.log("showing product:", product.title);

  });
}

        
    