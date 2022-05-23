import React, { useContext } from "react";
import { ProductContenxt } from "../App";

function Item() {
  const vl = useContext(ProductContenxt);

  return (
    <div className="item">
      <p>{vl}</p>

      {/* <ProductContenxt.Consumer>
        {
          (hamada)=> <p>{hamada}</p>
        }
      </ProductContenxt.Consumer> */}
    </div>
  );
}

export default Item;
