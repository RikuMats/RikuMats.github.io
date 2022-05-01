<template>
  <v-container>
    <h1>Profile</h1>
    <v-divider></v-divider>
    <img alt="temporary img" src="../assets/img/logo.png" />
    <p>name: Riku</p>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class ProfileView extends Vue {}
</script>
