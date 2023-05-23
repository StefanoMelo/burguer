import { Router } from "express";

const routes = new Router();

routes.get("/", (request, response) => {
  return response.json({ menssage: "Hello, world!" });
});

export default routes;
