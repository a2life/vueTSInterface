##Vue.js Building an Interface, TypeScript version

####This is a rehash of Linkedin Education's video course Vue.js:Building an Interface

Original course is <a href="https://www.linkedin.com/learning/vue-js-building-an-interface/building-the-search-component?showBanner=consumer_migration">here</a> with gitHub library <a href="https://github.com/planetoftheweb/vueinterface/">here</a>


Change Points
- Use of TypeScript in place of Babel as a transpiler. Obviously this required additional type and interface declarations.
- Webpack is version 4, not version 3.
- Vue-loader is version 15. Now a declaration of VueLoaderPlugin in webpack.config.js is mandatory
- Since no dynamic compilation takes place (because everything is in vue component files and main.ts does not contain pre-compiled template expression) use of 'vue/dist/vue.esm.js' has been commented out.
- textExtract plugin has been replaced with miniCSSExtract plugin

Overall, 'webpack.config.js' has been massaged a lot.  
The component's script session  uses lang='ts' and export object is Vue.extend type.

Preliquisite 
- npm installed globally
- yarn installed globally


IDE used :  WebStorm with TypeScript service running