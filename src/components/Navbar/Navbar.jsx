import "./Navbar.css";
export const Navbar = () => {
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
        <div>
          <button>Get the app</button>
        </div>
        <div id="mobileHamburger">
          <h1>open</h1>
        </div>
      </div>
    </div>
  );
};
