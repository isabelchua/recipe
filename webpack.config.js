const Dotenv = require('dotenv-webpack');
 
module.exports = {
  ...
  plugins: [
    new Dotenv()
  ]
  target: 'node'
  ...
};