<template>
  <div id="piano-container">
    <div id="piano-wrap">
      <PianoKey
        v-for="i in pianoSize"
        :key="i"
        :keyId="i"
        :scaleName="keyMapOctave[(i - 1) % octaveSize].scaleName"
        :keyColor="keyMapOctave[(i - 1) % octaveSize].keyColor"
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
  private keyMapOctave = [
    {
      keyColor: "white",
      scaleName: "ド",
    },
    {
      keyColor: "black",
      scaleName: "ド#",
    },
    {
      keyColor: "white",
      scaleName: "レ",
    },
    {
      keyColor: "black",
      scaleName: "レ#",
    },
    {
      keyColor: "white",
      scaleName: "ミ",
    },
    {
      keyColor: "white",
      scaleName: "ファ",
    },
    {
      keyColor: "black",
      scaleName: "ファ#",
    },
    {
      keyColor: "white",
      scaleName: "ソ",
    },
    {
      keyColor: "black",
      scaleName: "ソ#",
    },
    {
      keyColor: "white",
      scaleName: "ラ",
    },
    {
      keyColor: "black",
      scaleName: "ラ#",
    },
    {
      keyColor: "white",
      scaleName: "シ",
    },
  ];
  public fingerStatus = false;
  get octaveSize(): number {
    return this.keyMapOctave.length;
  }
  get pianoSize(): number {
    return this.octaveSize * 2;
  }
}
</script>

<style lang="scss">
#piano-container {
  margin: 0 auto;
  width: calc(100% - 40px);
  height: 400px;
  overflow: auto;
}

#piano-wrap {
  margin: 0 auto;
  height: 330px;
  width: calc(18 * 46px);
  display: flex;
  justify-content: center;
}
</style>
