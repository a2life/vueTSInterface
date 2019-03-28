<template>
    <div id="main-app">
        <add-appointment ></add-appointment>
        <appointment-list v-bind:appointments = 'appointments' ></appointment-list>

    </div>
</template>

<script lang="ts" >
 import Vue from 'vue';
 import aList from './AppointmentsList.vue';
 import addAppointment from './AddAppointment.vue';
    export default Vue.extend(  {
        name: 'MainApp',
        data(){
            return {

                appointments: []
            }
        },
        components: {
            'appointment-list': aList,
            'add-appointment':addAppointment
        },
        created(): void {
            $.getJSON('appointments.json')
                .then(data=>{this.appointments=data});
        }
    })


</script>

<style scoped>

</style>