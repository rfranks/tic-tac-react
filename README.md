[Documentation](/tic-tac-react/docs) | [Component Storybook](/tic-tac-react/docs/storybook/) | [Test Results](/tic-tac-react/docs/test-results/) | [Test Coverage Report](/tic-tac-react/docs/test-results/coverage/lcov-report/)

# Getting started

This project was initially bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Adding a component

# Available scripts

In the project directory, you can run:

## `start` scripts

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the Jest test runner. 
The results are printed to the terminal screen and logged to `jest-results.html`.<br />

Additional resources:

- [jest](https://jestjs.io/)
- [jest-html-reporters](https://github.com/Hazyzh/jest-html-reporters#readme)

## `build` scripts
    "build": "npm install && react-scripts build && npm run test && npm run build-jsdoc && npm run build-storybook",
    "build--no-test": "npm install && react-scripts build && npm run build-jsdoc && npm run build-storybook",
    "build-jsdoc": "jsdoc -c package-jsdoc.json",
    "build-storybook": "build-storybook -s public -c .storybook -o ./build/docs/storybook/",

### `npm run build`

Builds the app for production to the `build` folder.

This includes:
- installing `node_modules` via `npm install`,
- bundling React in production mode via `react-scripts build`,
- optimizing the build for the best performance via `react-scripts build`, 
- running all tests to make sure that they all pass and that code coverage levels are met via `npm run test`
- building `jsdoc` documentation via `npm run build-jsdoc`
- builds `sotrybook` documentation via `npm run build-storybook`

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!  See `npm run deploy` to deploy to Github.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information
on deploying react apps.

### `npm run build--no-test`

Builds the app for production to the `build` folder, bypassing all tests.  __BEWARE!__


## Deployment scripts

### `npm run predeploy`
`predeploy` ss run before `npm run deploy` and currently is an alias for `npm run build`,
which builds the app for production use to the `build` folder.

### `npm run deploy`

    "deploy": "gh-pages -d build",

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
