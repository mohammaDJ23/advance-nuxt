// you should return your logic if it is promise

import { Middleware } from "@nuxt/types";

const middleware: Middleware = (context) => {
  if (!context.store.getters.hasToken) {
    context.redirect("/admin/auth");
  }
};

export default middleware;
