<template>
    <div id="main-app">
        <ul class="appointment-list" v-for = "(item,i) in appointments" :key="i">
            <li>{{item.petName}}</li>
        </ul>
    </div>
</template>

<script lang="ts" >
 import Vue from 'vue';

    export default Vue.extend(  {
        name: 'MainApp',
        data(){
            return {

                appointments: []
            }
        },
        created(): void {
            $.getJSON('./builds/appointments.json')
                .then(data=>{this.appointments=data});
        }
    })


</script>

<style scoped>
    .appointment-list {

        padding:0;
        list-style-type: none;
        margin: 10px 5%;
        font-size: 1.7rem;
    }
</style>