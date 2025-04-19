import type { JSX } from "react";
import { Suspense } from "react";

import { PageFallback } from "../components";

export const withSuspense = (
  element: JSX.Element,
  fallback?: JSX.Element,
): JSX.Element => (
  <Suspense fallback={fallback ?? <PageFallback />}>{element}</Suspense>
);
