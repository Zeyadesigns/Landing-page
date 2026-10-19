// Every photograph on the site that is not the studio's own, with its source and
// licence. All are shown in greyscale (one treatment); none is presented as the
// studio's own work, people or premises.

export type Credit = {
  src: string;
  title: string;
  creator?: string;
  date?: string;
  licence: string;
  page: string;
  /** what the picture is, as a caption */
  caption: string;
  width: number;
  height: number;
};

export const photos = {
  mashrabiya: {
    src: "/images/mashrabiya-screen-met.jpg",
    title: "Mashrabiya Screen",
    date: "18th–19th century, Egypt",
    licence: "Public domain (CC0), The Metropolitan Museum of Art",
    page: "https://www.metmuseum.org/art/collection/search/445978",
    caption: "Mashrabiya screen, Egypt, 18th–19th century. The Metropolitan Museum of Art.",
    width: 1800,
    height: 2400,
  },
  nileBanks: {
    src: "/images/nile-banks-cairo-1857.jpg",
    title: "Banks of the Nile at Cairo",
    creator: "Francis Frith",
    date: "ca. 1857",
    licence: "Public domain (CC0), The Metropolitan Museum of Art",
    page: "https://www.metmuseum.org/art/collection/search/260971",
    caption: "Banks of the Nile at Cairo, Francis Frith, ca. 1857.",
    width: 1800,
    height: 1390,
  },
  islamicCairo: {
    src: "/images/islamic-cairo-1870.jpg",
    title: "Cairo, Islamic Cairo, 19th century pictures, 1870",
    creator: "Rodolfo Vittorio Lanzone",
    date: "1870",
    licence: "CC0, via Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Cairo,_Islamic_Cairo,_19th_century_pictures,_1870.jpg",
    caption: "A street in Islamic Cairo with mashrabiya balconies, 1870.",
    width: 1800,
    height: 2330,
  },
  cairoSkyline: {
    src: "/images/cairo-skyline-nile.jpg",
    title: "Cairo skyline, Nile River, Egypt",
    creator: "Vyacheslav Argenberg",
    date: "2007",
    licence: "CC BY 4.0, via Wikimedia Commons (converted to greyscale)",
    page: "https://commons.wikimedia.org/wiki/File:Cairo_skyline,_Nile_River,_Egypt.jpg",
    caption: "Cairo and the Nile.",
    width: 1800,
    height: 1200,
  },
  discovery: {
    src: "/images/process-discovery.jpg",
    title: "Pour-over coffee",
    creator: "Karl Fredrickson",
    licence: "Unsplash licence (converted to greyscale)",
    page: "https://unsplash.com/photos/TYIzeCiZ_60",
    caption: "Pour-over coffee.",
    width: 1200,
    height: 1500,
  },
  direction: {
    src: "/images/process-direction.jpg",
    title: "Hands holding a rangefinder camera",
    creator: "Kristian Karlsson",
    licence: "Unsplash licence (converted to greyscale)",
    page: "https://unsplash.com/photos/3V6ZTpZS-ag",
    caption: "Hands holding a camera.",
    width: 1200,
    height: 1500,
  },
  design: {
    src: "/images/process-design.jpg",
    title: "Hand adjusting faders on a mixing console",
    creator: "Drew Patrick Miller",
    licence: "Unsplash licence (converted to greyscale)",
    page: "https://unsplash.com/photos/_o6AAx9dl_Y",
    caption: "Hands on a mixing console.",
    width: 1200,
    height: 1500,
  },
  build: {
    src: "/images/process-build.jpg",
    title: "Tools laid out on dark wood",
    creator: "Todd Quackenbush",
    licence: "Unsplash licence (converted to greyscale)",
    page: "https://unsplash.com/photos/IClZBVw5W5A",
    caption: "Tools laid out on a workbench.",
    width: 1200,
    height: 1500,
  },
  launch: {
    src: "/images/process-launch.jpg",
    title: "Hands lighting a sparkler",
    creator: "Kelley Bozarth",
    licence: "Unsplash licence (converted to greyscale)",
    page: "https://unsplash.com/photos/n6vS3xlnsCc",
    caption: "A sparkler being lit.",
    width: 1200,
    height: 1500,
  },
} satisfies Record<string, Credit>;

export const credits: Credit[] = Object.values(photos);
