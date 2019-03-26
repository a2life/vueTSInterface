<template>
    <div>
        <ul class="appointment-list" v-for="(item,i) in appointments" :key="i">
            <li>
                <div>{{item.petName}}</div>
                <div>{{item.petOwner}}</div>
                <div>{{item.aptData}}</div>
                <div>{{item.aptNotes}}</div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">

    import Vue from 'vue';
    type app ={petName:string; petOwner:string; aptData:string; aptNotes:string }
    export default Vue.extend( {
        name: "appointment-List",
        props: ['appointments'] as app[]
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