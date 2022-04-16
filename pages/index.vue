<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPost" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostList from "../components/posts/PostList.vue";

interface Data {}

interface Methods {}

interface Computed {}

interface Props {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: "IndexPage",
  components: {
    PostList,
  },
  // @ts-ignore
  async asyncData(context) {
    // you should return a promise

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          loadedPost: [
            {
              id: "1",
              thumbnail:
                "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
              title: "first post",
              previewText: "this is our first post",
            },
            {
              id: "2",
              thumbnail:
                "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
              title: "first post",
              previewText: "this is our first post",
            },
            {
              id: "3",
              thumbnail:
                "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
              title: "first post",
              previewText: "this is our first post",
            },
          ],
        });
      }, 2000);
    })
      .then((data) => data)
      .catch((err) => {
        // it would handle by nuxt and will redirect the user to error page that located in laygout

        context.error(new Error("Something went wrong"));
      });
  },
});
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;

  /** images in the assets file will be optimized by webpack */

  background-image: url("~assets/images/background.jpg");
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
