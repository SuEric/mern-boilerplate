import path from 'path';

const env = process.env.NODE_ENV || 'development';
const environmentConfig = require(`./${env}`).default; // eslint-disable-line import/no-dynamic-require

const defaults = {
  root: path.join(__dirname, '/..'),
};

export default Object.assign(defaults, environmentConfig);
