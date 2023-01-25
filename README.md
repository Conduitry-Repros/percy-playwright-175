# Repro

https://github.com/percy/percy-playwright/issues/175

The asset discovery browser attempts to resolve assets relative to whatever the current reported URL of the page is, which may lead to failures when the HTML5 History API has been used for client-side navigations.

## Instructions

1. Start the server on port 8000 (e.g. `cd webroot; python3 -m http.server`)
1. Install deps (`npm install` in another console)
1. Run test (`npx percy exec --debug -- npx playwright test`)

Observe that the asset discovery browser attempts to load `http://localhost:8000/styles.css` and fails.
