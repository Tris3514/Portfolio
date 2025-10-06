const fs = require('fs');
const path = require('path');

// Path to the gallery folder
const galleryPath = path.join(__dirname, '../public/gallery');
const outputPath = path.join(__dirname, '../src/data/gallery-images.json');

// Ensure gallery directory exists
if (!fs.existsSync(galleryPath)) {
  fs.mkdirSync(galleryPath, { recursive: true });
}

// Read all PNG files from the gallery folder
function updateGalleryImages() {
  try {
    const files = fs.readdirSync(galleryPath);
    const pngFiles = files.filter(file => file.toLowerCase().endsWith('.png'));
    
    const images = pngFiles.map(file => ({
      src: `/gallery/${file}`,
      alt: file.replace('.png', '').replace(/[-_]/g, ' '),
      name: file
    }));

    // Create data directory if it doesn't exist
    const dataDir = path.dirname(outputPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Write the images array to a JSON file
    fs.writeFileSync(outputPath, JSON.stringify(images, null, 2));
    
    console.log(`✅ Updated gallery with ${images.length} images:`);
    images.forEach(img => console.log(`   - ${img.name}`));
    
    if (images.length === 0) {
      console.log('📁 No PNG images found in public/gallery/');
      console.log('   Add PNG files to public/gallery/ and run this script again');
    }
  } catch (error) {
    console.error('❌ Error updating gallery:', error.message);
  }
}

updateGalleryImages();
