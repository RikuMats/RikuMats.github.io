<template>
  <v-container>
    <h1>Works</h1>
    <v-divider></v-divider>
    <PianoComponent></PianoComponent>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PianoComponent from "@/components/PianoComponent.vue";
@Component({
  components: { PianoComponent },
})
export default class SkillsView extends Vue {}
</script>
