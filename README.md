# WebApp boilerplate with React JS and Flask API
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-flask-hello.git)

<p align="center">
<a href="https://www.loom.com/share/f37c6838b3f1496c95111e515e83dd9b"><img src="https://github.com/4GeeksAcademy/flask-rest-hello/blob/main/docs/assets/how-to.png?raw=true?raw=true" /></a>
</p>

### Styles
You can update the `styles/index.scss` or create new `.scss` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Components
Add more files into your `./src/js/components` or styles folder as you need them and import them into your current files as needed.

💡Note: There is an example using the Context API inside `views/demo.js`;

### Views (Components)
Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context
This boilerplate comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)
BreathCode Lesson [view](https://content.breatheco.de/lesson/react-hooks-explained)

The `Provider` is already set. You can consume from any component using the useContext hook to get the `store` and `actions` from the Context. Check `/views/demo.js` to see a demo.

```jsx
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
  //here you use useContext to get store and actions
  const { store, actions } = useContext(Context);
  return <div>{/* you can use your actions or store inside the html */}</div>
}
```

### Back-End Manual Installation:

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure yo replace the valudes with your database information:

| Engine	| DATABASE_URL 						|
| ------------- | ----------------------------------------------------- |
| SQLite	| sqlite:////test.db	 				|
| MySQL		| mysql://username:password@localhost:port/example	|
| Postgress	| postgres://username:password@localhost:5432/example 	|

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`


### Front-End Manual Installation:

- Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`

## Publish your website!

This boilerplate it's 100% integrated with Herkou, just by pushing your changes to the heroku repository it will deploy: `$ git push heroku main`


##########################################################################################################################

JWT Authentication With Flask & React.js

Implement an authentication system with the following parts:

    Signup:
                The user must be able to pick its email, any password and submit the form, a new user must be created in the    database and the user must be redirected to the login form afterwards.
    Login:
                 The user fills out its email and password and it's redirected to the private dashboard after successfull authentication.
    Validation:
                 Any page considered "private" must always validate that the current user is valid, if not, the page must redirect the user back to login.
    Logout:
                 Any moment the user must be able to press "logout" in the navbar and it will get redirected back to the login path.

At least the following pages and react components must be implemented into the project:

Path 	Component 	Functionality
/signup 	<Signup> 	Renders the signup form
/login 	<Login> 	Renders the login form
/private 	<Private> 	Validates that only authenticated users and render this component
🌱 How to start coding this project:

More details about the authentication:

Usually an authentication system is implemented in 4 parts:

Authentication Diagram
User signup

At the beginning of every application that are not users or tokens, so the first step that makes sense to build is user signup.

    The user navigates to the /signup path.
    The React.js application (probably using the React Router library) will detect the route /signup and match with its corresponding React.js page component that will take care of rendering the signup HTML.
    The user picks and writes an email and password and clicks submit.
    The React.js page is listening to the onSubmit event, it gets triggered and the handleSubmit function fetches the email and password to the backend Pthon Flask API, probably doing a POST /token request with the email and password on the body payload.

User login (start session)

This part of the process occurs only when new tokens have to be generated.

    The user lands in the myapplication.com/login path.
    The React.js application (probably using the React Router library) will detect the /login path and match it with its corresponding React.js page component, this page will take care of rendering the login form.
    The user fills the login form and submits it.
    The page is listening (waiting) for the form sumbit event to trigger, and it finally triggers because the user submite the form.
    The page now retrieves the username and password information and fetch (POST) that data to the API.
    The API validates that the username and password are correct and returns a token object.
    The front-end application saves that token in the sessionStorage.
    The front end application redirects to the /private.

User logout (end session)

This process occurs when the user desires to logout.

    Normally there is a button to log out somewhere in your application.
    The user press that button and the onClick event handler is called.
    The front-end application removes the token from the sessionStorage.
    The front-end application redirects to the home page (public).

Token Validation

Any user can just type /private to attempt visiting a private page, that is why we need to implement a validation that prevents the anonymus users to see the content of this page, and we must redirect the user to /login or any other public page. This is usually how the process goes:

    The user types any private URL, for example: myapplication.com/private
    The React.js application (probably using the React Router library) will detect the route /private and match with its corresponding React.js page component that will take care of rendering the HTML.
    Before rendering the HTML -and only because this is a private route- the component must verify that the sessionStorage contains the authenticated token, you normally would do that in the useEffect (component did mount) because you want to do it very early during the application loading.
    If sessionStorage 👎 does not have the token, the current user is not considered to be logged in and the component must redirect to the login view.
    If the sessionStorage 👍 does contain the token, the current user is successfully logged in and the rest of the /private view component is loaded.
