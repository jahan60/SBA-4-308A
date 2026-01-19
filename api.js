
//Fetch products from the fake store api
export async function getProducts(keyword = "") {
  console.log("fetching products... keyword:", keyword);

  try {
    //send a request to the api to get all produtcs
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    console.log("fetched products:", data.length);
   //filter products based on the search keyword
    const filtered = data.filter(product =>
      product.title.toLowerCase().includes(keyword.toLowerCase())
    );

    console.log("Filtered products:", filtered.length);
     //return the filtered list so the UI can display it
    return filtered;   
  } catch (error) {
    console.error("Fetch error:", error);
    //return an empty array so the app page doesnt break.
    return [];
  }
};




