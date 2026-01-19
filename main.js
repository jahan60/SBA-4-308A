import { getProducts } from "./api.js";
import { displayProducts } from "./ui.js";
console.log("main.js loaded");

//finding search input field and sreach buttion ont the page
const searchInput = document.querySelector("input[type='search']");
const searchButton = document.querySelector("button");

//add eventListner to the buttion
searchButton.addEventListener("click", async () => {
  // Get the product that user typed into the search box
  const keyword = searchInput.value;
  console.log("Search clicked:", keyword);

  // Fetch products from the API based on the keyword
  const products = await getProducts(keyword);
  // Show the products on the page
  displayProducts(products);

  // Clear the search box after the search is done
  searchInput.value = "";
});
// Load all products on page load
getProducts().then(displayProducts);
