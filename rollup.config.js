export default {
	input: 'dist/index.js',
	output: {
		file: 'dist/bundles/npm-module-seed.umd.js',
		sourcemap: false,
		format: 'umd',
		name: 'ng.npm-module-seed',
		globals: {
			'@angular/core': 'ng.core',
			'@angular/common': 'ng.common'
		}
	}
}
