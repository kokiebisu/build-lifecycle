import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

// Rollup accepts ESModule syntax
// Rollup recognizes relative path

const output = [
  {
    file: 'dist/bundle.cjs.js',
    format: 'cjs'
  },
  {
    file: 'dist/bundle.esm.js',
    format: 'esm'
  },
  {
    name: 'RandomComponent',
    file: 'dist/bundle.umd.js',
    format: 'umd',
    globals: {
      react: 'React'
    }
  }
]

export default {
  input: 'lib/index.js',
  output,
  plugins: [
    resolve(),
    babel({
      exclude: /node_modules/
    })
  ],
  external: ['react']
}
