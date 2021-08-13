<template>
    <v-container class="container" >
      <v-card class="cards" elevation="10" v-if="employee" shaped>
        <v-icon :style="'float:right; cursor:pointer; margin-top:6px; margin-right:6px'" color="red" @click="deleteEmp">mdi-close</v-icon>
        <v-icon :style="'float:right; cursor:pointer; margin-top:6px; margin-right:6px'" color="primary" @click="overlay = !overlay">mdi-pencil</v-icon>
          <v-row flex>
          <v-col sm="1">
           <img src="~static/employee-card.png"/>
          </v-col>
          <v-col sm="11">
          <h3>{{ employee.firstName }} {{ employee.lastName }}</h3>
          </v-col>
          </v-row>
          
        <v-row flex>
          <v-col sm="1">
        <img src="~/static/gender.png"/>
        </v-col>
          <v-col sm="11">
        <h3>{{ employee.gender }}</h3>
         </v-col>
          </v-row>
          <v-row flex>
          <v-col sm="1">
        <img src="~/static/get-cash.png"/>
        </v-col>
          <v-col sm="11">
        <h3>{{ employee.salary }}</h3>
        </v-col>
          </v-row>
          <v-row flex>
          <v-col sm="1">
        <img src="~/static/birth-date.png"/>
        </v-col>
          <v-col sm="11">
        <h3>{{ employee.birthdate }}</h3>
        </v-col>
          </v-row>
      <v-overlay :value="overlay" >
       <Update :id="this.$route.params.id" :employee="employee"/>
     </v-overlay>
      </v-card>
      
    </v-container>
</template>
<script>
import Update from '../update'
import Api from '~/apis/Api'
export default {
    name: "Detailpages",
    data() {
        return{
            employee: [],
            overlay: false,
        }
    },
    created() {   
      Api.get(`/employee/${this.$route.params.id}`)
        .then(response => {
            this.employee = response.data
        })
    },
   
    components: {
      Update
    },
    methods: {
        async deleteEmp() {
            Api.delete(`/employee/${this.$route.params.id}`).
            then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
          this.$router.push("/")
        }
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
 }
 
 h3 {
   margin-top: 6px;
 }
 img {
   margin-left: 10px;
 }
</style>