<template>
  <v-container>
    <div class="text-h4">
      <slot name="title"></slot>
    </div>
    <div class="text-body2">
      <slot name="description"></slot>
    </div>
    <slot name="content"></slot>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class WorkDescription extends Vue {}
</script>
