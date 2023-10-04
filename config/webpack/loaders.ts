import webpack from "webpack";

export const getLoaders = (): webpack.RuleSetRule[] => {
  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          ["@babel/preset-typescript", { targets: "defaults" }],
          ["@babel/preset-env"],
        ],
        plugins: ["@babel/plugin-proposal-class-properties"],
      },
    },
  };

  return [babelLoader];
};
