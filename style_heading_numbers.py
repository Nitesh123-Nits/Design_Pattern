import os
import re

ROOT = r"c:\Users\nites\Downloads\Design Pattern"

def wrap_heading_numbers(content):
    # This regex looks for an open tag like <h1 id="something"> or <h2>
    # Then spaces, then a number followed by a dot, then a space.
    # It replaces the number with a span class string.
    
    # We want to match: (<h[1-4][^>]*>\s*)([0-9]+\.)(\s+)(.*?</h[1-4]>)
    # But wait, what if the number is already wrapped?
    # We should skip it if there's already a span.
    
    def replacer(match):
        h_tag_open = match.group(1)
        number_dot = match.group(2)
        space = match.group(3)
        rest = match.group(4)
        
        return f'{h_tag_open}<span class="head-num">{number_dot}</span>{space}{rest}'

    # Regex: 
    # Group 1: <hX...> possibly with spaces after
    # Group 2: digits followed by a dot
    # Group 3: spaces
    # Group 4: the rest of the text up to </hX>
    pattern = re.compile(r'(<h[1-4][^>]*>\s*)([0-9]+\.)(\s+)(.*?</h[1-4]>)', re.IGNORECASE)
    
    new_content = pattern.sub(replacer, content)
    return new_content

processed = 0
for dirpath, _, filenames in os.walk(ROOT):
    for fname in filenames:
        if not fname.endswith(".html"):
            continue
            
        fpath = os.path.join(dirpath, fname)
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
            
        new_content = wrap_heading_numbers(content)
        
        if new_content != content:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(new_content)
            processed += 1
            print(f"Updated headers in {fname}")

print(f"Done. {processed} files updated.")
