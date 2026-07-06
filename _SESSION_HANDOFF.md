# Portfolio Redesign — Session Handoff

**Checkpoint #1** — 2026-07-06 · **Status:** core redesign shipped and functional; several content/asset decisions still open, listed below.

---

## Goal

Redesign `Phatcharaporn Phayakaniti`'s personal portfolio (`D:\Works\Documents\AI\Port\`) away from the original Wix site (`https://tanphayakaniti.wixsite.com/portforlio`) into a standalone, no-framework, multi-page static site — one dedicated page per project (mirroring Wix's structure), sorted by time, with a visual identity fitting a game/gameplay programmer.

## What's DONE

### Structure — 11 pages total
- `index.html` — landing page, work experience + other projects (sorted reverse-chronological) + about
- `style.css` — single shared stylesheet, all pages link to it
- `theme.js` — shared light/dark toggle script (localStorage-persisted, no flash-of-wrong-theme)
- `projects/` — 10 dedicated pages: `airship.html`, `ais5g.html`, `replace.html`, `recall.html`, `unreleased-fps-puzzle.html`, `league-of-bomb.html`, `silent-night.html`, `random-grid.html`, `centipede-game.html`, `fantasy-rpg-snake.html`

### Visual identity
- **Direction:** The Division 1-led tactical HUD / data-terminal look (dark neutral bg, single orange accent `--accent`, cyan secondary `--cyan`), chosen over Witcher 3/RE4 (tonal mismatch) and Cyberpunk-heavy (generic-AI neon risk) after an advisor review. One restrained Cyberpunk touch: a brief glitch-flicker on project-title hover (`.glitch` class), nothing looping/neon.
- **Fonts:** `Rajdhani` (bold uppercase headers), `IBM Plex Mono` (data readouts/labels), `Public Sans` (body).
- **Signature motif:** corner-bracket `.panel` / `.hero-media` framing (small orange L-brackets on two opposite corners).
- **Light/dark theme toggle** — button top-right on every page, `data-theme` attribute on `<html>`, works both directions, verified on desktop + mobile.
- **Media pattern:** `.hero-media` (one big featured image/gif per project, corner-bracketed) + smaller `.media-grid` for supporting shots. Reusable `.icon-row`/`.icon-chip` component built but **not yet populated** (see Open Items).
- Mobile-checked: no horizontal overflow anywhere, topbar collapses cleanly (`crumb-current` hides under 560px).

### Content fixes applied this session
- Avatar was wrong (a game screenshot mislabeled as headshot on the Wix source) — replaced with the real photo (`D:\Works\Documents\Resume\SquareRoundBorder.png` → `assets/avatar.png`); `download-assets.sh` fixed so a re-run won't overwrite it.
- Work experience entries now sorted reverse-chronologically.
- Employer attribution corrected and made consistent everywhere (index + project pages + About section):
  - **RingZero Game Studio** → City of Games, Unreleased FPS puzzle game
  - **Illusion Connect Thailand** → Recall, Replace, AIS 5G
  - **Revolution Industry** → Airship: Kingdom Adrift (verified against official key-art credits)
  - **Nanuq Studio** → League of Bomb (current job). **User said a second Nanuq Studio project is coming later — League of Bomb must stay the highlighted one when that's added.**
- Date/duration mismatches found and fixed: AIS 5G was "2022–24" on index (a 2-3yr range) despite a real ~1.5-month duration — now just `2024`, on both index and its own project page (the eyebrow date had drifted independently — worth double-checking this class of bug on any future edits: **index date and project-page eyebrow date must be updated together**).
- League of Bomb kept **capability-level only** (no internal class names/architecture) per an earlier advisor review flagging NDA/IP risk on a current employer's commercial game — this was a deliberate, discussed decision, not an oversight.

### Tooling
- Live preview server running via `.claude/launch.json` (`npx serve . -l 5500`), used throughout via the Claude Preview MCP tools.
- Installed 13 third-party design-taste skills via `npx skills add` into `.agents/skills/` (brandkit, high-end-visual-design, minimalist-ui, redesign-existing-projects, etc.) — **not active in-session**, needs a Claude Code restart to load.
- Created a custom `advisor` subagent at `~/.claude/agents/advisor.md` (Opus-pinned, for second opinions) — **also not active in-session yet**, same restart requirement. Used `general-purpose` + `model: opus` as a working substitute twice (portfolio merge plan, multi-page site plan) — both transcripts are in this conversation if you need to re-read the reasoning.

## Open items — nothing here should be guessed, all need the user

1. **Exact single year (or tight range) for Replace (~1.5mo) and Recall (~4mo)** — both currently still share the placeholder "2021–22" inherited from before the audit. Same class of bug as the AIS5G one already fixed.
2. **Six ambiguous assets in `D:\Works\Documents\Resume\Port_resources_2024\AKA\`** (Airship), raised but not yet answered:
   - `50b473b776...png` — fleet-list UI with hand-drawn yellow dev-annotation boxes — use as-is or skip?
   - `4d1940c9338d...png` — cargo/warehouse transfer UI — guessed "supply system overhaul," needs confirm
   - `56933143823194...png` — world map with quest panels — guessed "guide-location system," needs confirm
   - `54256deedb...gif` — warehouse facility upgrade screen — same supply-system bucket, or separate?
   - `8d5bea26a9...gif` — "STORYLINE PROGRESS" Act I-IV tree — doesn't map to any of the 4 listed Airship contributions at all; what is this and where does it go?
   - `ShipsAttackingLopp.gif` — night ship battle w/ green trail — possibly a better version of the existing ship-AI obstacle-avoidance slot?
   - Bonus: `359427610_..._n.jpg` is a "VOTE NOW — People's Choice Award" promo (Game Connection x ChinaJoy Indie Game Awards 2023) — this is a **fact** (an award nomination), not just an image. Worth adding as copy, not only media, if confirmed.
3. **`D:\Works\Documents\Resume\Port_resources_2024\` — 7 of 8 project asset folders not yet reviewed at all**: `AIS5GPlay`, `CityOfGames`, `LOB`, `Recall`, `Replace`, `SN` (Silent Night), `Unreleased_Puzzle`. Only `AKA` has been gone through (see above, still has open questions). **Process one folder at a time, raise anything ambiguous before using it** — this was the user's explicit instruction and the AKA pass already caught real problems (e.g. would have shipped a dev-QA screenshot with visible annotation boxes as if it were clean marketing art).
4. **Icon placement** — `.icon-row`/`.icon-chip` CSS exists and works (see About section's Software row for a live example) but hasn't been applied to any project page yet. The Still/Hover card-art pairs in most `Port_resources_2024` folders (e.g. `AKA_Still.png`/`AKA_Hover.png`) are candidates — decide during the folder-by-folder asset review whether they become project-page icons, index thumbnails, or get skipped.
5. **About section's "2 years building AR apps" line** — now attributed to Illusion Connect Thailand, but never independently verified as the real total tenure (vs. the sum of the two named project durations, ~5.5mo). Not flagged as wrong, just unverified.

## Useful context for next session
- Local dev server: `mcp__Claude_Preview__preview_start` with name `port-portfolio` (config already in `.claude/launch.json`), reuses if already running.
- Wix source for cross-checking facts: `https://tanphayakaniti.wixsite.com/portforlio` (+ `/aka`, `/ais5g`, `/replace`, `/recall`, `/silentnight`, `/randomgrid`, `/centipedegame`, `/tactoegame`, `/unreleasedfpspuzzlegame`). Note: `WebFetch`'s AI summarization **cannot be trusted to visually identify images** — it misidentified a game screenshot as the profile headshot earlier. For anything image-identity-sensitive, extract and actually view the file (Python/Pillow was installed this session for frame-extracting oversized GIFs — see AKA folder handling above) rather than trusting a text-fetch description.
- The user prefers being asked about missing/ambiguous assets one at a time rather than a batched multi-select form — they dismissed an `AskUserQuestion` form earlier and asked for plain-text questions instead.
