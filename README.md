# node-express-es6-airbnb
node-express-es6-airbnb is a project that provides you a boilerplate tool to creates [node.js](https://nodejs.org/en/) API with ES6 transpiler and following the [Airbnb's Javascript (ES6) Style Guide](https://github.com/airbnb/javascript).

# Features
* Simple `/api/` endpoint that provides you a json object `{hi: 'there'}`.
* Simple `/api/_health` endpoint to check the status of the api.
* Simple `/api/demo` endpoint that made use of router and controllers and return a json objec `{hello: 'world'}`.
* All code following Airbnb's Javascript (ES6) style guide.
* Deployment build with `$ npm run build`
* Pre-commit script to prevent commit files that could break your app in production

# Components
* [Babel](https://babeljs.io/)
* [ESlint](https://eslint.org/)
* [Node.js](https://nodejs.org/en/)
* [Express.js](http://expressjs.com/)

# Getting start
Just run the following commands in your terminal to start coding
```bash
$ git clone https://github.com/yoniihdc/node-express-es6-airbnb
$ cd node-express-es6-airbnb
$ npm install
```

You also needs to create the `/src/config/dev.js` file following the values specified in `/src/config/dev.js.sample`. Then run:

```bash
$ npm run dev
```

The last command automatically runs the api exposed on http://localhost:3005.

# Deployment

To create a build for production you need to build your current project with the following command:

`$ npm run build`

Then just copy all files inside `/dist` folder and put all of them in your server.

# Contributing

This project is an initiative to make easier the way you create an API, feel free to propose new things and changes that help us with this task, you can read our [CONTRIBUTE.md](CONTRIBUTE.md) for more information.
