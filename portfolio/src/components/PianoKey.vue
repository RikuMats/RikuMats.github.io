<template>
  <div class="piano-key">
    <span class="key-label">{{ keyName }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";

export default class PianoKey extends Vue {
  @Prop({ required: true }) public keyColor!: string; //white or black
  @Prop({ required: true }) public keyId!: string; //1-ドetc
  private isPressed = false;
  public press(): void {
    alert(this.keyId);
  }
  public release(): void {
    console.log("released");
  }
  get keyClass(): string {
    return this.isPressed ? "default" : "pressed";
  }
  get keyName(): string {
    return this.keyId.replace(/\d+-/, "").replace(/-s/, "#");
  }
}
</script>

<style lang="scss" scoped>

</style>