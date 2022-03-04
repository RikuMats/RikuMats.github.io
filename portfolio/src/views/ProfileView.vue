<template>
  <div class="profile">
    <h1>Profile</h1>
    <img alt="temporary img" src="../assets/logo.png" />
    <p>name: Riku</p>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
@Component({
  components: { HelloWorld },
})
export default class ProfileView extends Vue {}
</script>
