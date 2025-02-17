# Development Guide

This document contains instructions for developing and maintaining `create-lofi-app`.

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/create-lofi-app.git
cd create-lofi-app
```

2. Install dependencies:
```bash
npm install
```

3. Make your changes to the source code in `src/`

4. Build and test locally:
```bash
npm run build
npm link
npx create-lofi-app test-app
```

## Testing

Run the test suite:
```bash
npm test
```

## Publishing to npm

### Preparing a Release

1. Update version in `package.json`:
```bash
npm version patch  # for bug fixes
npm version minor  # for new features
npm version major  # for breaking changes
```

This will:
- Update the version in package.json
- Create a git tag
- Create a version commit

### Building and Publishing

1. Build the package:
```bash
npm run build
```

2. Test the build locally (recommended):
```bash
npm link
npx create-lofi-app test-app
```

3. Publish to npm:
```bash
npm login  # if not already logged in
npm publish
```

4. Push the release to GitHub:
```bash
git push --follow-tags
```

## Project Structure

```
create-lofi-app/
├── src/              # Source code for the CLI
├── templates/        # Project templates
│   └── basic-tw/    # Basic template with Tailwind
├── tests/           # Test files
└── package.json     # Project configuration
```

## Template Development

When modifying the templates:

1. Make changes in `templates/` directory
2. Test locally using `npm link`
3. Verify the template works with:
   ```bash
   npx create-lofi-app test-app
   cd test-app
   npm install
   npm run dev
   ```

## Common Issues

- If `npm link` fails, try removing the global link first:
  ```bash
  npm unlink -g create-lofi-app
  ```

- If you get permission errors when publishing:
  ```bash
  npm whoami  # verify you're logged in
  npm access ls-collaborators create-lofi-app  # check access rights
  ```

## Build Configuration

### tsup

The build process uses tsup to bundle the CLI. This is configured in `tsup.config.ts`:

```ts
export default defineConfig({
  entry: ['src/main.ts'],
  format: ['cjs', 'esm'],  // Build both CommonJS and ES Modules
  dts: true,               // Generate TypeScript declarations
  clean: true,             // Clean dist folder before build
  splitting: false,        // Don't split chunks
  sourcemap: true,         // Generate sourcemaps
  copyFiles: {
    'templates': 'dist/templates'  // Copy template files to dist
  }
})
```

Important `package.json` fields for publishing:
```json
{
  "main": "dist/main.js",        // CommonJS entry
  "module": "dist/main.mjs",     // ES Module entry
  "types": "dist/main.d.ts",     // TypeScript types
  "files": [                     // Files to include in npm package
    "dist",
    "templates"
  ]
}
```

Make sure to:
- Test both CJS and ESM builds
- Verify template files are copied correctly
- Check TypeScript declarations are generated
- Ensure sourcemaps are working 