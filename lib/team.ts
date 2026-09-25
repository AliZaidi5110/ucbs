export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "James Mitchell",
    role: "Founder & Commercial Director",
    bio: "With over 15 years in UK commercial finance and merchant acquiring, James leads UCBS with a mission to help SMEs access fair, fast capital and modern payment hardware.",
  },
  {
    id: "2",
    name: "Emma Richardson",
    role: "Head of Merchant Acquirer Partnerships",
    bio: "Emma liaises with leading UK payment gateways and acquirers to negotiate market-beating transaction rates from 0.4% and zero-upfront terminal deals for our clients.",
  },
  {
    id: "3",
    name: "David Chen",
    role: "Lead Business Funding Underwriter",
    bio: "David oversees Merchant Cash Advance approvals, matching UK merchants with non-bank lenders for 24-hour decisions and 90%+ acceptance rates.",
  },
  {
    id: "4",
    name: "Sarah Collins",
    role: "Client Onboarding Manager",
    bio: "Sarah ensures terminal switches are completely seamless with zero trading downtime, handling plug-and-play dispatch and account setup.",
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "Senior Business Finance Specialist",
    bio: "Lisa advises retail, pub, and restaurant owners on leveraging daily card revenue to unlock unsecured working capital without giving personal guarantees.",
  },
  {
    id: "6",
    name: "Michael Brown",
    role: "Commercial Utilities Analyst",
    bio: "Michael helps our merchant community consolidate business broadband, cloud VoIP, and energy tariffs to protect their operational margins.",
  },
];

export interface Achievement {
  id: string;
  value: string;
  label: string;
}

export const achievements: Achievement[] = [
  { id: "1", value: "2,500+", label: "UK Merchants Supported" },
  { id: "2", value: "£15M+", label: "Capital Funded" },
  { id: "3", value: "90%+", label: "Funding Approval Rate" },
  { id: "4", value: "24h", label: "Average Payout Time" },
];
