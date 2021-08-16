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
          v-model="newbirthdate"
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
       Gender: {{Gender}}
        <v-radio-group v-model="newgender" row>
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
export default {
    name: "Update",
    props: ["employee","id"],
    data(){
        return {
            firstName: this.employee.firstName,
            lastName: this.employee.lastName,
            Birthdate: this.employee.birthdate,
            Salary: this.employee.salary,
            Gender: this.employee.gender,
            newgender: "",
            newbirthdate:"",
            modal: false,
            newemployee: {},
            nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
        }
    },
    created(){
        
    },
    methods:{
        async onSubmit() {
            this.newemployee = {
              "id": this.id,
              "firstName": this.firstName,
              "lastName": this.lastName,
              "birthdate": this.newbirthdate==""?this.Birthdate:this.newbirthdate,
              "gender": this.newgender==""?this.Gender:this.newgender,
              "salary": this.Salary
            }
            
            await this.$store.dispatch("updateEmployee", this.newemployee);
            await this.$store.dispatch("getEmployees");
            this.$router.go()
        },
        cancel() {
            this.$router.go()
        }
    }
}
</script>