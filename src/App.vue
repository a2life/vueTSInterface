<template>
    <div id="main-app">
        <add-appointment @addRecord="addAppointment"></add-appointment>
        <search-appointment @searchRecords="searchAppointments" @changeKey="keyChanged" @changeDir="dirChanged"
                            :sortKey="sortKey" :sortDir="sortDir"></search-appointment>
        <appointment-list v-bind:appointments='sortedAppointments' @removeRecord="removeAppointment"></appointment-list>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import aList from './AppointmentsList.vue';
    import addAppointment from './AddAppointment.vue';
    import searchAppointment from './SearchAppointment.vue';
    import * as _ from 'lodash';

    interface app {
        petName: string;
        petOwner: string;
        aptDate: string;
        aptNotes: string;

        [key: string]: string; //allows app type to use index addressing, ie item[this.property]
    }

    type direction = 'asc' | 'desc';
    type fieldName = "petName" | "petOwner" | "aptNotes";

    export default Vue.extend({
        name: 'MainApp',
        data() {
            return {
                appointments: [] as app[],
                searchTerms: "",
                sortKey: 'petName' as fieldName,
                sortDir: 'asc' as direction

            }
        },
        components: {
            'appointment-list': aList,
            'add-appointment': addAppointment,
            'search-appointment': searchAppointment
        },
        created(): void {
            $.getJSON('appointments.json')
                .then(data => {
                    this.appointments = data
                });
        },
        methods: {
            addAppointment: function (item: app) {
                this.appointments.push(item)

            },
            removeAppointment: function (item: app) {
                this.appointments = _.without(this.appointments, item)

            },
            searchAppointments: function (terms: string) {
                this.searchTerms = terms
            },
            keyChanged: function (value: fieldName) {
                this.sortKey = value
            },
            dirChanged: function (value: direction) {
                this.sortDir = value
            }
        },
        computed: {
            filteredAppointments: function () {
                return this.appointments.filter((item) => {
                    return (
                        item.petName.toLocaleLowerCase().match(this.searchTerms.toLowerCase()) ||
                        item.petOwner.toLocaleLowerCase().match(this.searchTerms.toLowerCase()) ||
                        item.aptNotes.toLocaleLowerCase().match(this.searchTerms.toLowerCase())
                    ) //used fat arrow function to bind inner 'this' to the calling function
                })
            },
            sortedAppointments: function () {
                return _.orderBy(this.filteredAppointments, (item: app) => {
                        return item[this.sortKey].toLowerCase()
                    },
                    this.sortDir)
            }
        }
    })


</script>

<style scoped>

</style>