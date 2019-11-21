import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./ProductList";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <>
      <h1>Products</h1>
      <ProductList />
    </>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
