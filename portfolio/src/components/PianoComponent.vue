<template>
  <div class="piano-container">
    <PianoKey
      v-for="(keyColor, keyId) in keyMaps"
      :keyId="keyId"
      :keyColor="keyColor"
    ></PianoKey>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorater";
import PianoKey from "@/components/PianoKey.vue";
@Component({
  components: { PianoKey },
})
export default class PianoComponent extends Vue {
  private keyMaps = [
    {
      keyColor: "white",
      keyId: "1-do",
    },
    {
      keyColor: "black",
      keyId: "1-do-s",
    },
    {
      keyColor: "white",
      keyId: "1-re",
    },
    {
      keyColor: "black",
      keyId: "1-re-s",
    },
    {
      keyColor: "white",
      keyId: "1-mi",
    },
    {
      keyColor: "white",
      keyId: "1-fa",
    },
    {
      keyColor: "black",
      keyId: "1-fa-s",
    },
    {
      keyColor: "white",
      keyId: "1-so",
    },
    {
      keyColor: "black",
      keyId: "1-so-s",
    },
    {
      keyColor: "white",
      keyId: "1-la",
    },
    {
      keyColor: "black",
      keyId: "1-la-s",
    },
    {
      keyColor: "white",
      keyId: "1-ti",
    },
  ];
  get size(): number {
    return this.keyMaps.length;
  }
}
</script>

<style lang="scss" scoped></style>
