const defaults = require("@wordpress/scripts/config/webpack.config");
const path = require('path');
console.log(path.resolve(__dirname, 'src/assets'));
module.exports = {
    ...defaults,
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            'src': path.resolve(__dirname, 'src')
        }
    }
};