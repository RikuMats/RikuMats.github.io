<template>
  <div class="profile">
    <h1>Profile</h1>
    <img alt="temporary img" src="../assets/img/logo.png" />
    <p>name: Riku</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class ProfileView extends Vue {}
</script>
