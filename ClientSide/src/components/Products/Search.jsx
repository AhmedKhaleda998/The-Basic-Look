import React, { useContext, useEffect, useState } from "react";
import Product from "./item/Product";
import { searchByName } from "../../services/product.service";
import { gState } from "../../context/Context";
const Search = () => {
  const { data } = useContext(gState);
  const { searchKeyword } = data;
  const [products, setProducts] = useState([]);
  const getData = async () => {
    try {
      const data = await searchByName(searchKeyword);
      setProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, [data.keyword]);

  return (
    <div className=" container">
      <div className="row">
        {products.length > 1 ? (
          <>
            {products.map((p) => (
              <Product key={p._id} product={p} />
            ))}
          </>
        ) : (
          <p className="text-center text-waring ">
            No Results Found for : {data.keyword}
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;
