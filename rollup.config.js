import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';
import { basename } from 'path';

const isDev = process.env.NODE_ENV === 'development';

export default {
  input: 'src/index.js',
  output: [
  	{ 
  		file: pkg['main'],
  		format: 'cjs'
  	},
  	{ 
  		file: pkg['module'],
  		format: 'esm'
  	},
  	{ 
  		file: pkg['umd:main'],
  		format: 'umd',
  		name: basename(pkg['umd:main']).replace(/\.umd\.js$/, '')
  	}
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    uglify({
    	sourceMap: isDev ? true : false
    })
  ],
  watch: {
  	exclude: 'node_modules/**'
  }
};