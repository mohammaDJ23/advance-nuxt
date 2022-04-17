import { ActionTree, MutationTree, GetterTree } from "vuex";
import { RootState } from "../";
import Cookie from "js-cookie";
import { IncomingMessage } from "http";

export interface State {
  token: string;
}

interface InitTokenLocally {
  token: string;
  expire: number;
}

const state: () => State = () => ({
  token: "",
});

const getters: GetterTree<State, RootState> = {
  getToken(state) {
    return state.token;
  },

  hasToken(state) {
    return !!state.token;
  },
};

const mutations: MutationTree<State> = {
  setToken(state, token: string) {
    state.token = token;
  },

  clearToken(state) {
    state.token = "";
  },
};

const actions: ActionTree<State, RootState> = {
  submit(context, info: any) {
    // @ts-ignore
    let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`;

    if (!info.isLogin) {
      // @ts-ignore
      authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FIREBASE_API_KEY}`;
    }

    this.$axios
      .$post(authUrl, info)
      .then((result: any) => {
        const token = result.idToken;
        const expire = +result.expiresIn * 1000;
        context.commit("setToken", token);
        // save token in localstorage for client`
        context.dispatch("initTokenLocally", { token, expire });
        // save token in cookie in req object to access the token in the server (middleware)
        context.dispatch("setTokenInCookie", { token, expire });
        this.$router.push("/admin");
      })
      .catch((err: any) => console.log(err));
  },

  setTokenInCookie(context, { token, expire }: InitTokenLocally) {
    const time = new Date(new Date().getTime() + expire).toISOString();
    Cookie.set("token", token);
    Cookie.set("expire", time);
  },

  initTokenLocally(context, { token, expire }: InitTokenLocally) {
    const time = new Date(new Date().getTime() + expire).toISOString();
    localStorage.setItem("token", token);
    localStorage.setItem("expire", time);
  },

  clearLocalStorage() {
    localStorage.removeItem("token");
    localStorage.removeItem("expire");
  },

  clearSession() {
    Cookie.remove("token");
    Cookie.remove("expire");
  },

  initTokenState(context, req: IncomingMessage | undefined) {
    let token: string | null = null;
    let expire: string | null = null;

    if (req) {
      // get token and exipre time from cookies from server request
      // when middleware runs on server

      if (!req.headers.cookie) {
        return;
      }

      for (const str of req.headers.cookie.split(";")) {
        const [key, value] = str.split("=");

        switch (key.trim()) {
          case "token":
            token = value;
            break;

          case "expire":
            expire = value;
            break;
        }
      }
    } else {
      // get token and expire from localstorage from client
      // when middleware runs on client

      token = localStorage.getItem("token");
      expire = localStorage.getItem("expire");
    }

    if (token && expire && new Date() < new Date(expire)) {
      return context.commit("setToken", token);
    }

    context.commit("clearToken", "");
  },

  logout(context) {
    context.commit("clearToken", "");
    context.dispatch("clearLocalStorage");
    context.dispatch("clearSession");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
