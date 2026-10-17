// ------------------------------------------------------------------
// Aramane Developers — Studio, Site & Experience Centre Locations
// ------------------------------------------------------------------

export interface LocationItem {
  id: string;
  name: string;
  shortName: string;
  category: "Headquarters" | "Plotted Community" | "Township" | "Apartment Project" | "Upcoming";
  statusBadge: string;
  address: string;
  landmark: string;
  timings: string;
  phone: string;
  email: string;
  query: string;
  googleMapsDirectionsUrl: string;
  coordinates: string;
  highlights: string[];
  travelTimes: { label: string; time: string }[];
}

export const LOCATIONS: LocationItem[] = [
  {
    id: "headquarters",
    name: "Aramane Corporate Headquarters & Studio",
    shortName: "Corporate Studio",
    category: "Headquarters",
    statusBadge: "Central Bengaluru",
    address: "Sadashivanagar, Bengaluru, Karnataka 560080, India",
    landmark: "Close to Sankey Tank & Bhashyam Circle",
    timings: "Monday – Saturday: 9:30 AM – 6:30 PM (Sunday by appointment)",
    phone: "+91 94800 08899",
    email: "info@aramanedevelopers.com",
    query: "Sadashivanagar, Bengaluru, Karnataka 560080",
    googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Sadashivanagar+Bengaluru+Karnataka+560080",
    coordinates: "13.0068° N, 77.5813° E",
    highlights: [
      "Executive suites & private boardroom for landowner consultations",
      "Tactile finishes & architectural material display gallery",
      "Direct technical consultations with principal architects & chartered builders",
    ],
    travelTimes: [
      { label: "MG Road / CBD", time: "15 mins" },
      { label: "Kempegowda Int'l Airport", time: "35 mins" },
      { label: "Sadashivanagar Metro", time: "5 mins" },
    ],
  },
  {
    id: "assets-aadhya",
    name: "Assets Aadhya — Site & Experience Centre",
    shortName: "Assets Aadhya",
    category: "Plotted Community",
    statusBadge: "Ready to Occupy · 115 Plots",
    address: "Hampapura, Off Mysore Road Expressway, Bengaluru, Karnataka",
    landmark: "Near Bidadi Corridor & Wonderla Junction",
    timings: "Open Daily: 9:00 AM – 6:00 PM for private walkthroughs",
    phone: "+91 94800 08899",
    email: "sales@aramanedevelopers.com",
    query: "Hampapura, Mysore Road, Bengaluru, Karnataka",
    googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Hampapura+Mysore+Road+Bengaluru+Karnataka",
    coordinates: "12.8250° N, 77.4100° E",
    highlights: [
      "8-Acre master-planned low-density enclave with 115 premium plots",
      "10-lane Bengaluru-Mysore Access-Controlled Expressway corridor",
      "Completed internal avenues, underground cabling & landscaped parks",
    ],
    travelTimes: [
      { label: "Kengeri Metro Station", time: "18 mins" },
      { label: "NICE Road Junction", time: "12 mins" },
      { label: "Rajarajeshwari Nagar", time: "22 mins" },
    ],
  },
  {
    id: "krb-township",
    name: "KRB Township — Master-Planned Development",
    shortName: "KRB Township",
    category: "Township",
    statusBadge: "JD Project · 35 Acres",
    address: "Jayasandra, Nukkanahalli, Karnataka 563126, India",
    landmark: "Old Madras Road & Kolar Industrial Growth Corridor",
    timings: "Open Daily: 9:30 AM – 5:30 PM",
    phone: "+91 94800 08899",
    email: "sales@aramanedevelopers.com",
    query: "Jayasandra, Nukkanahalli, Karnataka 563126",
    googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Jayasandra+Nukkanahalli+Karnataka+563126",
    coordinates: "13.1339° N, 78.1329° E",
    highlights: [
      "Expansive 35-acre joint development integrated township",
      "Generous 40ft & 60ft arterial avenues with dedicated green buffers",
      "Fast-appreciating industrial & logistics employment corridor",
    ],
    travelTimes: [
      { label: "Hoskote Junction", time: "20 mins" },
      { label: "Whitefield IT Hub", time: "35 mins" },
      { label: "Bangalore-Chennai Expressway", time: "10 mins" },
    ],
  },
  {
    id: "chandapura-apartments",
    name: "Chandapura Luxury Residences (Ongoing)",
    shortName: "Chandapura Apartments",
    category: "Apartment Project",
    statusBadge: "Ongoing · 57,000 Sq. Ft.",
    address: "Chandapura - Anekal Main Road, Near Narayana Hrudayalaya, Bengaluru, Karnataka 560099",
    landmark: "2 Minutes from Narayana Health City & Hosur Highway",
    timings: "Monday – Saturday: 9:00 AM – 6:00 PM",
    phone: "+91 94800 08899",
    email: "chandapura@aramanedevelopers.com",
    query: "Narayana Hrudayalaya, Chandapura, Bengaluru, Karnataka 560099",
    googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Narayana+Hrudayalaya+Chandapura+Bengaluru",
    coordinates: "12.7984° N, 77.6974° E",
    highlights: [
      "Boutique 57,000 sq.ft. residential apartment development",
      "Walking proximity to Narayana Health City & world-class healthcare",
      "Immediate access to Electronic City flyover and Yellow Line Metro",
    ],
    travelTimes: [
      { label: "Narayana Health City", time: "2 mins" },
      { label: "Electronic City Phase 1", time: "10 mins" },
      { label: "Bommasandra Metro", time: "6 mins" },
    ],
  },
  {
    id: "electronic-city",
    name: "Electronic City High-Rise (Upcoming)",
    shortName: "Electronic City",
    category: "Upcoming",
    statusBadge: "Upcoming · 3.5 Acres High-Rise",
    address: "Electronic City Phase 1, Bengaluru, Karnataka 560100",
    landmark: "Direct corridor to Tech Campuses & Elevated Expressway",
    timings: "Advisory meetings held at Sadashivanagar Corporate Studio",
    phone: "+91 94800 08899",
    email: "info@aramanedevelopers.com",
    query: "Electronic City Phase 1, Bengaluru, Karnataka 560100",
    googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Electronic+City+Phase+1+Bengaluru",
    coordinates: "12.8452° N, 77.6602° E",
    highlights: [
      "3.5-Acre premier vertical development (Joint Development + Outright)",
      "Designed for tech leaders and modern families seeking light and silence",
      "Elevated highway access to central Bengaluru in 25 minutes",
    ],
    travelTimes: [
      { label: "Infosys / Wipro Hub", time: "4 mins" },
      { label: "Elevated Expressway", time: "2 mins" },
      { label: "Silk Board Junction", time: "15 mins" },
    ],
  },
];
