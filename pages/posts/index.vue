<template>
  <div class="posts-page">
    <PostList :posts="posts" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostList from "../../components/posts/PostList.vue";

export default Vue.extend({
  components: {
    PostList,
  },

  // @ts-ignore
  async fetch({ $axios, error, store }) {
    try {
      const data = await $axios.$get(
        "https://nuxt-blog-793e5-default-rtdb.firebaseio.com/posts.json"
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
