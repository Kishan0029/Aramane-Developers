// ------------------------------------------------------------------
// Aramane Developers — centralised homepage content.
// ------------------------------------------------------------------

export const BRAND = {
  name: "ARAMANE",
  sub: "DEVELOPERS",
  tagline: "Design-led homes, built with intent in Bengaluru.",
};

export const NAV_LINKS = [
  { label: "Home", href: "/", testId: "navbar-link-home" },
  { label: "About", href: "/about", testId: "navbar-link-about" },
  { label: "Projects", href: "/#projects", testId: "navbar-link-projects" },
  { label: "Allied Services", href: "#allied-services", testId: "navbar-link-allied-services", hasDropdown: true },
];

export const HERO = {
  image: "/assets/hero-sunny-highrise.webp",
  imageAlt: "Sunny High-Rise Complex Amid Lush Greenery - Aramane Developers",
  images: [
    {
      src: "/assets/hero-sunny-highrise.webp",
      alt: "Sunny High-Rise Complex Amid Lush Greenery - Aramane Developers",
    },
    {
      src: "/assets/hero-lush-modern.webp",
      alt: "Lush Modern Apartment Complex - Aramane Developers",
    },
  ],
  eyebrow: "BENGALURU · EST. WITH INTENT",
  headline: ["Spaces designed to be lived in,", "built to last."],
  subline:
    "Aramane Developers crafts low-density, design-led residences and plotted communities across Bengaluru's most coveted corridors.",
  primaryCta: { label: "Explore Projects", target: "projects" },
  secondaryCta: { label: "Talk to Us", target: "contact" },
};

export const INTRO = {
  eyebrow: "WHO WE ARE",
  heading:
    "We build the way we would want to live — with craft, candour and quiet confidence.",
  paragraph:
    "Aramane Developers is a Bengaluru-based real estate studio shaped by a simple belief: a home should outlast trends. Every address we create begins with light, landscape and proportion — and is delivered with complete transparency, from the first drawing to the final handover.",
  linkLabel: "Know more about us",
  image:
    "https://images.unsplash.com/photo-1786011243992-808eb40e0144?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Private villa courtyard and pool at night",
};

export const METRICS = [
  { value: 40, suffix: "+", label: "Years of Experience" },
  { value: 30, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "M+", label: "Sq. Ft. Built" },
  { value: 10000, suffix: "+", label: "Happy Families" },
];

export const PROJECTS_SECTION = {
  eyebrow: "OUR PROJECTS",
  heading: "Where we build next",
  viewAllLabel: "View All Projects",
};

export interface ProjectItem {
  id: string;
  name: string;
  location: string;
  type: string;
  status: "Ongoing" | "Ready to Occupy" | "Upcoming";
  testId: string;
  image: string;
  alt: string;
  isPoster?: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "assets-adhya",
    name: "Assets Aadhya",
    location: "Hampapura, Mysore Road",
    type: "Premium Residential Plots · 8 Acres · 115 Plots",
    status: "Ready to Occupy",
    testId: "project-card-assets-adhya",
    image: "/assets/assets-aadhya-poster.webp",
    alt: "Assets Aadhya Premium Residential Plots in 8 acres 115 plots at Hampapura Mysore Road",
    isPoster: true,
  },
  {
    id: "krb-township",
    name: "KRB Township",
    location: "Jayasandra, Karnataka",
    type: "Premium Residential Plots · JD Project 35 Acres",
    status: "Ready to Occupy",
    testId: "project-card-krb-township",
    image: "/assets/krb-township-poster.webp",
    alt: "KRB Township Premium Residential Plots JD Project 35 Acres at Jayasandra Nukkanahalli",
    isPoster: true,
  },
  {
    id: "chandapura-ongoing",
    name: "57,000 Sq. Ft. Apartment Project",
    location: "Near Narayana Hrudayalaya, Chandapura",
    type: "Residential Apartment Project · 57,000 Sq. Ft.",
    status: "Ongoing",
    testId: "project-card-chandapura",
    image: "/assets/chandapura-lush-apartment.webp",
    alt: "Lush Modern Apartment Complex - 57,000 sq.ft. Apartment Project near Narayana Hrudayalaya Chandapura",
  },
  {
    id: "electronic-city-upcoming",
    name: "Electronic City High-Rise",
    location: "Electronic City, Bengaluru",
    type: "3.5 Acre High Rise Apartment · JD + Outright",
    status: "Upcoming",
    testId: "project-card-electronic-city",
    image: "/assets/electronic-city-sunny-highrise.webp",
    alt: "Sunny High-Rise Complex Amid Lush Greenery - 3.5 Acre High Rise Apartment Electronic City",
  },
  {
    id: "township-plotted-upcoming",
    name: "Township Plotted Development",
    location: "Bengaluru, Karnataka",
    type: "25 Acres of Own Land · Township Plotted Development",
    status: "Upcoming",
    testId: "project-card-township",
    image: "/assets/township-masterplan.webp",
    alt: "Colorful Bird's-Eye Neighborhood Masterplan - 25 Acres of Own Land Township Plotted Development",
  },
];

export const WHY_SECTION = {
  eyebrow: "WHY ARAMANE",
  heading: "The principles behind every address",
};

export const PILLARS = [
  {
    num: "01",
    title: "Design-Led Planning",
    desc: "Light, ventilation and proportion are decided before anything else is.",
  },
  {
    num: "02",
    title: "Quality Craftsmanship",
    desc: "Materials and finishes chosen to age gracefully, not merely photograph well.",
  },
  {
    num: "03",
    title: "Transparent Dealings",
    desc: "Clear titles, honest pricing and documentation you never have to chase.",
  },
  {
    num: "04",
    title: "On-Time Delivery",
    desc: "Commitments made at booking are commitments kept at handover.",
  },
];

export const LIFESTYLE = {
  image:
    "https://images.unsplash.com/photo-1775811091644-69162fa36ea1?auto=format&fit=crop&w=1600&q=80",
  imageAlt: "Landscaped courtyard and infinity pool at dusk",
  quote: "A home is not a place. It is the feeling of having arrived.",
  caption: "COURTYARDS · GARDENS · QUIET CORNERS",
};

export const COMPLETED_SECTION = {
  eyebrow: "ALLIED SERVICES",
  heading: "An ecosystem of design, build & innovation",
};

const ALLIED_PLACEHOLDER_THUMBS = [
  "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?crop=entropy&cs=srgb&fm=jpg&w=700&q=80", // Curioza - contemporary artifacts / art
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=srgb&fm=jpg&w=700&q=80", // Total Homes India - turnkey design build
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=srgb&fm=jpg&w=700&q=80", // Rain tree - architectural studio
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=srgb&fm=jpg&w=700&q=80", // Furmingo - interior design studio
  "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=srgb&fm=jpg&w=700&q=80", // Smarten Living - live futurism
  "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?crop=entropy&cs=srgb&fm=jpg&w=700&q=80", // Liv pods - co working / co living
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&w=700&q=80", // Estate owl marketing - online tech marketing
  "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?crop=entropy&cs=srgb&fm=jpg&w=700&q=80", // Kosha - surfaces, furniture & lighting
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=srgb&fm=jpg&w=700&q=80", // Casa Sprint - precast tech in 90 days
  "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?crop=entropy&cs=srgb&fm=jpg&w=700&q=80", // Estate Mint - fintech fractional ownership
];

export interface CompletedProjectItem {
  name: string;
  descriptor: string;
  year: string;
  image: string;
}

export const COMPLETED_PROJECTS: CompletedProjectItem[] = [
  {
    name: "Curioza",
    descriptor: "contemporary artifacts",
    year: "Studio",
    image: ALLIED_PLACEHOLDER_THUMBS[0],
  },
  {
    name: "Total Homes India",
    descriptor: "integrated turn key design build tech company",
    year: "Turnkey",
    image: ALLIED_PLACEHOLDER_THUMBS[1],
  },
  {
    name: "Rain tree design studio",
    descriptor: "architectural design studio",
    year: "Architecture",
    image: ALLIED_PLACEHOLDER_THUMBS[2],
  },
  {
    name: "Furmingo",
    descriptor: "complete interior design and turn key studio",
    year: "Interiors",
    image: ALLIED_PLACEHOLDER_THUMBS[3],
  },
  {
    name: "Smarten Living",
    descriptor: "live futurism",
    year: "Automation",
    image: ALLIED_PLACEHOLDER_THUMBS[4],
  },
  {
    name: "Liv pods",
    descriptor: "Co working / Co living spaces and airbnb spaces",
    year: "Spaces",
    image: ALLIED_PLACEHOLDER_THUMBS[5],
  },
  {
    name: "Estate owl marketing",
    descriptor: "online tech based b2b and b2c marketing",
    year: "Marketing Tech",
    image: ALLIED_PLACEHOLDER_THUMBS[6],
  },
  {
    name: "Kosha",
    descriptor: "surfaces, furniture / lighting",
    year: "Surfaces",
    image: ALLIED_PLACEHOLDER_THUMBS[7],
  },
  {
    name: "Casa Sprint",
    descriptor: "dream home delivered in 90 days (precast tech)",
    year: "Precast Tech",
    image: ALLIED_PLACEHOLDER_THUMBS[8],
  },
  {
    name: "Estate Mint",
    descriptor: "fintech fractional ownership platform",
    year: "Fintech",
    image: ALLIED_PLACEHOLDER_THUMBS[9],
  },
];

export const TESTIMONIALS_SECTION = {
  eyebrow: "RESIDENT VOICES",
  heading: "In their words",
};

export const TESTIMONIALS = [
  {
    quote:
      "From the first site visit to the day we received our keys, everything felt considered. The detailing in our home is something we notice every single day.",
    name: "Priya & Rohan Sharma",
    project: "Aramane One, Indiranagar",
  },
  {
    quote:
      "Transparent pricing, an on-time handover, and a home that lives even better than it photographs. We could not have asked for more.",
    name: "Anita Desai",
    project: "Aramane Court, Whitefield",
  },
  {
    quote:
      "As an NRI buyer, I expected complications. Instead, every question was answered and every promise kept — from twelve thousand kilometres away.",
    name: "Vikram Menon",
    project: "Aramane Heights, Sadashivanagar",
  },
];

export const CONTACT = {
  eyebrow: "ENQUIRE",
  heading: "Let's find your place",
  blurb:
    "Share a few details and our team will reach out within one working day to arrange a conversation or a private site visit.",
  address: "Bengaluru, Karnataka, India",
  phone: "+91 94800 08899",
  email: "info@aramanedevelopers.com",
  interests: [
    "57,000 Sq. Ft. Chandapura Apartments",
    "Assets Adhya Plots (Mysore Road)",
    "KRB Township Plots (Nukkanahalli)",
    "Electronic City High-Rise",
    "25-Acre Plotted Township",
    "General Enquiry"
  ],
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export const FOOTER = {
  tagline: "Design-led homes, built with intent in Bengaluru.",
  rera: "Karnataka RERA Registered Developer. Projects comply with applicable Karnataka RERA standards.",
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
  copyright: "© 2026 Aramane Builders & Developers Pvt. Ltd. All rights reserved.",
};

export interface AlliedServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export const ALLIED_SERVICES_SECTION = {
  eyebrow: "OUR ECOSYSTEM",
  heading: "Allied Services",
  subheading:
    "A full-spectrum collaborative network of specialized studios, turnkey builders, fintech, and design innovators.",
};

export const ALLIED_SERVICES: AlliedServiceItem[] = [
  {
    id: "curioza",
    number: "01",
    title: "Curioza",
    description: "contemporary artifacts",
    iconName: "Sparkles",
  },
  {
    id: "total-homes",
    number: "02",
    title: "Total Homes India",
    description: "integrated turn key design build tech company",
    iconName: "Building2",
  },
  {
    id: "rain-tree",
    number: "03",
    title: "Rain tree design studio",
    description: "architectural design studio",
    iconName: "Compass",
  },
  {
    id: "furmingo",
    number: "04",
    title: "Furmingo",
    description: "complete interior design and turn key studio",
    iconName: "Layout",
  },
  {
    id: "smarten-living",
    number: "05",
    title: "Smarten Living",
    description: "live futurism",
    iconName: "Cpu",
  },
  {
    id: "liv-pods",
    number: "06",
    title: "Liv pods",
    description: "Co working / Co living spaces and airbnb spaces",
    iconName: "Hotel",
  },
  {
    id: "estate-owl",
    number: "07",
    title: "Estate owl marketing",
    description: "online tech based b2b and b2c marketing",
    iconName: "TrendingUp",
  },
  {
    id: "kosha",
    number: "08",
    title: "Kosha",
    description: "surfaces, furniture / lighting",
    iconName: "Layers",
  },
  {
    id: "casa-sprint",
    number: "09",
    title: "Casa Sprint",
    description: "dream home delivered in 90 days (precast tech)",
    iconName: "Clock",
  },
  {
    id: "estate-mint",
    number: "10",
    title: "Estate Mint",
    description: "fintech fractional ownership platform",
    iconName: "Coins",
  },
];

