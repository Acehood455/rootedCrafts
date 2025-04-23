/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '350px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    
    extend: {
      colors: {
        brown: "#53423e",
        lightBrown: "#645550",
        darkBrown: "#2c2523",
        black: "#1e1917",
        white: "#f1e1d9",
        cyan: "#15d1e9",
        lightCyan: "#88e5f0",
        darkCyan: "#009fb3",
        orange: "#fb9718",
        lightOrange: "#fac27b",
        darkOrange: "#d28422",
        grey: "#626965",
        lightGrey: "#978580",
        darkGrey: "#3f4441",

        ///////////////////////////
        espresso: "#4A102A",         // dark, rich brown alternative
        sand: "#cbb8a9",             // soft, light neutral beige
        charcoal: "#2b2b2b",         // dark grounding base
        ivory: "#f6efe8",            // warm off-white
        teal: "#BBD8A3",             // bold accent similar to cyan
        mistTeal: "#a6dee2",         // lighter version of teal
        deepTeal: "#22818c",         // darker alternative for depth
        amber: "#EA7300",            // orange accent (punchy but elegant)
        golden: "#f8c878",           // soft highlight (like light orange)
        burntAmber: "#b06f10",       // deep warm accent
        slate: "#5e6e6d",            // cool-muted grey tone
        taupe: "#a4968c",            // warm grey (brownish tint)
        obsidian: "#3a3a38",         // very dark grey-brown hybrid
      },

      boxShadow: {
        tealShadow: '0px 0px 20px 0px #3dbfc7',
        tealMediumShadow: '0 0 1000px 300px rgba(61, 191, 199, 0.5)',   
        orangeMediumShadow: '0 0 1000px 300px rgba(255, 165, 0, 0.5)',
        tealMassive: '0 0 200px 80px rgba(61, 191, 199, 0.5)',   
        orangeMassive: '0 0 2000px 150px rgba(255, 165, 0, 0.5)',  
      }
    },

    fontFamily: {
      body: ['Josefin Sans' ],
      special: ['Roboto'],
      logo: ['Great Vibes, cursive']
    }
  },
  plugins: [],
}
// Original	Replacement	
// brown → espresso	Darker, richer brown	
// lightBrown → sand	More elegant beige tone	
// darkBrown → charcoal	Slightly cooler dark base	
// black → obsidian	Not quite pure black – more character	
// white → ivory	Softer, warmer white	
// cyan → teal	Similar energy, more mature	
// lightCyan → mistTeal	Gentle pastel aqua	
// darkCyan → deepTeal	Adds contrast but still balanced	
// orange → amber	Warm pop color	
// lightOrange → golden	Highlight-friendly	
// darkOrange → burntAmber	Cozy and bold	
// grey → slate	Neutral cooler balance	
// lightGrey → taupe	Earthy refinement	
// darkGrey → obsidian	Elegant, near-black

// Handmade jewelry

// Artisan soaps & candles

// Leather or woodcraft

// Pottery & ceramics

// Custom embroidery

// Handwoven or naturally dyed textiles

