<template>
    <v-footer
    color="orange"
    padless
    class="footer"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Employee Managment</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
    name: "Footer"
}
</script>
<style scoped>
.footer {
    position: absolute;;
    bottom: 0px;
    width: 100%;
}
</style>