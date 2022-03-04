<template>
  <div class="skills">
    <h1>Skills</h1>
    <table>
      <tr>
        <td>C</td>
      </tr>
      <tr>
        <td>python</td>
      </tr>
      <tr>
        <td>PHP</td>
      </tr>
    </table>
    <PianoComponent></PianoComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PianoComponent from "@/components/PianoComponent.vue";
@Component({
  components: { PianoComponent },
})
export default class SkillsView extends Vue {}
</script>
