
import React from 'react';
import { Project, Experience, Recognition, Blog } from './types';

const data = 'images/data_analysis.png';
const portweb = 'images/port_web.png';
const intern = 'images/internship.png';
const swing = 'images/swing_page.png';

const datafile = 'files/Lemuel Data Analysis.pdf'

const da1 = 'images/da1.png';
const da2 = 'images/da2.png';
const da3 = 'images/da3.png';
const da4 = 'images/da4.png';

const pw1 = 'images/pw1.png';
const pw2 = 'images/pw2.png';
const pw3 = 'images/pw3.png';
const pw4 = 'images/pw4.png';

const if1 = 'images/if1.jpg';
const if2 = 'images/if2.jpg';
const if3 = 'images/if3.jpg';
const if4 = 'images/if4.jpg';

const sb1 = 'images/sb1.png';
const sb2 = 'images/sb2.png';
const sb3 = 'images/sb3.png';
const sb4 = 'images/sb4.png';


const lem1 = 'gallery/lemuel1.webp';
const lem2 = 'gallery/lemuel2.webp';
const lem3 = 'gallery/lemuel3.webp';
const lem4 = 'gallery/lemuel4.webp';
const lem5 = 'gallery/lemuel5.webp';
const lem6 = 'gallery/lemuel6.webp';
const lem7 = 'gallery/lemuel7.webp';
const lem8 = 'gallery/lemuel8.webp';

export const EXPERIENCES: Experience[] = [
  {
    role: "Freelance/Developer",
    company: "Self-Employed",
    period: "January 2026-Present",
    responsibilities: [
      "Creating websites and programming various digital solutions.",
      "Engaging in side quests and continuous learning to stay ahead in the tech industry."
    ]
  },
  {
    role: "Advisor II, Cust. Assoc.",
    company: "Concentrix",
    period: "June 2024 – January 2026",
    responsibilities: [
      "Promoted to Advisor II and recognized as a top performer for three consecutive quarters.",
      "Catering to customer inquiries through both calls and emails."
    ]
  }
];

export const BLOGS: Blog[] = [
  {
    id: 'entrepreneurial-finance-studies',
    title: 'Diving Deep into Entrepreneurial Finance',
    date: 'May 30, 2026',
    category: 'Professional',
    preview: 'Exploring the complex world of the financial industry, investment strategies, and the economics of venture capital through the lens of equity.',
    content: 'My current studies have taken a deep dive into the fascinating world of Entrepreneurial Finance. This field is a powerful combination of financial industry insights, investment dynamics, and the intricacies of venture investing.\n\nI am exploring the specific mindset of a venture capitalist, delving into the underlying economics and the critical role of equity in long-term value creation. By mastering these concepts, I am equipping myself with a deep understanding of how capital flows within the industry, ensuring that projects are backed by solid financial foundations and strategic investment frameworks.'
  },
  {
    id: 'staying-inspired-tech-business',
    title: 'How I Stay Inspired: Balancing Tech Passion and Business Studies',
    date: 'May 5, 2026',
    category: 'Professional',
    preview: 'Staying curious and inspired by merging entrepreneurship stories with experimental small-scale tech projects.',
    content: 'Maintaining a balance between my passion for technology and my business studies requires a constant stream of inspiration. I stay curious by actively watching and reading stories from successful entrepreneurs who have navigated similar paths.\n\nBrainstorming and experimenting with small projects allows me to apply what I learn in real-time, keeping the learning process exciting. By blending theoretical business concepts with practical technical implementation, I ensure that my skills remain sharp and relevant. This continuous cycle of discovery and creation is what fuels my drive to innovate and build meaningful digital solutions.'
  },
  {
    id: 'finding-balance-travel',
    title: '\"Then He Flings It\": Jin\'s Words That Changed How I Think',
    date: 'April 12, 2026',
    category: 'Personal',
    preview: 'How a single unbothered quote from BTS\'s Jin became my personal philosophy for dealing with uncertainty and overthinking.',
    content: 'There\'s a moment from BTS\'s In the Soop where Jin watches someone handle a pajeon and casually says, "What if he flings it? Then he flings it." I stumbled across it on a late night scroll and laughed, then couldn\'t stop thinking about it. Seven words that somehow summed up everything I\'ve been struggling to practice: letting go of outcomes I was never in control of in the first place.\n\nI used to spend so much energy dreading the what ifs that I forgot to actually live the what is. Jin\'s words hit differently because they weren\'t advice, they were just him, completely unbothered, choosing peace over panic. And that\'s the version of myself I\'m working toward. Not careless, not reckless, just someone who does their best, releases the rest, and trusts that whatever gets flung, they\'ll handle it.'
  },
  {
    id: 'startup-inspiration',
    title: 'How "Start-Up" K-Drama Sparked My Passion for Tech and Business',
    date: 'March 17, 2026',
    category: 'Personal',
    preview: 'Reflecting on the K-drama that changed my career path and inspired me to dive into the world of coding and entrepreneurship.',
    content: 'Watching the K-drama "Start-Up" was a definitive turning point that reshaped my entire career perspective. The story of young entrepreneurs in Sandbox navigating the challenges of building a tech company resonated deeply with my own ambitions.\n\nIt wasn\'t just about the romance, as it highlighted the grit and innovation required to change lives through code. This show inspired me to teach myself programming and view business as a platform for solving real-world problems. Seeing characters tackle obstacles with determination gave me the courage to pursue my dual passion for technology and entrepreneurship.'
  },
  {
    id: 'tech-entrepreneurship',
    title: 'Bridging the Gap: Tech and Business as an Entrepreneurship Learner',
    date: 'February 15, 2026',
    category: 'Professional',
    preview: 'Exploring the intersection of technology and business through the lens of an entrepreneurship enthusiast.',
    content: 'As an entrepreneurship learner, I have realized that technology serves as the ultimate leverage in the modern business landscape. Understanding market trends is crucial, but being able to build the tools that execute those strategies is a total game-changer.\n\nMy academic background in entrepreneurship perfectly complements my technical skills in web development and data analysis. I believe the future belongs to those who can speak the languages of both the user and the machine. My goal is to use this unique perspective to build products that are commercially viable and user-centric.'
  },
  {
    id: 'utilizing-ai',
    title: 'Leveraging AI: My Secret Weapon for Work and Projects',
    date: 'January 10, 2026',
    category: 'Professional',
    preview: 'How I integrate AI tools into my daily workflow to enhance productivity in both my professional and personal life.',
    content: 'AI has transitioned from a futuristic concept into a practical tool that I integrate into my daily routine. Whether I am brainstorming project ideas or debugging code, these technologies have significantly boosted my overall productivity.\n\nI view these advanced tools not as a replacement for human intelligence, but as a powerful amplifier. By automating repetitive tasks and providing instant information, AI allows me to focus on high-level strategic thinking. This approach ensures that I remain efficient while tackling complex creative problem-solving challenges in my work and school.'
  },
  {
    id: 'walking-meditation',
    title: 'A Solitary Walk Through Nature as a Form of Meditation',
    date: 'December 18, 2025',
    category: 'Personal',
    preview: 'How an hour-long walk serves as a mental reset, allowing new ideas to surface and clearing the mind from digital noise.',
    content: 'Stepping away from the desk and embarking on an hour-long walk has become one of my most effective meditation practices. It\'s a deliberate break from the constant stream of notifications and digital demands that define a tech-driven life.\n\nWhile walking, I find that the rhythmic movement helps declutter my thoughts. It is often during these quiet solo treks that my most creative ideas emerge. By refreshing my mind and body in the fresh air, I return to my projects with a perspective that is sharp and rejuvenated. This simple habit of walking is a powerful tool for seeking clarity and maintaining long-term mental focus.'
  },
  {
    id: 'coffee-rituals',
    title: 'No day feels complete without a good cup of coffee',
    date: 'November 22, 2025',
    category: 'Personal',
    preview: 'Exploring my deep appreciation for coffee and how it fuels my creativity and daily productivity.',
    content: 'For me, coffee is more than just a morning beverage; it is a vital ritual that marks the beginning of my creative process. The aroma of freshly ground beans and the warmth of the first sip provide a sense of comfort and clarity that is essential for a productive day.\n\nWhether I am deep in a coding session or brainstorming new business strategies, a good cup of coffee serves as my constant companion. It is the fuel that keeps my mind sharp and my energy levels high. I truly believe that a day is not complete without the perfect brew to spark inspiration and focus.'
  },
  {
    id: 'never-stop-learning',
    title: 'The Infinite Journey: Why I Never Stop Learning',
    date: 'October 05, 2025',
    category: 'Professional',
    preview: 'Reflections on the importance of staying hungry for knowledge and maintaining a growth mindset in a rapidly evolving world.',
    content: 'In the rapidly evolving worlds of technology and business, the only constant factor is continuous change. This reality is why I have adopted a firm philosophy of lifelong learning to stay ahead of the curve.\n\nWhether I am picking up a new programming language or studying market trends, I remain hungry for more knowledge. I believe that a growth mindset is the most valuable asset anyone can possess in today\'s competitive environment. Every new thing I learn becomes a powerful tool in its belt, ready to be used to build something amazing.'
  },
  {
    id: 'my-journey-hello-world',
    title: 'My Journey: The First Hello World',
    date: 'August 18, 2025',
    category: 'Personal',
    preview: 'Reflecting on the day I first tried to learn HTML5, CSS3, and JS fundamentals, and the fear of the terminal.',
    content: 'It was August 18, 2025, when I officially started my journey into tech. I remember being so intimidated by the terminal and the command line, where every typed character felt like it could break something. My first \'Hello World\' appearing on the screen felt like a massive achievement, a small but significant victory that proved I could actually make things happen through code.\n\nI spent countless hours diving into the fundamentals of HTML5, CSS3, and JavaScript, trying to make sense of how the web really works. Even after building my first simple pages, I was still terrified of making my first commit and push to GitHub, fearing that my mistakes would be visible to the world. Little did I know that this mixture of fear and excitement was just the beginning of an incredible adventure in building, creating, and continuous growth.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: "data-analysis",
    title: "Data Analysis",
    shortDescription: "Data analysis and visualization using Python, Pandas, Matplotlib, and Seaborn.",
    fullDescription: "Using Python for in-depth data analysis, I utilize powerful libraries like Pandas for data manipulation, and Matplotlib and Seaborn for creating insightful visualizations. This project involves clear, step-by-step analysis of raw datasets sourced from Kaggle, providing actionable business insights through thorough statistical modeling.",
    thumbnail: data,
    images: [
      da1, da2, da3, da4,
    ],
    link: datafile
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    shortDescription: "A clean, modern portfolio website built for showcase and professional branding.",
    fullDescription: "This clean and modern portfolio website was built to provide a professional digital space for showcasing high-impact projects and skills. You can visit daniela-lacuarin.vercel.app to explore the full interactive experience and responsive design implementation.",
    thumbnail: portweb,
    images: [
      pw1, pw2, pw3, pw4,
    ],
    link: "https://daniela-lacuarin.vercel.app"
  },
  {
    id: "internshipfy",
    title: "Internshipfy",
    shortDescription: "An all-in-one internship management platform for tracking and reporting.",
    fullDescription: "Internshipfy is a specialized platform designed to streamline internship workflows including time keeping and budget management. Visit internshipfyy.vercel.app to explore the dashboards and report keeping features.",
    thumbnail: intern,
    images: [
      if1, if2, if3, if4,
    ],
    link: "https://internshipfyy.vercel.app"
  },
  {
    id: "swingbase",
    title: "SwingBase",
    shortDescription: "A social enterprise project focused on building community through web platforms.",
    fullDescription: "SwingBase is a social enterprise school project focused on creating professional websites through collaborative professional efforts. Visit swingbase.vercel.app to see the project in action and learn more about our social mission.",
    thumbnail: swing,
    images: [
    sb1, sb2, sb3, sb4,
    ],
    link: "https://swingbase.vercel.app"
  }
];

export const GALLERY_IMAGES = [
  lem1, lem2, lem3, lem4, lem5, lem6, lem7,
];

export const FEEDBACKS = [
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    content: "Lemuel's attention to detail in data analysis is exceptional. He transformed our messy datasets into clear, actionable insights."
  },
  {
    name: "Michael Chen",
    role: "Senior Developer",
    content: "A highly competent developer who understands both the technical and business sides of a project. Great team player!"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content: "The landing pages Lemuel built for our campaigns saw a 40% increase in conversion rates. Highly recommended!"
  },
  {
    name: "David Smith",
    role: "Business Owner",
    content: "Professional, efficient, and very knowledgeable. Lemuel helped us automate our reporting which saved us hours every week."
  },
  {
    name: "Jessica Lee",
    role: "Data Scientist",
    content: "Lemuel has a natural talent for spotting trends in data. His Power BI dashboards are both beautiful and functional."
  }
];
