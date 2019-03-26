let path = require('path');
let webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const htmlWebPackPlugin = require('html-webpack-plugin');
// const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, './app'),
//        publicPath: '/',
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
                use: [
                     devMode?'vue-style-loader':MiniCssExtractPlugin.loader, 'css-loader']

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
                type: 'javascript/auto',
                test: /\.(json|html)/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'file-loader',
                    options: {name: '[name].[ext]'},
                }]
            },
            {

                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader:
                        'file-loader',
                    options:
                        {
                            name: '[name].[ext]?[hash]'
                        }
                }]
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery', 'window.jQuery': 'jquery'
        }),
        new htmlWebPackPlugin({
            filename: 'index.html',
            template: './src/index.ejs'

        }),
    /*    new HtmlWebpackHarddiskPlugin({
            alwaysWriteToDisk:true,
        //    outputPath: path.resolve(__dirname,'app')
        }),*/
        new VueLoaderPlugin()
   ,   new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename:"[id].css"
        })
    ],

    resolve:
        {
            extensions: [".ts", ".tsx", ".js"],
            /*   alias:
                   {
                       'vue$':
                           'vue/dist/vue.esm.js'
                   }*/
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
};

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