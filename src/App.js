import React, { lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";

// lazy load any component by dynamically importing it inside the lazy function
const Product = lazy(() => import("./ProductList"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>REACT LAZYLOADING with (Lazy && Suspense ...)</p>
      </header>

      <div className="product__area">
        <h3>The Products will appear here</h3>
        {/* Place your fall back jsx or dom object in the fallback 
            prop of suspense. It will be displayed when the products are loading */}
        <Suspense fallback={<div>Loading products ...</div>}>
          <Product></Product>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
