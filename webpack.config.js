const defaults = require("@wordpress/scripts/config/webpack.config");
const path = require('path');
console.log(defaults.module.rules[4].use);
module.exports = {
    ...defaults,
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    module: {
        rules: [
            ...defaults.module.rules,
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": "defaults"
                            }],
                            '@babel/preset-react'
                        ]
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js', '.tsx', '.jsx'],
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            'src': path.resolve(__dirname, 'src')
        }
    }
};