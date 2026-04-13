# strip-emojis-uml.ps1
# Removes all emojis and UML diagram sections from all HTML files

$root = "c:\Users\nites\Downloads\Design Pattern"
$files = Get-ChildItem -Path $root -Filter "*.html" -Recurse

# Full list of emojis used across the site
$emojis = @(
  '1️⃣','2️⃣','3️⃣','4️⃣','5️⃣',
  '🏗️','🏢','⚙️','🎯','💻','🗺️','📊','🔍','🎤',
  '✅','❌','⚠️','💡','🏆','📌','🚀','🌐',
  '🔌','🌉','🌳','🎨','🪶','🔒','⛓️','📝','🔤',
  '🔄','📡','💾','👁️','🔁','♟️','📐','🚶',
  '🏭','🔧','🔨','📋','♟','🧬','🏛️','🔑','💯','🔐',
  '⭐','🎉','📱','📧','💬','📈','⏪','⏩',
  '🔵','🟡','🟠','🟢','🔴',
  '🚨','💼','🔗','🏠','📁','📄','⚡','📦','🚚',
  '🔑','📩','📩','🗑️','✏️','🧪','🌍','🖥️','🖨️',
  '🟩','🟥','🟦','🟧','📐','🔩','⛔','🛡️','🏷️',
  '📃','🧑','👤','🗂️','📂','🔺','🔻','💠','🔷','🔶',
  '🔸','🔹','▶️','◀️','🔝','🔙','🔜','🔛'
)

$count = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8

    # 1. Remove UML section: the h2 heading + the uml-diagram div block
    $content = [regex]::Replace(
        $content,
        '(?s)\s*<h2[^>]*>[^<]*UML[^<]*</h2>\s*<div class="uml-diagram">.*?</div>',
        '',
        [System.Text.RegularExpressions.RegexOptions]::Singleline
    )

    # 2. Remove each emoji via exact string replacement
    foreach ($emoji in $emojis) {
        $content = $content.Replace($emoji, '')
    }

    # 3. Clean up double spaces left behind in headings/badges
    $content = [regex]::Replace($content, '  +', ' ')
    $content = [regex]::Replace($content, '> ', '>')
    $content = [regex]::Replace($content, ' <', '<')

    Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
    $count++
    Write-Host "Cleaned: $($file.Name)"
}

Write-Host "`nDone — $count files processed."
