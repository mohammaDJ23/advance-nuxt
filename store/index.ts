import Vuex from "vuex";
import post, { State as PostState } from "./modules/post";
import auth, { State as AuthState } from "./modules/auth";

export interface RootState {
  post: PostState;
  auth: AuthState;
}

export default function createStore() {
  return new Vuex.Store<RootState>({
    modules: {
      post,
      auth,
    },
  });
}
