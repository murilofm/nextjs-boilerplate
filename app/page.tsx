import { useState } from "react";

// ── Trip metadata ──────────────────────────────────────────────────────────────
const TRIP_META = {
  "title": "Aix-en-Provence Journey",
  "dateRange": "May 1 – May 10, 2026",
  "summary": "An exquisite 10-day journey through the South of France, blending the aristocratic art and history of Aix-en-Provence, the glittering coastal runs and Niçoise flavors of Nice, and the kinetic cultural revival and rugged Calanques of Marseille. Tailored for an active traveler with a taste for luxury dining, modern art, and breathtaking Mediterranean landscapes."
};

// ── Data ───────────────────────────────────────────────────────────────────────
const DAYS = [
  {
    "id": 1,
    "date": "May 1",
    "city": "Aix-en-Provence",
    "label": "Art & Historic City Walk",
    "color": "#B5541E",
    "sites": [
      {
        "name": "Discover the optical illusions at Fondation Vasarely",
        "note": "Prioritized today as it is the final day of the exhibition celebrating the Renault diamond.",
        "time": "Morning",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Fondation+Vasarely+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Fondation+Vasarely+Aix-en-Provence+official+website"
      },
      {
        "name": "Explore the elegant Cours Mirabeau and its historic fountains",
        "note": "Discover the Fontaine de la Rotonde, Fontaine des Neuf-Canons, and Fontaine d'Eau Chaude.",
        "time": "Morning",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Cours+Mirabeau+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Cours+Mirabeau+Aix-en-Provence+official+website"
      },
      {
        "name": "Admire the architecture of Hôtel de Montauron",
        "note": "An ancient mansion showcasing historical architecture.",
        "time": "Afternoon",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Hôtel+de+Montauron+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Hôtel+de+Montauron+Aix-en-Provence+official+website"
      },
      {
        "name": "Wander through the narrow Passage Agard and surrounding streets",
        "note": "A partially covered pedestrian passage just off Cours Mirabeau.",
        "time": "Afternoon",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Passage+Agard+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Passage+Agard+Aix-en-Provence+official+website"
      }
    ],
    "dining": [
      {
        "name": "Le Patio",
        "note": "Charming Provençal cuisine in a deeply authentic, warm courtyard setting. Advance booking essential.",
        "time": "Dinner",
        "flag": "Mid",
        "mapLink": "https://www.google.com/maps?q=Le+Patio+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Le+Patio+Aix-en-Provence+official+website"
      }
    ]
  },
  {
    "id": 2,
    "date": "May 2",
    "city": "Aix-en-Provence",
    "label": "Morning Run & Art",
    "color": "#B5541E",
    "sites": [
      {
        "name": "Enjoy a scenic morning run heading east out of the city",
        "note": "A refreshing active start with spectacular views toward Montagne Sainte-Victoire.",
        "time": "Morning",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Parks+surrounding+Aix-en-Provence+Aix-en-Provence",
        "officialLink": null
      },
      {
        "name": "Visit Cathédrale Saint-Sauveur and its Romanesque cloister",
        "note": "Wait for the guided tour to see the stunning cloister. General entry is free.",
        "time": "Morning",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Cathédrale+Saint-Sauveur+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Cathédrale+Saint-Sauveur+Aix-en-Provence+official+website"
      },
      {
        "name": "Taste calissons d'Aix, a traditional local confection",
        "note": "Discover this almond-shaped, marzipan-like specialty of Aix.",
        "time": "Morning",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=calissons+d'Aix+Aix-en-Provence",
        "officialLink": null
      },
      {
        "name": "Immerse in art at Caumont Centre d'Art",
        "note": "\"Toulouse-Lautrec, créateur d'icônes\" exhibition in one of the finest 18th-century hôtels particuliers.",
        "time": "Afternoon",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Caumont+Centre+d'Art+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Caumont+Centre+d'Art+Aix-en-Provence+official+website"
      }
    ],
    "dining": [
      {
        "name": "Vintrépide",
        "note": "Sophisticated, luxury-leaning hidden gem with an encyclopedic wine cellar and inventive plates.",
        "time": "Dinner",
        "flag": "Luxury",
        "mapLink": "https://www.google.com/maps?q=Vintrépide+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Vintrépide+Aix-en-Provence+official+website"
      }
    ]
  },
  {
    "id": 3,
    "date": "May 3",
    "city": "Aix-en-Provence",
    "label": "Brunch, Art & Food Tour",
    "color": "#B5541E",
    "sites": [
      {
        "name": "Leisurely French-style brunch",
        "note": "Fantastic coffee and delectable fresh pastries to start the day.",
        "time": "Morning",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Le+Tuyau+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Le+Tuyau+Aix-en-Provence+official+website"
      },
      {
        "name": "Discover contemporary art at Musée Granet",
        "note": "\"Kosta Alex, Coup de chapeau\" exhibition.",
        "time": "Morning",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Musée+Granet+XXe+(Chapelle+des+Pénitents+Blancs)+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Musée+Granet+Aix-en-Provence+official+website"
      },
      {
        "name": "Indulge in a gourmet food tasting tour focusing on Provençal delicacies",
        "note": "A guided tour exploring local food shops, bakeries, and regional specialties.",
        "time": "Afternoon",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Old+Town+&+Mazarin+Quarter+Aix-en-Provence",
        "officialLink": null
      },
      {
        "name": "Run through Parc Jourdan",
        "note": "A gentler run offering a different perspective of the surrounding nature.",
        "time": "Evening",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Parc+Jourdan+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Parc+Jourdan+Aix-en-Provence+official+website"
      }
    ],
    "dining": [
      {
        "name": "Le Bouche à Oreille",
        "note": "Authentic, bustling bistro fare offering traditional Provençal classics in Old Aix.",
        "time": "Dinner",
        "flag": "Mid",
        "mapLink": "https://www.google.com/maps?q=Le+Bouche+à+Oreille+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Le+Bouche+à+Oreille+Aix-en-Provence+official+website"
      }
    ]
  },
  {
    "id": 4,
    "date": "May 4",
    "city": "Aix-en-Provence → Nice",
    "label": "Transfer Day",
    "color": "#6B6057",
    "sites": [
      {
        "name": "Drive from Aix-en-Provence to Nice via scenic routes",
        "note": "Enjoy the changing landscapes of Provence giving way to the glittering Côte d'Azur.",
        "time": "Morning",
        "isTransit": true,
        "mapLink": "https://www.google.com/maps?q=Aix-en-Provence+to+Nice+Nice",
        "officialLink": null
      },
      {
        "name": "Check into your accommodation near the city center",
        "note": "Settle in and prepare for exploring Nice.",
        "time": "Afternoon",
        "isTransit": true,
        "mapLink": "https://www.google.com/maps?q=Nice+city+center+Nice",
        "officialLink": null
      }
    ],
    "dining": [
      {
        "name": "Le Vingt4",
        "note": "Modern French cuisine in a chic setting.",
        "time": "Dinner",
        "flag": "Luxury",
        "mapLink": "https://www.google.com/maps?q=Le+Vingt4+Nice",
        "officialLink": "https://www.google.com/search?q=Le+Vingt4+Nice+official+website"
      }
    ]
  },
  {
    "id": 5,
    "date": "May 5",
    "city": "Nice",
    "label": "Coastal Run & Old Town",
    "color": "#2E6E96",
    "sites": [
      {
        "name": "Run along the Promenade des Anglais up to Colline du Château",
        "note": "Tackle the stairs for sweeping, panoramic views of the Baie des Anges.",
        "time": "Morning",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Promenade+des+Anglais+&+Colline+du+Château+Nice",
        "officialLink": "https://www.google.com/search?q=Promenade+des+Anglais+Nice+official+website"
      },
      {
        "name": "Explore Vieux Nice and the colorful Cours Saleya Market",
        "note": "Discover the charm of narrow streets, historic architecture, and local produce.",
        "time": "Morning",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Vieux+Nice+&+Cours+Saleya+Nice",
        "officialLink": "https://www.google.com/search?q=Cours+Saleya+Market+Nice+official+website"
      },
      {
        "name": "Visit the Musée Matisse in the affluent Cimiez neighborhood",
        "note": "Housed in a 17th-century Genoese villa amidst staggering Belle Époque architecture.",
        "time": "Afternoon",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Musée+Matisse+Nice",
        "officialLink": "https://www.google.com/search?q=Musée+Matisse+Nice+official+website"
      },
      {
        "name": "Taste authentic Socca from street vendors",
        "note": "Sample the traditional Niçoise blistered chickpea pancake.",
        "time": "Late Afternoon",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Socca+Old+Town+Nice",
        "officialLink": null
      }
    ],
    "dining": [
      {
        "name": "La Petite Maison",
        "note": "Classic Niçoise dishes in a lively, upscale atmosphere.",
        "time": "Dinner",
        "flag": "Luxury",
        "mapLink": "https://www.google.com/maps?q=La+Petite+Maison+Nice",
        "officialLink": "https://www.google.com/search?q=La+Petite+Maison+Nice+official+website"
      }
    ]
  },
  {
    "id": 6,
    "date": "May 6",
    "city": "Nice",
    "label": "Cathedral, Beach & Run",
    "color": "#2E6E96",
    "sites": [
      {
        "name": "Discover the Russian Orthodox Cathedral",
        "note": "A stunning architectural gem and one of the most beautiful Russian Orthodox churches outside of Russia.",
        "time": "Morning",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=St.+Nicholas+Russian+Orthodox+Cathedral+Nice",
        "officialLink": "https://www.google.com/search?q=St.+Nicholas+Russian+Orthodox+Cathedral+Nice+official+website"
      },
      {
        "name": "Enjoy a relaxing morning at a private beach club",
        "note": "Unwind by the sea with sun loungers and amenities.",
        "time": "Morning",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Selected+beach+club+along+the+Nice+coastline+Nice",
        "officialLink": null
      },
      {
        "name": "Run a scenic coastal route along Cap-Ferrat",
        "note": "An invigorating run right on the edge of the Mediterranean limestone cliffs.",
        "time": "Afternoon",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Cap-Ferrat+Nice",
        "officialLink": "https://www.google.com/search?q=Cap-Ferrat+official+website"
      },
      {
        "name": "Explore Port Lympia and grab coffee at Café du Cycliste",
        "note": "Wander the port area and enjoy the cycling-themed café atmosphere.",
        "time": "Late Afternoon",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Port+Lympia+Nice",
        "officialLink": "https://www.google.com/search?q=Port+Lympia+Nice+official+website"
      }
    ],
    "dining": [
      {
        "name": "Le Girelier",
        "note": "Fresh, renowned seafood by the port of Nice.",
        "time": "Dinner",
        "flag": "Upscale",
        "mapLink": "https://www.google.com/maps?q=Le+Girelier+Nice",
        "officialLink": "https://www.google.com/search?q=Le+Girelier+Nice+official+website"
      }
    ]
  },
  {
    "id": 7,
    "date": "May 7",
    "city": "Nice → Marseille",
    "label": "Transfer Day",
    "color": "#6B6057",
    "sites": [
      {
        "name": "Drive from Nice to Marseille along the Mediterranean coast",
        "note": "A scenic coastal drive offering stunning views of the Riviera.",
        "time": "Morning",
        "isTransit": true,
        "mapLink": "https://www.google.com/maps?q=Nice+to+Marseille+Marseille",
        "officialLink": null
      },
      {
        "name": "Check into your accommodation near the historic Vieux Port",
        "note": "Settle into your lodging in the heart of Marseille.",
        "time": "Afternoon",
        "isTransit": true,
        "mapLink": "https://www.google.com/maps?q=Vieux+Port+area,+Marseille+Marseille",
        "officialLink": null
      },
      {
        "name": "Wander through Le Panier district",
        "note": "Explore Marseille's oldest quarter, a vibrant maze of street art, artisan boutiques, and hidden squares.",
        "time": "Afternoon",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Le+Panier+Marseille",
        "officialLink": "https://www.google.com/search?q=Le+Panier+Marseille+official+website"
      }
    ],
    "dining": [
      {
        "name": "Chez Fonfon",
        "note": "Authentic and traditional Bouillabaisse in the picturesque Vallon des Auffes.",
        "time": "Dinner",
        "flag": "Luxury",
        "mapLink": "https://www.google.com/maps?q=Chez+Fonfon+Marseille",
        "officialLink": "https://www.google.com/search?q=Chez+Fonfon+Marseille+official+website"
      }
    ]
  },
  {
    "id": 8,
    "date": "May 8",
    "city": "Marseille",
    "label": "Coastal Run & Museums",
    "color": "#4A7A5A",
    "sites": [
      {
        "name": "Run along the Corniche Président John Fitzgerald Kennedy",
        "note": "A breathtaking coastal road offering uninterrupted views of the Frioul archipelago.",
        "time": "Morning",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Corniche+Président+John+Fitzgerald+Kennedy+Marseille",
        "officialLink": "https://www.google.com/search?q=Corniche+Président+John+Fitzgerald+Kennedy+Marseille+official+website"
      },
      {
        "name": "Wander through Fort Saint-Jean and discover the MuCEM museum",
        "note": "Experience the architectural contrast of the 12th-century fort and the modern concrete lacework shell of the museum.",
        "time": "Morning",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Fort+Saint-Jean+&+MuCEM+Marseille",
        "officialLink": "https://www.google.com/search?q=MuCEM+Marseille+official+website"
      },
      {
        "name": "Explore the Vieux Port and relax at Café de l'Abbaye",
        "note": "Take in the bustling harbor atmosphere and grab a coffee at a historic local staple.",
        "time": "Afternoon",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Vieux+Port+Marseille",
        "officialLink": "https://www.google.com/search?q=Vieux+Port+Marseille+official+website"
      },
      {
        "name": "Visit the opulent Palais Longchamp and its beautiful gardens",
        "note": "A magnificent monumental palace housing fine arts and natural history museums.",
        "time": "Late Afternoon",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Palais+Longchamp+Marseille",
        "officialLink": "https://www.google.com/search?q=Palais+Longchamp+Marseille+official+website"
      }
    ],
    "dining": [
      {
        "name": "La Boîte à Sardine",
        "note": "Vibrant seafood bistro with a local flair.",
        "time": "Dinner",
        "flag": "Mid",
        "mapLink": "https://www.google.com/maps?q=La+Boîte+à+Sardine+Marseille",
        "officialLink": "https://www.google.com/search?q=La+Boîte+à+Sardine+Marseille+official+website"
      }
    ]
  },
  {
    "id": 9,
    "date": "May 9",
    "city": "Marseille",
    "label": "Calanques Hike & Culture",
    "color": "#4A7A5A",
    "sites": [
      {
        "name": "Trail run or hike in the stunning Calanques National Park",
        "note": "Experience dramatic white limestone cliffs, turquoise waters, and unique flora. It is rugged and demanding.",
        "time": "Morning",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Calanques+National+Park+(Sugiton)+Marseille",
        "officialLink": "https://www.google.com/search?q=Calanques+National+Park+Marseille+official+website"
      },
      {
        "name": "Recover with a scenic walk at Vallon des Auffes",
        "note": "A tiny traditional fishing port hidden under a bridge just off the Corniche.",
        "time": "Afternoon",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Vallon+des+Auffes+Marseille",
        "officialLink": "https://www.google.com/search?q=Vallon+des+Auffes+Marseille+official+website"
      },
      {
        "name": "Explore the bohemian Cours Julien neighborhood",
        "note": "Discover colorful murals, independent boutiques, and lively cafes.",
        "time": "Late Afternoon",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Cours+Julien+Marseille",
        "officialLink": "https://www.google.com/search?q=Cours+Julien+Marseille+official+website"
      },
      {
        "name": "Experience a game of pétanque with locals",
        "note": "A classic Provençal pastime in the heart of the city.",
        "time": "Evening",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Local+park+or+square+Marseille",
        "officialLink": null
      }
    ],
    "dining": [
      {
        "name": "Restaurant AM par Alexandre Mazzia",
        "note": "Michelin 3-star restaurant serving mind-bending, spice-driven tasting menus. Book exactly when reservations open.",
        "time": "Dinner",
        "flag": "Luxury",
        "mapLink": "https://www.google.com/maps?q=Restaurant+AM+par+Alexandre+Mazzia+Marseille",
        "officialLink": "https://www.google.com/search?q=Restaurant+AM+par+Alexandre+Mazzia+Marseille+official+website"
      }
    ]
  },
  {
    "id": 10,
    "date": "May 10",
    "city": "Marseille",
    "label": "Basilica & Old Port",
    "color": "#4A7A5A",
    "sites": [
      {
        "name": "Walk up to Basilique Notre-Dame de la Garde",
        "note": "Marseille's iconic basilica, offering a 360-degree view of your entire trip's final theater.",
        "time": "Morning",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Notre-Dame+de+la+Garde+Marseille",
        "officialLink": "https://www.google.com/search?q=Notre-Dame+de+la+Garde+Marseille+official+website"
      },
      {
        "name": "Discover the ancient Abbaye Saint-Victor and its crypts",
        "note": "One of the oldest places of worship in Europe, with a rich history.",
        "time": "Morning",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Abbaye+Saint-Victor+Marseille",
        "officialLink": "https://www.google.com/search?q=Abbaye+Saint-Victor+Marseille+official+website"
      },
      {
        "name": "Final coffee and souvenir shopping for local products",
        "note": "Look for local soaps, textiles, or olive oil before your departure.",
        "time": "Afternoon",
        "isTransit": false,
        "mapLink": "https://www.google.com/maps?q=Vieux+Port+Marseille",
        "officialLink": null
      }
    ],
    "dining": [
      {
        "name": "Ciel Rooftop",
        "note": "Modern cuisine with panoramic views of Marseille before a late departure.",
        "time": "Dinner",
        "flag": "Upscale",
        "mapLink": "https://www.google.com/maps?q=Ciel+Rooftop+Marseille",
        "officialLink": "https://www.google.com/search?q=Ciel+Rooftop+Marseille+official+website"
      }
    ]
  }
];
const WATCHOUTS = [
  {
    "id": 1,
    "severity": "warn",
    "title": "Car Rental Essentials",
    "body": "Car Rental: A car rental is essential for exploring the region's scenic routes and reaching attractions like the Calanques. Book well in advance, especially for automatic transmission if preferred. Be prepared to park it and explore cities on foot."
  },
  {
    "id": 2,
    "severity": "check",
    "title": "Advance Reservations Required",
    "body": "Reservations: For high-end dinner spots and popular exhibitions, reservations or advance ticket purchases are highly recommended. Book Michelin-starred spots like AM par Alexandre Mazzia the exact second reservations open."
  },
  {
    "id": 3,
    "severity": "warn",
    "title": "City Parking Challenges",
    "body": "Parking: City center parking can be challenging and expensive. Look for underground public car parks and consider walking or using local public transport once in a city."
  },
  {
    "id": 4,
    "severity": "ok",
    "title": "Running & Packing Tips",
    "body": "Running Routes & Packing: Always carry water, especially for longer or more challenging routes like Montaiguet or the Calanques. Bring both elegant attire for high-end dining and trail running shoes for coastal paths."
  },
  {
    "id": 5,
    "severity": "check",
    "title": "Exhibition Timing Alert",
    "body": "Timing: The Fondation Vasarely exhibition in Aix ends on May 1st, so prioritize visiting upon your arrival."
  },
  {
    "id": 6,
    "severity": "ok",
    "title": "Basic French Phrases",
    "body": "Language: While English is spoken in tourist areas, learning a few basic French phrases will enhance your interactions and be appreciated by locals."
  }
];
const EXTRA_SECTIONS = [
  {
    "title": "Top Restaurants",
    "items": [
      {
        "name": "Angelina",
        "note": "Aix-en-Provence · Mid · Known for outstanding traditional Daube Provençale.",
        "mapLink": "https://www.google.com/maps?q=Angelina+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Angelina+Aix-en-Provence+official+website"
      },
      {
        "name": "Le Bouche à Oreille",
        "note": "Old Aix-en-Provence · Mid · Bustling bistro known for authentic Provençal fare.",
        "mapLink": "https://www.google.com/maps?q=Le+Bouche+à+Oreille+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Le+Bouche+à+Oreille+Aix-en-Provence+official+website"
      },
      {
        "name": "Le Patio",
        "note": "Old Town · Mid · Charming setting in a hidden courtyard.",
        "mapLink": "https://www.google.com/maps?q=Le+Patio+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Le+Patio+Aix-en-Provence+official+website"
      },
      {
        "name": "Vintrépide",
        "note": "Old Town · Luxury · High-end dining with an excellent wine list and modern decor.",
        "mapLink": "https://www.google.com/maps?q=Vintrépide+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Vintrépide+Aix-en-Provence+official+website"
      },
      {
        "name": "Le Vingt4",
        "note": "Nice Center · Luxury · Chic setting for modern French cuisine.",
        "mapLink": "https://www.google.com/maps?q=Le+Vingt4+Nice",
        "officialLink": "https://www.google.com/search?q=Le+Vingt4+Nice+official+website"
      },
      {
        "name": "La Petite Maison",
        "note": "Nice Center · Luxury · Lively atmosphere with classic Niçoise dishes.",
        "mapLink": "https://www.google.com/maps?q=La+Petite+Maison+Nice",
        "officialLink": "https://www.google.com/search?q=La+Petite+Maison+Nice+official+website"
      },
      {
        "name": "Le Girelier",
        "note": "Port Lympia · Upscale · Renowned for fresh seafood near the port.",
        "mapLink": "https://www.google.com/maps?q=Le+Girelier+Nice",
        "officialLink": "https://www.google.com/search?q=Le+Girelier+Nice+official+website"
      },
      {
        "name": "Chez Fonfon",
        "note": "Vallon des Auffes · Luxury · Famous for its authentic Bouillabaisse.",
        "mapLink": "https://www.google.com/maps?q=Chez+Fonfon+Marseille",
        "officialLink": "https://www.google.com/search?q=Chez+Fonfon+Marseille+official+website"
      },
      {
        "name": "Restaurant AM par Alexandre Mazzia",
        "note": "Marseille · Luxury · Michelin 3-star restaurant for an exceptional culinary experience.",
        "mapLink": "https://www.google.com/maps?q=Restaurant+AM+par+Alexandre+Mazzia+Marseille",
        "officialLink": "https://www.google.com/search?q=Restaurant+AM+par+Alexandre+Mazzia+Marseille+official+website"
      },
      {
        "name": "La Boîte à Sardine",
        "note": "Old Port · Mid · Lively seafood bistro with a local flair.",
        "mapLink": "https://www.google.com/maps?q=La+Boîte+à+Sardine+Marseille",
        "officialLink": "https://www.google.com/search?q=La+Boîte+à+Sardine+Marseille+official+website"
      }
    ]
  },
  {
    "title": "Bars & Wine Bars",
    "items": [
      {
        "name": "Le Vieux Tonneau",
        "note": "Aix-en-Provence · Mid · Top wine bar offering exquisite wines and savory tapas.",
        "mapLink": "https://www.google.com/maps?q=Le+Vieux+Tonneau+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Le+Vieux+Tonneau+Aix-en-Provence+official+website"
      }
    ]
  },
  {
    "title": "Cafes & Coffee",
    "items": [
      {
        "name": "Mana Espresso",
        "note": "Vieil Aix-en-Provence · Mid · Specialty coffee and legendary brownies run by a British couple.",
        "mapLink": "https://www.google.com/maps?q=Mana+Espresso+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Mana+Espresso+Aix-en-Provence+official+website"
      },
      {
        "name": "Le Tuyau",
        "note": "Historical center · Mid · French-style brunch with high-quality fresh ingredients.",
        "mapLink": "https://www.google.com/maps?q=Le+Tuyau+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Le+Tuyau+Aix-en-Provence+official+website"
      },
      {
        "name": "Café du Cycliste",
        "note": "Port Lympia · Budget · Cycling-themed café with good coffee and atmosphere.",
        "mapLink": "https://www.google.com/maps?q=Café+du+Cycliste+Nice",
        "officialLink": "https://www.google.com/search?q=Café+du+Cycliste+Nice+official+website"
      }
    ]
  },
  {
    "title": "Must-Try Food",
    "items": [
      {
        "name": "Daube Provençale",
        "note": "Aix-en-Provence · Mid · A traditional rich, slow-cooked beef and wine stew.",
        "mapLink": "https://www.google.com/maps?q=Daube+Provençale+Aix-en-Provence",
        "officialLink": null
      },
      {
        "name": "Socca",
        "note": "Vieux Nice · Budget · Traditional Niçoise chickpea pancake, best from street vendors.",
        "mapLink": "https://www.google.com/maps?q=Socca+Vieux+Nice",
        "officialLink": null
      },
      {
        "name": "Bouillabaisse",
        "note": "Marseille · Luxury · Traditional Provençal fish stew, a must-try culinary rite of passage.",
        "mapLink": "https://www.google.com/maps?q=Bouillabaisse+Marseille",
        "officialLink": null
      }
    ]
  },
  {
    "title": "Top Activities",
    "items": [
      {
        "name": "Coastal running to Cap-Ferrat",
        "note": "Cap-Ferrat · Free · Spectacular running route right on the edge of the limestone cliffs.",
        "mapLink": "https://www.google.com/maps?q=Cap-Ferrat+Nice",
        "officialLink": "https://www.google.com/search?q=Cap-Ferrat+official+website"
      },
      {
        "name": "Hiking in Calanques National Park",
        "note": "Calanques National Park · Free · Explore stunning limestone cliffs and turquoise inlets.",
        "mapLink": "https://www.google.com/maps?q=Calanques+National+Park+Marseille",
        "officialLink": "https://www.google.com/search?q=Calanques+National+Park+Marseille+official+website"
      }
    ]
  },
  {
    "title": "Places to Know",
    "items": [
      {
        "name": "Fondation Vasarely",
        "note": "Aix-en-Provence Outskirts · Mid · Architectural marvel dedicated to 1970s op-art and kinetic art.",
        "mapLink": "https://www.google.com/maps?q=Fondation+Vasarely+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Fondation+Vasarely+Aix-en-Provence+official+website"
      },
      {
        "name": "Cathédrale Saint-Sauveur",
        "note": "Old Town · Free · Historic cathedral with a beautiful Romanesque cloister requiring a guided tour.",
        "mapLink": "https://www.google.com/maps?q=Cathédrale+Saint-Sauveur+Aix-en-Provence",
        "officialLink": "https://www.google.com/search?q=Cathédrale+Saint-Sauveur+Aix-en-Provence+official+website"
      },
      {
        "name": "Castle Hill (Colline du Château)",
        "note": "Nice · Free · Offers panoramic views of Nice and the Baie des Anges.",
        "mapLink": "https://www.google.com/maps?q=Castle+Hill+(Colline+du+Château)+Nice",
        "officialLink": "https://www.google.com/search?q=Colline+du+Château+Nice+official+website"
      },
      {
        "name": "MuCEM",
        "note": "Vieux Port · Mid · Museum of European and Mediterranean Civilisations inside a stunning concrete lacework shell.",
        "mapLink": "https://www.google.com/maps?q=MuCEM+Marseille",
        "officialLink": "https://www.google.com/search?q=MuCEM+Marseille+official+website"
      },
      {
        "name": "Notre-Dame de la Garde",
        "note": "Marseille · Free · Iconic basilica offering 360-degree panoramic views.",
        "mapLink": "https://www.google.com/maps?q=Notre-Dame+de+la+Garde+Marseille",
        "officialLink": "https://www.google.com/search?q=Notre-Dame+de+la+Garde+Marseille+official+website"
      }
    ]
  }
];

// ── Link icons ─────────────────────────────────────────────────────────────────
function LinkIcons({ mapLink, officialLink }) {
  if (!mapLink && !officialLink) return null;
  const btn = {
    textDecoration: "none",
    fontSize: 11,
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    border: "1px solid #D5CBBC",
    borderRadius: 999,
    background: "#F8F4EC",
    cursor: "pointer",
  };
  return (
    <div style={{ display: "flex", gap: 5, marginTop: 5, flexWrap: "wrap" }}>
      {mapLink && (
        <a href={mapLink} target="_blank" rel="noopener noreferrer" title="Open in Maps" style={btn}>📍</a>
      )}
      {officialLink && (
        <a href={officialLink} target="_blank" rel="noopener noreferrer"
           title={officialLink.includes("google.com/search") ? "Search" : "Official site"}
           style={btn}>🌐</a>
      )}
    </div>
  );
}

// ── Severity dot ───────────────────────────────────────────────────────────────
const SEV_COLOR = { warn: "#C4722A", check: "#8C6A3F", ok: "#4A7A5A" };

// ── App ────────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeDay, setActiveDay] = useState(0);
  const [tab, setTab] = useState("itinerary");
  const day = DAYS[activeDay];

  const headerStyle = {
    background: "#1A1612",
    padding: "18px 15px 12px",
  };

  const tabBtn = (t) => ({
    background: tab === t ? "#F5F0E8" : "transparent",
    color: tab === t ? "#1A1612" : "#8C7B6B",
    border: "1px solid",
    borderColor: tab === t ? "#F5F0E8" : "#3A3028",
    borderRadius: 2,
    padding: "5px 12px",
    fontSize: 9,
    letterSpacing: 1,
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: "sans-serif",
  });

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F5F0E8",
      fontFamily: "'Georgia', serif",
      color: "#1A1612",
      maxWidth: "100vw",
      overflowX: "hidden",
    }}>

      {/* Header */}
      <div style={headerStyle}>
        <span style={{ fontSize: 9, letterSpacing: 2, color: "#8C7B6B", textTransform: "uppercase", fontFamily: "sans-serif" }}>
          {TRIP_META.dateRange}
        </span>
        <h1 style={{ fontSize: 26, fontWeight: 400, color: "#F5F0E8", margin: "4px 0 0" }}>
          {TRIP_META.title}
        </h1>
        <p style={{ margin: "8px 0 0", color: "#B9AA99", fontSize: 11, lineHeight: 1.4, maxWidth: 760, fontFamily: "sans-serif" }}>
          {TRIP_META.summary}
        </p>
        <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
          {["itinerary", "watchouts", "extras"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={tabBtn(t)}>{t}</button>
          ))}
        </div>
      </div>

      {/* Watchouts tab */}
      {tab === "watchouts" && (
        <div style={{ padding: "15px" }}>
          {WATCHOUTS.map(w => (
            <div key={w.id} style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: "1px solid #DDD5C8" }}>
              <div style={{ flexShrink: 0, width: 7, height: 7, borderRadius: "50%", background: SEV_COLOR[w.severity] || "#8C6A3F", marginTop: 4 }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, fontFamily: "sans-serif" }}>{w.title}</div>
                <div style={{ fontSize: 11, color: "#6B5E52", lineHeight: 1.35 }}>{w.body}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Extras tab */}
      {tab === "extras" && (
        <div style={{ padding: "15px" }}>
          {EXTRA_SECTIONS.map(section => (
            <div key={section.title} style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: "#8C7B6B", fontFamily: "sans-serif", borderBottom: "1px solid #D5CBBC", paddingBottom: 5, marginBottom: 8 }}>
                {section.title}
              </div>
              {section.items.map((item, i) => (
                <div key={i} style={{ padding: "8px 0", borderBottom: "1px solid #E8E0D4" }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-start", justifyContent: "space-between" }}>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: 14, color: "#1A1612", fontWeight: 500, lineHeight: 1.25 }}>{item.name}</div>
                      <div style={{ fontSize: 11, color: "#6B5E52", marginTop: 2, lineHeight: 1.35 }}>{item.note}</div>
                    </div>
                    <LinkIcons mapLink={item.mapLink} officialLink={item.officialLink} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Itinerary tab */}
      {tab === "itinerary" && (
        <div style={{ display: "flex", minHeight: "calc(100vh - 140px)" }}>

          {/* Day sidebar */}
          <div style={{ width: "25%", flexShrink: 0, background: "#EDE7DC", borderRight: "1px solid #D5CBBC", overflowY: "auto" }}>
            {DAYS.map((d, i) => (
              <button key={d.id} onClick={() => setActiveDay(i)} style={{
                width: "100%",
                background: activeDay === i ? "#1A1612" : "transparent",
                border: "none",
                padding: "12px 6px",
                textAlign: "center",
                cursor: "pointer",
                borderLeft: activeDay === i ? `3px solid ${d.color}` : "3px solid transparent",
              }}>
                <div style={{ fontSize: 8, color: activeDay === i ? "#8C7B6B" : "#9A8E84", fontFamily: "sans-serif" }}>{d.date}</div>
                <div style={{ fontSize: 10, color: activeDay === i ? "#F5F0E8" : "#3A3028", fontWeight: activeDay === i ? 700 : 400 }}>
                  {d.city.includes("→") ? d.city.split("→").pop().trim().split("/")[0].trim() : d.city.split(" ")[0]}
                </div>
              </button>
            ))}
          </div>

          {/* Day detail */}
          <div style={{ width: "75%", padding: "15px 10px", boxSizing: "border-box" }}>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 400 }}>{day.city}</h2>
            <p style={{ margin: "2px 0 15px", fontSize: 11, color: "#8C7B6B", fontStyle: "italic" }}>{day.label}</p>

            {["sites", "dining"].map(section => (
              <div key={section} style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 8, letterSpacing: 1, textTransform: "uppercase", color: "#9A8E84", fontFamily: "sans-serif", borderBottom: "1px solid #D5CBBC", marginBottom: 6, paddingBottom: 2 }}>
                  {section}
                </div>
                {day[section].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, padding: "8px 0", borderBottom: "1px solid #E8E0D4" }}>
                    <div style={{ width: 70, flexShrink: 0, fontSize: 9, color: "#9A8E84", fontFamily: "sans-serif", paddingTop: 2 }}>
                      {item.time}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, color: "#1A1612", fontWeight: 500, wordWrap: "break-word", lineHeight: 1.25 }}>{item.name}</div>
                      <div style={{ fontSize: 10, color: "#6B5E52", lineHeight: 1.25, wordWrap: "break-word" }}>{item.note}</div>
                      <LinkIcons mapLink={item.mapLink} officialLink={item.officialLink} />
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {item.isTransit && (
                          <div style={{ marginTop: 4, fontSize: 8, color: "#2E6E96", border: "1px solid #8CB4CC", padding: "1px 4px", display: "inline-block", textTransform: "uppercase" }}>Transit</div>
                        )}
                        {item.flag && (
                          <div style={{ marginTop: 4, fontSize: 8, color: "#B5541E", border: "1px solid #D5956A", padding: "1px 4px", display: "inline-block", textTransform: "uppercase" }}>{item.flag}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}
