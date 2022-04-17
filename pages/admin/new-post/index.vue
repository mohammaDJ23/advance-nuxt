<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="submit" />
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
  middleware: ["init-token-state", "auth"],
  methods: {
    async submit(data: any) {
      const res = await this.$axios.$post(
        // @ts-ignore
        `${process.env.FIREBASE_URL}/posts.json?auth=${this.$store.getters.getToken}`,
        data
      );

      console.log(res);
    },
  },
});
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
