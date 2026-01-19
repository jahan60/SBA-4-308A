## Introduction: 
My product gallary is a simple web page that fetches real product data from the fake store API. Users can browse all products or search by keyword, and the page updates instantly with matching results. 

## features:
1. Fetches product data using a GET request.
2. Display product image, title, and price.
3. Search bar filters products by title. 
4. Fallback placeholder image for broken or missing URLs.
5. Clean, responsisive layout.
6. Organized code spilt into modules (api.js, ui.js, main.js)

## How it works:
1. API Module:
* Fetches all products from https://fakestoreapi.com/products
* Filters results based on the user's search keyword.
* Rteurns an array of matching products.

2. UI module:
* Renders products card inside the gallary.
* Handles broken images with a placeholder.
* clears old results before displaying new ones.

3. Main Script:
* Connects the serach input and buttion to the logic.
* Listens for click and triggers the search.
* Loads all products on thr page load.

## Resources:
1. https://fakestoreapi.com/

2. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/search

3. https://safeimagekit.com/placeholder-images/placeholder-image-200x200#google_vignette
   Its a site for fallback image. 
   


