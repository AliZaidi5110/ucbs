import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CATEGORIES = [
  "Energy & Utilities",
  "Merchant Services",
  "Broadband & VoIP",
  "Business Finance",
  "Eco Solutions",
  "Operations & Risk",
];

// Helper to generate a realistic article
function createMockArticle(index: number) {
  const categoryIndex = index % CATEGORIES.length;
  const category = CATEGORIES[categoryIndex];
  
  let title = "";
  let excerpt = "";
  let tags = "";
  
  switch (category) {
    case "Energy & Utilities":
      title = `Ultimate Guide to Business Utility Audits: Article #${index}`;
      excerpt = `Discover how standard UK enterprises are saving up to 30% on gas and electricity bills through third-party brokerage audits.`;
      tags = "utilities,energy,savings";
      break;
    case "Merchant Services":
      title = `SME Guide to Card Payment Terminal Rates: Article #${index}`;
      excerpt = `We trace the differences between interchange fees, terminal rental fees, and gateway charges to save your retail business capital.`;
      tags = "merchant,card,terminals";
      break;
    case "Broadband & VoIP":
      title = `Preparing for the UK ISDN Copper Switchoff: Article #${index}`;
      excerpt = `Learn why migrating to modern VoIP business phone lines is critical before BT phases out copper infrastructure.`;
      tags = "telecoms,voip,broadband";
      break;
    case "Business Finance":
      title = `How to Navigate Unsecured Business Loans: Article #${index}`;
      excerpt = `Our financial consultants explain cash flow loans, equipment financing, and how broker introductions streamline loan approvals.`;
      tags = "finance,funding,sme";
      break;
    case "Eco Solutions":
      title = `Capital Allowances on Commercial Solar Panel Setups: Article #${index}`;
      excerpt = `Understand HMRC tax write-offs and installation incentives when fitting solar panel systems to corporate offices.`;
      tags = "solar,green,tax";
      break;
    default:
      title = `Optimizing Operational Compliance for SMEs: Article #${index}`;
      excerpt = `From corporate liability cover to commercial waste sorting rules, verify your company standards are fully compliant.`;
      tags = "operations,waste,compliance";
      break;
  }

  // Make titles and slugs unique and appealing
  const slugTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const finalTitle = `${title.split(": ")[0]} (Part ${index})`;
  const slug = `${slugTitle}-part-${index}`;

  const content = `
    <h2>Introduction</h2>
    <p>Operating costs represent a major challenge for businesses in the UK. Managing cash flow requires constant vigilance, especially when dealing with utilities, merchant card processing, and connectivity contracts. This article details the primary indicators that your business might be overpaying for essential overhead services.</p>
    
    <h2>Understanding the Market Landscapes</h2>
    <p>In many sectors, pricing models are intentionally complex. Suppliers rely on automatic contract roll-overs and introductory rates that expire quickly. For example, commercial energy contracts do not feature standard cooling-off periods. Once you agree to an electricity or gas tariff, your company is committed for the duration of the term, regardless of market shifts.</p>
    
    <h3>Key Indicators You Are Overpaying</h3>
    <ul>
      <li>Your rates increased automatically without written notifications.</li>
      <li>You are currently out of contract and on variable-rate emergency tariffs.</li>
      <li>Your merchant accounts show high miscellaneous admin fees every month.</li>
    </ul>

    <h2>How Auditing Helps</h2>
    <p>A professional utility audit reviews your current bills line-by-line. Comparison experts cross-reference details with active wholesale supplier matrices to locate the lowest available tariff rates, managing transfer forms so your business doesn't suffer any downtime during the transition.</p>

    <h2>Conclusion</h2>
    <p>Managing operational bills can be time-consuming. Utilizing professional utility brokers allows you to identify savings, streamline billing, and focus capital back on growing your business. Reach out to our Haverfordwest advisors to arrange a free, zero-obligation billing review today.</p>
  `;

  return {
    slug,
    title: finalTitle,
    excerpt,
    content,
    category,
    readTime: `${Math.floor(Math.random() * 5) + 3} min read`,
    author: "Himadhar Alahari",
    image: `/images/blog-${(index % 5) + 1}.jpg`,
    tags,
    publishedAt: new Date(Date.now() - index * 24 * 60 * 60 * 1000), // Stagger dates back in time
  };
}

async function main() {
  console.log("Seeding blog posts...");

  // Clear existing
  await prisma.blogPost.deleteMany({});

  // Generate 50 posts
  const posts = [];
  for (let i = 1; i <= 50; i++) {
    posts.push(createMockArticle(i));
  }

  // Insert into DB
  for (const post of posts) {
    await prisma.blogPost.create({
      data: post,
    });
  }

  console.log(`Seeding complete. Inserted ${posts.length} blog posts.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
