import heroExteriorImg from '../assets/images/hero_faisalabad_square_mall_1793018339280.jpg';
import grandAtriumImg from '../assets/images/mall_grand_atrium_interior_1793018339648.jpg';
import retailCorridorImg from '../assets/images/retail_boutique_corridor_1793018341142.jpg';
import diningLoungeImg from '../assets/images/mall_food_court_lounge_1793018342986.jpg';
import commercialLobbyImg from '../assets/images/commercial_office_lobby_1793018343775.jpg';
import concourseEntranceImg from '../assets/images/mall_concourse_entrance_1793018345576.jpg';
import facadeEveningImg from '../assets/images/mall_facade_evening_1793018348702.jpg';
import mezzanineEscalatorsImg from '../assets/images/mall_mezzanine_escalators_1793018347589.jpg';
import jhangRoadFrontageImg from '../assets/images/mall_jhang_road_frontage_1793084675626.jpg';
import glassCurtainArchImg from '../assets/images/mall_glass_curtain_architecture_1793084677043.jpg';
import familyVisitorPromenadeImg from '../assets/images/mall_family_visitor_promenade_1793084678058.jpg';
import conciergeDeskImg from '../assets/images/mall_concierge_management_desk_1793084678470.jpg';

export interface FacilityItem {
  id: string;
  index: string;
  title: string;
  category: 'Retail & Commercial' | 'Visitor Amenities' | 'Building Operations';
  shortDescription: string;
  detailedDescription: string;
  customizableNote: string;
  image: string;
  imageAlt: string;
  iconName: 'store' | 'building' | 'utensils' | 'car' | 'layers' | 'shield';
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Exterior & Arrival' | 'Retail & Atrium' | 'Dining & Commercial';
  caption: string;
  src: string;
  alt: string;
  aspect: 'wide' | 'standard';
}

export interface WhyChooseUsItem {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const BUSINESS_INFO = {
  name: 'Faisalabad Square',
  tagline: 'Premier Commercial & Shopping Destination on Jhang Road',
  phoneDisplay: '0304-1111250',
  phoneRaw: '03041111250',
  whatsappNumber: '923041111250',
  whatsappUrl: 'https://wa.me/923041111250',
  address: 'Jhang Road, Opposite Ayub Research, Gulfishan Colony, Faisalabad, 38000, Pakistan',
  shortAddress: 'Jhang Road, Opposite Ayub Research, Gulfishan Colony, Faisalabad',
  city: 'Faisalabad',
  postalCode: '38000',
  country: 'Pakistan',
  landmark: 'Opposite Ayub Agricultural Research Institute, Gulfishan Colony',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Jhang+Road+Opposite+Ayub+Research+Gulfishan+Colony+Faisalabad+38000+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed',
  mapDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Faisalabad+Square+Jhang+Road+Opposite+Ayub+Research+Gulfishan+Colony+Faisalabad+38000+Pakistan',
};

export const IMAGES = {
  heroExterior: heroExteriorImg,
  grandAtrium: grandAtriumImg,
  retailCorridor: retailCorridorImg,
  diningLounge: diningLoungeImg,
  commercialLobby: commercialLobbyImg,
  concourseEntrance: concourseEntranceImg,
  facadeEvening: facadeEveningImg,
  mezzanineEscalators: mezzanineEscalatorsImg,
  jhangRoadFrontage: jhangRoadFrontageImg,
  glassCurtainArch: glassCurtainArchImg,
  familyVisitorPromenade: familyVisitorPromenadeImg,
  conciergeDesk: conciergeDeskImg,
};

export const DEFAULT_FACILITIES: FacilityItem[] = [
  {
    id: 'retail-promenade',
    index: '01',
    title: 'Retail Showrooms & Brand Outlets',
    category: 'Retail & Commercial',
    shortDescription:
      'Well-proportioned retail storefronts with wide glass frontages and high-visibility walkways designed for fashion, lifestyle, and specialty brands.',
    detailedDescription:
      'Designed to accommodate modern retail operations in Faisalabad, our shopping concourses offer clear sightlines, generous corridor widths, and adaptable floor plates suitable for flagship stores and specialty boutiques.',
    customizableNote: 'Floor unit availability and lease specifications available upon inquiry',
    image: IMAGES.retailCorridor,
    imageAlt: 'Faisalabad Square retail boutique corridor with glass storefronts and stone flooring',
    iconName: 'store',
  },
  {
    id: 'central-atrium',
    index: '02',
    title: 'Multi-Level Atrium & Concourse Circulation',
    category: 'Visitor Amenities',
    shortDescription:
      'Bright, climate-controlled central atrium connecting multiple commercial levels with modern escalators, elevators, and spacious pedestrian galleries.',
    detailedDescription:
      'The architectural heart of Faisalabad Square features a naturally lit central atrium that guides visitors effortlessly across levels while providing an inviting environment for families and shoppers.',
    customizableNote: 'Accessible vertical circulation across all active public levels',
    image: IMAGES.grandAtrium,
    imageAlt: 'Sunlit central atrium at Faisalabad Square with skylight and escalators',
    iconName: 'layers',
  },
  {
    id: 'commercial-suites',
    index: '03',
    title: 'Commercial & Corporate Business Spaces',
    category: 'Retail & Commercial',
    shortDescription:
      'Dedicated commercial spaces suitable for corporate offices, service centers, consultancies, and regional business representation on Jhang Road.',
    detailedDescription:
      'Positioned along one of Faisalabad’s primary commercial arteries opposite Ayub Research, our commercial spaces offer professional lobby access and a prestigious business address.',
    customizableNote: 'Customizable layout options for commercial tenants and offices',
    image: IMAGES.commercialLobby,
    imageAlt: 'Executive commercial lobby and business concourse at Faisalabad Square',
    iconName: 'building',
  },
  {
    id: 'dining-hospitality',
    index: '04',
    title: 'Refreshment & Dining Spaces',
    category: 'Visitor Amenities',
    shortDescription:
      'Welcoming indoor seating and refreshment zones thoughtfully planned for visitors, families, and professionals spending time at the square.',
    detailedDescription:
      'Comfortable hospitality and dining areas designed to complement the retail experience, offering a relaxed setting for casual meetings, family visits, and daily refreshments.',
    customizableNote: 'Food and beverage space inquiries welcome via management office',
    image: IMAGES.diningLounge,
    imageAlt: 'Modern indoor dining pavilion and cafe seating inside Faisalabad Square',
    iconName: 'utensils',
  },
  {
    id: 'arrival-access',
    index: '05',
    title: 'Convenient Arrival & Roadside Access',
    category: 'Visitor Amenities',
    shortDescription:
      'Direct vehicular drop-off and organized parking access right off Jhang Road in Gulfishan Colony for hassle-free daily visits.',
    detailedDescription:
      'With direct frontage along Jhang Road opposite Ayub Research, visitors and commercial tenants benefit from straightforward approach routes, clear drop-off zones, and pedestrian-friendly entrances.',
    customizableNote: 'Direct access from Jhang Road corridor, Faisalabad',
    image: IMAGES.concourseEntrance,
    imageAlt: 'Covered drop-off concourse and pedestrian entrance at Faisalabad Square',
    iconName: 'car',
  },
  {
    id: 'facility-management',
    index: '06',
    title: 'On-Site Management & Building Maintenance',
    category: 'Building Operations',
    shortDescription:
      'Dedicated facility upkeep, clean common areas, and responsive on-site coordination supporting both visitors and commercial occupants.',
    detailedDescription:
      'Our administration maintains the common concourses, lighting, sanitation, and visitor assistance desks so businesses can operate smoothly in a clean, professional environment.',
    customizableNote: 'Direct management contact: 0304-1111250',
    image: IMAGES.mezzanineEscalators,
    imageAlt: 'Well-maintained multi-level mezzanine walkways and escalators at Faisalabad Square',
    iconName: 'shield',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Grand Exterior & Pedestrian Plaza',
    category: 'Exterior & Arrival',
    caption: 'Architectural facade and landscaped forecourt welcoming visitors along Jhang Road.',
    src: IMAGES.heroExterior,
    alt: 'Faisalabad Square modern shopping mall exterior and pedestrian plaza at dusk',
    aspect: 'wide',
  },
  {
    id: 'gal-2',
    title: 'Skylit Central Atrium',
    category: 'Retail & Atrium',
    caption: 'Natural daylight filtering through the vaulted glass atrium over polished stone walkways.',
    src: IMAGES.grandAtrium,
    alt: 'Central atrium interior of Faisalabad Square with glass skylight and escalators',
    aspect: 'standard',
  },
  {
    id: 'gal-3',
    title: 'Retail Gallery & Showrooms',
    category: 'Retail & Atrium',
    caption: 'Double-height glass storefronts and wide shopping corridors for retail brands.',
    src: IMAGES.retailCorridor,
    alt: 'High-end retail boutique corridor inside Faisalabad Square shopping mall',
    aspect: 'standard',
  },
  {
    id: 'gal-4',
    title: 'Dining & Refreshment Pavilion',
    category: 'Dining & Commercial',
    caption: 'Warm ambient lighting and contemporary seating in the indoor hospitality lounge.',
    src: IMAGES.diningLounge,
    alt: 'Indoor cafe and dining lounge area at Faisalabad Square',
    aspect: 'standard',
  },
  {
    id: 'gal-5',
    title: 'Commercial Concourse & Lobby',
    category: 'Dining & Commercial',
    caption: 'Refined stone and navy architectural finishes in the commercial reception concourse.',
    src: IMAGES.commercialLobby,
    alt: 'Commercial tower lobby and elevator concourse at Faisalabad Square',
    aspect: 'standard',
  },
  {
    id: 'gal-6',
    title: 'Covered Arrival Canopy',
    category: 'Exterior & Arrival',
    caption: 'Weather-protected vehicular drop-off and illuminated main entrance.',
    src: IMAGES.concourseEntrance,
    alt: 'Covered arrival drop-off concourse and main entrance at Faisalabad Square',
    aspect: 'standard',
  },
  {
    id: 'gal-7',
    title: 'Evening Architectural Illumination',
    category: 'Exterior & Arrival',
    caption: 'Warm golden facade lighting against the evening sky in Faisalabad.',
    src: IMAGES.facadeEvening,
    alt: 'Evening view of Faisalabad Square shopping complex with warm golden architectural lighting',
    aspect: 'wide',
  },
  {
    id: 'gal-8',
    title: 'Mezzanine Balconies & Escalators',
    category: 'Retail & Atrium',
    caption: 'Seamless vertical circulation linking upper retail and commercial levels.',
    src: IMAGES.mezzanineEscalators,
    alt: 'Multi-level mezzanine balconies and bronze escalators inside Faisalabad Square',
    aspect: 'standard',
  },
  {
    id: 'gal-9',
    title: 'Main Jhang Road Corridor Frontage',
    category: 'Exterior & Arrival',
    caption: 'Prominent daylight road frontage and arrival lane opposite Ayub Research.',
    src: IMAGES.jhangRoadFrontage,
    alt: 'Daylight exterior view of Faisalabad Square along main Jhang Road avenue',
    aspect: 'standard',
  },
  {
    id: 'gal-10',
    title: 'Family Promenade & Visitor Seating',
    category: 'Retail & Atrium',
    caption: 'Sunlit indoor promenade with greenery, seating, and glass elevator access.',
    src: IMAGES.familyVisitorPromenade,
    alt: 'Family shopping promenade with indoor seating and glass elevator at Faisalabad Square',
    aspect: 'standard',
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    index: '01',
    title: 'Prime Jhang Road Location',
    subtitle: 'Opposite Ayub Research, Gulfishan Colony',
    description:
      'Situated at one of Faisalabad’s most recognizable landmarks along Jhang Road, offering straightforward access for residents, shoppers, and businesses across the city.',
    image: IMAGES.jhangRoadFrontage,
    imageAlt: 'Daylight view of Faisalabad Square commercial frontage along main Jhang Road',
  },
  {
    index: '02',
    title: 'Modern Commercial Architecture',
    subtitle: 'Purpose-Built Retail & Business Environment',
    description:
      'Designed with spacious corridors, contemporary glass frontages, and well-lit public concourses that present retail brands and commercial offices in a distinguished setting.',
    image: IMAGES.glassCurtainArch,
    imageAlt: 'Contemporary glass curtain wall and travertine stone architecture at Faisalabad Square',
  },
  {
    index: '03',
    title: 'Visitor Comfort & Accessibility',
    subtitle: 'Thoughtful Circulation & Welcoming Spaces',
    description:
      'From convenient roadside drop-off to organized multi-level access, every detail is arranged to ensure a smooth, comfortable experience for families and daily visitors.',
    image: IMAGES.familyVisitorPromenade,
    imageAlt: 'Bright family promenade with seating, greenery, and escalators at Faisalabad Square',
  },
  {
    index: '04',
    title: 'Direct & Responsive Communication',
    subtitle: 'Dedicated Administration Support',
    description:
      'Whether you are planning a visit or inquiring about commercial space, our management team provides clear, direct assistance via phone, WhatsApp, and on-site visits.',
    image: IMAGES.conciergeDesk,
    imageAlt: 'Dedicated concierge and management reception desk at Faisalabad Square',
  },
];

const STORAGE_KEY = 'faisalabad_square_custom_facilities_v2';

export function loadFacilities(): FacilityItem[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_FACILITIES;
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed.map((item: FacilityItem) => {
        const defaultMatch = DEFAULT_FACILITIES.find((d) => d.id === item.id);
        return {
          ...item,
          image: defaultMatch ? defaultMatch.image : item.image,
        };
      });
    }
  } catch {
    // ignore storage errors
  }
  return DEFAULT_FACILITIES;
}

export function saveFacilities(items: FacilityItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore storage errors
  }
}

export function resetFacilities(): FacilityItem[] {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore storage errors
  }
  return DEFAULT_FACILITIES;
}
