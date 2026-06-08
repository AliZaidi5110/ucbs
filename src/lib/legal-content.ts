export const LEGAL_COMPANY = "Utility Concepts Business Solutions Ltd";
export const LEGAL_SHORT = "UCBS";
export const LEGAL_LAST_UPDATED = "June 2026";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

export const policySections: LegalSection[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      `${LEGAL_COMPANY} ("${LEGAL_SHORT}", "we", "us", "our") is committed to protecting your privacy and being transparent about our services. This document explains how we handle data, our role as a business introducer, and the terms governing use of our website and services.`,
      "This policy complies with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.",
    ],
  },
  {
    title: "2. About Us & Our Role",
    paragraphs: [
      "UCBS provides business support and cost-saving services to UK businesses. Our role is strictly limited to reviewing business requirements and introducing customers to third-party providers of services including (but not limited to) utilities, funding, telecoms, payments, insurance, and other business-related services.",
      "UCBS acts solely as an introducer. We are not a lender, broker, bank, insurer, or financial institution. We do not:",
    ],
    list: [
      "Provide loans, credit, or regulated financial products",
      "Make decisions on approvals, pricing, or contract terms",
      "Guarantee acceptance, savings, or outcomes",
    ],
  },
  {
    title: "3. Information We Collect",
    paragraphs: [
      "We may collect personal and business information including:",
      "You confirm that all information provided to us is accurate and complete.",
    ],
    list: [
      "Name and business name",
      "Email address and telephone number",
      "Business requirements and related details",
    ],
  },
  {
    title: "4. How We Use Your Information",
    paragraphs: ["We use information to:", "We do not sell your data."],
    list: [
      "Contact you regarding your enquiry",
      "Assess your business requirements",
      "Introduce you to relevant third-party providers",
      "Comply with legal and regulatory obligations",
    ],
  },
  {
    title: "5. Data Sharing & Protection",
    paragraphs: [
      "Information may be shared with trusted third-party providers solely for the purpose of making introductions. All data is processed in accordance with UK GDPR.",
      "We are ICO registered and handle personal data in line with our obligations as a UK data controller.",
    ],
  },
  {
    title: "6. Fees & Commission",
    paragraphs: [
      "UCBS may receive a commission or introduction fee from third-party providers where an introduction results in a completed agreement. This does not usually affect the price you pay unless stated by the provider.",
    ],
  },
  {
    title: "7. Third-Party Agreements",
    paragraphs: [
      "Any agreement you enter into will be directly between you and the third-party provider. UCBS is not a party to these agreements and has no responsibility for their terms, performance, or outcomes. You are responsible for reviewing all documentation before entering into any agreement.",
    ],
  },
  {
    title: "8. No Financial, Legal or Tax Advice",
    paragraphs: [
      "Nothing on this website or provided by UCBS constitutes financial, legal, tax, or professional advice. All information is provided for general information purposes only. You should seek independent professional advice before making any decisions.",
    ],
  },
  {
    title: "9. Website Disclaimer",
    paragraphs: [
      "The content on this website is provided for general information only and should not be relied upon. UCBS makes no representations or warranties regarding accuracy, completeness, or suitability of information.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    paragraphs: ["To the fullest extent permitted by law, UCBS is not liable for:"],
    list: [
      "Any losses arising from agreements with third-party providers",
      "Decisions made based on information on this website",
      "Delays or losses caused by incorrect or incomplete information provided by the customer",
    ],
  },
  {
    title: "11. Your Data Rights",
    paragraphs: [
      "Under UK GDPR, you have the right to:",
      "You may also lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.",
    ],
    list: [
      "Access your data",
      "Request correction or erasure",
      "Object to or restrict processing",
    ],
  },
  {
    title: "12. Changes to This Policy",
    paragraphs: [
      "This document may be updated from time to time. Continued use of our website or services constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "13. Governing Law",
    paragraphs: [
      "This policy is governed by and construed in accordance with the laws of England and Wales.",
    ],
  },
];

export const cookieSections: LegalSection[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      `This Cookie Statement explains how ${LEGAL_COMPANY} ("${LEGAL_SHORT}", "we", "us") uses cookies and similar technologies on ucbsltd.co.uk. It should be read alongside our Privacy Policy.`,
      "We comply with the UK Privacy and Electronic Communications Regulations (PECR) and UK GDPR when placing cookies on your device.",
    ],
  },
  {
    title: "2. What Are Cookies?",
    paragraphs: [
      "Cookies are small text files stored on your computer, tablet, or mobile device when you visit a website. They help websites function properly, remember preferences, and understand how visitors use the site.",
      "Similar technologies such as local storage and session storage may also be used for essential site functionality.",
    ],
  },
  {
    title: "3. How We Use Cookies",
    paragraphs: ["We use cookies for the following purposes:"],
    list: [
      "Strictly necessary cookies — required for the website to operate, including security and form submission",
      "Functional cookies — remember your preferences and improve your experience",
      "Analytics cookies — help us understand how visitors use our website so we can improve it (only where consent is given, where applicable)",
    ],
  },
  {
    title: "4. Cookies We May Use",
    paragraphs: [
      "The table below describes the main categories of cookies that may be used on our website:",
    ],
    list: [
      "Session cookies — temporary cookies deleted when you close your browser",
      "Persistent cookies — remain on your device for a set period or until deleted",
      "First-party cookies — set by UCBS directly",
      "Third-party cookies — set by trusted partners such as analytics or security providers",
    ],
  },
  {
    title: "5. Managing Your Cookie Preferences",
    paragraphs: [
      "When you first visit our website, you can accept or reject non-essential cookies through our cookie banner (where displayed).",
      "You can also control cookies through your browser settings. Most browsers allow you to block or delete cookies. Please note that blocking strictly necessary cookies may affect how the website functions.",
      "For guidance on managing cookies, visit the ICO website at ico.org.uk or your browser's help section.",
    ],
  },
  {
    title: "6. Third-Party Cookies",
    paragraphs: [
      "Some third-party services embedded on our site (for example, security or analytics tools) may set their own cookies. We do not control these cookies. Please review the relevant third-party privacy and cookie policies for more information.",
    ],
  },
  {
    title: "7. Data Protection & ICO Registration",
    paragraphs: [
      "We are ICO registered. Personal data collected through cookies is processed in accordance with UK GDPR and our Privacy Policy.",
      "If you have questions about our use of cookies or wish to exercise your data rights, contact us at info@ucbsltd.co.uk.",
    ],
  },
  {
    title: "8. Updates to This Statement",
    paragraphs: [
      "We may update this Cookie Statement from time to time to reflect changes in technology, law, or our practices. The latest version will always be published on this page.",
    ],
  },
  {
    title: "9. Contact Us",
    paragraphs: [
      `${LEGAL_COMPANY}, 12 Scotchwell View, Haverfordwest, Wales, SA61 2RE`,
      "Email: info@ucbsltd.co.uk | Telephone: +44 (0) 1437 957009",
    ],
  },
];
