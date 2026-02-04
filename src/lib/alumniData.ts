export interface Alumni {
  id: number;
  name: string;
  batch: string;
  title: string;
  organization: string;
  image: string;
  achievement: string;
  category: string;
  linkedin: string;
  bio?: string;
  specialization?: string;
  awards?: string[];
  publications?: string[];
  contact?: {
    email?: string;
    website?: string;
  };
}

export const distinguishedAlumni: Alumni[] = [
  {
    id: 1,
    name: 'Hon. Justice Sarah Mitchell',
    batch: '1995',
    title: 'Supreme Court Justice',
    organization: 'Supreme Court of India',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    achievement: 'First woman Chief Justice, authored landmark judgments on constitutional rights',
    category: 'Judiciary',
    linkedin: '#',
    bio: 'Justice Sarah Mitchell is a trailblazer in the Indian legal system, becoming the first woman Chief Justice of India. Her judicial career spans over two decades, marked by landmark judgments on constitutional rights and social justice. She is known for her balanced approach to constitutional interpretation and her commitment to protecting fundamental rights.',
    specialization: 'Constitutional Law, Human Rights',
    awards: ['Padma Shri Award (2020)', 'Best Judge Award (2018)', 'Constitutional Excellence Award (2022)'],
    publications: ['Constitutional Rights in Modern India', 'Judicial Review and Social Justice', 'The Evolution of Constitutional Thought'],
    contact: {
      email: 'justice.sarah.mitchell@supremecourt.gov.in',
      website: 'https://supremecourt.gov.in',
    },
  },
  {
    id: 2,
    name: 'Adv. James Richardson',
    batch: '1998',
    title: 'Senior Advocate',
    organization: 'Supreme Court Bar Association',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    achievement: 'Argued 100+ cases before Supreme Court, Forbes Legal Powerlist 2025',
    category: 'Litigation',
    linkedin: '#',
    bio: 'Adv. James Richardson is one of the most sought-after senior advocates in India with a stellar track record of winning landmark cases. His expertise spans constitutional law, commercial litigation, and public law. He has been featured in Forbes Legal Powerlist consecutively for 5 years.',
    specialization: 'Constitutional Law, Commercial Litigation, Public Law',
    awards: ['Forbes Legal Powerlist 2025', 'Best Litigator Award (2023)', 'Excellence in Advocacy (2021)'],
    publications: ['Landmark Supreme Court Cases', 'The Art of Argumentation', 'Navigating Complex Litigation'],
    contact: {
      email: 'james@richardsonadvocates.com',
      website: 'https://richardsonadvocates.com',
    },
  },
  {
    id: 3,
    name: 'Prof. Emily Chen',
    batch: '2001',
    title: 'Dean of Law School',
    organization: 'Harvard Law School',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    achievement: 'Leading expert in Constitutional Law, authored 5 books on legal theory',
    category: 'Academia',
    linkedin: '#',
    bio: 'Prof. Emily Chen is a renowned legal scholar and educator with a PhD in Constitutional Law from Yale University. As Dean of Harvard Law School, she has been instrumental in modernizing legal education and promoting interdisciplinary legal studies. Her research focuses on constitutional theory and comparative constitutional law.',
    specialization: 'Constitutional Law, Legal Theory, Comparative Law',
    awards: ['Distinguished Scholar Award (2024)', 'Best Professor Award (2022)', 'Fulbright Fellowship (2015)'],
    publications: [
      'Constitutional Theory in the Modern Era',
      'Comparative Constitutional Systems',
      'The Future of Legal Education',
      'Gender and Constitutional Rights',
      'Jurisprudence: Past, Present, and Future',
    ],
    contact: {
      email: 'emily.chen@harvard.edu',
      website: 'https://law.harvard.edu',
    },
  },
  {
    id: 4,
    name: 'Adv. Michael Torres',
    batch: '2003',
    title: 'Managing Partner',
    organization: 'Torres & Associates',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    achievement: 'Youngest senior advocate, specializes in corporate and M&A law',
    category: 'Corporate Law',
    linkedin: '#',
    bio: 'Adv. Michael Torres is the youngest designated senior advocate in India, known for his expertise in complex M&A transactions and corporate restructuring. Under his leadership, Torres & Associates has grown to become one of the top corporate law firms in Asia. He has advised Fortune 500 companies on multimillion-dollar transactions.',
    specialization: 'Corporate Law, M&A, Insolvency',
    awards: ['Young Achiever Award (2022)', 'Best Corporate Lawyer (2021)', 'India Business Leadership Award (2023)'],
    publications: ['M&A in Indian Markets', 'Corporate Restructuring Best Practices', 'The Future of Corporate Law'],
    contact: {
      email: 'michael@torresassociates.com',
      website: 'https://torresassociates.com',
    },
  },
  {
    id: 5,
    name: 'Adv. Amanda Foster',
    batch: '1992',
    title: 'Human Rights Advocate',
    organization: 'International Court of Justice',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face',
    achievement: 'Represented landmark human rights cases, UN Human Rights Council member',
    category: 'Human Rights',
    linkedin: '#',
    bio: 'Adv. Amanda Foster is a pioneering human rights advocate with over 30 years of experience in international human rights law. She has represented numerous landmark cases before international courts and tribunals. As a member of the UN Human Rights Council, she has been instrumental in advocating for vulnerable populations.',
    specialization: 'Human Rights Law, International Law, Gender Justice',
    awards: ['UN Human Rights Award (2023)', 'Right Livelihood Award (2020)', 'Global Justice Champion (2019)'],
    publications: ['Human Rights in the 21st Century', 'Women and International Law', 'Justice for All: Global Perspectives'],
    contact: {
      email: 'amanda@internationalhumanrights.org',
      website: 'https://internationalhumanrights.org',
    },
  },
  {
    id: 6,
    name: 'Adv. Robert Chang',
    batch: '1997',
    title: 'Intellectual Property Expert',
    organization: 'World Intellectual Property Organization',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    achievement: 'Pioneer in cyber law and IP rights, advised Fortune 500 companies',
    category: 'IP & Cyber Law',
    linkedin: '#',
    bio: 'Adv. Robert Chang is a leading expert in intellectual property law and cybersecurity. He has advised major technology companies and startups on IP strategy, patent prosecution, and cyber law matters. His thought leadership on emerging technologies has made him a sought-after speaker at international forums.',
    specialization: 'Intellectual Property, Cyber Law, Technology Law',
    awards: ['IP Expert of the Year (2023)', 'Best Tech Lawyer Award (2022)', 'Innovation in Law Award (2021)'],
    publications: ['IP Law in the Digital Age', 'Cybersecurity and Legal Compliance', 'Protecting Innovation: A Global Guide'],
    contact: {
      email: 'robert.chang@wipo.int',
      website: 'https://wipo.int',
    },
  },
  {
    id: 7,
    name: 'Hon. Justice Lisa Thompson',
    batch: '2005',
    title: 'High Court Judge',
    organization: 'Delhi High Court',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    achievement: 'Youngest appointed High Court judge, expert in family and criminal law',
    category: 'Judiciary',
    linkedin: '#',
    bio: 'Justice Lisa Thompson is the youngest appointed judge in the Delhi High Court, known for her progressive judgments on social issues. With a focus on family law and criminal justice reform, she has authored several important judgments that have set new precedents. Her compassionate approach to justice has earned widespread acclaim.',
    specialization: 'Criminal Law, Family Law, Social Justice',
    awards: ['Young Judge Award (2022)', 'Social Justice Champion (2021)', 'Distinguished Judge Award (2023)'],
    publications: ['Criminal Justice Reform', 'Family Law in Modern Society', 'Judicial Compassion and Justice'],
    contact: {
      email: 'justice.lisa.thompson@delhihighcourt.gov.in',
      website: 'https://delhihighcourt.gov.in',
    },
  },
  {
    id: 8,
    name: 'Adv. Marcus Johnson',
    batch: '1990',
    title: 'Attorney General',
    organization: 'State Government',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    achievement: 'Former Solicitor General, led major constitutional reforms',
    category: 'Government',
    linkedin: '#',
    bio: 'Adv. Marcus Johnson served as Solicitor General for over a decade before transitioning to practice. He has been instrumental in major constitutional reforms and has advised governments on critical legal matters. His work on constitutional law and governance is widely recognized and cited in academic circles.',
    specialization: 'Constitutional Law, Administrative Law, Government Policy',
    awards: ['Padma Bhushan (2022)', 'Constitutional Excellence Award (2020)', 'Lifetime Achievement Award (2023)'],
    publications: ['Constitutional Governance', 'Administrative Law Essentials', 'The Art of Constitutional Reform'],
    contact: {
      email: 'marcus.johnson@stategovernment.gov',
      website: 'https://stategovernment.gov',
    },
  },
];

export function getAlumniById(id: number): Alumni | undefined {
  return distinguishedAlumni.find((alumni) => alumni.id === id);
}

export function getAlumniBySlug(slug: string): Alumni | undefined {
  const slugToId: { [key: string]: number } = {
    'hon-justice-sarah-mitchell': 1,
    'adv-james-richardson': 2,
    'prof-emily-chen': 3,
    'adv-michael-torres': 4,
    'adv-amanda-foster': 5,
    'adv-robert-chang': 6,
    'hon-justice-lisa-thompson': 7,
    'adv-marcus-johnson': 8,
  };
  const id = slugToId[slug];
  return id ? getAlumniById(id) : undefined;
}
