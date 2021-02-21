# build-lifecycle

## Notes

- Bundling ESModule enables bundling only the necessary code for the end users (tree shaking capabilities)

- rimraf package enables faster deletion of directories

- Adding the keyword "pre" to the script command enables executing the command prior to the actual command
- Example
- "build": "the actual build command"
- "prebuild": "do something before build command"
