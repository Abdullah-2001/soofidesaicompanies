import {
  Calculator,
  Building2,
  FileCheck2,
  GraduationCap,
  Plane,
  Briefcase,
  ShieldCheck,
  Sprout,
  TrendingUp,
  HeartHandshake,
  Scale,
  Award,
  Sparkles,
  Handshake,
  Eye,
  Target,
  Leaf,
  Factory,
  Globe2,
  Truck,
  LineChart,
  PiggyBank,
  type LucideIcon,
} from 'lucide-react';

/* ----------------------------- Brand & nav ----------------------------- */

export const COMPANY = {
  name: 'Soofi Desai Companies',
  legalName: 'Soofi Desai Companies (Private) Limited',
  tagline: 'Sustainability | Development | Commitment',
  phone: '+92 321 387 5658',
  phoneHref: 'tel:+923213875658',
  email: 'soofidesaicompanies@gmail.com',
  emailHref: 'mailto:soofidesaicompanies@gmail.com',
  website: 'www.soofidesaicompanies.com',
  websiteHref: 'https://www.soofidesaicompanies.com',
  address: [
    'Al-Ahmed Centre, Office No. 6',
    'Magazine Lane, Saddar',
    'Karachi 74400, Pakistan',
  ],
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Our Approach', href: '#approach' },
  // { label: 'Future Businesses', href: '#future' },
  // { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

/* ------------------------------- Pillars ------------------------------- */

export const PILLARS = [
  {
    icon: Leaf,
    title: 'Sustainability',
    line: 'Building for lasting value.',
    desc: 'We create lasting value through responsible decisions, sustainable growth, and long-term thinking.',
  },
  {
    icon: TrendingUp,
    title: 'Development',
    line: 'Growing people, capabilities, and opportunities.',
    desc: 'We continuously develop our people, capabilities, services, and the opportunities we pursue.',
  },
  {
    icon: Handshake,
    title: 'Commitment',
    line: 'Delivering on our promises with integrity.',
    desc: 'We remain committed to delivering on our promises and maintaining the confidence placed in us.',
  },
];

/* ------------------------------ Services ------------------------------- */

export interface Service {
  icon: LucideIcon;
  title: string;
  blurb: string;
  items: string[];
  image: string;
}

export const SERVICES: Service[] = [
  {
    icon: Calculator,
    title: 'Financial & Tax Consultancy',
    blurb: 'Professional guidance on taxation, compliance, financial matters and business advisory.',
    items: [
      'Tax consultancy',
      'Tax registration and compliance support',
      'Financial consultancy',
      'Tax-related advisory',
      'Business financial guidance',
    ],
    image:
      'https://images.pexels.com/photos/6863260/pexels-photo-6863260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Building2,
    title: 'Corporate & Business Registration',
    blurb: 'Company incorporation, business registration and corporate documentation support.',
    items: [
      'Company registration',
      'Business registration',
      'Corporate documentation support',
      'Regulatory registration assistance',
      'Partnership and firm registration support',
    ],
    image:
      'https://images.pexels.com/photos/37320179/pexels-photo-37320179.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: FileCheck2,
    title: 'SRB & Regulatory Services',
    blurb: 'Regulatory registrations, statutory compliance and government registration support.',
    items: [
      'Sindh Revenue Board registration assistance',
      'Regulatory registration support',
      'Statutory compliance guidance',
      'Business-related government registrations',
    ],
    image:
      'https://images.pexels.com/photos/7964146/pexels-photo-7964146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: ShieldCheck,
    title: 'Membership & Professional Registrations',
    blurb: 'Professional body and trade association memberships with documentation assistance.',
    items: [
      'Professional body membership assistance',
      'Business and trade association membership support',
      'Documentation and application assistance',
    ],
    image:
      'https://images.pexels.com/photos/4963410/pexels-photo-4963410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: GraduationCap,
    title: 'Educational Consultancy',
    blurb: 'Guidance and advisory for students seeking educational and professional pathways.',
    items: [
      'Educational guidance',
      'Academic consultancy',
      'Student advisory services',
      'Educational opportunity guidance',
      'Career-oriented educational planning',
    ],
    image:
      'https://images.pexels.com/photos/35487002/pexels-photo-35487002.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Plane,
    title: 'Travel Consultancy',
    blurb: 'Travel planning, documentation guidance and advisory services.',
    items: [
      'Travel consultancy',
      'Travel planning assistance',
      'Documentation guidance',
      'Visa-related consultancy support, where applicable',
      'Travel advisory services',
    ],
    image:
      'https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Briefcase,
    title: 'Business & Management Consultancy',
    blurb: 'Advisory drawn from collective leadership experience across finance, operations and strategy.',
    items: [
      'Business planning',
      'Financial management',
      'Cost optimization',
      'Operational efficiency',
      'Business development',
      'Management advisory',
    ],
    image:
      'https://images.pexels.com/photos/5439478/pexels-photo-5439478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

/* ------------------------------- Values -------------------------------- */

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const CORE_VALUES: ValueItem[] = [
  {
    icon: Sprout,
    title: 'Sustainability',
    desc: 'We believe in creating lasting value through responsible decisions, sustainable growth, and long-term thinking.',
  },
  {
    icon: TrendingUp,
    title: 'Development',
    desc: 'We continuously seek opportunities to improve our people, capabilities, services, and businesses.',
  },
  {
    icon: Handshake,
    title: 'Commitment',
    desc: 'We are committed to delivering on our promises and maintaining the confidence placed in us.',
  },
  {
    icon: Scale,
    title: 'Integrity',
    desc: 'We conduct our affairs with honesty, transparency, accountability, and ethical responsibility.',
  },
  {
    icon: Award,
    title: 'Professionalism',
    desc: 'We uphold professional standards in every engagement and approach every assignment with competence and diligence.',
  },
  {
    icon: Sparkles,
    title: 'Excellence',
    desc: 'We strive for continuous improvement and seek to deliver quality in everything we do.',
  },
  {
    icon: Eye,
    title: 'Innovation',
    desc: 'We remain open to new ideas, technologies, approaches, and opportunities that create meaningful value.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust',
    desc: 'We believe that lasting business relationships are built through reliability, transparency, and mutual respect.',
  },
];

/* ------------------------------ Approach -------------------------------- */

export const APPROACH_STEPS = [
  {
    no: '01',
    title: 'Understand',
    desc: 'We listen carefully to understand the client\u2019s requirements, objectives, and circumstances.',
  },
  {
    no: '02',
    title: 'Assess',
    desc: 'We examine the relevant information and identify the available options and requirements.',
  },
  {
    no: '03',
    title: 'Advise',
    desc: 'We provide practical and professional guidance designed around the client\u2019s needs.',
  },
  {
    no: '04',
    title: 'Execute',
    desc: 'Where engaged to do so, we assist with the relevant processes, documentation, registrations, and coordination.',
  },
  {
    no: '05',
    title: 'Support',
    desc: 'We aim to build long-term relationships and remain available to support clients as their needs evolve.',
  },
];

/* -------------------------- Future businesses -------------------------- */

export const FUTURE_BUSINESSES = [
  {
    icon: Factory,
    title: 'Manufacturing',
    desc: 'Building upon more than five decades of manufacturing experience within our leadership, we intend to explore opportunities in manufacturing and operational businesses.',
    image:
      'https://images.pexels.com/photos/2760286/pexels-photo-2760286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: TrendingUp,
    title: 'Trading',
    desc: 'Exploring opportunities to participate in domestic and international trading activities.',
    image:
      'https://images.pexels.com/photos/4963410/pexels-photo-4963410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Globe2,
    title: 'Import & Export',
    desc: 'Developing capabilities to participate in international commerce and cross-border business opportunities.',
    image:
      'https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Truck,
    title: 'Distribution',
    desc: 'Exploring distribution opportunities across selected products and markets.',
    image:
      'https://images.pexels.com/photos/7178310/pexels-photo-7178310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: PiggyBank,
    title: 'Business Investments',
    desc: 'Identifying commercially viable opportunities that align with our values and long-term growth objectives.',
    image:
      'https://images.pexels.com/photos/936721/pexels-photo-936721.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

/* ----------------------------- Why choose us --------------------------- */

export const WHY_CHOOSE_US = [
  {
    icon: Award,
    title: 'Experienced Leadership',
    desc: 'Our leadership brings together diverse experience across finance, consultancy, education, healthcare, psychology, manufacturing, and operations.',
  },
  {
    icon: Eye,
    title: 'Multi-Disciplinary Perspective',
    desc: 'We combine different areas of professional expertise to provide a broader perspective when addressing client needs.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Service',
    desc: 'We believe every client and every requirement is different. Our approach focuses on understanding individual circumstances.',
  },
  {
    icon: Scale,
    title: 'Professional Integrity',
    desc: 'We believe trust is earned through honesty, transparency, accountability, and consistent professional conduct.',
  },
  {
    icon: LineChart,
    title: 'Long-Term Thinking',
    desc: 'Our objective is not simply to complete a transaction. We aim to build relationships and create lasting value.',
  },
  {
    icon: TrendingUp,
    title: 'Growing Capabilities',
    desc: 'As the company develops, we continue to expand our capabilities and explore new opportunities.',
  },
];

/* ------------------------------ Leadership ----------------------------- */

export interface Leader {
  name: string;
  role: string;
  image: string;
  summary: string;
  paras: string[];
}

export const LEADERS: Leader[] = [
  {
    name: 'Muhammad Ahmed Soofi Desai',
    role: 'Chief Executive Officer',
    image:
      'https://images.pexels.com/photos/34299170/pexels-photo-34299170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary:
      'MBA graduate with approximately 10 years of professional experience in financial and consultancy matters.',
    paras: [
      'Over the course of his career, he has worked with and provided professional services to organizations across different sectors, including companies, banks, and service-sector businesses. His professional experience includes financial matters, taxation, corporate and business registration, regulatory requirements, and consultancy services.',
      'As Chief Executive Officer, he is responsible for providing the strategic direction of Soofi Desai Companies and developing the company\u2019s professional services platform and long-term diversification strategy. His vision is to establish the company as a trusted professional services and business group built on integrity, expertise, sustainable growth, and long-term value creation.',
    ],
  },
  {
    name: 'Dr. Nabeea Soomro',
    role: 'Director',
    image:
      'https://images.pexels.com/photos/33067699/pexels-photo-33067699.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary:
      'Medical consultant with approximately 7 years of professional experience.',
    paras: [
      'Alongside her medical and professional background, she brings experience and insight in educational consultancy and psychological matters. As a Director, she contributes to the development of the company\u2019s educational consultancy and related advisory services, with a particular focus on understanding individual needs, providing responsible guidance, and supporting informed decisions.',
      'Her multidisciplinary perspective contributes to the company\u2019s objective of delivering people-focused professional services.',
    ],
  },
  {
    name: 'Dawood Soofi Desai',
    role: 'Director',
    image:
      'https://images.pexels.com/photos/33040145/pexels-photo-33040145.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary:
      'More than 50 years of experience in the manufacturing sector.',
    paras: [
      'Throughout his extensive career, he has worked with different manufacturing organizations and developed significant practical knowledge of manufacturing operations, cost management, process efficiency, and business operations.',
      'As a Director, he contributes his extensive industry knowledge and experience to the company\u2019s long-term strategy, particularly in relation to manufacturing, operational efficiency, cost optimization, and business development. His experience provides an important foundation for the company\u2019s ambition to explore opportunities in the manufacturing sector in the future.',
    ],
  },
];

/* ------------------------------- Insights ------------------------------ */

export const INSIGHT_CATEGORIES = [
  'Tax Updates',
  'Business & Corporate Updates',
  'Regulatory Updates',
  'Educational Guidance',
  'Travel Information',
  'Business Insights',
  'Company News',
];

export const MISSION_POINTS = [
  'Deliver professional and dependable services to our clients.',
  'Provide practical solutions based on knowledge and experience.',
  'Maintain the highest standards of integrity and professionalism.',
  'Build lasting relationships based on trust and transparency.',
  'Continuously develop our capabilities and service offerings.',
  'Identify and pursue sustainable opportunities for business growth.',
  'Expand progressively into new sectors while maintaining responsible business practices.',
  'Create long-term value for our clients, partners, and stakeholders.',
];
