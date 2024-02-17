/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        '320px': '320px',
        '18p': '18.2%',
        '90p': '90%',
        'dyn': '80%',
        
      
      },
      height: {
        '142px': '142.5px',
        '15p': '15%',
        
      },
      fontFamily: {
        'switzer': ['Switzer', 'sans-serif'],
      },
      fontSize: {
        '18px': '18px',
      },
      aspectRatio: {
        'nav': '320/1080',
        'opt': '3200/1425',
        'logo': '320/200',
        'head': '1115/102',
        'park': '995/371'
      },
      spacing: {
        '5px': '5px',
      }
    },
  },
  plugins: [],
}

