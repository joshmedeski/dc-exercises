# Combine Reducers Exercise

See the [combine reducer presentation](https://dc-presentations.netlify.com/redux/combine-reducers/#/) and [redux `combineReducers` documentation](https://redux.js.org/api/combinereducers) for help.

This exercise will begin to challenge your abilities to fully understand Redux and React, the state of the app will grow and the complexity of the features will increase as well.

## Steps

- Create a React app and install the appropriate Redux packages
- Create a reducer for todo functionality:
  - Add todo
  - Toggle task completion
  - Delete todo
- Create a reducer for counter functionality:
  - Increment
  - Decrement
- Combine both reducers
- Create the Redux storage with the combined reducer

Now you'll build out the application, you'll need actions and React components to show the Redux state to the user and allow them to interact with the todo and counter functionality.

## Notes

- You will have to use component state to manage the form for adding new todo items, on the submit you will dispatch the local state value to the action
- In this exercise, actions now have to take values. Go over the [React Redux documentation](https://redux.js.org/basics/usage-with-react) to learn more about how the React component data is passed with the Redux action

## Bonus

- Save state to local storage and reload the state data if the page is reloaded
- Include the [React Router](https://github.com/ReactTraining/react-router) and display the counter and todo functionality on separate views
- Allow the task to be dragged and dropped in a new order
