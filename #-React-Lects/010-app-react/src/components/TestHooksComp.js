import React, { useState, useEffect } from "react";

function TestHooksComp({ x, y }) {
  // const {x, y} = props;

  // const [product, setProduct] = useState("Laptop");
  // const [product, setProduct] = useState(0);
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop 1" },
    { id: 2, name: "Laptop 2" },
  ]);

  const [name, setName] = useState('test');

  const [vl, setVl] = useState("");

  // const changeValue = () => {
  //   setProduct("Mouse");
  // }

  useEffect(()=> {
    console.log('this use effect');
  }, [name, vl]);

  const addOneItem = () => {
    setProducts([...products, { id: 3, name: "Laptop 3" }]);
  };

  return (
    <div>
      {/* <button onClick={() => setProduct("Mouse")}>Change</button> */}
      {/* {product} */}
      <br />

      <button onClick={addOneItem}>Add Product</button>
      <input type="text" onChange={(e) => setVl(e.target.value)} />
      {vl}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      {/* {x} : {y} */}
    </div>
  );
}

export default TestHooksComp;
