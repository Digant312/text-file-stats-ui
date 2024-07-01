# Text file statistics - UI

This is an interview project application that enable user to upload a text file. Uploads it to backend server, and shows statistics details on UI from backend.

## Project details

- This project is built with React framework using create-react-app.
- It uses Material UI library to keep consistency across the application.
- UI design is compatible for all size devices (mobile / tablet / desktop).
- It does not have application level state management as of now.
- It refers to local backend as of now. Next step would be to fetch this details from deployed version.

- Application view on desktop.
![Desktop view](https://tinyurl.com/2m49hak6)

- Application view on mobile.
![Mobile view](https://tinyurl.com/2hwcz5y3)
  

## How to start

- Clone this repo in local system.
- Make sure you have NodeJS and NPM installed in local.
- In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
Yet to work on unit test cases.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Code Strategy

This repo follows "trunk based deployment" branch strategy. "main" is a default branch.
Developers should create their branch from "main", and keep it in sync with "main" branch.
