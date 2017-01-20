import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import memory from 'rollup-plugin-memory';

export default {
	exports: 'named',
	useStrict: false,
	plugins: [
		memory({
			path: 'src/bundle',
			contents: "export * from './index';"
		}),
		nodeResolve({
			main: true
		}),
		babel({
			"babelrc": false,
			"presets": [
				["es2015", { "loose": true, "modules": false }],
				"react"
			],
			"plugins": [
				"external-helpers"
			],
			"sourceMap": true,
		})
	]
};
