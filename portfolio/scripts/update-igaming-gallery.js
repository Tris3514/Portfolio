const fs = require('fs');
const path = require('path');

// Path to the igaming gallery folder
const galleryPath = path.join(__dirname, '../public/igaming-gallery');
const outputPath = path.join(__dirname, '../src/data/igaming-gallery-images.json');


// Ensure gallery directory exists
if (!fs.existsSync(galleryPath)) {
  fs.mkdirSync(galleryPath, { recursive: true });
}

// Read all PNG files from the igaming gallery folder and subfolders
function updateIgamingGalleryImages() {
  try {
    const items = [];
    
    // Read main directory for single images
    const mainFiles = fs.readdirSync(galleryPath);
    
    const mainPngFiles = mainFiles.filter(file => 
      file.toLowerCase().endsWith('.png') && 
      fs.statSync(path.join(galleryPath, file)).isFile()
    );
    
    mainPngFiles.forEach(file => {
      items.push({
        type: 'single',
        name: file.replace('.png', '').replace(/[-_]/g, ' '),
        folder: '',
        frames: [`/igaming-gallery/${file}`],
        thumbnail: `/igaming-gallery/${file}`
      });
    });
    
    // Read subdirectories for animated items
    const subdirs = mainFiles.filter(file => 
      fs.statSync(path.join(galleryPath, file)).isDirectory()
    );
    
    subdirs.forEach(subdir => {
      const subdirPath = path.join(galleryPath, subdir);
      const subdirFiles = fs.readdirSync(subdirPath);
      const pngFiles = subdirFiles.filter(file => file.toLowerCase().endsWith('.png'));
      
      if (pngFiles.length > 0) {
        // Sort frames by filename
        pngFiles.sort();
        
        items.push({
          type: 'animation',
          name: subdir.replace(/[-_]/g, ' '),
          folder: subdir,
          frames: pngFiles.map(file => `/igaming-gallery/${subdir}/${file}`),
          thumbnail: `/igaming-gallery/${subdir}/${pngFiles[0]}` // Use first frame as thumbnail
        });
      }
    });
    
    const images = items;

    // Create data directory if it doesn't exist
    const dataDir = path.dirname(outputPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Write the images array to a JSON file
    fs.writeFileSync(outputPath, JSON.stringify(images, null, 2));
    
    console.log(`✅ Updated igaming gallery with ${images.length} items:`);
    images.forEach(item => {
      if (item.type === 'animation') {
        console.log(`   🎬 ${item.name} (${item.frames.length} frames)`);
      } else {
        console.log(`   🖼️ ${item.name}`);
      }
    });
    
    if (images.length === 0) {
      console.log('📁 No PNG images found in public/igaming-gallery/');
      console.log('   Add PNG files to public/igaming-gallery/ or create subfolders for animations');
    }
  } catch (error) {
    console.error('❌ Error updating igaming gallery:', error.message);
  }
}

updateIgamingGalleryImages();
