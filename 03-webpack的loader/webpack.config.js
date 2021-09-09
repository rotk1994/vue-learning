const path = require('path');
module.exports = {
  module: {
    rules: [{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.less$/i,
      //   loader: [
      //     // compiles Less to CSS
      //     'style-loader',
      //     'css-loader',
      //     'less-loader'
      //   ],
      // },
      {test:/\.(jpg|png|gif)$/,type: 'asset/resource'}
    ],
  },
};