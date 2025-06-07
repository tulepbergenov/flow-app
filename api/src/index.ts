import { createExpressMiddleware } from "@trpc/server/adapters/express";
import express from "express";

import { trpcRouter } from "./trpc";

const PORT = 3010;

const app = express();

app.use(
  "/trpc",
  createExpressMiddleware({
    router: trpcRouter,
  }),
);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
