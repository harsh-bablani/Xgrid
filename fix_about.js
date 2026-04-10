const fs = require('fs');
const file = 'src/pages/About.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/<br className="hidden sm:block" \/>\s*/g, ' ');
content = content.replace(/max-w-7xl/g, 'max-w-[1440px]');
content = content.replace(/max-w-\[1300px\]/g, 'max-w-[1440px]');
content = content.replace(/max-w-6xl/g, 'max-w-[1240px]');
content = content.replace(/text-\[15px\]/g, 'text-base');
content = content.replace(/sm:text-\[16px\]/g, 'sm:text-lg');
content = content.replace(/text-\[17px\]/g, 'text-lg');
content = content.replace(/text-\[14px\]/g, 'text-base');
content = content.replace(/px-4 sm:px-6 lg:px-8/g, 'px-4 sm:px-8 lg:px-12 xl:px-16');

fs.writeFileSync(file, content);
console.log('Updated About.tsx layout and readability');
