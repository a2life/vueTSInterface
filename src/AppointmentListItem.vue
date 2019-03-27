<template>
    <li>
        <div>{{appointment.petName}}</div>
        <div>{{appointment.petOwner}}</div>
        <div>{{appointment.aptDate}}</div>
        <div>{{appointment.aptNotes}}</div>
    </li>
</template>

<script lang="ts">
    import Vue from 'vue';
   interface Iapp {petName:String; petOwner:String; aptDate:String; aptNotes:String }
    export default Vue.extend( {
        name: "AppointmentListItem",
        props: {appointment:{
            type: Object as ()=>Iapp
            }}
    })
</script>

<style scoped>

</style>