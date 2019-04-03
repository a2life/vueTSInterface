<template>
    <div id="main-app">
        <add-appointment @addRecord="addAppointment" ></add-appointment>
        <search-appointment @searchRecords="searchAppointments"></search-appointment>
        <appointment-list v-bind:appointments = 'appointments' @removeRecord="removeAppointment"></appointment-list>

    </div>
</template>

<script lang="ts" >
 import Vue from 'vue';
 import aList from './AppointmentsList.vue';
 import addAppointment from './AddAppointment.vue';
 import searchAppointment from './SearchAppointment.vue';
 import * as _ from 'lodash';
 interface app {petName:string; petOwner:string; aptDate:string; aptNotes:string }

    export default Vue.extend(  {
        name: 'MainApp',
        data(){
            return {
                appointments: [] as app[],
                searchTerms: ""

            }
        },
        components: {
            'appointment-list': aList,
            'add-appointment':addAppointment,
            'search-appointment':searchAppointment
        },
        created(): void {
            $.getJSON('appointments.json')
                .then(data=>{this.appointments=data});
        },
        methods: {
            addAppointment : function(item:app){
                 this.appointments.push(item)

            },
            removeAppointment: function(item:app){
                this.appointments = _.without(this.appointments, item)

            },
            searchAppointments: function(terms:string){
                this.searchTerms = terms
            }
        }
    })


</script>

<style scoped>

</style>