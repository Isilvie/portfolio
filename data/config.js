/**
 * ============================================================
 *  PORTFOLIO CONFIG 
 * ============================================================
 *
 *  VIMEO IDs: the number at the end of a Vimeo URL
 *    e.g.  https://vimeo.com/123456789  →  "123456789"
 *
 *  PHOTOS: direct links to your images (Dropbox, Google Drive
 *          public link, Squarespace asset URL, etc.)
 *
 *  RESUME: place your PDF in the /assets/ folder and update
 *          the path below.
 * ============================================================
 */

const CONFIG = {

  /* ── IDENTITY ─────────────────────────────────────────── */
  name:       "Katte Lubega",          // shown top-left on every page
  tagline:    "Filmmaker · Photographer · Videographer",

  /* ── HOME PAGE ────────────────────────────────────────── */
  home: {
    vimeoId:  "1183151500",           // replace with your featured Vimeo video ID
    title:    "Featured Work",
    subtitle: "Demo Reel"
  },

  /* ── FILMS ────────────────────────────────────────────── */
  films: [
      ],

  /* ── PHOTOGRAPHY ──────────────────────────────────────── */
  photography: [
    // Add as many objects as you need.
    // src: a direct URL to your image (or a relative path like "assets/photos/img1.jpg")
    { src: "photos/photo1.JPG", alt: "Clt skyline" },
    { src: "photos/photo2.jpg", alt: "Chicago" },
    { src: "photos/photo6.jpg", alt: "MKE" },
    { src: "photos/photo4.jpg", alt: "portrait" },
    { src: "photos/photo5.JPG", alt: "Vandy" },
    { src: "photos/photo7.JPG", alt: "grad" }
   ],

  /* ── VIDEOGRAPHY ──────────────────────────────────────── */
  videography: [
    {
      vimeoId:  "1183151500",
      title:    "Demo Reel",
      year:     "2026"
    },
        
    {
      vimeoId:  "1181795576",
      title:    "Instagram Reel",
      year:     "2026"
    }
  ],

  /* ── ABOUT ────────────────────────────────────────────── */
  about: {
    portrait:  "photos/potrait.jpg",  // place your photo at assets/portrait.jpg
                                        // or replace with a URL
    bio: [
      " is a filmmaker, photographer, and videographer."
    ],
    // Contact details
    email:     "lubegakatte@gmail.com",
    vimeo:     "https://vimeo.com/kattelubega",
    // Downloadable resume — place the PDF at assets/resume.pdf
    resumeFile: "photos/CV.pdf",
    resumeLabel: "Download CV "
  }

};
