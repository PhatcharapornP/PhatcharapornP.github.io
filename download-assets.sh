#!/bin/bash
# Run this in your repo folder, next to index.html.
# Downloads the images/GIFs currently used on your Wix portfolio
# into a local ./assets folder, matching the filenames index.html expects.

mkdir -p assets

# --- Profile & icons ---
curl -L -o assets/avatar.jpg        "https://static.wixstatic.com/media/b2af35_f143429720db4c4ba7372ec5aea5a565~mv2.jpg"
curl -L -o assets/linkedin.png      "https://static.wixstatic.com/media/b2af35_27a56b582763434a8396bbb1a135d0e7~mv2.png"

# --- Software icons ---
curl -L -o assets/unity.png         "https://static.wixstatic.com/media/b2af35_f50006677ff447c391119aa17f928ee3~mv2.png"
curl -L -o assets/sourcetree.png    "https://static.wixstatic.com/media/b2af35_0dcbb2a6488d4b099bbbfd9fad1ddb58~mv2.png"
curl -L -o assets/rider.png         "https://static.wixstatic.com/media/b2af35_3a5490fa95894f22b3971fa51864034d~mv2.png"
curl -L -o assets/visual-studio.png "https://static.wixstatic.com/media/b2af35_0c8503f1ab50492695256a573637d0b8~mv2.png"
curl -L -o assets/photoshop.png     "https://static.wixstatic.com/media/b2af35_7b69e0ac513342d9840c5e2a0ef8ca08~mv2_d_2000_1967_s_2.png"
curl -L -o assets/wwise.png         "https://static.wixstatic.com/media/b2af35_cc4620d868d44a36ac0be4e879f575e5~mv2.png"

# --- Project GIFs (Other Projects section) ---
curl -L -o assets/randomgrid-banner.gif   "https://static.wixstatic.com/media/b2af35_948d26b8c04a45508949d8a91054f5c8~mv2.gif"
curl -L -o assets/randomgrid-gameplay.gif "https://static.wixstatic.com/media/b2af35_472eacdc3c11493a8b5ff2cda5634dd7~mv2.gif"
curl -L -o assets/centipede.gif           "https://static.wixstatic.com/media/b2af35_74fc83c705e84b1b9d7395740337c562~mv2.gif"
curl -L -o assets/fantasy-snake.gif       "https://static.wixstatic.com/media/b2af35_a0824baf820e4ae0a3a5d1d84c00a8d7~mv2.gif"

# Note: Silent Night uses YouTube embeds — no files needed for those.

echo "Done. All assets saved to ./assets/"
