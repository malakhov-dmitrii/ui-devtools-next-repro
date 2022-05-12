// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs"

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  // debug: process.env.NODE_ENV !== "production",
  environment: process.env.NODE_ENV,
  release:
    process.env.SENTRY_RELEASE ||
    process.env.NEXT_PUBLIC_SENTRY_RELEASE ||
    "0.0.1",
  enabled: process.env.NODE_ENV === "production",
  dsn:
    SENTRY_DSN ||
    "https://dbcfa9d43e274f709f986f4e3d16b378@o1219370.ingest.sentry.io/6362835",
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
})
