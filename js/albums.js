const albums = [
  {
    year: 1988,
    title: "Liberal Animation",
    type: "Studio Album",
    vibe: "Raw / Fast / Snotty",
    cover: "img/covers/1988 Animal Liberation.jpg",
    description:
      "The rough-edged starting point. This stop sets the tone for the whole archive with scrappy energy, imperfect textures, and a visual language that feels xeroxed and loud.",
    tracks: ["Shut Up Already", "Freedumb", "Beer Bong", "Liza and Louise"]
  },
  {
    year: 1989,
    title: "S&M Airlines",
    type: "Studio Album",
    vibe: "Snark / Chaos / Momentum",
    cover: "img/covers/1989 NOFX_-_S&M_Airlines_cover.jpg",
    description:
      "A brighter, more reckless stop on the route. The design energy here leans into motion and color, helping the timeline feel like a real trip instead of a static archive.",
    tracks: ["Day to Daze", "Five Feet Under", "Professional Crastination", "Drug Free America"]
  },
  {
    year: 1991,
    title: "Ribbed",
    type: "Studio Album",
    vibe: "Skate / Melody / Snarl",
    cover: "img/covers/1991 ribbed.jpg",
    description:
      "The road picks up speed here. A sharper stop on the timeline, with the bus moving into a more confident era and the selected artwork taking over the spotlight panel.",
    tracks: ["Green Corn", "The Moron Brothers", "Food, Sex & Ewe", "Just the Flu"]
  },
  {
    year: 1992,
    title: "White Trash, Two Heebs and a Bean",
    type: "Studio Album",
    vibe: "Hooky / Chaotic / Classic",
    cover: "img/covers/1992 white trash.jpg",
    description:
      "This stop is where the interaction starts feeling especially satisfying. Click the marker, watch the bus glide, and let the selected cover feel like a flyer stapled to a wall.",
    tracks: ["Bob", "Stickin in My Eye", "Please Play This Song on the Radio", "Johnny Appleseed"]
  },
  {
    year: 1994,
    title: "Punk in Drublic",
    type: "Studio Album",
    vibe: "Anthemic / Bright / Ironic",
    cover: "img/covers/1994 punk in drublic.jpg",
    description:
      "A loud, iconic stop in the middle of the journey. This release should feel visually bold, with the kind of impact that makes the timeline feel like it passes through distinct eras.",
    tracks: ["Linoleum", "Leave It Alone", "Don't Call Me White", "The Brews"]
  },
  {
    year: 1996,
    title: "Heavy Petting Zoo",
    type: "Studio Album",
    vibe: "Weird / Provocative / Unhinged",
    cover: "img/covers/1996 heavy petting.jpg",
    description:
      "This is where the site can lean hardest into the zine-poster side of the aesthetic. Rough tape strips, distressed edges, and halftone grime help sell the punk attitude.",
    tracks: ["Hobophobic", "Philthy Phil Philanthropist", "August 8th", "Drop the World"]
  },
  {
    year: 1997,
    title: "So Long and Thanks for All the Shoes",
    type: "Studio Album",
    vibe: "Fast / Clever / Acidic",
    cover: "img/covers/1997 so long.jpg",
    description:
      "A tight, punchy visual beat in the lineup. This era works well with a stripped-back presentation that still feels rough, playful, and deliberately imperfect.",
    tracks: ["It's My Job to Keep Punk Rock Elite", "Kids of the K-Hole", "All Outta Angst", "180 Degrees"]
  },
  {
    year: 2000,
    title: "Pump Up the Valuum",
    type: "Studio Album",
    vibe: "Glossy / Bitter / Loud",
    cover: "img/covers/2000 valium.jpg",
    description:
      "A strong mid-journey anchor point. The selected album panel can expand details here while the bus and the timeline remain simple and readable.",
    tracks: ["And Now for Something Completely Similar", "Dinosaurs Will Die", "Clams Have Feelings Too", "Total Bummer"]
  },
  {
    year: 2003,
    title: "The War on Errorism",
    type: "Studio Album",
    vibe: "Political / Sharp / Aggressive",
    cover: "img/covers/2003 war on.jpg",
    description:
      "One of the strongest visual beats in the entire timeline. It should land like a protest poster layered over a road-worn archive.",
    tracks: ["Franco Un-American", "Idiots Are Taking Over", "Separation of Church and Skate", "Medio-core"]
  },
  {
    year: 2006,
    title: "Wolves in Wolves' Clothing",
    type: "Studio Album",
    vibe: "Hard / Smart / Snide",
    cover: "img/covers/2006 wolves.jpg",
    description:
      "The later middle stretch of the discography benefits from tighter visual rhythm, keeping the project cohesive while still letting each stop feel distinct.",
    tracks: ["60%", "Seeing Double at the Triple Rock", "Cool and Unusual Punishment", "The Marxist Brothers"]
  },
  {
    year: 2009,
    title: "Coaster",
    type: "Studio Album",
    vibe: "Loose / Roadworn / Crunchy",
    cover: "img/covers/2009 coaster.jpg",
    description:
      "A grimy roadside stop that fits the desert-drive concept especially well. This one feels like faded print, old tape, and hot pavement.",
    tracks: ["We Called It America", "The Quitter", "Creeping Out Sara", "The Agony of Victory"]
  },
  {
    year: 2012,
    title: "Self Entitled",
    type: "Studio Album",
    vibe: "Bold / Minimal / Direct",
    cover: "img/covers/2012 self.jpg",
    description:
      "A graphic, high-contrast stop that gives the interface a strong visual break. Good pacing comes from letting some eras feel louder and cleaner than others.",
    tracks: ["72 Hookers", "I Believe in Goddess", "My Sycophant Others", "Xmas Has Been X'ed"]
  },
  {
    year: 2016,
    title: "First Ditch Effort",
    type: "Studio Album",
    vibe: "Later-era / Reflective / Punchy",
    cover: "img/covers/2016 first ditch.jpg",
    description:
      "A later stop that helps the whole journey feel complete. The concept works best when the bus physically travels through clearly separated eras.",
    tracks: ["Six Years on Dope", "Happy Father's Day", "California Drought", "I'm a Transvest-Lite"]
  },
  {
    year: 2021,
    title: "Single Album",
    type: "Studio Album",
    vibe: "Tight / Mature / Sardonic",
    cover: "img/covers/2021 single.jpg",
    description:
      "A modern stop in the route, useful for showing that the interface can carry the same concept all the way to recent releases without feeling stale.",
    tracks: ["The Big Drag", "Linewleum", "Fish in a Gun Barrel", "Birmingham"]
  },
  {
    year: 2022,
    title: "Double Album",
    type: "Studio Album",
    vibe: "Recent / Weathered / Fast",
    cover: "img/covers/2022 double.jpg",
    description:
      "The latest stop on the road. Ending the journey here makes the timeline feel like a complete run rather than a nostalgic snapshot.",
    tracks: ["Darby Crashing Your Party", "My Favorite Enemy", "Is It Too Soon If Time Is Relative?", "Aloha to No One"]
  }
];
