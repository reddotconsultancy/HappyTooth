import os

def fix_image():
    path = 'src/app/about/page.tsx'
    if not os.path.exists(path):
        print("File not found")
        return
        
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Let's locate the image callout block
    target_start = '     {/* Accent Image Callout */}'
    target_end = '     </div>\n\n    </div>\n   </section>'
    
    idx_start = content.find(target_start)
    idx_end = content.find(target_end, idx_start)
    
    if idx_start == -1 or idx_end == -1:
        print("Target block not found")
        return
        
    # We want to replace everything from target_start to just before the closing parts of section/page
    original_block = content[idx_start:idx_end+11] # +11 to include the closing div
    print("Original block found:")
    print(original_block)
    
    replacement_block = """     {/* Accent Image Callout */}
     <div className="max-w-xl mx-auto mt-16 rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-150 bg-white p-3 relative aspect-square hover-lift">
      <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden">
       <Image
        src="/images/indian_family_smile.png"
        alt="Happy Indian family smiling with healthy teeth"
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-cover transition-transform duration-700 ease-out"
       />
      </div>
     </div>"""
     
    new_content = content[:idx_start] + replacement_block + content[idx_end+11:]
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("SUCCESSFULLY REPLACED")

if __name__ == '__main__':
    fix_image()
