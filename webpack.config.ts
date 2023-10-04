import path from "path";
import webpack from "webpack";
import { buildWebpackConfig, BuildOptions } from "./config/webpack";
import { BuildEnv } from "./config/webpack/types";

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const options: BuildOptions = {
    mode,
    paths: {
      entry: path.resolve(__dirname, "src", "index.ts"),
      build: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "public", "index.html"),
    },
    isDev,
    port: PORT,
  };

  const config: webpack.Configuration = buildWebpackConfig(options);

  return config;
};
