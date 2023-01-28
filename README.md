# SeeTh.is WebApp

Deployed at https://seeth.is \
This project was bootstrapped with [Create React AppRouter](https://github.com/facebook/create-react-app) and then ejected.

Uses the [SeeTh.is API](https://terryjharrison.github.io/see-this-api/)

## CI/CD

Committing changes to the `main` branch will kick off a [build on GitHub Actions](https://github.com/TerryJHarrison/see-this-web/actions/workflows/deploy.yml). 
If the build is successful then it will be deployed and a Lighthouse report will be generated, available as build artifacts in both JSON and HTML.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run deploy`

Runs the build script and deploys the output to S3 where the webapp is hosted.