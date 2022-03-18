import "./Products.css";

import file from "../../data.json";
export const Products = () => {
  console.log(file);

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
          <div id="productsContainer">
            {file.map((el) => (
              <div>
                <div
                  style={{
                    backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url("${el.img}")`,
                    height: "210px",
                    width: "210px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="backgroundProductsDiv"
                >
                  <h1 className="makeBottom">{el.discounttext1}</h1>
                  <h1 className="makeBig">{el.discounttext2}</h1>
                </div>
                <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                  {el.title}
                </p>
                <p>{el.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="footer">
        <div>
          <div>
            <img src="./Klarna-logo-white-png.png" alt="whitePngKlarna"></img>
          </div>
          <div>
            <p>Klarna</p>
            <p>About us</p>
            <p>Careers</p>
            <p>Legal</p>
            <p>Press</p>
            <p>Extra O blog</p>
            <p>Privacy</p>
            <p>Email connect</p>
            <p>Sustainability</p>
          </div>
          <div>
            <p>Customer</p>
            <p>Buy now pay later</p>
            <p>Contact us via app</p>
            <p>Customer service</p>
            <p>Klarna stores</p>
            <p>shopping app</p>
            <p>Rewards club</p>
            <p>Buyer Protection Policy</p>
            <p>Feedback and complaints</p>
            <p>Shopping inspiration</p>
          </div>
          <div>
            <p>Business</p>
            <p>Sell with Klarna</p>
            <p>Payment methods</p>
            <p>Platforms and partners</p>
            <p>Partner program</p>
            <p>Business login</p>
            <p>Business support</p>
            <p>Operational status</p>
          </div>
        </div>
        <div>
          <p>
            Monthly financing through Klarna is issued by WebBank, member FDIC.
            Copyright © 2005-2022 Klarna Inc. NMLS #1353190, 629 N. High Street,
            Third Floor, Columbus, OH 43215. Other CA resident loans made or
            arranged pursuant to a California Finance Lenders Law license.
          </p>
        </div>
      </div>
    </div>
  );
};
