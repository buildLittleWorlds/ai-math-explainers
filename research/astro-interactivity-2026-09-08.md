# Astro options for the ten mathematical plates

Researched September 8, 2026. This is a design and implementation research brief; the Astro site has not been built or deployed.

## Recommendation

Create ten individual pages with a shared layout: milestone and date, the steampunk plate, a short explanation, one optional “Try the idea” activity, and sources. Keep the PNG as the illustration and build each activity as a separate precise SVG/HTML diagram. That lets the illustration retain its character while the interactive geometry is computed accurately and remains accessible.

All ten proposed activities can run locally in the browser on a statically generated Astro site. My recommendation is plain Astro components with small TypeScript scripts initially. A Svelte or React island becomes useful if a particular activity grows into a more complicated stateful interface. These are project recommendations inferred from the documented capabilities below, not built-in Astro mathematics widgets.

## Latest version checked

The official repository lists **astro@7.3.2**, released September 8, 2026, as the latest release. Its changes are maintenance fixes, including MDX script/style handling, development tooling, routing, and sessions. Use this stable version as the starting point; none of the activities below depends on an experimental feature. [Official release](https://github.com/withastro/astro/releases/tag/astro%407.3.2).

## Relevant capabilities

| Capability | Application to this series | Implementation boundary |
|---|---|---|
| Component scripts and event handling | Buttons, sliders, checkboxes, live counts and SVG updates | Astro processes component scripts, including TypeScript and imports. Browser code implements the actual activity. [Scripts](https://docs.astro.build/en/guides/client-side-scripts/) |
| Client islands | A self-contained interactive diagram beside static prose and artwork | A framework component can become interactive with a `client:` directive. [Islands](https://docs.astro.build/en/concepts/islands/) |
| Selective hydration | Defer an activity below the image until readers approach it | `client:visible` loads framework component JavaScript near/in the viewport; `client:load` suits immediately needed controls. These directives apply to imported framework components, not ordinary `.astro` components. [Directives](https://docs.astro.build/en/reference/directives-reference/) |
| File-based/static routing | A stable URL for each of the ten plates | Ten files or one `[slug].astro` template with `getStaticPaths()` can produce ten pages. [Routing](https://docs.astro.build/en/guides/routing/) |
| Image processing | Responsive versions of the large PNGs, appropriate dimensions and alternative text | Astro's `Image`/`Picture` components support optimized image delivery. Keep master files in this workspace's `assets`; import them from source when building, or make explicit source copies. Files placed in `public` are served without Astro processing. [Images](https://docs.astro.build/en/guides/images/) |
| View transitions | Gentle movement between previous/next milestone pages | Optional `ClientRouter` and transition directives; this affects navigation, not the mathematics. Reinitialize page behavior correctly on navigation and clean up listeners. [View transitions](https://docs.astro.build/en/guides/view-transitions/) |
| Actions | Optional future server-saved responses or shared classroom results | Server-side operations need a suitable server deployment. Not required for these ten browser activities. [Actions](https://docs.astro.build/en/guides/actions/) |

Native HTML disclosures and buttons can complement these features. Expandable explanations should remain useful without JavaScript. A custom magnifier/dialog, local progress storage, and mathematical simulations are browser features we would implement, not automatic services supplied by Astro.

## One purposeful interaction per page

### 1. Matrix multiplication — compare the work

Asset: `01-matrix-multiplication.png`.

Offer a “Compare operation counts” button that reveals two rows of 49 and 48 marks, with the inputs and outputs fixed. A second control highlights the one-operation difference and displays “1 fewer multiplication.” Use Astro script event handling and HTML/SVG.

This is an operation-count illustration, not an animation of the actual AlphaEvolve algorithm. Avoid suggesting that a single removable step converts one full algorithm into the other. Keep the specific four-by-four complex-number scope in the explanation.

### 2. Kissing number — inspect the contacts

Asset: `02-kissing-number.png`.

Provide “Show contacts” and “Try a seventh” controls. The first highlights the six central contact points. The second switches to seven equal circles whose centers remain two radii from the center; their overlap is highlighted. A reset returns to the valid six-circle configuration. Use calculated SVG circles and a small Astro script.

The activity teaches the two-dimensional constraint. Keep the eleven-dimensional 592-to-593 record in a separate fact panel; this is not a visualization or reconstruction of that arrangement.

### 3. Convergence — step toward one answer

Asset: `03-convergence.png`.

Use a step slider to reveal a schematic sequence with two readouts: illustrative score and distance to a limiting location. A comparison toggle can show an equally good-score sequence that keeps moving between distinct positions. This makes the distinction between score convergence and point convergence visible. Astro script plus SVG is sufficient; a framework island is optional.

Label both sequences as teaching examples, not numerical runs of Nesterov's method. Do not suggest that nonconvergence remains possible under the theorem's stated hypotheses. Show continuing approach rather than a finite “finished” state.

### 4. Unit distance — rearrange the same seven points

Asset: `04-unit-distance.png`.

Provide “Line” and “Hexagon” presets using the same unit length. Show counted connections and a live total of 6 or 12. Let the reader select a point to highlight all its unit-distance neighbors. Astro script updates an SVG; count unordered pairs once, using a stated numerical tolerance.

The elementary arrangements illustrate why placement matters; they are not the announced counterexample. Preserve exactly seven points in both presets.

### 5. Cycle double cover — switch the loops

Asset: `05-cycle-double-cover.png`.

Three checkboxes control the upper triangle, lower triangle, and outer square. Each edge displays a count of 0, 1, or 2. With all three selected, every count is 2; removing any loop exposes which edges lose coverage. Implement the graph with fixed edge IDs and a route-to-edge mapping in an Astro script.

This is the strongest first prototype: the reader can directly inspect the guarantee. Use text counts and line patterns as well as colors. The square with a diagonal is an example of an eligible bridgeless graph, not a proof for every graph.

### 6. Ramsey colors — try to avoid the triangle

Asset: `06-ramsey-colors.png`.

Let readers select an edge in the five-vertex graph and switch its color. Recompute all ten vertex triples; highlight any monochromatic triangle. “Restore example” returns to teal perimeter/orange diagonals. SVG plus Astro event handling is enough; keyboard-accessible edge buttons must accompany pointer selection.

Crossings do not create vertices. The puzzle illustrates the two-color constraint; it does not reproduce the many-color research construction or establish its growth bound.

### 7. Lattice volume — enlarge the triangle

Asset: `07-lattice-volume.png`.

Use a scale slider centered on the fixed centroid of the triangle with vertices (-1,-1), (2,-1), (-1,2). Display separate counts for strictly interior and boundary lattice points. At scale 1, show one interior point and nine boundary points; at 1.2, the nine former boundary points have entered, for ten interior points. SVG coordinates should be calculated directly, with clear boundary handling.

Keep the origin fixed and distinguish the centroid from an arbitrary interior point. The activity demonstrates the constraint in two dimensions, not the proof in every dimension. The generated plate is illustrative; exact scaling belongs to this calculated interactive companion.

### 8. Riemann bound — reveal what the bound says

Asset: `08-riemann-bound.png`.

Provide “Previous guarantee” and “New guarantee” controls that set an exact CSS/SVG bar width to 41.6% or 67.2%. A “What is the remainder?” disclosure explains that it is not a set of known counterexamples. Display the increase as 25.6 percentage points. A short optional question checks whether this means the hypothesis is 67.2% proved, with explanatory feedback.

Treat the bar as a long-run proportion guarantee. Do not equate even a 100% density statement with ruling out every exception. No random zero positions or fabricated research data are needed.

### 9. Formalization — inspect a dependency

Asset: `09-lean-formalization.png`.

Let readers expand one schematic proof box into smaller justified steps. A “Hide one justification” control marks subsequent dependent steps as unsupported in this toy example. Implement with native disclosures and a small Astro script, or an island if the dependency tree grows.

Explicitly label the activity “Illustrative dependency checker.” It is not Lean running in the browser and does not verify Fermat's Last Theorem. Actual Lean execution would be a separate technical project. The key distinction remains existing proof versus fully explicit checked reasoning.

### 10. Navier–Stokes — approach the boundary

Asset: `10-navier-stokes.png`.

Use a time slider for a clearly labeled toy curve, for example g(t)=t²/(1−t) on 0≤t<1. Show that values can exceed progressively larger thresholds as t approaches 1. Include “Expand vertical scale” and reset controls so readers see that the top of the graph is not a physical ceiling. Astro script and SVG suffice.

Never evaluate at t=1 or present infinity as an observed numeric sample. Identify this as a schematic analogy, not a fluid simulation, the announced construction, or a computed solution of Navier–Stokes. Keep smooth forcing and announcement status in the page explanation.

## Shared page behavior and visual treatment

Use brass-edged buttons and restrained scale markings, with ivory/charcoal/teal/copper carried from the plates into the page. Every control should have a plain-language label and a reset. Keep exact geometry separate from ornamental framing. Avoid auto-playing motion: step controls and sliders let readers work at their own pace.

For each page provide descriptive alternative text, a nearby text explanation, keyboard controls, visible focus, and numeric or patterned alternatives to color. Respect reduced-motion preferences. On small screens stack the image, explanation, and activity vertically. Keep all meaningful text in HTML as well as any lettering embedded in the image.

Start with the cycle-cover page, then Ramsey coloring and lattice scaling. Together they test toggles, direct selection, numeric counts, and sliders without requiring backend infrastructure. After those work well, apply the same layout and interaction conventions to the other seven pages.

## Delivery boundary

This brief researches Astro capabilities and proposes all ten interactions. It does not independently reverify the historical mathematical announcements from the earlier conversation. The ten local PNGs are generated teaching illustrations, not research figures or formal proofs. No Astro dependencies were installed, no pages were built, and nothing was published during this task.
