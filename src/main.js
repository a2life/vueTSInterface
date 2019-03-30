import Vue from 'vue';
import App from './App.vue';
import './assets/style.css';
import './assets/appointments.json';
var vm = new Vue({
    el: '#app',
    render: function (h) { return h(App); }
});
$(document).on('keypress', 'input:not(textarea)', function (e) {
    if (e.key == 'Enter') {
        e.preventDefault();
    } //prevent form from submitting when hit 'Enter'
});
//# sourceMappingURL=main.js.map