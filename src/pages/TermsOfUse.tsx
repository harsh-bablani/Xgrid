import { KeyRound, Lock, Scale, ServerCog } from 'lucide-react';
import LegalLayout, { type LegalHighlight, type LegalSection } from '../components/legal/LegalLayout';

const highlights: LegalHighlight[] = [
  { icon: KeyRound, title: 'Licensed, not sold', text: 'A limited, non-transferable licence for your internal business use.' },
  { icon: ServerCog, title: 'Your data, your servers', text: 'On-premises by design — we have no routine access to your data.' },
  { icon: Lock, title: 'Confidential by default', text: 'Both sides protect each other’s confidential information.' },
  { icon: Scale, title: 'Governed by Indian law', text: 'Disputes fall under the courts of Jaipur, Rajasthan.' },
];

const sections: LegalSection[] = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: (
      <p>
        By accessing, viewing, installing, using the Software or clicking "Install" or "I agree", You agree to be bound by these Terms of Use. If you do not agree to these terms, please immediately discontinue the use of the Software. If You are entering into these Terms on behalf of an entity, You represent that You have authority to bind that entity.
      </p>
    ),
  },
  {
    id: 'definitions',
    title: 'Definitions',
    content: (
      <ul>
        <li><strong>"Affiliate"</strong> means any entity that controls, is controlled by, or is under common control with a party.</li>
        <li><strong>"Company"</strong> refers to Slatebiz Software, a company incorporated under the law of India including its holding, subsidiary, affiliates, and associate companies</li>
        <li><strong>"Confidential Information"</strong> has the meaning set out in clause 6.</li>
        <li><strong>"Customer Data"</strong> means data, content, or information submitted, stored, transmitted, or processed by or on behalf of User through the Software, including files, records, and any Personal Data included therein.</li>
        <li><strong>"Data"</strong> means information in any form capable of being processed by humans or systems, including text, numbers, images, audio/video, logs, and metadata.</li>
        <li><strong>"Personal Data"</strong> means any data about an individual who is identifiable by or in relation to such data, as applicable under Indian law including the Digital Personal Data Protection Act, 2023 ("DPDP Act").</li>
        <li><strong>"Services"</strong> means any support, maintenance, updates, documentation, and value‑added services provided by Company in connection with the Software, if purchased or included.</li>
        <li><strong>"Software"</strong> shall include the proprietary software application- software, which include any prior versions, updates, documentation, and any other value-added services, plug-ins and related materials, in connection with the software applications mentioned herein.</li>
        <li><strong>"User", "You" or "Your"</strong> shall mean any individual, business entity or organization that installs, accesses, or uses the Software, including its authorized users.</li>
      </ul>
    ),
  },
  {
    id: 'license',
    title: 'License Grant and Scope of Use',
    content: (
      <ul>
        <li><strong>License:</strong> Subject to these Terms and payment of applicable fees, Company grants you a limited, non‑exclusive, non‑transferable, non‑sublicensable, revocable license to install and use the Software solely for your internal business purposes during the Term ("License").</li>
        <li><strong>Authorized Use:</strong> The License is granted only to the You and may not be used for the benefit of any third party unless expressly permitted in writing by Company.</li>
        <li><strong>No Transfer:</strong> You shall not rent, lease, lend, sell, sublicense, assign, distribute, or otherwise transfer the Software or the License to any third party, except with Company's prior written consent</li>
      </ul>
    ),
  },
  {
    id: 'restriction',
    title: 'Restriction',
    content: (
      <>
        <p>You shall not, and shall not permit any third party to:</p>
        <ul>
          <li>copy, modify, translate, adapt, or create derivative works based on the Software;</li>
          <li>disassemble, decompile, reverse engineer, or attempt to derive source code;</li>
          <li>remove, alter, or obscure proprietary notices (copyright, trademark, or other notices);</li>
          <li>circumvent or disable security, licensing, or technical protection mechanisms;</li>
          <li>use the Software to build, benchmark for publication, or develop a competing product or service;</li>
          <li>resell, distribute, sublicense, or provide the Software by any manner whatsover;</li>
          <li>use the Software in violation of law or third‑party rights, including intellectual property rights;</li>
          <li>transmit malware, exploit vulnerabilities, or conduct penetration testing without Company's prior written consent;</li>
          <li>upload, store, or process unlawful, infringing, offensive, or prohibited content;</li>
          <li>spam, overload, or abuse resources or interfere with the integrity or performance of the Software; or</li>
          <li>process special categories of personal data and/or sensitive personal data where a written data processing arrangement is legally required.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'deployment',
    title: 'Deployment Model; Access to Customer Data',
    content: (
      <ul>
        <li><strong>On‑Premises Deployment:</strong> The Software is designed to be deployed on User‑controlled infrastructure ("On‑Premises"), unless otherwise agreed in writing (e.g., hosted deployment, managed services, or cloud add‑ons).</li>
        <li><strong>No Routine Access to Customer Data:</strong> Under an On‑Premises deployment, Company does not have routine access to Customer Data stored in your environment. You retain control over your databases, servers, systems, and access permissions.</li>
        <li><strong>Support Access (If Authorized):</strong> If you request support that reasonably requires access (e.g., remote troubleshooting), you may provide Company temporary access at your discretion. Any such access will be limited to the scope necessary to provide support and will be handled as Confidential Information.</li>
        <li>
          <strong>User Responsibility for Data Management:</strong> You are solely responsible for:
          <ul>
            <li>the accuracy, quality, legality, and integrity of Customer Data;</li>
            <li>your configuration choices, access controls, and cybersecurity posture;</li>
            <li>backups, redundancy, and disaster recovery unless Company expressly agrees otherwise in writing; and</li>
            <li>compliance with applicable data protection and sectoral laws for Customer Data you process</li>
          </ul>
        </li>
        <li><strong>No Liability for Data‑Driven Outcomes:</strong> Company is not responsible for decisions or actions taken by you or your users based on outputs from the Software, including business, financial, operational, or compliance outcomes</li>
      </ul>
    ),
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    content: (
      <>
        <p>
          "Confidential Information" means any information of any nature, form, medium and content whatsoever, disclosed by a party ("Disclosing Party") or received by the other ("Receiving Party") under these terms whether written, oral, visual, electronic, graphic, tangible or intangible (printed, software, models, technical data, specimens, prototype etc.) and designated as confidential or reasonably should be understood as confidential, including business information, product designs, roadmaps, trade secrets, source/object code, security information, and Personal Data (where applicable).
        </p>
        <p>The Receiving Party shall:</p>
        <ul>
          <li>use Confidential Information only to perform obligations or exercise rights under these Terms; and</li>
          <li>protect it using reasonable care, at least as protective as it uses for its own similar information.</li>
        </ul>
        <p>You are responsible for maintaining confidentiality of credentials, access keys, and administrative accounts, and for all activities under your accounts. You shall promptly notify Company of any unauthorized use or security incident related to the Software.</p>
        <p><strong>Exclusions:</strong> Confidential Information does not include information that:</p>
        <ul>
          <li>is or becomes public without breach;</li>
          <li>is independently developed without use of the other party's Confidential Information;</li>
          <li>is received lawfully from a third party without confidentiality obligations; or</li>
          <li>must be disclosed by law or court order (provided the Receiving Party gives notice where legally permitted and cooperates to limit disclosure).</li>
        </ul>
      </>
    ),
  },
  {
    id: 'third-party',
    title: 'Third‑Party Services & Open Source Components',
    content: (
      <ul>
        <li><strong>Third‑Party Components:</strong> The Software may include third‑party or open‑source components (e.g., Java, MySQL Community Server, Tomcat, libraries/JARs) ("Third‑Party Components").</li>
        <li><strong>Separate Licenses:</strong> Third‑Party Components are governed by their respective licenses. To the extent there is a conflict between these Terms and a third‑party license, the third‑party license governs for that component.</li>
        <li><strong>No Warranty/Support for Third‑Party Components:</strong> The Company disclaims warranties, indemnities, and liabilities for Third‑Party Components and does not guarantee their continued availability or security beyond what is provided in the relevant license terms.</li>
      </ul>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property (IP)',
    content: (
      <>
        <p>
          All intellectual property, including in relation to our services, including any software, techniques and processes used, and any trademarks, logos, images, material, content, designs, information and other content of ours belongs exclusively to us or is licensed to us. By no means is any proprietary right or license in any intellectual property is impliedly or expressly granted by us to you through your use of our services. Except for the License expressly granted herein, no rights are transferred.
        </p>
        <p>
          You shall not copy, decompile, reverse engineer, or otherwise attempt to discover any source code, license, use or assign any of our intellectual property, copy any logos, brand names, marketing or branding material or pictures of ours, remove any copyright and other proprietary notices contained in any of our content, or use spiders, crawlers or robots for the purpose of accessing any of our services or content.
        </p>
        <p>
          Any unauthorized use of our intellectual property rights in connection with any other good, service or offering will constitute an infringement of our intellectual property rights and may be actionable under the applicable laws, without prejudice to rights to terminate the license.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Security; Customer Responsibilities',
    content: (
      <ul>
        <li><strong>Company Security Practices:</strong> Company will maintain commercially reasonable administrative, technical, and organizational measures appropriate for the nature of the Software and Services it provides.</li>
        <li>
          <strong>User Responsibilities:</strong> You are responsible for:
          <ul>
            <li>secure installation and configuration;</li>
            <li>maintaining appropriate access controls and MFA where available;</li>
            <li>your networks, endpoints, hardware, and underlying OS security;</li>
            <li>timely installation of patches and updates provided by Company; and</li>
            <li>security of third‑party tools/services used alongside the Software</li>
          </ul>
        </li>
        <li><strong>Updates:</strong> You acknowledge that failure to install updates may result in reduced functionality, security vulnerabilities, or incompatibilities. Company is not liable for issues arising from use of unsupported or outdated versions.</li>
      </ul>
    ),
  },
  {
    id: 'compliance',
    title: 'Compliance of Law',
    content: (
      <p>
        You agree to comply with all applicable laws and regulations, including (where applicable) the Information Technology Act, 2000, rules thereunder, and the Digital Personal Data Protection Act and rules thereunder. You shall not use the Software for unlawful purposes or in violation of any applicable regulation.
      </p>
    ),
  },
  {
    id: 'warranty',
    title: 'Warranty',
    content: (
      <>
        <p>The Software is provided on an "AS-IS" and "AS‑AVAILABLE" basis.</p>
        <p>
          To the fullest extent permitted by applicable law, the Company expressly disclaims all warranties, whether express, implied, statutory, or otherwise, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, non‑infringement, and any warranties arising out of course of dealing or usage of trade.
        </p>
        <p>
          Company does not warrant that the Software will be uninterrupted, error‑free, secure, or free from harmful components, or that defects will be corrected, or that the Software will meet all User requirements.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: (
      <>
        <p>
          To the fullest extent permitted by law, Company's total aggregate liability arising out of or related to these Terms shall not exceed the fees actually paid by User to Company for the Software/Services giving rise to the claim in the twelve (12) months preceding the event giving rise to liability.
        </p>
        <p>
          Company shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenues, business, goodwill, or data, even if advised of the possibility.
        </p>
        <p className="legal-callout">
          <strong>Note:</strong> The company is not responsible for any mistakes, losses, or damages that happen to you. You, as the user, are fully responsible for checking everything—invoices, account statements, reports, or anything else you generate from the software—to make sure it's correct. Simply put: the software is a tool, but you are responsible for verifying all the results.
        </p>
      </>
    ),
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    content: (
      <>
        <p>You agree to indemnify, defend, and hold harmless Company, its Affiliates, and their officers, directors, employees, and agents from and against all claims, damages, liabilities, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or related to:</p>
        <ul>
          <li>your breach of these Terms;</li>
          <li>your violation of applicable law or third‑party rights;</li>
          <li>Customer Data, including any claim that Customer Data infringes or violates rights of a third party; or</li>
          <li>misuse of the Software by you or any user.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'term-termination',
    title: 'Term and Termination',
    content: (
      <>
        <h3>14.1 Term</h3>
        <p>These Terms shall commence on the date when the Software is activated and shall continue until License expires or is terminated.</p>

        <h3>14.1.1 Expiry of License and Support After Expiry</h3>
        <p>If the License expires and you require support, assistance, or any technical services thereafter, such services shall be chargeable separately—either on an hourly basis or as per the Company's then‑current standard rates.</p>

        <h3>14.1.2 Non‑Renewal of Maintenance</h3>
        <p>If maintenance or support fees are not renewed or paid within one (1) month from the date of License expiry, you will be required to purchase a new License at the Company's prevailing prices in order to continue using the Software.</p>

        <h3>14.1.3 Demo / Educational Version Disclaimer</h3>
        <p>Any demo, trial, or educational version of the Software is provided solely for evaluation and testing purposes. The Company shall not be liable for any loss, damage, or performance issues arising from its use.</p>

        <h3>14.1.4 Transition to Full Version</h3>
        <p>Once you are satisfied with the demo or evaluation version and intend to use the Software for professional, commercial, or production purposes, you must purchase a valid License for the full/final version. Use of the demo version for professional or commercial activities is strictly prohibited.</p>

        <h3>14.1.5 Additional Machine or Infrastructure Usage</h3>
        <p>If you wish to install, use, or access the Software on additional machines, servers, locations, or environments beyond what is permitted under your existing License, additional fees shall apply as per the Company's pricing for expanded infrastructure or usage rights.</p>

        <h3>14.2 Termination for Breach</h3>
        <p>Company may terminate the License immediately upon notice if you breach these Terms and fail to cure (if curable) within [15] days, or immediately for material breach (including IP infringement, security abuse, or unlawful use).</p>

        <h3>14.3 Effect of Termination</h3>
        <p>Upon termination or expiry:</p>
        <ul>
          <li>the License ends and you must cease use;</li>
          <li>you must uninstall/destroy all copies of the Software and documentation;</li>
          <li>all fees due become immediately payable (if applicable); and</li>
          <li>Clauses intended to survive (including IP, Confidentiality, Disclaimers, Limitation of Liability, Indemnity, Dispute Resolution) shall survive.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to Software and Terms',
    content: (
      <ul>
        <li><strong>Software Changes:</strong> Company may update features, security, or integrations, including by patches and updates. Where you have a paid maintenance term, Company will not materially reduce core functionality during the paid term except for legal, safety, or security reasons.</li>
        <li><strong>Terms Changes:</strong> Company may update these Terms by posting a revised version and notifying you via email or in‑product notice. Continued use after the effective date constitutes acceptance. Material changes will not apply retroactively to a current paid term unless required by law or for safety/security.</li>
      </ul>
    ),
  },
  {
    id: 'publicity',
    title: 'Publicity',
    content: (
      <p>
        Company may use your name and logo on customer lists and marketing materials, subject to your brand guidelines, unless you opt out by written notice to <a href="mailto:info@slatebiz.com">info@slatebiz.com</a>
      </p>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing Law and Dispute Resolution',
    content: (
      <p>
        These Terms and use of our services shall be governed by and constructed in accordance with the laws of India. The parties agree that any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of Courts of Jaipur, Rajasthan, India.
      </p>
    ),
  },
  {
    id: 'force-majeure',
    title: 'Force Majeure',
    content: (
      <>
        <p>
          Neither party is liable for failures due to events beyond reasonable control (e.g., acts of God, labor disputes, internet failures, war, epidemics), provided the affected party uses commercially reasonable efforts to mitigate.
        </p>
        <p><strong>Examples:</strong> virus infection, unlicensed operation system, machine crash</p>
      </>
    ),
  },
  {
    id: 'entire-agreement',
    title: 'Entire Agreement',
    content: (
      <p>
        These Terms constitute the entire agreement between the parties regarding the Software and supersede all prior or contemporaneous understandings relating to the subject matter. Any amendment must be as per clause 15 or in a mutually signed writing (as applicable).
      </p>
    ),
  },
  {
    id: 'severability',
    title: 'Severability',
    content: (
      <p>
        If any provision is held invalid or unenforceable, the remainder will remain in effect, and the invalid provision will be replaced by a valid provision that most closely reflects the original intent.
      </p>
    ),
  },
  {
    id: 'waiver',
    title: 'Waiver',
    content: (
      <p>
        No waiver is effective unless in writing and signed by the waiving party. A waiver of one breach does not waive any other breach.
      </p>
    ),
  },
  {
    id: 'notices',
    title: 'Notices',
    content: (
      <>
        <p>
          All notices or other communications under these Terms of Use shall be in writing and shall be deemed served when delivered personally, sent by certified or registered mail, or sent by email, to the parties at below addresses or set forth in this Terms of Use, or to such other address as either party may designate by notice to the other party.
        </p>
        <div className="grid gap-3 rounded-xl border border-slate-200/80 bg-[#F7F8FC] p-4 text-[14px] sm:grid-cols-3">
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400">Company</span>
            <span className="font-medium text-slate-900">Slatebiz Softwares</span>
          </div>
          <div className="sm:col-span-2">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400">Address</span>
            <a href="https://maps.app.goo.gl/iq89dhBchA9J3fxi8" target="_blank" rel="noopener noreferrer">
              DH-079, 1st Floor Ansal Sushant City -1, Kalwar Road, Jaipur, Rajasthan 303706, India
            </a>
          </div>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400">Email</span>
            <a href="mailto:info@slatebiz.com">info@slatebiz.com</a>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    content: (
      <p>
        For questions, support, or complaints, contact <a href="mailto:info@slatebiz.com">info@slatebiz.com</a>
      </p>
    ),
  },
];

export default function TermsOfUse() {
  return (
    <LegalLayout
      kicker="Legal"
      titleLead="Terms of Use"
      titleAccent="clear rules, fair use."
      intro="Please review these terms carefully before using our software and services. They explain your licence, your responsibilities, and how we work together."
      readTime="12 min read"
      highlights={highlights}
      sections={sections}
      related={{ to: '/privacy-policy/', label: 'Privacy Policy' }}
    />
  );
}
