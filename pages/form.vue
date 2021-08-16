<template>
    <v-form
    ref="form"
    lazy-validation
    
  >
    <v-text-field
      v-model="firstName"
      :rules="nameRules"
      label="First Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="lastName"
      :rules="nameRules"
      label="Last Name"
      required
    ></v-text-field>

    <v-text-field
      type="number"
      v-model="Salary"
      label="Salary"
      required
    ></v-text-field>
    <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="Birthdate"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="Birthdate"
            label="Birthdate"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="Birthdate"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="modal = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(Birthdate)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
        <v-radio-group v-model="Gender" row>
      <v-radio
        label="Male"
        value="M"
      ></v-radio>
      <v-radio
        label="Female"
        
        value="F"
      ></v-radio>
    </v-radio-group>
    <v-btn
      color="warning"
      style="width:40%"
      @click="onSubmit"
    >
      Add
    </v-btn>
    <v-btn
      color="red"
      style="width:40%"
      @click="cancel"
    >
      Cancel
    </v-btn>
  </v-form>
</template>
<script>
import Api from '~/apis/Api'
export default {
    data(){
        return {
            firstName: "",
            lastName: "",
            Birthdate: "",
            Salary: 0,
            Gender: "",
            modal: false,
            newemployee: {},
            nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
        }
    },
    methods:{
        async onSubmit() {
            this.newemployee = {
              "firstName": this.firstName,
              "lastName": this.lastName,
              "birthdate": this.Birthdate,
              "gender": this.Gender,
              "salary": this.Salary
            }
            //await this.$store.dispatch("postEmployees", this.newemployee);
            //await this.$store.dispatch("getEmployees");
            Api.post('/employee',this.newemployee).
              then((response) => {
              console.log(response);
             }, (error) => {
              console.log(error);
             });
              
              this.$router.go()
          },
        cancel() {
          this.$router.go()
        }
    }
}
</script>