<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" id="drawer">
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2">
              Menu
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-container
          v-for="contents_item in menu_items"
          :key="contents_item.name"
          horizontal
        >
          <v-btn
            color="deep-purple accent-4"
            text
            router-link
            :to="contents_item.linkAddr"
            block
          >
            <v-icon>{{ contents_item.icon }}</v-icon>
            <span>{{ contents_item.name }}</span>
          </v-btn>
        </v-container>
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
    drawer: false,
    menu_items: [
      {
        name: "profile",
        icon: "mdi-account-details",
        linkAddr: "/",
      },
      {
        name: "works",
        icon: "mdi-head-lightbulb-outline",
        linkAddr: "/works",
      },
      {
        name: "skills",
        icon: "mdi-school",
        linkAddr: "/skills",
      },
    ], //
  }),
});
</script>
