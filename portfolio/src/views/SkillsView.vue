<template>
  <v-container>
    <h1>Skill Set</h1>
    <v-divider></v-divider>
    <h2>main skills</h2>
    <v-row>
      <v-col v-for="skill in main_skills" :key="skill.name">
        <v-img :src="skill.logo" max-height="100" max-width="50"></v-img>
        {{ skill.name }}
      </v-col>
    </v-row>
    <h2>other skills</h2>
    <v-row>
      <v-col v-for="skill in skills" :key="skill.name">
        <v-img :src="skill.logo" max-height="100" max-width="50" />
        {{ skill.name }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {},
})
export default class WorksView extends Vue {
  private main_skills = [
    {
      name: "C#",
      logo: require("../assets/img/c-sharp.svg"),
    },
    {
      name: "python",
      logo: require("../assets/img/python.svg"),
    },
  ];
  private skills = [
    {
      name: "C",
      logo: require("../assets/img/c.svg"),
    },
    {
      name: "C++",
      logo: require("../assets/img/c-pp.svg"),
    },
    {
      name: "Java",
      logo: require("../assets/img/java.svg"),
    },
    {
      name: "php",
      logo: require("../assets/img/php.svg"),
    },
  ];
}
</script>
