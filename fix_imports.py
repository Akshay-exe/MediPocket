import os
import re

count = 0
for root, dirs, files in os.walk('src'):
    for file in files:
        if not file.endswith(('.ts', '.tsx')): continue
        path = os.path.join(root, file)
        with open(path, 'r', encoding='utf-8', errors='ignore') as f: content = f.read()
        
        # We want to replace from "package@1.2.3" to "package"
        new_content = re.sub(r'([\'"])(@?[a-zA-Z0-9_-]+(?:/[a-zA-Z0-9_-]+)*)@[0-9^~.a-zA-Z-]+([\'"])', r'\1\2\3', content)
        
        if new_content != content:
            with open(path, 'w', encoding='utf-8') as f: f.write(new_content)
            count += 1
            print(f"Fixed {path}")

print(f"Fixed {count} files.")
