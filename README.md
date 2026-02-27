# @modules/api-ui

This module provides the API documentation interface for the Nexical Ecosystem using Scalar.

## Features

- **Scalar API Reference**: Interactive documentation for the `core-api`.
- **Theme Sync**: Automatically synchronizes with the Shell's light/dark mode.
- **Registry Integration**: Injects the documentation link into the admin sidebar.

## Development

### Scripts

- `npm run lint`: Run ESLint.
- `npm run format`: Format code with Prettier.
- `npm run test`: Run unit tests.

### Configuration

The module is configured via `ui.yaml`, which defines:

- The `/admin/api/docs` route.
- Sidebar registration in the `sidebar-nav` zone.
