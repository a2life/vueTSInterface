import Vue from 'vue';
import App from './App.vue';
import './assets/style.css';
import './assets/appointments.json';
let vm = new Vue({
        el: '#app',
        render: function(h:any){ return h(App)}

    }
);