/*
This is a JavaScript function that defines a component in a React application. The component is called "App" and it returns a piece of JSX code that renders a simple web page with a header and a main section.

Here's what the code does in more detail:
- The first line defines a function called "App". This function returns some JSX code that defines the layout of a web page.
- The JSX code is contained within parentheses and curly braces, and it consists of a div element that contains a header and a main element.
- The header element contains an anchor (a) element with an href attribute that points to the root of the application (/). The anchor text is "ecomapp".
- The main element contains the text "List Products", which will be displayed on the web page.
- Finally, the component is exported using the export default syntax. This makes the App component available for other parts of the application to use.
*/

import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">ecomapp</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
