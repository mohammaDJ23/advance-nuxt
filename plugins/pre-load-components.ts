import Vue from "vue";

// these component are going to imported before your dom created
// and there is not reason to import these in the other pages, components and so on
// you could add any component that you want to use a lot in the components

import PostList from "../components/posts/PostList.vue";

Vue.component("PostList", PostList);
