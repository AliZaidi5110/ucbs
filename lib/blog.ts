export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  category: string;
  readTime: number;
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "uk-merchant-guide-slashing-card-processing-fees",
    title: "The UK Merchant Guide to Slashing Card Processing Fees by 40%",
    excerpt: "Discover how to eliminate hidden PCI compliance penalties, negotiate interchange-plus rates, and choose the right terminal provider.",
    content: "",
    publishedAt: "2024-02-15",
    author: "Emma Richardson",
    category: "Card Machines",
    readTime: 6,
    tags: ["Card Terminals", "Transaction Fees", "Merchant Advice"],
    featured: true,
  },
  {
    slug: "merchant-cash-advance-vs-traditional-bank-loans",
    title: "Merchant Cash Advance vs Bank Loans: Which is Better for Your Business?",
    excerpt: "Why thousands of British retailers, pubs, and restaurants choose revenue-based cash advances over slow, rigid high street bank loans.",
    content: "",
    publishedAt: "2024-02-28",
    author: "James Mitchell",
    category: "Business Funding",
    readTime: 8,
    tags: ["Merchant Cash Advance", "SME Funding", "Cash Flow"],
    featured: true,
  },
  {
    slug: "how-to-get-business-funding-from-card-machine-sales",
    title: "How to Unlock £5k to £500k in Business Funding from Your Card Terminal",
    excerpt: "Learn how lenders evaluate your daily card machine turnover to grant 24-hour approvals with zero property or asset security required.",
    content: "",
    publishedAt: "2024-03-05",
    author: "David Chen",
    category: "Business Funding",
    readTime: 7,
    tags: ["Working Capital", "Card Sales", "Fast Loans"],
    featured: true,
  },
  {
    slug: "portable-4g-vs-countertop-card-machine-guide",
    title: "Portable 4G vs Countertop: Choosing the Right Card Terminal for Your Sector",
    excerpt: "A comprehensive breakdown of wireless battery life, 4G SIM failovers, and integrated touchscreen POS for retail and hospitality.",
    content: "",
    publishedAt: "2024-03-12",
    author: "Sarah Collins",
    category: "Card Machines",
    readTime: 5,
    tags: ["POS Hardware", "Hospitality", "Retail"],
    featured: false,
  },
  {
    slug: "can-you-get-business-funding-with-bad-credit-uk",
    title: "Can You Qualify for UK Business Funding with Poor Credit or CCJs?",
    excerpt: "Why consistent card terminal sales matter far more than personal credit scores when applying for a Merchant Cash Advance.",
    content: "",
    publishedAt: "2024-03-20",
    author: "Lisa Thompson",
    category: "Business Funding",
    readTime: 6,
    tags: ["Credit Score", "Eligibility", "MCA"],
    featured: false,
  },
  {
    slug: "next-day-settlements-why-fast-payouts-matter",
    title: "Next-Day Settlements: Why Faster Card Payouts Supercharge Cash Flow",
    excerpt: "Stop waiting 3-5 days for your money. How next-morning 10am payouts help UK business owners manage supplier invoices effortlessly.",
    content: "",
    publishedAt: "2024-03-26",
    author: "James Mitchell",
    category: "Card Machines",
    readTime: 5,
    tags: ["Cash Flow", "Settlement Speed", "Merchant Acquirers"],
    featured: false,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}
