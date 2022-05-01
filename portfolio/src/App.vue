<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" id="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title grey--text text--darken-2">
            Menu
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="contents_item in menu_items"
            :key="contents_item.name"
            router-link
            :to="contents_item.linkAddr"
          >
            <v-list-item-icon>
              <v-icon>{{ contents_item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-tit>
                {{ contents_item.name }}
              </v-list-item-tit>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
