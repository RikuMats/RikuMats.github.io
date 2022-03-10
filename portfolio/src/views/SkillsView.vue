<template>
  <v-container>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title grey--text text--darken-2">
          Skill Set
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item v-for="skill in skills" :key="skill.name">
      <v-list-item-icon>
        <v-img :src="skill.logo" height="50" width="50" />
      </v-list-item-icon>
      <v-list-item-content>
        {{ skill.name }}
      </v-list-item-content>
    </v-list-item>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {},
})
export default class WorksView extends Vue {
  private skills = [
    {
      name: "C",
      logo: require("../assets/img/c.svg"),
    },
    {
      name: "python",
      logo: require("../assets/img/python.svg"),
    },
  ];
}
</script>
