<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
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
  data() {
    return {
      loadedPost: {
        author: "Mohammad",
        title: "astounding",
        content: "hey man come on",
        thumbnailLink:
          "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
      },
    };
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
