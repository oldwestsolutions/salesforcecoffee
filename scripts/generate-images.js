const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Create placeholder images
const images = [
  {
    name: 'seattle-coffee.jpg',
    width: 1920,
    height: 1080,
    color: '#2C3E50',
    text: 'SEATTLE COFFEE'
  },
  {
    name: 'classic.jpg',
    width: 800,
    height: 600,
    color: '#34495E',
    text: 'SEATTLE CLASSIC'
  },
  {
    name: 'mocha.jpg',
    width: 800,
    height: 600,
    color: '#2C3E50',
    text: 'MOUNTAIN MIST'
  },
  {
    name: 'caramel.jpg',
    width: 800,
    height: 600,
    color: '#34495E',
    text: 'PUGET SOUND'
  },
  {
    name: 'coffee-shop.jpg',
    width: 1200,
    height: 800,
    color: '#2C3E50',
    text: 'COFFEE SHOP'
  }
];

// Generate SVG files
images.forEach(image => {
  const svgContent = `
    <svg width="${image.width}" height="${image.height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${image.color}"/>
      <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle" letter-spacing="2">
        ${image.text}
      </text>
    </svg>
  `;
  
  fs.writeFileSync(path.join(imagesDir, image.name.replace('.jpg', '.svg')), svgContent);
});

console.log('Placeholder images generated successfully!'); 