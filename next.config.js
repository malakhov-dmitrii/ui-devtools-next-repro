const { withSentryConfig } = require("@sentry/nextjs")
const removeImports = require("next-remove-imports")()

const moduleExports = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "pbs.twimg.com",
      "abs.twimg.com",
      "avatars.dicebear.com",
      "cdn.discordapp.com",
    ],
  },

  // Your existing module.exports
}

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: true, // Suppresses all logs

  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = removeImports(
  withSentryConfig(moduleExports, sentryWebpackPluginOptions)
)
