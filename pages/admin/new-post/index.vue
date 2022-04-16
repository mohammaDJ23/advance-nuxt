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
  methods: {
    async submit(data: any) {
      const res = await this.$axios.$post(
        "https://nuxt-blog-793e5-default-rtdb.firebaseio.com/posts.json",
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
