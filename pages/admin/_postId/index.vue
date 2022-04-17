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
  middleware: ["init-token-state", "auth"],
  // @ts-ignore
  layout: "admin",
  // @ts-ignore
  async fetch({ $axios, store, params, error }) {
    return $axios
      .$get(
        // @ts-ignore
        `${process.env.FIREBASE_URL}/posts/${params.postId}.json?auth=${store.getters.getToken}`
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
        // @ts-ignore
        `${process.env.FIREBASE_URL}/posts/${this.$route.params.postId}.json?auth=${this.$store.getters.getToken}`,
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
