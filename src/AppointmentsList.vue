<template>
    <div>
        <ul class="appointment-list">
            <appointment-Item v-for="(item,i) in appointments"
                             :key="i"
                             :appointment="item"


            ></appointment-Item>

        </ul>
    </div>
</template>

<script lang="ts">

    import Vue from 'vue';
    import appointmentListItem from './AppointmentListItem.vue';

    export default Vue.extend({
        name: "appointment-List",
        props: ['appointments'],
        components: {
            'appointment-Item': appointmentListItem
        }
    })
</script>

<style scoped>
    .appointment-list {

        padding: 0;
        list-style-type: none;
        margin: 10px 5%;
        font-size: 1.7rem;
    }
</style>