<template>
  <v-container class="container">
     <v-card class="cards addemployee" elevation="10" @click="overlay = !overlay" shaped>
       <h3>Add Employee</h3>
     </v-card>
     <v-overlay :value="overlay" >
       <Form />
     </v-overlay>
      <v-card class="cards" elevation="10" v-for="employee in employees" :key="employee.id" shaped>
         <NuxtLink :to="'detailpage/'+employee.id" class="link">
         
          <v-row flex class="row">
          <v-col lg="1" sm="1" class="col1">
           <img src="~/static/employee-card.png"/>
          </v-col>
          <v-col lg="11" sm="11">
          <h3>{{ employee.firstName }} {{ employee.lastName }}</h3>
          </v-col>
          </v-row>
          </NuxtLink>
      </v-card>
      <v-card class="cards" style="text-align:center" elevation="10" v-if="employees.length==0">
        <v-card-title>
          Not found
        </v-card-title>
      </v-card>
     
    </v-container>
</template>

<script>
import Form from './form'
import Api from '~/apis/Api'
export default {
  name: "Homepage",
  data () {
    return {
      employees: [],
      overlay: false,
    

   }
},
created(){
   Api.get('/employee')
            .then(response => {
               this.employees = response.data
        });
  

   
},
methods: {
  
},
components: {
  Form
}
}
</script>
<style scoped>
 .container {
   position: relative;
   top: 220px;
 }
 .cards {
   margin-top: 30px;
   width: 80%;
   margin-left: auto;
   margin-right: auto;
   cursor: pointer;
 }
 .searchcontainer {
   align-content: center;
   margin: auto;
   
 }
 .searchfield {
   padding-top: 2%;
 }
 h3 {
   margin-left: 10px;
 }
 img {
   margin-left: 10px;
 }
 .link {
   text-decoration: none;
 }
 .addemployee {
   background-color: orange;
   text-align: center;
   color: white;
   padding-top: 2px;
   padding-bottom: 5px;
 }
 .col1{
   flex-grow: 0;
 }
 .row{
   align-items: center;
 }

</style>