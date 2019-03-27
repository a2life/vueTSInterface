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
   type app= {petName:string; petOwner:string; aptDate:string; aptNotes:string }
    export default Vue.extend( {
        name: "AppointmentListItem",
        props: ['appointment'] as app[]
    })
</script>

<style scoped>

</style>