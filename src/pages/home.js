import React from "react";
import { productList } from "../productList";
import Product from "../components/product";
function Home() {
  return (
    <section class="tf-section live-auctions style3 pad-b-54 no-pt-mb mobie-pb-70 ">
      <div class="themesflat-container">
        <div className="row">
          {productList.map((product, key) => (
            <Product
              key={key}
              data={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
