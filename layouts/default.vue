<template>
  <v-app>
    <v-app-bar
      color="orange"
      app
      prominent
      absolute
      fixed
      height="200"
    >
    <nuxt-link to="/">
    <div style="width:80px; height:80px; float:left; margin-top:40px;">
    <v-img :src="require('@/static/empman.png')"></v-img>
    </div>
    </nuxt-link>
    <v-card width="50%" elevation="10" class="searchcontainer" shaped>
    <v-text-field
            label="Search By Name"
            v-model="searchinput"
            rounded
            dense
            class="searchfield"
            append-icon="mdi-magnify" 
            @click:append="search"
          ></v-text-field>
    </v-card>
    </v-app-bar>
    <nuxt />
    <Footer />
  </v-app>
</template>

<script>
import Footer from '../pages/footer'
export default {
  data () {
    return {
      searchinput:""
   }
},
components:{
  Footer
},
methods: {
  search() {
      this.$router.push(`/search/${this.searchinput}`)
   }

}

}
</script>
<style scoped>
 .container {
   position: relative;
   top: 250px;
 }
 .searchcontainer {
   align-content: center;
   margin: auto;
   float: left;
 }
 .searchfield {
   padding-top: 2%;
 }
 h3 {
   margin-top: 6px;
 }
 img {
   margin-left: 10px;
 }
 
</style>