import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { string } from 'rollup-plugin-string';

// Rollup accepts ESModule syntax
// Rollup recognizes relative path
const pathName = 'dist/bundle';
const production = process.env.NODE_ENV === 'production'; // Returns true if development

const output = [
  {
    file: `${pathName}.cjs.js`,
    format: 'cjs',
  },
  {
    file: `${pathName}.esm.js`,
    format: 'esm',
  },
  {
    name: 'RandomComponent',
    file: `${pathName}.umd.js`,
    format: 'umd',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
];

export default async () => ({
  input: 'lib/index.js',
  output,
  plugins: [
    nodeResolve(),
    babel({
      exclude: /node_modules/,
    }),
    string({
      include: '**/*.css',
    }),
    // production && (await import('rollup-plugin-terser')).terser(),
  ],
  external: ['react', 'react-dom'],
});
