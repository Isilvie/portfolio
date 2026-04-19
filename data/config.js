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
    { src: "photos/photo2.jpg", alt: "self-potrait" },
    { src: "photos/photo6.jpg", alt: "S potrait" },
    { src: "photos/photo4.jpg", alt: "vandy" },
    { src: "photos/photo5.JPG", alt: "MKE" },
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
      " is a filmmaker, photographer, and videographer. I’ve worked on short films and videos, and I plan to work on feature films and television series. My work is primarily autobiographical and comedic. Inspired by mockumentaries, sketch, and stand-up comedy I am   interested in blending documentary and narrative modes within projects. Themes present in my past work are failure, success, community, absurdity, banality, and the relationships and interplay between it all in contemporary life. My overall goal is to participate in evolving human culture to be more focused on love (doing for others and ourselves). I think unique and authentic characters in TV and film help us expand our perspective and love for the people in our lives. Success as an artist, for me, is moving my audience to positive action or positive thinking. I hope my work can help people understand themselves and others better."
    ],
    // Contact details
    email:     "lubegakatte@gmail.com",
    vimeo:     "https://vimeo.com/kattelubega",
    // Downloadable resume — place the PDF at assets/resume.pdf
    resumeFile: "photos/CV.pdf",
    resumeLabel: "Download CV "
  }

};
