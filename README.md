   <h1 align="center">
  Mini Seedrs is now easy to use ! 
  </h1>
     <p align="center">( :honeybee: if you still prefer the hard way read our APIs at <a href:"https://github.com/filippomassarelli/docker-mini-seedrs">docker-mini-seedrs</a> )<br>
     <img src="https://media.giphy.com/media/KApag9isJD1l7y6jmW/giphy.gif" right="center"
     alt="flying saucer" width="350">
</p>

## Introduction

### Overview

You no longer need to be a techy in order to invest in the businesses you believe in. 

React Mini Seedrs provides a user friendly interface to conveniently interact with our APIs from your laptop, smartphone or tablet. Browse through all our investment opportunities, pick your favorite and invest. It's that easy!

Make sure to read the installation guide below to get started, and keep reading if you want to learn more about what's under the hood.

Thank you for being awesome.

### Contents

- [Get started](#get-started)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Test](#test)
  - [Run](#run)
- [Campaign API](#campaign-api)




---
---
This user interface has been bootstrapped with the help of the [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) toolchain and the [Material-UI](https://material-ui.com/) design framework.   

---

Advanced
- Theming
mui themes. toggle icon. Crowdcube, Seedrs. Images.
- Search

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---
---

# TO BE INCLUDED

## Testing

Jest is the test runner that will run all the test files and enzyme is a library which provides useful assertions to test React components. 

## Testing Material UI components

We will also need to use @material-ui's Built-in API(s). Such as createMount, createShallow, createRender in order to use enzyme's shallow, mount & render. These APIs are built on top of enzyme, so you can't use enzyme directly for testing @material-ui.

Warning: An update to SearchAppBar inside a test was not wrapped in act(...)
Don't worry about the act warning. It's going to get fixed in the next version of React. See [here](https://github.com/testing-library/react-testing-library/issues/281) for more info.


## Jest
Jest is a JavaScript based test runner, which allows tests to be run blazing fast and in parallel. Jest also allows the ability for test to run in watch mode, hence changes to files will re-run the tests instantly as you are developing. It also generates code coverage reports which helps in understanding test coverage percentage.
Snapshot testing is another great addition to Jest. Snapshot testing as its name suggests is a feature that allows components to be tested by taking a snapshot of what the component should look like internally once it has been rendered.
## Enzyme
Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components’ output. You can also manipulate, traverse, and in some ways simulate run time given the output.
