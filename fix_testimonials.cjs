const fs = require('fs');
const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// Update the testimonials array
content = content.replace(/'Hissaria Gems Private Limited'/g, '"Hissaria Gems Private Limited", logo: "/hissaria gems private limited.jpeg"');
content = content.replace(/'BTR & SONS'/g, '"BTR & SONS", logo: "/BTR.png"');
content = content.replace(/'Mahalaxmi Refinery'/g, '"Mahalaxmi Refinery", logo: "/Mahalaxmi.png"');
content = content.replace(/'B\.L\.Hissaria Jewellers Pvt\. Ltd\.'/g, '"B.L.Hissaria Jewellers Pvt. Ltd.", logo: "/b l hissaria jewellers.png"');
content = content.replace(/"Hissaria Gems Private Limited"/g, '"Hissaria Gems Private Limited", logo: "/hissaria gems private limited.jpeg"');
content = content.replace(/"BTR & SONS"/g, '"BTR & SONS", logo: "/BTR.png"');
content = content.replace(/"Mahalaxmi Refinery"/g, '"Mahalaxmi Refinery", logo: "/Mahalaxmi.png"');
content = content.replace(/"B\.L\.Hissaria Jewellers Pvt\. Ltd\."/g, '"B.L.Hissaria Jewellers Pvt. Ltd.", logo: "/b l hissaria jewellers.png"');

// Update the rendering logic
const targetRenderStr = `<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                  <h3 className="text-blue-700 font-extrabold text-xl">{testimonial.name.charAt(0)}</h3>
                </div>`;

const newRenderStr = `{testimonial.logo ? (
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-inner p-1 border border-slate-100">
                    <img src={testimonial.logo} alt={testimonial.brand} className="max-w-full max-h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                    <h3 className="text-blue-700 font-extrabold text-xl">{testimonial.name.charAt(0)}</h3>
                  </div>
                )}`;

content = content.replace(targetRenderStr, newRenderStr);

fs.writeFileSync(file, content);
console.log('Testimonials updated with logos successfully.');
