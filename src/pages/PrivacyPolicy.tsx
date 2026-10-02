import { Ban, EyeOff, ShieldCheck, Trash2 } from 'lucide-react';
import LegalLayout, { type LegalHighlight, type LegalSection } from '../components/legal/LegalLayout';

const highlights: LegalHighlight[] = [
  { icon: Ban, title: 'Never sold', text: 'We do not sell, rent, or trade your personal information.' },
  { icon: EyeOff, title: 'Consent first', text: 'Sensitive data is collected only when needed, with explicit consent.' },
  { icon: ShieldCheck, title: 'Secured end to end', text: 'Encryption in transit and at rest, audits, and access controls.' },
  { icon: Trash2, title: 'Kept only as needed', text: 'Data is deleted or anonymised once it is no longer required.' },
];

const sections: LegalSection[] = [
  {
    id: 'our-commitment',
    title: 'Our Commitment',
    content: (
      <>
        <p>
          At Slatebiz Softwares ("Company", "We", "Us", "Our"), we value your trust and are committed to protecting your privacy. Any information collected by us is used solely for legitimate business and operational purposes and is not shared with any third party except as described in this Privacy Policy. We do not sell, rent, or trade your personal information to any external entity.
        </p>
        <p>
          This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you access or use our website, applications, and software (collectively, "Software").
        </p>
        <p>The terms "You", "Your", or "User" refer to any individual who accesses or uses our Software.</p>
        <p>
          This document is an electronic record governed by the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. By accessing our Software or clicking "I Accept", you consent to the terms of this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: (
      <>
        <p>To deliver and improve our services, we may collect the following types of information:</p>

        <h3>a. Personal Information</h3>
        <p>Includes, but is not limited to:</p>
        <div className="flex flex-wrap gap-2">
          {['Name', 'Email address', 'Phone number', 'Gender', 'Age', 'PIN code', 'Occupation', 'Interests', 'Account/login credentials'].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-[#0C69B6]/15 bg-[#0C69B6]/[0.05] px-3 py-1 text-[13px] font-medium text-slate-700"
              >
                {item}
              </span>
            )
          )}
        </div>

        <h3>b. Sensitive Personal Data or Information (SPDI)</h3>
        <p>Collected only when required and with your explicit consent, such as:</p>
        <ul>
          <li>Financial/payment information</li>
          <li>Medical or health-related information</li>
          <li>Biometric data (if applicable)</li>
          <li>Sexual orientation (only where strictly required for a specific service and with separate written consent)</li>
        </ul>

        <h3>c. Non-Personal/Technical Data</h3>
        <p>Automatically collected data including:</p>
        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device type and identifiers</li>
          <li>Operating system</li>
          <li>Usage statistics and interaction patterns</li>
        </ul>
        <p>This information helps us improve service functionality, security, and user experience.</p>
      </>
    ),
  },
  {
    id: 'use-of-cookies',
    title: 'Use of Cookies',
    content: (
      <>
        <p>We may use cookies or similar technologies to:</p>
        <ul>
          <li>Identify and distinguish users</li>
          <li>Improve user experience</li>
          <li>Analyze usage trends and preferences</li>
        </ul>
        <p>
          Cookies do not collect personal information unless voluntarily provided by you. We cannot identify you personally unless you choose to share your identity through registration or other interactions.
        </p>
        <p>
          You may disable cookies through your browser settings, but certain features of the Software may not function optimally.
        </p>
      </>
    ),
  },
  {
    id: 'external-links',
    title: 'External Links',
    content: (
      <p>
        Our Software may contain links to third‑party websites. This Privacy Policy applies solely to our domain. We are not responsible for the privacy practices, security, or content of any external websites. We encourage you to review the privacy policies of external sites before providing any information.
      </p>
    ),
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing and Disclosure',
    content: (
      <>
        <p>We do not disclose your personal or sensitive information to third parties except in the following circumstances:</p>

        <h3>a. Legal Obligations</h3>
        <p>We may disclose information if required to do so by:</p>
        <ul>
          <li>Law enforcement agencies</li>
          <li>Government authorities</li>
          <li>Courts or legal processes</li>
        </ul>
        <p>for purposes such as identity verification, investigation, or compliance with applicable laws.</p>

        <h3>b. Internal Use and Processing</h3>
        <p>We may share information with:</p>
        <ul>
          <li>Subsidiaries or group companies</li>
          <li>Authorized employees</li>
          <li>Contractors or service providers engaged to process data on our behalf</li>
        </ul>
        <p>
          All such parties are bound by strict confidentiality and security obligations in accordance with this Privacy Policy and applicable law.
        </p>

        <h3>c. Business Transfers</h3>
        <p>
          In the event of a merger, acquisition, or restructuring, your information may be transferred to the new entity, subject to the same level of data protection.
        </p>
      </>
    ),
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: (
      <>
        <p>We implement industry‑standard security practices, including:</p>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {[
            'Regular internal and external security audits',
            'Data encryption in transit and at rest',
            'Secure server infrastructure',
            'Firewall protection',
            'Access controls and password‑protected systems',
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-[#F7F8FC] px-3.5 py-3 text-[14px] text-slate-700"
            >
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0C69B6]" />
              {item}
            </div>
          ))}
        </div>
        <p className="legal-callout">
          Despite our best efforts, no system can guarantee absolute security. Data transmitted over the Internet may be susceptible to interception, and we cannot ensure complete protection during transmission.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'Retention of Information',
    content: (
      <>
        <p>We retain personal information only for as long as:</p>
        <ul>
          <li>Required for operational purposes</li>
          <li>Mandated by applicable laws</li>
          <li>Necessary to resolve disputes or enforce agreements</li>
        </ul>
        <p>Once no longer needed, data is securely deleted or anonymized.</p>
      </>
    ),
  },
  {
    id: 'updates',
    title: 'Updates to This Privacy Policy',
    content: (
      <>
        <p>
          We may update this Privacy Policy periodically to comply with changes in technology, legal requirements, or business operations. Updates will be posted on our website or within the Software.
        </p>
        <p>
          Your continued use of the Software after the updated policy is published will be considered as acceptance of the revised terms.
        </p>
        <p>
          However, any information previously collected will continue to be governed by the policy in effect at the time of collection, unless you expressly consent to changes.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      kicker="Privacy"
      titleLead="Privacy Policy"
      titleAccent="your data stays yours."
      intro="How Slatebiz Softwares collects, uses, protects, and retains your information when you use our website, applications, and software."
      readTime="5 min read"
      highlights={highlights}
      sections={sections}
      related={{ to: '/terms-of-use', label: 'Terms of Use' }}
    />
  );
}
