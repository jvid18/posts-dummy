# Posts App with dummy API

Simple ReactJS posts app with oauth authentication, redux and dummyapi.

## Considerations
* You must have NodeJS and npm installed in your computer.
* You must have an account in [auth0](https://auth0.com) and create an application for authentication.
* You must have an account in [dummyapi](https://dummyapi.io/docs) and generate the app-id.

## Installation

Clone repository and install dependencies
```bash
git clone https://github.com/jvid18/posts-dummy
cd posts-dummy
npm install
```

## Usage

1. Rename .env.example file to .env
2. Set auth0 variables into .env file

   ```bash
   REACT_APP_AUTH0_DOMAIN= # Domain
   REACT_APP_AUTH0_CLIENT_ID= # Client ID
   ```
3. Set dummyapi variables into .env file

   ```bash
   REACT_APP_DUMMY_APP_ID= # app-id
   REACT_APP_DUMMY_URL=https://dummyapi.io/data/v1 # base URL
   ```
4. Start app with ```npm start```
5. When the app is running, you can open on localhost:3000 in your browser
   ![Login page](https://i.postimg.cc/wvfjbP92/Login-Page.png)

   You can authenticate with different services, it depends on the configuration in auth0
   ![Auth](https://i.postimg.cc/DwrTKXxy/Auth.png)

6. To logout, click on your name in the header
   ![Logout](https://i.postimg.cc/nhSB1XtT/Logout.png)


## Features

* You can see the comments of the publication by clicking on 'comments'
  ![Comments](https://i.postimg.cc/nc7zCM3N/Comments-Page.png)

* You can see the profile information by clicking on the name of the person who published the post
  ![Profile](https://i.postimg.cc/HWFnYb9Q/Profile-Page.png)

* You can filter posts by tag
  ![Filter-Page](https://i.postimg.cc/hj5F0btM/Filter-Page.png)

## License
[MIT](https://choosealicense.com/licenses/mit/)
