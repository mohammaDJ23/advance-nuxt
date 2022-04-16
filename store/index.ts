import Vuex from "vuex";
import post, { State as PostState } from "./modules/post";

export interface RootState {
  post: PostState;
}

export default function createStore() {
  return new Vuex.Store<RootState>({
    modules: {
      post,
    },
  });
}
