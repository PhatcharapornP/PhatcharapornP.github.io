# Portfolio Redesign — Session Handoff

> **Latest checkpoint is #3 (below). Read it first.** Earlier checkpoints follow for history.

> **IMPORTANT — live repo location changed.** All work now happens in the GitHub Pages repo:
> `C:\Users\ADMIN\Documents\GitHub\PhatcharapornP.github.io\` (github.com/PhatcharapornP/PhatcharapornP.github.io, branch `main`, live at https://phatcharapornp.github.io/).
> The old `D:\Works\Documents\AI\Port\` copy is **stale** (frozen at Checkpoint #1). Edit only the GitHub repo.
> Nothing is committed/staged/pushed — the user reviews in **GitHub Desktop first**. Do not commit unless asked.

---

## Checkpoint #3 — 2026-07-07 · Status: full Wix narrative+info cross-check of sub-pages DONE

### The task this session
Went page-by-page comparing each project sub-page against its Wix source for **both info accuracy AND narrative direction** (the earlier passes only checked facts). Wix is written first-person and often has a personal throughline (learning/ownership/growth) the terse HUD bullets had flattened. Method that works: WebFetch the specific `…/portforlio/<slug>` URL; the summarizer sometimes compresses detail, so for anything the user flags, trust the user (they're the source) or re-fetch with a targeted verbatim prompt.

### New reusable pattern
Added a **briefing-panel Introduction** block: `.panel-label` (`>> INTRODUCTION`, mono/accent) + `.panel-intro` (first-person narrative, `--ink-soft`, hairline divider before the specs) live **inside the `.panel`**, above `.specs`. CSS is in `style.css` right after `.spec .v` (`.panel-label`, `.panel-intro`, `.panel-intro + .specs`). Every sub-page reviewed got one carrying the Wix narrative; feature bullets stay terse below.

### Per-page results (all applied + verified in preview)
- **Airship (Kingdoms Adrift)** — renamed **Kingdom → Kingdoms** site-wide (title/meta/breadcrumb/h1/index/About/alts); added Introduction (challenging project, learned from seniors, new territory). Wix `/aka` facts confirmed.
- **Unreleased FPS** — Introduction (rueful "never realized / revision after revision" + grateful); removed co-op split-screen from *her work* (it's a planned game feature) and dropped invented "hazard scenarios."
- **Replace** — Introduction (built from the ground up, shipped it); removed unsourced "shared with the Recall codebase" IStates claim.
- **Recall** — Introduction (inherited an unmaintainable app and re-architected it) — this was the biggest gap; reframes IStates/Bundles/Deeplink as outputs of a rework. Closing line: "What follows are the systems that came out of it."
- **AIS 5G** — renamed to **"AIS 5G Play AR"** (h1/title/index card); **"VR companion" → "VR feature"** everywhere (user: don't imply a companion system); added Introduction (ownership) + a **Media section** with new video `YS_E4HRQnyk`. Duration ~1.5mo **confirmed** vs Wix (handoff worry closed).
- **Silent Night** — Introduction (first-time FSM learning story: messy if-script → couldn't see AI state); embedded the **Animator-Controller FSM diagram** (`assets/silent-night/ai-fsm-animator.png`, from `D:\…\Port_resources_2024\SN\`) under AI & systems; **Progression** section = all 7 playlist videos sorted **oldest→newest by capture date** building to the Alpha hero; **Screenshots** section = 4 optimized shots (`assets/silent-night/*.jpg`, from `D:\…\Resume\assets\screenshot\`); restored "senior-year" (user is the source).
- **Random Grid** — Introduction (casual "really small but so much fun"); Systems bullet corrected to **"Tweakable parameters — game rules, board, difficulty adjustable"** (not auto-changes on randomise).
- **Centipede** — added **Gameplay** section; fixed leader nuance ("next segment becomes the new head") and added the missing **"destroy obstacles freely, whenever they want"** mechanic.
- **Fantasy RPG Snake** — added **Gameplay** section with the missing **party-leader-switch/rotate** and **no-win-state/endless** mechanics; enriched Systems with the **collision-callback interface** (leader collision → collect hero or start battle) and runtime-tweakable data container.
- **City of Games — REMOVED** from the site entirely (user: "doesn't represent anything useful"). Deleted the index work card; RingZero employment stays via the Unreleased FPS card + About row. Historical mentions remain in this doc only.

### Repo hygiene
`.gitignore` added; **`.claude/`, `.agents/`, `skills-lock.json` untracked** (`git rm --cached`) — still on disk so preview works, but excluded from the published repo.

### Resolved from earlier checkpoints
Kingdoms spelling ✅ · AIS 5G duration ✅ · Replace/Recall now have Introductions (dates still "2021–22", see below).

### Open items
1. **Index page — still TODO (user flagged next).** The index cards weren't re-aligned to the sub-page narrative/info fixes this session. Some index blurbs I originally invented may still be off (e.g. Unreleased FPS "Puzzle and gameplay mechanics"). Cross-check each index card against its now-corrected sub-page.
2. **Silent Night eyebrow year** — says "2016–17" but dev videos are Oct 2017 and screenshots May 2018 → likely **2017–18**. User confirmed it's their senior-year uni project but hasn't given the calendar year. Ask, then set eyebrow + index card together.
3. **Two Silent Night video labels are guesses** — `V99ZG1Wmzb8` and `0-Vis_DUdGc` labelled "Dev build (Oct …)"; couldn't watch them. User to rename if they know.
4. **More Silent Night screenshots available** — 7 unused in `D:\…\Resume\assets\screenshot\` (`scene1.2`, `scene2.2`–`2.6`, `tutorial 2`); used 4 for variety. Can add/swap.
5. **League of Bomb** — not reviewed (current job, no public Wix page; keep capability-only per NDA note).
6. **AIS 5G title option** — h1 now "AIS 5G Play AR" per user; fine.
7. Carried over: Replace/Recall exact year; the un-reviewed `Port_resources_2024` asset folders; the AKA ambiguous assets / People's Choice Award copy; the "2 years building AR apps" tenure line.

### Preview gotcha (important)
A wedged dev-server instance can make a page render **white / unstyled** and make `preview_screenshot` time out, even though the served DOM/CSS is correct (getComputedStyle/snapshot still work). Fix: **`preview_stop` then `preview_start`** to get a fresh instance, then hard-refresh the panel. Don't chase phantom CSS bugs — check for this first. Also: external `static.wixstatic.com` images are `loading="lazy"` and below the fold, so they don't block; they weren't the cause.

---

## Checkpoint #2 — 2026-07-07 · Status: Division HUD polish pass + Wix fact-check underway

### What this session did
- **Index work cards redesigned** into the Division tactical-HUD data-terminal look: near-black bg with lifted cards, brightened borders + drop shadows, hatched header bands, big white Rajdhani **year numerals**, mono `// company` labels, and status badges (`.st-live` pulsing orange, `.st-shipped` cyan, `.st-archive` dim). New color vars in `style.css` (`--bg:#050608`, `--accent:#E8752E`, `--cyan:#4FD1D9`, etc.; light theme retuned too).
- **Duration now shown under the year** on each index card (`.entry-when` stacked column, `.entry-dur` in cyan mono). Values pulled from sub-pages: LoB "ongoing", Airship "1 yr 9 mo", AIS 5G "~1.5 mo", Replace "~1.5 mo", Recall "~4 mo", Unreleased FPS "6–7 mo", Silent Night "10 mo", Centipede "~4 hr/day", Fantasy Snake "4–6 hr/day". City of Games = year only (no sub-page).
- **Multi-topic projects → bullet lists** on index (`ul.entry-points`, `>` orange markers). `.entry-label` = tiny `>> WHAT I WORKED ON` mono header. Note: `.entry p strong` toned to **font-weight 400 on index only** (it was fighting the title); sub-page `strong` left bold — that hierarchy works there.
- **Videos embedded:** Replace hero `youtube.com/embed/LvGQOz7yZc0`; Recall hero `JnMbTaRmzvA` + grid `-SfMCAkNXLY`.
- **Replace sub-page media gap fixed:** `.media-grid` switched from `display:grid` to CSS masonry (`column-count:2; column-gap` + `break-inside:avoid`, collapses to 1 col <560px). Fixed the void that grid left beside mixed-aspect media.
- **Order:** Unreleased FPS pulled **above** City of Games. Gameplay topic moved to top within each project's work list.
- **Software row:** added **Plastic SCM** and **Photon Quantum** as text-only chips (`.icon-chip--text`, no logos — user said skip logos; a Quantum-logo download earlier grabbed the wrong "33 Immortals" image).
- **About section rebuilt:** work history is now a scannable `.xp-list` (company / role / duration rows) instead of a wall of text; `.lang-list` for Speaking/Writing/Reading.
- **`theme.js`** now also injects a `.to-top` back-to-top button (shows after scrollY>600) alongside theme toggle + email copy-to-clipboard.
- **League of Bomb** Role/Team filled (Game Programmer, ~8–17 people) → **zero TBD placeholders remain site-wide.**

### Wix fact-check — Airship (/aka) DONE, verified against source
Cross-checked `projects/airship.html` against `https://tanphayakaniti.wixsite.com/portforlio/aka` (WebFetch the **specific sub-page URL** works; the SPA landing page returns thin content). Corrected 8 compressed/invented details:
- Guide-location = a **designer tool** (not player help); achievements are **data-driven from an achievement table**; supply rework = **fuel + crew**; Cruising **also usable as a battle skill**; auto-pilot = **on-screen target-location info**; Ship AI obstacles now include **other ships**; CI/CD reworded to the true story ("joined as CI/CD was being set up — added per-branch project settings for multi-purpose builds"); QoL split into all 4 source items.
- Verified specs: Role "Game Programmer", Team "~14" (Wix: "Roughly 14"), Duration "1y 9mo", Unity. Shipped Steam/GOG/Epic with Revolution Industry.

### Open items for next session
1. **Continue the Wix cross-check** — only /aka is done. Remaining sub-pages to verify against `https://tanphayakaniti.wixsite.com/portforlio/<slug>`: recall, replace, ais5g, unreleased-fps-puzzle, silent-night, random-grid, centipede, city-of-games. User signalled a sequence ("compare this one **1st**") — ask which is next, or offer to proceed down the list.
2. **"Kingdom" vs "Kingdoms" naming** — Steam + Wix both say **"Airship: Kingdom*s* Adrift"** (plural); every page here says singular "Kingdom". Needs a site-wide spelling decision (title, `<title>`, breadcrumb, meta, index card). **User has NOT decided yet.**
3. **Two invented index leads still need confirmation** — I wrote these, they're not sourced: City of Games "Gameplay features as junior programmer" and Unreleased FPS "Puzzle and gameplay mechanics". Verify against Wix or ask.
4. **AIS 5G "~1.5 months"** may be a copy-paste artifact from Replace (both say ~1.5mo) — worth double-checking during the ais5g cross-check.
5. Carried over from Checkpoint #1 and still open: exact single year for Replace/Recall; the 7 un-reviewed `Port_resources_2024` asset folders; the ambiguous AKA assets (dev-annotation screenshot, storyline-progress tree, People's Choice Award promo → could be **copy**, not just an image); the "2 years building AR apps" tenure line (unverified).

### Tooling notes
- Preview: `mcp__Claude_Preview__preview_start` name `port-portfolio` (port 5500, config in `.claude/launch.json`).
- Wix cross-check method that works: WebFetch the **project sub-page URL directly**, not the landing SPA.
- User prefers **plain-text questions one at a time**, not batched `AskUserQuestion` forms.

---

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
