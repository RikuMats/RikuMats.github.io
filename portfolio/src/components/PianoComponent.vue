<template>
  <div id="piano-container">
    <div id="piano-wrap">
      <PianoKey
        v-for="keyMap in keyMaps"
        :key="keyMap.keyId"
        :keyId="keyMap.keyId"
        :keyColor="keyMap.keyColor"
      ></PianoKey>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
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
  public fingerStatus = false;
  get size(): number {
    return this.keyMaps.length;
  }
}
</script>

<style lang="scss">
#piano-container {
  background-color: lightgray;
  margin: 0 auto;
  width: calc(100% - 40px);
  height: 400px;
  overflow: auto;
}

#piano-wrap {
  margin: 0 auto;
  height: 330px;
  width: calc(46px * 18);
  display: flex;
  justify-content: center;
}
</style>
