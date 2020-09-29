module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: ["index.html"],
    theme: {
        extend: {
            colors: {
                DarkGray: "hsl(0, 0%, 63%)",
                VeryDarkGray: "hsl(0, 0%, 27%)",
                overlay: "rgba(0,0,0,0.7)",
            },
            fontSize: {
                default: "12px",
            },
            fontFamily: {
                spartan: ["Spartan", "sans-serif"],
            },
            width: {
                90: "90%",
            },
            height: {
                "10vh": "10vh",
                "70vh": "70vh",
                "30vh": "30vh",
            },
            gridTemplateRows: {
                split: "50vh auto",
                desktop: "65vh 35vh",
            },
            letterSpacing: {
                1: "5px",
                2: "7px",
                3: "9px",
            },
        },
    },
    variants: {},
    plugins: [],
};
