import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

const libName = 'bundle';

export default {
  input: 'src/index.js',
  output: [
  	{ file: 'dist/' + libName + '.js', format: 'cjs'},
  	{ file: 'dist/' + libName + '.m.js', format: 'esm'},
  	{ file: 'dist/' + libName + '.umd.js', format: 'umd', name: libName}
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    uglify()
  ],
  watch: {
  	exclude: 'node_modules/**'
  }
};