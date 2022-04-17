import { Middleware } from "@nuxt/types";

const middleware: Middleware = (context) => {
  // req in client will be undefined and on the server is the req object
  context.store.dispatch("initTokenState", context.req);
};

export default middleware;
