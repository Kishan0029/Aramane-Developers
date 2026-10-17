export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  number: number;
  suffix?: string;
  label: string;
  detail: string;
}

export interface PhilosophyItem {
  letter: string;
  word: string;
  description: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface LeadershipMember {
  name: string;
  title: string;
  credentials?: string;
  image: string;
  bio: string;
}

export interface ProjectFact {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  status: 'Ongoing' | 'Upcoming' | 'Plots Available';
  type: 'Plotted Developments' | 'Apartments';
  location: string;
  extent: string;
  summary: string;
  description: string;
  keyFacts: ProjectFact[];
  approvals?: string[];
  amenities?: string[];
  sitesAvailable?: string[];
  nearby?: string[];
  images: string[];
  isParcelMap?: boolean;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  phone: string;
  displayPhone: string;
  fax: string;
  email: string;
  website: string;
  addressPlaceholder: string;
  reraPlaceholder: string;
  disclaimer: string;
  whatsappNumber: string;
  defaultWhatsAppMessage: string;
  hero: {
    headline: string;
    subline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
  };
  purposeStatement: {
    quote: string;
    narrative: string;
    linkText: string;
  };
  landownersBand: {
    heading: string;
    subheading: string;
    description: string;
    ctaText: string;
  };
  aboutStory: {
    heading: string;
    subheading: string;
    leadParagraph: string;
    bodyParagraphs: string[];
  };
  pqrstCredo: PhilosophyItem[];
  services: ServiceItem[];
  inHouseVerticals: string[];
  coreCapabilities: string[];
  stats: StatItem[];
  leadership: LeadershipMember[];
  projects: ProjectItem[];
}

export const siteData: SiteConfig = {
  name: "ARAMANE",
  legalName: "ARAMANE BUILDERS AND DEVELOPERS PVT. LTD.",
  tagline: "Timeless Living",
  phone: "9480008899",
  displayPhone: "+91 94800 08899",
  fax: "+91 80 6759 0400",
  email: "info@aramanedevelopers.com",
  website: "www.aramanedevelopers.com",
  addressPlaceholder: "[Office address – to be confirmed]",
  reraPlaceholder: "RERA Registration No.: [to be provided]",
  disclaimer: "Images are artist's impressions and are for illustration only. Specifications, amenities and availability are subject to change. RERA Registration No.: [to be provided].",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919480008899",
  defaultWhatsAppMessage: "Hello Aramane Developers, I am interested in exploring your residential and plotted developments in Bengaluru.",
  
  hero: {
    headline: "ARAMANE: Timeless Living, Built on Trust.",
    subline: "Residential and plotted developments across Bengaluru, guided by over four decades of real estate experience.",
    ctaPrimary: "Explore Projects",
    ctaSecondary: "Schedule Advisory",
    image: "/assets/hero-cinematic.webp"
  },

  purposeStatement: {
    quote: "From a rank outsider to property development in a new city, to an enviable portfolio of residential and plotted developments.",
    narrative: "Rooted in Bangalore's dynamic landscape, Aramane builds spaces of enduring architectural elegance, uncompromised structural integrity, and absolute legal certainty.",
    linkText: "Our Story"
  },

  landownersBand: {
    heading: "Own land in Bengaluru? Partner with Aramane.",
    subheading: "Joint Development (JD) & Outright Acquisition",
    description: "We collaborate with land owners to unlock maximum land potential through transparent joint development agreements and outright land acquisition backed by four decades of development expertise.",
    ctaText: "Discuss Joint Development"
  },

  aboutStory: {
    heading: "Timeless Living",
    subheading: "A Legacy Built on Trust, Quality, and Four Decades of Vision",
    leadParagraph: "Aramane Builders and Developers Pvt. Ltd. represents the culmination of more than forty years of hands-on property development experience in Bengaluru.",
    bodyParagraphs: [
      "What began as an ambitious journey by a passionate outsider in a fast-expanding metropolis has evolved into an enviable portfolio of class residential apartments and meticulously planned plotted townships.",
      "At Aramane, we believe that real estate development is not merely about physical structures; it is an enduring covenant between the builder and the resident. From identifying strategic land parcels with clear titles to executing complex civil engineering with world-class consultants, every phase of our work reflects an unwavering commitment to architectural flair and ethical corporate responsibility.",
      "Guided by veteran promoter K. P. Ramesh Babu and chartered builder Mr. Sandeep Kopparam, our multidisciplinary team coordinates every facet of planning, engineering, liaisoning, legal verification, and customer delivery in-house."
    ]
  },

  pqrstCredo: [
    {
      letter: "P",
      word: "Punctuality",
      description: "Delivering on timelines with disciplined project planning, rigorous scheduling, and reliable execution."
    },
    {
      letter: "Q",
      word: "Quality",
      description: "Uncompromising engineering standards, finest materials, and meticulous architectural detail in every structure."
    },
    {
      letter: "R",
      word: "Reliability",
      description: "Over four decades of steadfast commitment, verified land titles, and dependable customer relationships."
    },
    {
      letter: "S",
      word: "Speed",
      description: "Swift, agile execution that respects your time without ever sacrificing safety or craftsmanship."
    },
    {
      letter: "T",
      word: "Transparency",
      description: "Absolute clarity in documentation, open communication, and honest ethical business practices from day one."
    }
  ],

  services: [
    {
      number: "01",
      title: "Residential Apartments",
      description: "From mid-size communities to high-rise living"
    },
    {
      number: "02",
      title: "Plotted Developments & Townships",
      description: "Approved layouts with planned amenities"
    },
    {
      number: "03",
      title: "Land Sourcing & Development",
      description: "Identification of land parcels, legal, infrastructure"
    },
    {
      number: "04",
      title: "Joint Development & Outright Partnerships",
      description: "Collaboration models for landowners"
    }
  ],

  inHouseVerticals: [
    "Projects & Engineering",
    "Design & Architecture",
    "Construction",
    "Marketing & Communications",
    "Customer Service"
  ],

  coreCapabilities: [
    "Real Estate & Property Development",
    "Land Sourcing & Parcel Identification",
    "Land Development & Infrastructure",
    "Legal Diligence & Clear Titles",
    "Market Analysis & Feasibility",
    "Project Finance & Capital Structuring",
    "Project Conceptualization & Master Planning",
    "Design & Architecture Liaisoning",
    "Construction Management & Execution",
    "Delivery, Handover & Customer Service"
  ],

  stats: [
    {
      value: "40+",
      number: 40,
      suffix: "+",
      label: "YEARS OF REAL ESTATE EXPERIENCE",
      detail: "Founder-led stewardship spanning four decades of Bengaluru's realty evolution"
    },
    {
      value: "5",
      number: 5,
      suffix: "",
      label: "PROJECTS: ONGOING, UPCOMING & PLOTTED",
      detail: "Diverse portfolio across residential apartments and gated townships"
    },
    {
      value: "115",
      number: 115,
      suffix: "",
      label: "PLOTS AT ASSETS AADHYA",
      detail: "BMICAPA and RERA-approved gated enclave on Mysore Road"
    },
    {
      value: "57,000",
      number: 57000,
      suffix: " SQ. FT.",
      label: "APARTMENT PROJECT IN PROGRESS",
      detail: "Under construction near Narayana Hrudayalaya, Chandapura"
    }
  ],

  leadership: [
    {
      name: "K. P. Ramesh Babu",
      title: "Founder, Promoter and Executive Director",
      credentials: "Real Estate Industry Veteran (40+ Years)",
      image: "/assets/ramesh-babu.webp",
      bio: "A veteran of the real estate industry, K. P. Ramesh Babu has had a ringside view of the highs and lows of the development sector over four decades. He has extensive experience in real estate and property development in Bangalore. Under his stewardship, the company's history is a testimony to the success of a rank outsider to property development in a new city; today, Aramane has an enviable portfolio of assets comprising class residential and plotted development projects. At the core of his professional endeavours is his personal credo of PQRST: Punctuality, Quality, Reliability, Speed and Transparency. This value framework places the customer at the heart of every project and every activity within Aramane. Through this, he has infused a high level of professionalism very early in the organization. From displaying architectural flair to being a bellwether of corporate responsibility, Mr. Ramesh Babu has demonstrated the power of his vision and the strength of his values, inspiring others with a quest to achieve greater heights. He has worked with most of the top players in the Bangalore realty sector and brings significant experience in real estate and property development. He oversees all activities of Aramane Developers, including real estate, sourcing of land, land development, legal, infrastructure development, identification of land parcels and market, and overall finance of the projects."
    },
    {
      name: "Mr. Sandeep Kopparam",
      title: "Managing Director",
      credentials: "B.Arch, M.Sc (London), IPF Dip, MRICS, MCIOB",
      image: "/assets/sandeep-kopparam.webp",
      bio: "Mr. Sandeep Kopparam is the Managing Director of Aramane Builders and Developers Pvt. Ltd. He is an architect by profession and a professionally qualified chartered builder. He holds a master's degree in Construction Management and Real Estate from the University of Reading, and a Bachelor of Architecture degree from M.S. Ramaiah Institute of Technology, Bangalore. He has diverse experience in design, architecture, liaison, project coordination, project management, procurement, construction, project execution and sales with world-class and reputed organizations such as RSP Architects, Engineers and Planners, Synergy Property Development, Colliers International, Prestige Group, Anarock and other leading consultants and developers in India and the United Kingdom. He is also involved in angel investment, farming and finance. He oversees all activities of Aramane Developers, including project conceptualization, design, construction, execution and delivery. Verticals such as projects and engineering, design and architecture, construction, marketing and communications, and customer service were established under him."
    }
  ],

  projects: [
    {
      id: "1",
      slug: "assets-aadhya",
      title: "Assets Aadhya",
      subtitle: "Premium Residential Plots in an 8-Acre Gated Community",
      status: "Plots Available",
      type: "Plotted Developments",
      location: "Hampapura, Mysore Road, just 800 metres from the KHB project, on the Bangalore–Mysore Expressway corridor",
      extent: "8 Acres",
      summary: "Premium residential plotted layout spanning 8 acres with 115 lifestyle plots, located just 800m from KHB project on the Bangalore–Mysore Expressway corridor.",
      description: "Assets Aadhya is an exclusive 8-acre gated plotted community crafted for refined living. Ideally positioned along the high-growth Bangalore–Mysore Expressway corridor at Hampapura, the development is just 800 metres from the Karnataka Housing Board (KHB) project. Offering 115 systematically planned plots with individual E-Khata, comprehensive underground infrastructure, wide asphalted avenues, and dedicated leisure amenities, Assets Aadhya provides both exceptional residential tranquility and robust capital appreciation.",
      keyFacts: [
        { label: "Project Extent", value: "8 Acres" },
        { label: "Total Plots", value: "115 Residential Plots" },
        { label: "Development Type", value: "Gated Plotted Layout" },
        { label: "Location Corridor", value: "Bangalore–Mysore Expressway" },
        { label: "Key Landmark", value: "800m from KHB Project, Hampapura" },
        { label: "Title & Approvals", value: "BMICAPA & RERA Approved, E-Khata" }
      ],
      approvals: [
        "BMICAPA Approved",
        "RERA Approved",
        "Individual E-Khata"
      ],
      amenities: [
        "Grand Entry Plaza",
        "Jogging Track",
        "Kids Play Area",
        "Basketball Court",
        "Cricket Lawn",
        "Elder's Seating Court"
      ],
      nearby: [
        "800 metres to Karnataka Housing Board (KHB) Project",
        "Bangalore–Mysore 10-Lane Expressway Corridor",
        "15 Minutes from Bengaluru University Campus",
        "Premier Educational Institutions & Engineering Colleges",
        "Shopping, Dining & Regional Entertainment Hubs"
      ],
      images: [
        "/assets/plotted-luxury.webp",
        "/assets/assets-aadhya.webp"
      ]
    },
    {
      id: "2",
      slug: "krb-township",
      title: "KRB Township",
      subtitle: "35-Acre Joint Development Residential Plotted Township",
      status: "Plots Available",
      type: "Plotted Developments",
      location: "Jayasandra, Nukkanahalli, Karnataka 563126 (opposite CBIT College, Kolar, Bengaluru)",
      extent: "35 Acres",
      summary: "A sprawling 35-acre joint development plotted enclave located right on the State Highway opposite CBIT College, featuring multiple plot dimensions and complete utilities.",
      description: "KRB Township is an expansive 35-acre master-planned residential layout developed under a prestigious Joint Development (JD) structure. Situated in Jayasandra, Nukkanahalli, immediately opposite the renowned CBIT College, the project benefits from direct state highway frontage. The township provides diverse plot configurations tailored for customized home construction, equipped with heavy-duty borewells, dependable water connectivity, and an integrated underground drainage and sewage network.",
      keyFacts: [
        { label: "Project Extent", value: "35 Acres" },
        { label: "Project Structure", value: "Joint Development (JD)" },
        { label: "Site Dimensions", value: "30×40, 30×50, 40×60" },
        { label: "Location", value: "Jayasandra, Nukkanahalli, Karnataka 563126" },
        { label: "Frontage", value: "Next to State Highway" },
        { label: "Landmark", value: "Opposite CBIT College, Kolar" }
      ],
      sitesAvailable: [
        "30 × 40 (1,200 sq. ft.)",
        "30 × 50 (1,500 sq. ft.)",
        "40 × 60 (2,400 sq. ft.)"
      ],
      amenities: [
        "State Highway Adjoining Access",
        "Dedicated Borewell Water Connection",
        "Underground Drainage & Sewage Network",
        "Wide Layout Roads",
        "Street Lighting Infrastructure"
      ],
      nearby: [
        "Directly Opposite CBIT Engineering College",
        "State Highway Connectivity to Bengaluru & Kolar",
        "Nearby Industrial & Educational Corridors",
        "Local Transit & Public Commuter Links"
      ],
      images: [
        "/assets/krb-township.webp"
      ]
    },
    {
      id: "3",
      slug: "chandapura-apartments",
      title: "Apartment Project, Chandapura",
      subtitle: "57,000 Sq. Ft. Residential Community Near Narayana Hrudayalaya",
      status: "Ongoing",
      type: "Apartments",
      location: "Near Narayana Hrudayalaya, Chandapura, Bengaluru",
      extent: "57,000 Sq. Ft.",
      summary: "A signature 57,000 sq. ft. ongoing residential apartment development situated in close proximity to the Narayana Hrudayalaya healthcare hub.",
      description: "Located in the thriving residential precinct of Chandapura near Narayana Hrudayalaya, this 57,000 sq. ft. development provides modern apartment living with optimal spatial ergonomics, natural ventilation, and daylight. Perfectly positioned for healthcare professionals and tech executives commuting along Hosur Road and Electronic City, the project blends refined contemporary architecture with everyday urban convenience.",
      keyFacts: [
        { label: "Built-up Extent", value: "57,000 Sq. Ft." },
        { label: "Project Status", value: "Ongoing Construction" },
        { label: "Location", value: "Near Narayana Hrudayalaya, Chandapura" },
        { label: "Micro-Market", value: "South Bengaluru / Hosur Road Corridor" },
        { label: "Architecture", value: "Contemporary Multi-Storey Residential" }
      ],
      amenities: [
        "Architectural Facade Design",
        "Dedicated Covered Vehicle Parking",
        "Landscaped Green Pockets",
        "Continuous Water & Power Backup",
        "24/7 Security Access Control"
      ],
      nearby: [
        "Narayana Hrudayalaya Health City",
        "Chandapura Circle & Hosur Road (NH 44)",
        "Electronic City IT Hub (15 Minutes)",
        "Renowned International Schools & Colleges",
        "Upcoming Namma Metro Line Connectivity"
      ],
      images: [
        "/assets/chandapura-1.webp",
        "/assets/chandapura-2.webp"
      ]
    },
    {
      id: "4",
      slug: "electronics-city-high-rise",
      title: "High-Rise Apartments, Electronics City",
      subtitle: "3.5-Acre High-Rise Towers (Joint Development + Outright)",
      status: "Upcoming",
      type: "Apartments",
      location: "Electronics City, Bengaluru",
      extent: "3.5 Acres",
      summary: "An upcoming 3.5-acre high-rise residential landmark combining Joint Development and outright acquisition in the heart of Bengaluru's premier technology corridor.",
      description: "Conceived as an iconic architectural statement in South Bengaluru's silicon hub, this 3.5-acre high-rise project represents a blend of Joint Development and outright land acquisition. Featuring soaring residential towers with panoramic city vistas, state-of-the-art construction engineering, and sustainable green building practices, the development is engineered for cosmopolitan IT professionals seeking luxury, proximity, and timeless elegance.",
      keyFacts: [
        { label: "Land Parcel", value: "3.5 Acres" },
        { label: "Project Model", value: "Joint Development + Outright" },
        { label: "Typology", value: "High-Rise Residential Towers" },
        { label: "Location", value: "Electronics City, Bengaluru" },
        { label: "Stage", value: "Upcoming Pre-Launch" }
      ],
      amenities: [
        "High-Rise Panoramic Views",
        "Designer Grand Entrance Lobby",
        "Clubhouse & Leisure Amenities",
        "High-Speed Automatic Elevators",
        "Multi-Tier Electronic Security",
        "Rainwater Harvesting & Solar Energy Integration"
      ],
      nearby: [
        "Infosys, Wipro, TCS & Major Electronics City Tech Campuses",
        "Electronic City Elevated Tollway",
        "Yellow Line Metro Station Connectivity",
        "Premier Hospitals & Super-Specialty Healthcare",
        "Malls, Supermarkets & Fine Dining Avenues"
      ],
      images: [
        "/assets/highrise-luxury.webp",
        "/assets/electronics-city.webp"
      ]
    },
    {
      id: "5",
      slug: "plotted-township",
      title: "Plotted Township, 25 Acres",
      subtitle: "Master-Planned Plotted Development on Aramane Land",
      status: "Upcoming",
      type: "Plotted Developments",
      location: "Location: [to be confirmed]",
      extent: "25 Acres",
      isParcelMap: true,
      summary: "A large-scale 25-acre integrated plotted township developed on company-owned land with holistic master planning and color-coded demarcated parcels.",
      description: "Spread over 25 acres of company-owned land, this upcoming township is designed as a sustainable, fully integrated plotted ecosystem. The master layout incorporates generous arterial roads, civic amenity reservations, lush green buffers, and well-proportioned residential and commercial land parcels. Backed by Aramane's four decades of land development acumen, this project offers investors and future homeowners a prime stake in Bengaluru's next growth frontier.",
      keyFacts: [
        { label: "Land Area", value: "25 Acres of Own Land" },
        { label: "Development Type", value: "Township / Plotted Development" },
        { label: "Ownership Structure", value: "Company-Owned Land" },
        { label: "Location", value: "Location: [to be confirmed]" },
        { label: "Planning Status", value: "Master Layout Under Finalization" }
      ],
      amenities: [
        "Color-Coded Demarcated Land Parcels",
        "Wide Internal Arterial Avenues",
        "Planned Parks & Open Green Buffers",
        "Dedicated Civic Amenities Reservation",
        "Comprehensive Underground Utility Ducting"
      ],
      nearby: [
        "Emerging Bangalore Growth Corridors [details to be confirmed]",
        "Future Metro & Highway Radial Expansion [details to be confirmed]"
      ],
      images: [
        "/assets/township-layout.webp"
      ]
    }
  ]
};
