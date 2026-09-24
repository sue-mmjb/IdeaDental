# Removes all "Emergency" nav/footer links from every page and deletes the
# emergency page. Safe: only touches emergency links, prints what it changed.
import re, os, glob

pages = [f for f in glob.glob("*.html")]
total = 0
for f in pages:
    s = open(f, encoding="utf-8").read()
    before = s
    # 1) list-item nav links:  <li> ... emergency ... </li>
    s = re.sub(r'[ \t]*<li>\s*<a href="idea-dental-emergency\.html"[^>]*>.*?</a>\s*</li>\s*\n?',
               '', s, flags=re.S)
    # 2) any remaining bare emergency links
    s = re.sub(r'[ \t]*<a href="idea-dental-emergency\.html"[^>]*>.*?</a>\s*\n?',
               '', s, flags=re.S)
    if s != before:
        n = before.count('idea-dental-emergency.html') - s.count('idea-dental-emergency.html')
        open(f, "w", encoding="utf-8").write(s)
        print(f"  {f}: removed {n} emergency link(s)")
        total += n

# delete the emergency page itself
if os.path.exists("idea-dental-emergency.html"):
    os.remove("idea-dental-emergency.html")
    print("  deleted idea-dental-emergency.html")

print(f"\nDone. {total} emergency links removed across the site.")
