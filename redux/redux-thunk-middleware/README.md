# Redux Thunk Middleware Exercise

Create a Redux/React app using the Redux thunk package.

Use a fake API request to get a list of products:

```js
function fakeGetProducts() {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          products: [
            { id: 0, name: "Apple" },
            { id: 1, name: "Bananas" },
            { id: 2, name: "Strawberries" }
          ]
        }),
      1000
    );
  });
}
```

Install the [react-redux package](https://github.com/reduxjs/redux-thunk) and apply it as middleware on your store.

```js
const store = createStore(rootReducer, applyMiddleware(thunk));
```

- Create a "begin", "success", and "error" actions for handling the API events
- Create the "get products" thunk dispatch that process the API request and dispatches the events
- Create a product list component that does the following things
  - Calls the "get products" thunk dispatch when the component mounts
  - Shows the loading state
  - Shows the error if the API request fails
  - Shows the products when the API request finishes
