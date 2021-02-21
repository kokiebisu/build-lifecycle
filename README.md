# build-lifecycle

## Notes

### ES Module vs CommonJS Module

- Bundling ESModule enables bundling only the necessary code for the end users (tree shaking capabilities)

### Benefit of rimraf

- rimraf package enables faster deletion of directories

### "Pre" command

- Adding the keyword "pre" to the script command enables executing the command prior to the actual command
- Example
- "build": "the actual build command"
- "prebuild": "do something before build command"

- Peer dependencies are special dependencies in which the user will have to manually install on their own. It must references in the 'external' field in rollup config

### Minimizing the bundle size

#### Uglify

- Used to be the standard but not good because it doesn't work with ES6 syntax

#### Terser

- Newer plugin which can be used with ES6 syntax

### Main field in package.json

- Since npm relies on commonjs syntax, the main field needs to point to cjs file
- Commonjs is a fallback (last standpoint) since we are in the npm ecosystem

### Module field

- Specify the ESModule bundle
- When the end user is using webpack to bundle, it will take the es module file allowing tree shaking

### sideEffects field

- Tells webpack it is safe to use the es module file

### Peer dependency

- User will get a warning if they don't include the specified package (and version)
