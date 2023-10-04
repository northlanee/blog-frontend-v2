import webpack from "webpack";
import { BuildOptions } from "./types";
import { getPlugins } from "./plugins";
import { getLoaders } from "./loaders";
import { getResolvers } from "./resolvers";
import { getDevServer } from "./devServer";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { mode, paths, isDev } = options;
  const { entry, build } = paths;

  return {
    mode,
    entry,
    output: {
      path: build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: getPlugins(paths),
    module: {
      rules: getLoaders(options),
    },
    resolve: getResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? getDevServer(options) : undefined,
  };
};
