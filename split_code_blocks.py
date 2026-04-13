#!/usr/bin/env python3
import os
import re

ROOT = r"c:\Users\nites\Downloads\Design Pattern"

# Pattern to capture the entire DIV wrapping the code block
CODE_BLOCK_PATTERN = re.compile(
    r'<div class="code-block">\s*'
    r'<div class="code-header">.*?<span class="code-title">(.*?)</span>.*?</div>\s*'
    r'<pre><code class="language-java">(.*?)</code></pre>\s*'
    r'</div>',
    re.DOTALL
)

def split_code_block(match):
    original_title = match.group(1).strip()
    code_content = match.group(2)
    
    # Split code content by top-level section comments: lines starting with "// " that are separated by blank lines or at the start
    # Let's find all section comment lines like: "\n// Some Title \n" or start with "// Some Title"
    pieces = re.split(r'\n(?=//\s+[A-Za-z])', "\n" + code_content)
    
    # Filter out empty pieces
    pieces = [p.strip() for p in pieces if p.strip()]
    
    # If the code didn't split (no "// " headers), return original
    if len(pieces) <= 1:
        return match.group(0)
    
    new_blocks = []
    
    for piece in pieces:
        # Check if piece starts with "// "
        first_line = piece.split('\n')[0].strip()
        
        if first_line.startswith('//'):
            chunk_title = first_line.lstrip('/ ').strip()
            # If the title is just a comment describing the code and not a real file/section header, we still use it
            title = f"{original_title} - {chunk_title}" if " — " not in original_title else chunk_title
            # remove the comment from the code piece if we want, but keeping it is fine too
        else:
            title = original_title
            
        # Clean up the piece
        chunk_code = piece.strip()
        
        # Build the HTML
        block_html = f'''<div class="code-block">
      <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div><span class="code-title">{title}</span><button class="copy-btn">Copy</button></div>
      <pre><code class="language-java">{chunk_code}</code></pre>
    </div>'''
        new_blocks.append(block_html)
        
    # Join with some vertical space
    return '\n\n    '.join(new_blocks)


processed = 0
for dirpath, _, filenames in os.walk(ROOT):
    for fname in filenames:
        if not fname.endswith(".html"):
            continue
        
        fpath = os.path.join(dirpath, fname)
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        new_content = CODE_BLOCK_PATTERN.sub(split_code_block, content)

        if new_content != content:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Split code blocks in: {fname}")
            processed += 1

print(f"\nDone — {processed} files updated.")
