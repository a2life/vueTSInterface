<template>
    <div class="panel panel-primary">

        <div class="panel-heading apt-addheading"
             @click="hidePanel=!hidePanel">
            <span class="glyphicon glyphicon-plus"></span> Add Appointment
        </div><!-- panel-heading -->

        <div class="panel-body"
             :class="{ hide: hidePanel }">
            <!-- class "hide" is a part of bootstrap CSS -->

            <form class="add-appointment form-horizontal" @submit.prevent="requestAdd">

                <div class="form-group">
                    <label class="col-sm-2 control-label" for="petName">Pet Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="petName" placeholder="Pet's Name" v-model="formData.petName" />
                    </div><!-- col-sm-10 -->
                </div><!-- form-group -->

                <div class="form-group">
                    <label class="col-sm-2 control-label" for="petOwner">Pet Owner</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"
                               id="petOwner" placeholder="Owner's Name" v-model="formData.petOwner"/>
                    </div><!-- col-sm-10 -->
                </div><!-- form-group -->

                <div class="form-group">
                    <label class="col-sm-2 control-label" for="aptDate">Date</label>
                    <div class="col-sm-4">
                        <input type="date" class="form-control" id="aptDate"  v-model="formData.aptDate" />
                    </div><!-- col-sm-4 -->
                    <label class="col-sm-2 control-label" for="aptTime">Time</label>
                    <div class="col-sm-4">
                        <input type="time" class="form-control" id="aptTime" v-model="formData.aptTime"/>
                    </div><!-- col-sm-4 -->
                </div><!-- form-group -->

                <div class="form-group">
                    <label class="col-sm-2 control-label" for="aptNotes">Apt. Notes</label>
                    <div class="col-sm-10">
            <textarea class="form-control" rows="4" cols="50"
                      id="aptNotes" placeholder="Appointment Notes" v-model="formData.aptNotes" ></textarea>
                    </div><!-- col-sm-10 -->
                </div><!-- form-group -->

                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-primary pull-right">Add Appointment</button>
                    </div><!-- col-sm-offset-2 -->
                </div><!-- form-group -->

            </form>
        </div><!-- panel-body -->
    </div><!-- panel-primary -->
</template>

<script lang="ts">
    import Vue from 'vue';
    interface entryData {petName:string; petOwner:string; aptDate:string; aptTime:string; aptNotes:string }
    export default Vue.extend( {

        name: 'AddAppointments',

        data() {
            return {
                hidePanel: true,
                formData: {} as entryData
            }
        } ,//data
        methods: {
            requestAdd: function(){
                let parsedData ={
                    petName: this.formData.petName,
                    petOwner: this.formData.petOwner,
                    aptDate: this.formData.aptDate + ' '+this.formData.aptTime,
                    aptNotes: this.formData.aptNotes,
                };
                this.$emit('addRecord',parsedData);
                this.formData={} as entryData;
                this.hidePanel=true;
            }
        }
    })
</script>

<style scoped>
    .panel-heading {
        cursor: pointer;
    }

</style>