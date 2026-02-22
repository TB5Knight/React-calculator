# Calculation History Feature — 
Build PlanEach step targets a 5–10 minute review-and-test cycle. The calculator remains fully functional at the end of every step.

## Step 1 — Add history state
Add a `history` array via `useState`. After each calculation, push an entry like `{ expression: "3 + 4", result: 7 }` into it. No UI changes yet 
verify state updates in React DevTools.

## Step 2 — Render a raw history list 
Below the result, render `history.map(...)` as an unstyled `<ul>/<li>` list. Confirm entries appear after each calculation. Don't worry about 
layout yet.

## Step 3 — Add a "Clear History" button
Add a button that calls `setHistory([])`. Verify it empties the list. Keep it unstyled for now.

## Step 4 — Limit history length
Cap the list at the 10 most recent entries (slice on write, or filter on render). Test by doing 12+ calculations and confirming only 10 show.

## Step 5 — Style the history panel
Add CSS to give the history panel a distinct look — a scrollable container, alternating row shading, monospace font for expressions. No logic 
changes.

## Step 6 — Make history entries clickable *(optional)*
Clicking a history entry populates `num1`, `num2`, and the operator back into the inputs. This adds interactivity without touching the core 
calculation logic.

## Step 7 — Persist history to `localStorage`
Initialize `history` from `localStorage` and write to it on every update via `useEffect`. Test by refreshing the page and verifying history 
survives.

---Steps 1–5 are the core feature. Steps 6–7 are enhancements that can be skipped or reordered.
