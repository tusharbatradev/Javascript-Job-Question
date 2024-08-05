let fetchedData = [];

fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((data) => {
    fetchedData = data;
    console.log(fetchedData);
  });

