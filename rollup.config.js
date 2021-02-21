// Rollup accepts ESModule syntax
// Rollup recognizes relative path
export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  }
}
