<template>
  <section class="featured-posts">
    <PostPreview
      :is-admin="isAdmin"
      id="1"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Hello there!"
      previewText="This my first post!"
    />
    <PostPreview
      :is-admin="isAdmin"
      id="2"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Hello there - the second time!"
      previewText="This my second post!"
    />
    <PostPreview
      :is-admin="isAdmin"
      id="3"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Hi!"
      previewText="This my third post!"
    />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import PostPreview from "./PostPreview.vue";

interface Data {}

interface Methods {}

interface Computed {}

interface Props {
  isAdmin: boolean;
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
