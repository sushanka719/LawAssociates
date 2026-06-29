// Node 24 + tsx 4.22.4 workaround:
// tsx's scoped tsImport() mangles node: protocol imports on Node 24.
// Using --import tsx/esm as a global hook avoids the bug.
// Imports payload's compiled bin directly (no tsx wrapping needed for dist/).
// Usage: node --import tsx/esm run-payload.mjs <migrate:create|migrate|migrate:fresh|...>
import { bin } from './node_modules/payload/dist/bin/index.js'
await bin()
