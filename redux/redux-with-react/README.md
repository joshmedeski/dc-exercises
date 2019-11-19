# Redux with React Exercise - Counter

Create a basic incremental counter using a React app with the `react-redux` package.

Follow the ["React with Redux" presentation](https://dc-presentations.netlify.com/redux/redux-with-react/) for a step by step guide to creating the application.

- Use the `npx create-react-app` script to create your project
- Create action type constants to have a more structured and bug free program (see slides)
- Create a count component that displays the count value
- Create a component for each button, mapping to the appropriate dispatch for each one

## Bonus

- Create a reusable button component that can be easily adjusted for each dispatch type
- Add additional buttons that modify the count in different ways (reset to `0`, double, etc...)
- Create an undo button that reverts the count to it's previous value (that means you have to save the previous value somehow)
