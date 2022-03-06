<template>
  <div
    :class="keyClass"
    @mouseenter="enterFinger()"
    @mousedown="pressFinger()"
    @mouseup="releaseFinger()"
    @mouseleave="releaseKey()"
  >
    <span class="key-label">{{ scaleName }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
@Component
export default class PianoKey extends Vue {
  @Prop({ required: true }) public keyColor!: string; //white or black
  @Prop({ required: true }) public scaleName!: string;
  @Prop({ required: true }) public keyId!: number;
  private isPressed = false;
  public pressKey(): void {
    this.isPressed = true;
  }
  public releaseKey(): void {
    this.isPressed = false;
  }
  public pressFinger() {
    this.$parent.$data.fingerStatus = true;
    this.pressKey();
  }
  public releaseFinger() {
    this.$parent.$data.fingerStatus = false;
    this.releaseKey();
  }
  public enterFinger() {
    if (this.$parent.$data.fingerStatus) {
      this.pressKey();
    }
  }
  get keyClass(): string {
    return (
      "piano-key " + this.keyColor + " " + (this.isPressed ? "pressed" : "")
    );
  }
}
</script>

<style lang="scss">
.piano-key {
  position: relative;
  box-sizing: border-box;
  user-select: none;
  font-family: Arial;
  text-align: center;

  &.white {
    width: 46px;
    height: 320px;
    background-color: white;
    border: solid 1px black;
    z-index: 1;

    border-bottom: solid rgb(230, 230, 230) 20px !important;
    box-shadow: 0 7px 3px 0 rgba(0, 0, 0, 0.3);
    transition: 100ms;
    color: black;
    &.pressed {
      border-bottom: solid rgb(230, 230, 230) 5px !important;
      border-left: solid rgb(109, 109, 76) 2px;
      border-right: solid rgb(109, 109, 76) 2px;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
    }
  }
  &.black {
    width: 24px;
    height: 190px;
    margin-left: -12px;
    margin-right: -12px;
    z-index: 2;

    background: linear-gradient(to bottom, rgb(24, 24, 24) 97%, white);
    border-bottom: solid rgb(54, 54, 54) 10px !important;
    border-left: solid black 3px;
    border-right: solid black 3px;
    box-shadow: 5px 1px 2px 0 rgba(0, 0, 0, 0.4);
    transition: 100ms;

    color: white;
    &.pressed {
      border-bottom: solid rgb(54, 54, 54) 4px !important;
      box-shadow: 2px 1px 2px 0 rgba(0, 0, 0, 0.4);
      background: linear-gradient(to bottom, rgb(24, 24, 24) 100%, white);
    }
  }
}

.key-label {
  position: absolute;
  display: block;
  bottom: 10px;
  width: 100%;
}
</style>
