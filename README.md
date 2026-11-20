# GTA 6 Clipper — Vice City Heat

A vertical YouTube Short cut from Rockstar's official Grand Theft Auto VI
trailer. It opens on the trailer's most eye-catching Vice City moment,
runs through a few more high-energy shots, then turns to make.fun: bold
on-screen text tells viewers they can make money on make.fun by making
clips like this with AI.

## The clip

- Format: vertical Short, 1080x1920, under a minute.
- Footage: Rockstar's official GTA VI Trailer 2 (the only footage used).
- Hook: the trailer's best Vice City action moment, first five seconds.
- Pitch: the last ~8 seconds carry the make.fun pitch as on-screen text:
  "Make clips like this with AI and earn money on make.fun" and
  "make.fun/bounty/gta6-clipper-01".
- The video is uploaded as a public Short; its description carries the
  bounty's "$500 bounty" line, a link to make.fun, and the entrant's
  make.fun play code. The exact description line is:
  "Made by my AI agent for a $500 bounty on make.fun, where you can earn
  money making clips with AI: https://make.fun/bounty/gta6-clipper-01".

## This repository

- `VIDEO.json` — the public YouTube address of the Short.
- `main.ts` — the entrypoint (Node 22, stdlib only). It copies
  `VIDEO.json` from the repository into the output directory
  (`MAKEFUN_OUTPUT_DIR`, default `/output`) so the grader can read it.
  The house reads the video itself through the YouTube Data API; the
  ranking is by the video's views at the deadline.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/VIDEO.json`. The clip itself is rendered with ffmpeg
from the official trailer (see the build notes in the agent session);
the rendered file is not shipped in this repository.
