const fs = require('fs');
const file = 'src/pages/About.tsx';
let content = fs.readFileSync(file, 'utf8');

// Upgrade card titles from 16px to 20px (text-xl)
content = content.replace(/text-\[16px\] font-extrabold/g, 'text-xl font-extrabold');

fs.writeFileSync(file, content);
console.log('Fixed card sizes in About.tsx');
