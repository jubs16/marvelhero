#### MARVEL API PROJECT

This demo project is deployed on firebase for testing

https://login-marvelhero.web.app/


## Acheivements
- Login /Signup using google firebase auth tools
- user redirection
- fetch local json file
- fetch random users from https://randomuser.me/ (test purpose)
- fetch Marvel comics api display 

## Tools & libaries used
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "firebase": "^7.8.2",
    "material-ui": "^0.20.2",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-scripts": "3.4.0"

## Install git command lines tools before continuing
 `git clone https://github.com/jubs16/marvelhero`
 
cd project directory, you can run:

`cd marvelhero`

`npm install`

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Default password
user: abc@gmail.com
pass: azerty

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

build directory will be created in root directory

#### Firebase hosting
`npm install firebase-tools -g`
`firebase init`
`firebase use [YOUR_PROJECT_ID]`
`firebaase deploy`

For more information goto firebase documentation for quick help how to setup firebase hosting. https://firebase.google.com/docs/hosting/quickstart

#### Firebase user authentication
Goto firebase console create new user auth copy configuration settings into fire.js in config folder.

For more information goto firebase documentation for quick help how to setup firebase auth. 
https://firebase.google.com/docs/auth


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size


### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment





Thanks enjoy;)
