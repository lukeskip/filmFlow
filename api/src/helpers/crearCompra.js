module.exports = (movies) => {
  const products = [];
  for (let movie of movies) {
    const product = {
      price_data: {
        currency: "usd",
        product_data: {
          name: movie.name,
          images: [movie.poster],
        },
        unit_amount: 2500,
      },
      quantity: 1,
    };
    products.push(product);
  }
  return products;
};
