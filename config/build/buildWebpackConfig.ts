import webpack from "webpack";
import "webpack-dev-server";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import type { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { mode, paths, isDev } = options;

	return {
		mode: mode,
		entry: paths.entry,
		output: {
			filename: "[name].[hash].js",
			path: paths.build,
			clean: true,
		},
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(),
		plugins: buildPlugins(paths),
		devtool: isDev ? "inline-source-map" : false,
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
