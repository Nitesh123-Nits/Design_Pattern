#!/usr/bin/env python3
"""
strip_emojis_uml.py
Removes emojis and UML diagram sections from all HTML files.
"""
import os
import re

ROOT = r"c:\Users\nites\Downloads\Design Pattern"

# Regex to match common emoji Unicode ranges
EMOJI_PATTERN = re.compile(
    "["
    u"\U0001F300-\U0001F9FF"   # misc symbols, emoticons, transport, etc.
    u"\U0001FA00-\U0001FA6F"   # chess, symbols
    u"\U0001FA70-\U0001FAFF"   # more symbols
    u"\U00002702-\U000027B0"   # dingbats
    u"\U0000FE00-\U0000FE0F"   # variation selectors (skin tones etc.)
    u"\U0001F1E0-\U0001F1FF"   # flags
    u"\U00002500-\U00002BEF"   # box drawing, geometric shapes
    u"\U0000231A-\U0000231B"   # watch, hourglass
    u"\U000023E9-\U000023F3"   # arrows, clock
    u"\U000025AA-\U000025FE"   # geometric shapes small
    u"\U00002614-\U00002615"   # umbrella
    u"\U00002648-\U00002653"   # zodiac
    u"\U0000267F"              # wheelchair
    u"\U00002693"              # anchor
    u"\U000026A1"              # lightning
    u"\U000026CE"              # Ophiuchus
    u"\U000026D4"              # no entry
    u"\U000026EA"              # church
    u"\U000026F2-\U000026F3"   # fountain, golf
    u"\U000026F5"              # sailboat
    u"\U000026FA"              # tent
    u"\U000026FD"              # fuel pump
    u"\u2702"                  # scissors
    u"\u203C"                  # double exclamation
    u"\u2139"                  # info
    u"\u2194-\u2199"           # arrows
    u"\u21A9-\u21AA"           # arrow with hook
    u"\u231A-\u231B"           # watch
    u"\u2328"                  # keyboard
    u"\u23CF"                  # eject
    u"\u23E9-\u23F3"
    u"\u23F8-\u23FA"
    u"\u24C2"                  # circled M
    u"\u25AA-\u25AB"
    u"\u25B6"                  # play button
    u"\u25C0"                  # reverse button
    u"\u25FB-\u25FE"
    u"\u2600-\u2604"
    u"\u260E"                  # telephone
    u"\u2611"                  # ballot box
    u"\u2614-\u2615"
    u"\u2618"                  # shamrock
    u"\u261D"                  # index finger
    u"\u2620"                  # skull
    u"\u2622-\u2623"
    u"\u2626"                  # orthodox cross
    u"\u262A"                  # star and crescent
    u"\u262E-\u262F"
    u"\u2638-\u263A"
    u"\u2640"                  # female sign
    u"\u2642"                  # male sign
    u"\u2648-\u2653"
    u"\u265F-\u2660"
    u"\u2663"
    u"\u2665-\u2666"
    u"\u2668"
    u"\u267B"
    u"\u267E-\u267F"
    u"\u2692-\u2697"
    u"\u2699"
    u"\u269B-\u269C"
    u"\u26A0-\u26A1"
    u"\u26AA-\u26AB"
    u"\u26B0-\u26B1"
    u"\u26BD-\u26BE"
    u"\u26C4-\u26C5"
    u"\u26CE-\u26CF"
    u"\u26D1"
    u"\u26D3-\u26D4"
    u"\u26E9-\u26EA"
    u"\u26F0-\u26F5"
    u"\u26F7-\u26FA"
    u"\u26FD"
    u"\u2702"
    u"\u2705"
    u"\u2708-\u270D"
    u"\u270F"
    u"\u2712"
    u"\u2714"
    u"\u2716"
    u"\u271D"
    u"\u2721"
    u"\u2728"
    u"\u2733-\u2734"
    u"\u2744"
    u"\u2747"
    u"\u274C"
    u"\u274E"
    u"\u2753-\u2755"
    u"\u2757"
    u"\u2763-\u2764"
    u"\u2795-\u2797"
    u"\u27A1"
    u"\u27B0"
    u"\u27BF"
    u"\u2934-\u2935"
    u"\u2B05-\u2B07"
    u"\u2B1B-\u2B1C"
    u"\u2B50"
    u"\u2B55"
    u"\u3030"
    u"\u303D"
    u"\u3297"
    u"\u3299"
    "]+",
    flags=re.UNICODE
)

# Pattern to remove: <h2>...UML...</h2> followed by <div class="uml-diagram">...</div>
UML_PATTERN = re.compile(
    r'\s*<h2[^>]*>[^<]*UML[^<]*</h2>\s*<div[^>]*class="uml-diagram"[^>]*>.*?</div>',
    re.DOTALL | re.IGNORECASE
)

processed = 0
for dirpath, _, filenames in os.walk(ROOT):
    for fname in filenames:
        if not fname.endswith(".html"):
            continue
        fpath = os.path.join(dirpath, fname)
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        # Remove UML sections first
        content = UML_PATTERN.sub("", content)

        # Remove emojis
        content = EMOJI_PATTERN.sub("", content)

        # Tidy up extra whitespace artifacts in headings/spans
        content = re.sub(r'(<(?:h[1-6]|span|button|a|td|th|li|p)[^>]*>)\s+', r'\1', content)

        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)

        print(f"Cleaned: {fname}")
        processed += 1

print(f"\nDone — {processed} files cleaned.")
