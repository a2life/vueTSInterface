<template>
    <div class="row search-appointments">
        <div class="col-sm-offset-3 col-sm-6">

            <div class="input-group">

                <input id="SearchApts" placeholder="Search" type="text" class="form-control"
                       aria-label="Search Appointments" v-model="searchTerm" />

                <div class="input-group-btn">
                    <button type="button" class="btn btn-primary dropdown-toggle"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span
                            class="caret"></span></button>

                    <ul class="dropdown-menu dropdown-menu-right">

                        <li><a href="#" id="petName" @click="keyChange('petName')">Pet Name<span v-if="sortKey==='petName'" class="glyphicon glyphicon-ok"></span></a></li>

                        <li><a href="#" id="aptDate" @click="keyChange('aptDate')">Date<span v-if="sortKey==='aptDate'" class="glyphicon glyphicon-ok"></span></a></li>

                        <li><a href="#" id="ownerName" @click="keyChange('petOwner')">Owner<span v-if="sortKey==='petOwner'" class="glyphicon glyphicon-ok"></span></a></li>

                        <li role="separator" class="divider"></li>

                        <li><a href="#" id="asc" @click="dirChange('asc')">Asc<span v-if="sortDir==='asc'" class="glyphicon glyphicon-ok"></span></a></li>

                        <li><a href="#" id="desc" @click="dirChange('desc')">Desc
                            <span v-if="sortDir==='desc'" class="glyphicon glyphicon-ok"></span></a></li>
                    </ul>
                </div><!-- input-group-btn -->
            </div><!-- input-group -->
        </div><!-- col-sm-offset-3 -->
    </div><!-- search-appointments -->
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "SearchAppointment",
        data(){
            return {
                searchTerm:""
            }
        },
        props: ['sortKey','sortDir']

        ,
        watch : {
            searchTerm : function(){
                this.$emit('searchRecords',this.searchTerm);
            }
        },
        methods : {
            keyChange: function(value:"petName"|"petOwner"|"aptDate"){
                this.$emit('changeKey',value)
            },
            dirChange: function(value:'asc'|'desc'){
                this.$emit('changeDir',value)
            }
        }
    })
</script>

<style scoped>

</style>