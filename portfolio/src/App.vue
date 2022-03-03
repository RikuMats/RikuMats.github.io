<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2">
              Menu
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="contents_item in menu_items"
          :key="contents_item.name"
        >
          <v-list-item-icon>
            <v-icon>{{ contents_item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link :to="contents_item.linkAddr">
              {{ contents_item.name }}
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>menu</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    drawer: null,
    menu_items: [
      {
        name: "profile",
        icon: "mdi-vuetify",
        linkAddr: "/",
      },
      {
        name: "skills",
        icon: "mdi-cogs",
        linkAddr: "/skills",
      },
    ], //
  }),
});
</script>
