<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav @close="displaySidenav = false" :show="displaySidenav" />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheHeader from "../components/Navigation/TheHeader.vue";
import TheSidenav from "../components/Navigation/TheSidenav.vue";

export default Vue.extend({
  name: "Default",
  components: {
    TheHeader,
    TheSidenav,
  },
  data() {
    return {
      displaySidenav: false,
    };
  },
});
</script>

<style>
html {
  font-family: "Open Sans", sans-serif;
}

body {
  margin: 0;
  padding: 0;
}
</style>
