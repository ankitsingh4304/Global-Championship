export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        vermin: ["VerminVibes"],
        novega: ["Novega"],
        knightWarrior: ["KnightWarrior"],
        fastLines: ["FastLines"],
        crossFly: ["CrossFly"],
        speedPixel: ["speedPixel"],
        speedPixelItalic: ["speedPixelItalic"],
        brave81: ["Brave81"],
      },
    },
    keyframes: {
      scalePulse: {
        "0%, 100%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.025)" }, // slightly bigger
      },
	  popOpen: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
    },
    animation: {
      scalePulse: "scalePulse 2s ease-in-out infinite", // 2s for slow speed

	  //for popup
         popOpen: 'popOpen 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) forwards',
        slideDown: 'slideDown 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) forwards',
        slideUp: 'slideUp 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) forwards',
    },

	
  },
  plugins: [
	require('tailwind-scrollbar'),
  ],
};
