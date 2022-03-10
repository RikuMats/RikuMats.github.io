<template>
  <v-container>
    <h1>{{ mess }}</h1>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/img/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Vuetify</h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
@Component
export default class HelloWorld extends Vue {
  @Prop({ required: true }) public mess!: string;
  public importLinks = [
    {
      text: "Twitter",
      href: "https://twitter.com/vuetifyjs",
    },
    {
      text: "Articles",
      href: "https://medium.com/vuetify",
    },
  ];
}
</script>
