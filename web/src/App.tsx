import { css } from "@emotion/react";

import { Providers } from "./app/providers";

export const App = () => {
  return (
    <Providers>
      <main
        css={css`
          flex: 1 1 auto;
        `}
      >
        <section>
          <h1>Hello World</h1>
        </section>
      </main>
    </Providers>
  );
};
