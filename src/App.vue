<template>
    <div id="main-app">
        <add-appointment @addRecord="addAppointment" ></add-appointment>
        <appointment-list v-bind:appointments = 'appointments' ></appointment-list>

    </div>
</template>

<script lang="ts" >
 import Vue from 'vue';
 import aList from './AppointmentsList.vue';
 import addAppointment from './AddAppointment.vue';
 interface app {petName:string; petOwner:string; aptDate:string; aptNotes:string }

    export default Vue.extend(  {
        name: 'MainApp',
        data(){
            return {
                appointments: [] as app[]
            }
        },
        components: {
            'appointment-list': aList,
            'add-appointment':addAppointment
        },
        created(): void {
            $.getJSON('appointments.json')
                .then(data=>{this.appointments=data});
        },
        methods: {
            addAppointment : function(item:app){
                 this.appointments.push(item)

            }
        }
    })


</script>

<style scoped>

</style>