import { ActionTree, MutationTree, GetterTree } from "vuex";
import { RootState } from "../";

interface Post {
  id: string;
  thumbnail: string;
  title: string;
  previewText: string;
}

export interface State {
  loadedPosts: Post[];
  post: Post | {};
}

const state: () => State = () => ({
  loadedPosts: [],
  post: {},
});

const getters: GetterTree<State, RootState> = {
  getAll(state) {
    return state.loadedPosts;
  },
  getPost(state) {
    return state.post;
  },
};

const mutations: MutationTree<State> = {
  setPosts(state, posts: Post[]) {
    state.loadedPosts = posts;
  },
  setPost(state, post: Post) {
    state.post = post;
  },
};

const actions: ActionTree<State, RootState> = {
  // this method is belong to nuxt action and will run in all pages
  // just one time when you refresh the page it's a server side method.
  // this method is good for storing sessing in the state
  // Asynchronous nuxtServerInit actions must return a Promise or leverage async/await to allow the nuxt server to wait on them.

  nuxtServerInit(vuexContext, context) {
    console.log("nuxtServerInt method");
  },
  setPosts(context, posts: Post[]) {
    context.commit("setPosts", posts);
  },
  setPost(context, post: Post) {
    context.commit("setPost", post);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
