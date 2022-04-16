<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="submit" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AdminPostForm from "../../../components/admin/AdminPostForm.vue";

export default Vue.extend({
  components: {
    AdminPostForm,
  },
  // @ts-ignore
  layout: "admin",
  // @ts-ignore
  async fetch({ $axios, store, params, error }) {
    return $axios
      .$get(
        `https://nuxt-blog-793e5-default-rtdb.firebaseio.com/posts/${params.postId}.json`
      )
      .then((data) => {
        store.dispatch("setPost", data);
      })
      .catch((err) => error(err));
  },
  computed: {
    loadedPost() {
      return this.$store.getters.getPost;
    },
  },
  methods: {
    async submit(data: any) {
      const res = await this.$axios.$put(
        `https://nuxt-blog-793e5-default-rtdb.firebaseio.com/posts/${this.$route.params.postId}.json`,
        data
      );

      if (res) {
        this.$router.push("/admin");
      }
    },
  },
});
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
