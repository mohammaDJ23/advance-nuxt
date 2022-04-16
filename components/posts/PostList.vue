<template>
  <section class="featured-posts">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :is-admin="isAdmin"
      :id="post.id"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText"
    />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import PostPreview from "./PostPreview.vue";

interface Post {
  id: string;
  thumbnail: string;
  title: string;
  previewText: string;
}

interface Data {}

interface Methods {}

interface Computed {}

interface Props {
  isAdmin: boolean;
  posts: Post[];
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: "IndexPage",
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
