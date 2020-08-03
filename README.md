# Lantum Shifts Task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). As mentioned in the task brief. 
Running locally follows the same process;

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# If I had more time...
+ I would write more tests for the methods and the actual App.js.
+ I would create a search by type / practice - to allow the user to decide what results to see - maybe with some dropdowns that would call `setType` - we could easily implement the `staffType` search. We could also use arr.find to search through the returned results and therefore by `shift.practice.name`
+ I would make it a bit prettier - its super basic due to the time constraint. I would not use this if it were a website. Eurgh!
+ I would split out the returned results into its own component and pass the shifts as a prop. Right now everything happens in App.js.. and it irks me...
+ I would try and understand the 'why' of this task. What value does it provide for the user? What kind of information is required and why? 