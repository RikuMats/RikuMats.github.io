<template>
  <v-container>
    <h1>Works</h1>
    <v-divider></v-divider>
    <WorkDescription>
      <template v-slot:title> Vue Piano </template>
      <template v-slot:description> Vue で作ったピアノ</template>
      <template v-slot:content>
        <PianoComponent></PianoComponent>
      </template>
    </WorkDescription>
    <WorkDescription>
      <template v-slot:title>Books Diary</template>
      <template v-slot:description>
        バックエンドにPHP、フロントエンドにvueを使ったアプリケーション
        <br />
        デモページはフロントのみなのでidとパスワードは任意の文字列
      </template>
      <template v-slot:content>
        <a href="http://rikumats.github.io/book_diary_view/#/">デモページ </a>
      </template>
    </WorkDescription>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PianoComponent from "@/components/PianoComponent.vue";
import WorkDescription from "@/components/WorkDescription.vue";
@Component({
  components: { PianoComponent, WorkDescription },
})
export default class SkillsView extends Vue {}
</script>
