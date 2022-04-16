<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')"
        >Create Post</AppButton
      >
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <!-- this component was preloaded in the plugin folder -->

      <PostList isAdmin :posts="loadedPost" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppButton from "../../components/UI/AppButton.vue";

export default Vue.extend({
  components: {
    AppButton,
  },
  // @ts-ignore
  layout: "admin",
  // @ts-ignore
  async asyncData({ $axios, error }) {
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

      return { data: arrData };
    } catch (err) {
      error(err as any);
    }
  },
  created() {
    this.$store.dispatch("setPosts", this.data);
  },
  computed: {
    loadedPost() {
      return this.$store.getters.getAll;
    },
  },
});
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
