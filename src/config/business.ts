export const BUSINESS = {
  name: 'Chicago Heating & Air',
  shortName: 'Chicago Heating & Air',
  tagline: 'Heating & Air Conditioning Service When Comfort Can\'t Wait',
  phone: '(872) 224-2893',
  phoneRaw: '+18722242893',
  email: 'info@chicagoheatingair.pro',
  address: {
    street: '7043 S East End Ave',
    city: 'Chicago',
    state: 'IL',
    zip: '60649',
    full: '7043 S East End Ave, Chicago, IL 60649',
  },
  googleRating: 4.8,
  googleReviewCount: 49,
  googleMapsUrl: 'https://www.google.com/maps/place/Chicago+Heating+%26+Air/data=!4m7!3m6!1s0x880e2955ea9f79c7:0x3ee2003951d133f0!8m2!3d41.7666751!4d-87.5823921!16s%2Fg%2F11vjjv9rst',
  website: 'https://chicagoheatingair.pro/',
  foundedYear: 2010,
  license: 'Licensed, Bonded & Insured',
  certifications: ['NATE Certified Technicians'],
  services: [
    'AC Repair', 'Furnace Repair', 'Heat Pump Services', 'AC Installation',
    'AC System Replacement', 'Emergency AC/HVAC Service', 'Air Duct Cleaning',
    'Indoor Air Quality Solutions', 'Air Filtration Systems', 'Air Handler Services',
    'Refrigerant Recharge', 'AC Maintenance', 'Seasonal Inspections',
    'Thermostat Installation & Repair', 'Smart Thermostat Upgrades',
    'Ventilation Solutions', 'Zoning Systems', 'Duct Installation & Repair',
    'UV Air Sanitizers', 'Energy Efficiency Audits', 'Commercial HVAC Services',
  ],
  serviceAreas: [
    'Chicago, IL', 'Hyde Park', 'South Shore', 'Woodlawn',
    'Jackson Park Highlands', 'Grand Crossing', 'South Chicago', 'Chatham',
    'Avalon Park', 'Calumet Heights', 'South Deering', 'East Side',
    'Hegewisch', 'Pullman', 'Roseland', 'West Pullman', 'Riverdale',
  ],
  neighborhoods: [
    'Hyde Park', 'South Shore', 'Woodlawn', 'Grand Crossing',
    'Chatham', 'Avalon Park', 'Calumet Heights', 'South Chicago',
    'East Side', 'Hegewisch', 'Pullman', 'Roseland',
    'West Pullman', 'Riverdale', 'Washington Heights',
    'Morgan Park', 'Beverly', 'Mount Greenwood',
  ],
  hours: {
    weekday: '7:00 AM – 7:00 PM',
    saturday: '8:00 AM – 5:00 PM',
    sunday: 'Closed',
    emergency: 'Available — call for emergency service',
  },
  coordinates: {
    latitude: 41.7666751,
    longitude: -87.5823921,
  },
} as const;

export const SITE_CONFIG = {
  title: 'Chicago Heating & Air | HVAC Repair & AC Service in Chicago, IL',
  description:
    'Call Chicago Heating & Air for AC repair, furnace repair, HVAC maintenance, installations, and emergency heating and cooling service in Chicago, IL.',
  url: 'https://chicagoheatingair.pro',
  locale: 'en_US',
} as const;
