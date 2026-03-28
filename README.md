# YouTube Shorts Bulk - 450 Videos in 9 Phases (India Edition)

Bulk animated video generator for YouTube Shorts & Instagram Reels.
**India-focused content** with Indian English female voice (en-IN-NeerjaNeural).

## Plan: 15 Categories × 30 Videos = 450 Videos

| Phase | Categories | Videos | Status |
|-------|-----------|--------|--------|
| **Phase 1** | Animals (30) + Birds (20) | 50 | ✅ Ready |
| Phase 2 | Birds (10) + Fruits (30) + Vegetables (10) | 50 | Pending |
| Phase 3 | Vegetables (20) + Flowers (30) | 50 | Pending |
| Phase 4 | Sea Creatures (30) + Insects (20) | 50 | Pending |
| Phase 5 | Insects (10) + Dinosaurs (30) + Instruments (10) | 50 | Pending |
| Phase 6 | Instruments (20) + Vehicles (30) | 50 | Pending |
| Phase 7 | Countries (30) + Sports (20) | 50 | Pending |
| Phase 8 | Sports (10) + Food (30) + Colors (10) | 50 | Pending |
| Phase 9 | Colors (20) + Space (30) | 50 | Pending |

## Video Specs
- **1080×1920** portrait (Shorts/Reels)
- **700px** giant letters, **450px** emojis, **130px** word text
- Spring animations, glow effects, floating particles
- **Indian English** female voice (edge-tts)
- **96 seconds** per video (30 items × 3s + intro + outro)

## Setup (GPU Machine - Windows 11)

```powershell
git clone https://github.com/jhasaurav316/youtube-shorts-bulk.git
cd youtube-shorts-bulk
npm install
pip install edge-tts
```

## Run Phase 1 (50 videos)

```powershell
# Step 1: Generate audio (edge-tts) - ~10 min
.\generate-audio-phase1.ps1

# Step 2: Register compositions
node animal-names/register-compositions.js
node bird-names/register-compositions.js

# Step 3: Render all 50 videos - ~2.5 hrs
.\render-phase1.ps1
```

## Output
```
out/
├── animal-names/          # 30 animal videos
│   ├── animals-indian-wildlife-1.mp4
│   └── ...
└── bird-names/            # 20 bird videos
    ├── birds-indian-birds-1.mp4
    └── ...
```
