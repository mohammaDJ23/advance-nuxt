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

  /**
   *
   * @______________________________________
   *
   * for srr we could use asyncData() method
   * it runs on the server and we don't have any asscess to this for initialize the state
   * so in create we could pass data to state through action methods
   * and then we could access to state by getter methods by computed
   *
   * @______________________________________
   *
   */

  // @ts-ignore
  // async asyncData(context) {
  //   // you should return a promise

  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve({
  //         loadedPost: [
  //           {
  //             id: "1",
  //             thumbnail:
  //               "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
  //             title: "first post",
  //             previewText: "this is our first post",
  //           },
  //           {
  //             id: "2",
  //             thumbnail:
  //               "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
  //             title: "first post",
  //             previewText: "this is our first post",
  //           },
  //           {
  //             id: "3",
  //             thumbnail:
  //               "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
  //             title: "first post",
  //             previewText: "this is our first post",
  //           },
  //         ],
  //       });
  //     }, 2000);
  //   })
  //     .then((data) => data)
  //     .catch((err) => {
  //       // it would handle by nuxt and will redirect the user to error page that located in laygout

  //       context.error(new Error("Something went wrong"));
  //     });
  // },
  // computed: {
  //   posts() {
  //     return this.$store.getters.getAll;
  //   },
  // },
  // created() {
  //   // pass data from server to vuex state
  //   // @ts-ignore

  //   this.$store.dispatch("setPosts", this.loadedPost);
  // },

  /**
   *
   * @______________________________________
   *
   * for srr we also could use fetch() method
   * but by this method we could access to dispatchs, states and so on
   * and diractly minipulate the state before the page appear in the screen.
   * alos for getting data form vuxe again we could use computed
   *
   * @______________________________________
   *
   */

  // @ts-ignore
  async fetch(context) {
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
      .then((data: any) => {
        // after getting data dispatch data to the state

        context.store.dispatch("setPosts", data.loadedPost);
      })
      .catch((err) => {
        // it would handle by nuxt and will redirect the user to error page that located in laygout

        context.error(new Error("Something went wrong"));
      });
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
