import { initTRPC } from "@trpc/server";

import { ideas } from "./mocks";

const t = initTRPC.create();

const router = t.router;
const publicProcedure = t.procedure;

export const trpcRouter = router({
  getIdeas: publicProcedure.query(() => {
    return {
      ideas,
    };
  }),
});

export type TrpcRouter = typeof trpcRouter;
