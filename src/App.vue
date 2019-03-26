<template>
    <div id="main-app">
        <appointment-list v-bind:appointments = 'appointments' ></appointment-list>

    </div>
</template>

<script lang="ts" >
 import Vue from 'vue';
 import aList from './AppointmentsList.vue';
    export default Vue.extend(  {
        name: 'MainApp',
        data(){
            return {

                appointments: []
            }
        },
        components: {
            'appointment-list': aList
        },
        created(): void {
            $.getJSON('appointments.json')
                .then(data=>{this.appointments=data});
        }
    })


</script>

<style scoped>

</style>