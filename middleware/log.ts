// you should return your logic if it is promise

import { Middleware } from "@nuxt/types";

const middleware: Middleware = (context) => {
  console.log("[the log middlware is running]");
  return Promise.resolve();
};

export default middleware;
