let path = require('path');
let webpack = require('webpack');


module.exports = {
    entry: './process/main.ts',
    output: {
        path: path.resolve(__dirname, './app/builds'),
        publicPath: 'builds/',
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                        ts: [
                            {
                                loader: 'ts-loader',
                                options: {
                                    appendTsSuffixTo: [/\.vue$/]
                                }
                            }
                        ]
                    },
                    esModule: true
                    // other vue-loader options go here
                }
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']

            },
            {
                test: /\.tsx?$/, loader:
                    'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            }
            ,
            /*   {
                   test: /\.js$/,
                   loader: 'babel-loader',
                   exclude: /node_modules/
               },*/
            {
                test: /\.(png|jpg|gif|svg|json)$/,
                loader:
                    'file-loader',
                options:
                    {
                        name: '[name].[ext]?[hash]'
                    }
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery', 'window.jQuery': 'jquery'
        })
    ],

    resolve:
        {
            extensions: [".ts", ".tsx", ".js",'.vue'],
            alias:
                {
                    'vue$':
                        'vue/dist/vue.esm.js'
                }
        }
    ,

    devServer: {
        historyApiFallback: true,
        noInfo:
            true
    }
    ,

    performance: {
        hints: false
    }
    ,

    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}