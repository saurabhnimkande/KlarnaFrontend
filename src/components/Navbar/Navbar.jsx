import { useState } from "react";
import "./Navbar.css";
export const Navbar = () => {
  let [showHamburger, setShowHamburger] = useState(false);
  return (
    <div id="navbarMainDiv">
      <div>
        <div>
          <img src="./klarna.png" alt="webImg"></img>
        </div>
        <div>
          <p>Shop</p>
        </div>
        <div>
          <p>How it works</p>
        </div>
        <div>
          <p>Pay in 4</p>
        </div>
        <div>
          <p>The shopping app</p>
        </div>
        <div>
          <p>Help</p>
        </div>
      </div>
      <div>
        <div>
          <button>Log in</button>
        </div>
        <div id="hideButton">
          <button>Get the app</button>
        </div>
        <div id="mobileHamburger">
          <span
            className="material-icons-outlined"
            onClick={() => setShowHamburger(!showHamburger)}
          >
            menu
          </span>
          {showHamburger ? (
            <div id="mobileMenu">
              <h2>Shop</h2>
              <hr></hr>
              <h2>How it works</h2>
              <hr></hr>
              <h2>Pay in 4</h2>
              <hr></hr>
              <h2>The shopping app</h2>
              <hr></hr>
              <h2>Help</h2>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
