const fs = require('fs');

const faqsJewel = `  const faqs = [
    {
      q: "How do you ensure the security of our data?",
      a: "Data security is a top priority. We prioritise the security of your information by implementing industry-leading security measures. Additionally, all team members are bound by strict confidentiality agreements to ensure your privacy is always protected.",
    },
    {
      q: "Do you provide post-development support and maintenance?",
      a: "Absolutely! We understand the importance of ongoing support. We offer flexible maintenance plans to keep your project running smoothly.",
    },
    {
      q: "How quickly can you start a new project?",
      a: "Initiate your project with ease. Schedule a complimentary consultation through our website. We prioritize prompt communication and will respond within 2-3 business hours to discuss your project confidentially.",
    },
    {
      q: "Do you offer refunds?",
      a: "Refund policies depend on the terms and conditions of the subscription plan.",
    },
    {
      q: "How can I request a product demo?",
      a: "You can request a demo by filling out the demo request form on our website. Lets’s talk form",
    },
  ];`;

const faqsHome = `  const faqs = [
    {
      question: "How do you ensure the security of our data?",
      answer: "Data security is a top priority. We prioritise the security of your information by implementing industry-leading security measures. Additionally, all team members are bound by strict confidentiality agreements to ensure your privacy is always protected."
    },
    {
      question: "Do you provide post-development support and maintenance?",
      answer: "Absolutely! We understand the importance of ongoing support. We offer flexible maintenance plans to keep your project running smoothly."
    },
    {
      question: "How quickly can you start a new project?",
      answer: "Initiate your project with ease. Schedule a complimentary consultation through our website. We prioritize prompt communication and will respond within 2-3 business hours to discuss your project confidentially."
    },
    {
      question: "Do you offer refunds?",
      answer: "Refund policies depend on the terms and conditions of the subscription plan."
    },
    {
      question: "How can I request a product demo?",
      answer: "You can request a demo by filling out the demo request form on our website. Lets’s talk form"
    }
  ];`;

function updateFile(file, isHome) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Extract old FAQs section and replace with the new one.
  const regex = /const faqs = \[[\s\S]*?\];/g;
  content = content.replace(regex, isHome ? faqsHome.trim() : faqsJewel.trim());
  
  fs.writeFileSync(file, content);
  console.log(`Updated FAQs in ${file}`);
}

updateFile('src/pages/Home.tsx', true);
updateFile('src/pages/XJewelERP.tsx', false);
