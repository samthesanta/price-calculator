# Price Calculator

tl;dr: run `yarn start` and open [http://localhost:3000](http://localhost:3000)

## Noteable Files

```
src
├── App.css
├── App.js
├── App.test.js
├── components
│   ├── ItemInput.js
│   ├── ItemInput.test.js
│   ├── PriceTable.js
│   ├── Receipt.js
│   └── index.js
├── constants
│   └── index.js
├── hooks
│   ├── index.js
│   ├── useGroceryList.js
│   └── useGroceryList.test.js
├── index.css
├── index.js
├── reportWebVitals.js
├── setupTests.js
└── utils
├── index.js
└── index.test.js
```

### `App.js`

`App.js` is the entry point for our application-specific code. It holds the main state items -- the user string and any calculated values for the grocery items, passing them down to components as props when necessary.

This existing state could easily be abstracted into React Context, Redux, or any more robust state management solution as the app scales.

### `useGroceryList.js`

`useGroceryList.js` is a custom hook that acts as the "controller" for the app. It takes the comma-separated string as an input, and updates the totals and prices accordingly when it changes.

### `useGroceryList.js`

`useGroceryList.js` is a custom hook that acts as the "controller" for the app. It takes the comma-separated string as an input, and updates the totals and prices accordingly when it changes.

### `PriceTable.js`

`PriceTable.js` is the table of prices and sales. This is a "dumb component" that simply renders a view based on some constants.

### `ItemInput.js`

`ItemInput.js` is the text input box. It communicates "up" to the App with any changes to the input.

### `Receipt.js`

`Receipt.js` is the table of totals. This is a "dumb component" that simply renders a view based on the results of `useGroceryList`, which are passed in from `App`.

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
