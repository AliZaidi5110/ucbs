export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Our high street bank took 4 weeks and still couldn't give us a decision. UCBS approved £35,000 within 24 hours based on our card machine sales and cut our transaction fees by 40% with their new touch terminals.",
    author: "Marco Bellini",
    role: "Managing Director",
    company: "Bellini Bistro & Bar, Leeds",
    rating: 5,
  },
  {
    id: "2",
    quote: "Switching card terminals was completely painless with zero trading downtime. We received our £20,000 cash advance the very next day. Repayments move with our card sales, which makes cash flow stress-free during quiet weeks.",
    author: "Chloe Jenkins",
    role: "Founder",
    company: "Luxe Hair & Aesthetics, Birmingham",
    rating: 5,
  },
  {
    id: "3",
    quote: "The 4G portable terminals are lightning-fast. Best of all, we qualified for £50,000 working capital to stock up before Christmas without risking any personal assets or property. Truly top-tier commercial service.",
    author: "Gareth Davies",
    role: "Owner",
    company: "Apex Commercial Retail, Manchester",
    rating: 5,
  },
  {
    id: "4",
    quote: "We were paying over 1.8% in processing fees with our old provider. UCBS dropped our rates down to 0.45%, saving us £300+ every single month, plus arranged emergency equipment funding within 48 hours.",
    author: "Sarah O'Connor",
    role: "Operations Manager",
    company: "The Harbour Seafood Grill, Bristol",
    rating: 5,
  },
  {
    id: "5",
    quote: "Honest, fast, and transparent. No hidden PCI compliance penalties and no surprise monthly deductions. Having our card machine and funding handled by one dedicated UK team has been a game-changer.",
    author: "Tariq Mahmood",
    role: "Director",
    company: "Mahmood & Sons Supermarkets, London",
    rating: 5,
  },
];
