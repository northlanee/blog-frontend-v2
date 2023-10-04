import webpack from "webpack";

export const getResolvers = (): webpack.ResolveOptions => {
  return {
    extensions: [".ts", ",tsx", ".js", ".jsx"],
  };
};
