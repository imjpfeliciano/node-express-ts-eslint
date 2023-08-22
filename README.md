# node-express-es6-airbnb
`node-express-es6-airbnb` is a project that provides you with a boilerplate tool to create a [node.js](https://nodejs.org/en/) API with an ES6 transpiler while following the [Airbnb's Javascript (ES6) Style Guide](https://github.com/airbnb/javascript).

# Features
* Simple `/api/` endpoint that provides you a JSON object `{hi: 'there'}`.
* Simple `/api/_health` endpoint to check the status of the API.
* Simple `/api/demo` endpoint that makes use of a router and controllers to return a JSON object `{hello: 'world'}`.
* All code following Airbnb's Javascript (ES6) style guide.
<!-- * Create deployment build with `$ npm run build`. -->
* Pre-commit script to prevent commit files that could break your app in production.
<!-- * `/docs` endpoint with the API documentation for external users -->

# Components
* [ESlint](https://eslint.org/)
* [Node.js](https://nodejs.org/en/)
* [Express.js](http://expressjs.com/)
* [Swagger](https://swagger.io/)

# Getting start
Just run the following commands in your terminal to start coding
```bash
$ git clone https://github.com/yoniihdc/node-express-es6-airbnb
$ cd node-express-es6-airbnb
$ nvm use
$ npm install
```

You'll need to create an `.env` file following the values specified in `.env.sample`. You can copy existing one using:

`cp .env.sample .env`


Then run:
```bash
$ npm run start:dev
```

The last command automatically runs the API exposed on http://localhost:5001.

# Deployment

TBD

<!--
To create a build for production you need to build your current project with the following command:
`$ npm run build`

Then copy all files inside `/dist` folder and put all of them in your server.
-->

# Contributing

This project is an initiative to make the way you create an API easier. Feel free to propose new things and changes that help us with this task. You can read our [CONTRIBUTE.md](CONTRIBUTE.md) for more information.