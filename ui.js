export function displayProducts(products) {
  console.log("displaying product:", products.length);

  //find the gallery area on the page
  const gallery = document.getElementById("product-gallery");
  //clear previous result
  gallery.innerHTML = "";

  //loop through each product
  products.forEach((product) => {
    console.log("showing product:", product.title);
    //create a new card element
    const card = document.createElement("div");
    card.classList.add("product-card");

    //store product image URL in a variable
    let imgSrc = product.image;
    //if URL is invalid, then image is not usable
    if (!imgSrc || !imgSrc.startsWith("http")) {
      //replace the invalid image with a placeholder
      //source: https://safeimagekit.com/placeholder-images/placeholder-image-200x200#google_vignette
      imgSrc = "https://via.placeholder.com/200x200?text=No+Image";
    }
    //setting HTML content inside the card element.
    //Insert the product image, title, and price into the card. If the image URL is broken, the onerror handler swaps in a placeholder image.
    card.innerHTML = `
  <img
    src="${imgSrc}"
    alt="${product.title}"
    onerror="this.src='https://via.placeholder.com/200x200?text=No+Image'"
  >
  <h3>${product.title}</h3>
  <p>$${product.price}</p>
`;

    gallery.appendChild(card);
  });
}
