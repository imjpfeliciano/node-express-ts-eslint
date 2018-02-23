import config from './index';

const swaggerDefinition = {
  info: {
    title: 'node-express-es6-airbnb',
    version: '0.0.1',
    description: 'node-express-es6-airbnb is a project that provides you with a boilerplate tool to create a <a href="https://nodejs.org/en/">node.js</a> API with an ES6 transpiler while following the <a href="https://github.com/airbnb/javascript">Airbnb Javascript (ES6) Style Guide</a>.',
  },
  host: `${config.API_URL}:${config.API_PORT}`,
  basePath: '/',
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ['./src/routes/*.js']
};

export default swaggerOptions;