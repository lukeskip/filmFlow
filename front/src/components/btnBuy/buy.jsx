import React from "react";
import axios from "axios";

export default function Buy({movie}) {

  async function buy(movie) {
    console.log(movie)
    try {
      const {data} = await axios.post("http://localhost:3001/checkout", {
      price_data: {
        currency: "usd",
        product_data: {
          name: movie.name,
          images: [
            movie.poster,
          ],
        },
        unit_amount: 2500,
      },
      quantity: 1,
    });
    console.log(data)
    window.location = data.url
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <span>$25</span>
      <button onClick={() => {buy(movie)}}>buy</button>
    </div>
  );
}
