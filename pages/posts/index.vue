<template>
  <div class="posts-page">
    <!-- this component was preloaded in the plugin folder -->

    <PostList :posts="posts" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  // @ts-ignore
  async fetch({ $axios, error, store }) {
    try {
      const data = await $axios.$get(
        // @ts-ignore
        `${process.env.FIREBASE_URL}/posts.json`
      );

      const arrData = [];

      for (const key in data) {
        arrData.push({
          ...data[key],
          id: key,
        });
      }

      store.dispatch("setPosts", arrData);
    } catch (err) {
      error(err as any);
    }
  },
  computed: {
    posts() {
      return this.$store.getters.getAll;
    },
  },
});
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
