import "./Products.css";
export const Products = () => {
  return (
    <div id="productMainDiv">
      <div>
        <h1>All deals and coupons.</h1>
        <p>
          The best online deals and coupons, including Klarna exclusives,
          updated daily.
        </p>
      </div>
      <div>
        <div id="categoriesDiv">
          <h3>Categories</h3>
          <p>All</p>
          <p>Babies & Kids</p>
          <p>Cloting & Apparel</p>
          <p>Computers & Accessories</p>
          <p>Consumer Electronics</p>
          <p>Gifts</p>
          <p>Health & Beauty</p>
          <p>Holidays & Occasions</p>
          <p>Household</p>
          <p>Media</p>
          <p>See All 14</p>
          <hr></hr>
          <h3>Filter</h3>
          <h4>Type</h4>
          <div>
            <p>
              <input type="checkbox"></input> Only Coupons
            </p>
            <p>
              <input type="checkbox"></input> Exclusives
            </p>
            <p>
              <input type="checkbox"></input> BOGO and more
            </p>
          </div>
          <hr></hr>
          <h4>Discount</h4>
          <div>
            <p>
              <input type="checkbox"></input> 0-49% off
            </p>
            <p>
              <input type="checkbox"></input> 50-80% off
            </p>
          </div>
          <hr></hr>
        </div>
        <div id="productsDisplayDiv">
          <div>
            <input placeholder="Search"></input>
          </div>
          <div>
            <div>
              <p>93 deals</p>
            </div>
            <div>
              <select>
                <option>Featured</option>
                <option>A-Z</option>
                <option>Z-A</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
