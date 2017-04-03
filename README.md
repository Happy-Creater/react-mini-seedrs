   <h1 align="center">
  Mini Seedrs is now easy to use ! 
  </h1>
     <p align="center">:honeybee: if you still prefer the hard way read our APIs at <a href="https://github.com/filippomassarelli/docker-mini-seedrs">docker-mini-seedrs</a>
   <br>
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
  - [Install and Run](#install-and-run)
  - [Test](#test)
- [Built With](#built-with)
- 

---

## Get started

### Prerequisites

Before you start, open your terminal and make sure you have [nodeJS](https://nodejs.org/en/) installed on your machine:

```
$ node -v
v14.15.4
```

We will also be using [Jest](https://jestjs.io/docs/en/getting-started) as our test runner so check you have it:

```
$ jest -v
26.6.3
```

The Mini Seedrs user interface is built to communicate with our APIs, which for now are only available if install our back-end app locally. So make sure you have either [docker-mini-seedrs](https://github.com/filippomassarelli/docker-mini-seedrs) or plain [mini-seedrs](https://github.com/filippomassarelli/mini-seedrs) repository cloned and their prerequisites installed.


### Install and Run

First `cd` to your cloned Mini Seedrs back-end app and launch the server.

Then open another terminal window to clone this repo and `cd` into the directory:
```
git clone https://github.com/filippomassarelli/react-mini-seedrs.git
cd react-mini-seedrs
```

You should see the following folder structure:
```
react-mini-seedrs
├── README.md
├── package.json
├── .gitignore
├── index.js
├── App.jsx
├── App.test.js
├── axios.js
├── requests.js
├── tabsText.js.jsx
├── setupTests.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── MiniSeedrs-Homepage.png
└── src
    ├── components
    │   ├── banner
    │   │   ├── Banner.test.js
    │   │   └── Banner.jsx
    │   ├── card
    │   │   ├── Card.test.js
    │   │   └── Card.jsx  
    │   ├── currency
    │   │   ├── CurrencySelector.test.js
    │   │   └── CurrencySelector.jsx    
    │   ├── form
    │   │   ├── form.test.js
    │   │   └── form.jsx 
    │   ├── header
    │   │   ├── header.test.js
    │   │   └── header.jsx      
    │   ├── progress
    │   │   ├── CircularProgress.test.js
    │   │   ├── CircularProgress.jsx
    │   │   ├── LinearProgress.test.js
    │   │   └── LinearProgress.jsx     
    │   ├── row
    │   │   ├── row.test.js
    │   │   └── row.jsx       
    │   ├── search
    │   │   ├── search.test.js
    │   │   └── search.jsx    
    │   ├── socials
    │   │   ├── Socials.test.js
    │   │   └── Socials.jsx   
    │   └── tab
    │       ├── Tab.test.js
    │       └── Tab.jsx  
    └── poages
        ├── CampaignsPage.jsx
        ├── InvestPage.jsx
        └── Tab.jsxNotFoundPage.jsx
```

Now install the project dependencies using node package manager:
```
npm install
```

Check that the `package-lock.json` file and the `node_modules` folder has been added to the projects's root directory.

Finally, run the start script with:
```
npm run start
```

If it doesn't do so automatically, open a browser tab and navigate to [http://localhost:3001](http://localhost:3001) to view the app.

And that's it, you are running Mini Seedrs in development mode :rocket:


### Test

All our React Components have an accompanying suite of basic tests to minimise regression.

Run the test script in the terminal:

```
npm test
```

You should expect 12 test suites comprising of a total of 36 tests to pass:

```
Test Suites: 12 passed, 12 total
Tests:       36 passed, 36 total
Snapshots:   0 total
Time:        22.84 s
Ran all test suites.
```
Jest will keep on running in the interactive watch mode, type `q` if you want to quit.

Testing is awesome, however this project only scratches the surface of react component testing, especially for our stateful components. 

If you are a test wizard and feel like [contributing](#contributing) you are very welcome Sir 🧙

---

## Built with

### Tools and libraries

The Mini Seedrs user interface has been bootstrapped with the help of the [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) toolchain and the [Material-UI](https://material-ui.com/) library.   

### Technologies

The major technologies are:

- React JS
- React Router
- React Hooks

Future work would include moving our components to Typescript, and centralise state management with Redux. 

### Features

Features of this UI include:

- Darkmode 
- Responsive design
- Search functionality in the navbar
- Random campaign recommendation in the banner
- Filtered rows navigation inspired by Netflix:copyright:
- User friendly dialog box with investment functionality 
- Informative snackbar alerts for invalid investments or searches
- Successful investment confirmation with social sharing

---

## Contributing

Want to contribute? Great!

Just follow these steps:
- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make your changes
- Commit with a descriptive message (`git commit -m 'description'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request

---

:point_up_2: [Back to the top](#mini-seedrs-is-now-easy-to-use-)

**License**
MIT © [Filippo Massarelli](https://github.com/filippomassarelli)
