import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildPaths } from "./types/config";

export function buildPlugins(paths: BuildPaths): Array<webpack.WebpackPluginInstance> {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin({
			filename:"css/[name].[hash:8].css",
			chunkFilename:"css/[name].[hash:8].css"
		})
	];
}