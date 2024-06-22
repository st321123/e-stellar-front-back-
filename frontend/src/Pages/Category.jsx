import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./category.css";
import Item from "../components/Item/Item";

function Category({ category, banner }) {
  const { all_products } = useContext(ShopContext);

  return (
    <section className="categoryContainer">
      <div>
        <div className="categoryBanner">
          <img src={banner} alt="Category Banner" />
        </div>
        <div className="categoryProductsList">
          <p>
            Showing 1-12 <span>out of 36 products</span>
          </p>
          <div>
            Sort By <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>

        <div className="categoryContent">
          {all_products.map((item) => {
            if (category === item.category) {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            }
            return null; // Ensure to return null when the condition is not met
          })}
        </div>
        <div className="categoryLoad">
          <button>Load More</button>
        </div>
      </div>
    </section>
  );
}

export default Category;
