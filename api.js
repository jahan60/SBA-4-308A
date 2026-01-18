export async function getProducts(keyword = "") {
  console.log("fetching products... keyword:", keyword);

  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    console.log("fetched products:", data.length);

    const filtered = data.filter(product =>
      product.title.toLowerCase().includes(keyword.toLowerCase())
    );

    console.log("Filtered products:", filtered.length);

    return filtered;   // <-- THIS is what you were missing
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}




