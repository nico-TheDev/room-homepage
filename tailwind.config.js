module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            colors: {
                DarkGray: "hsl(0, 0%, 63%)",
                VeryDarkGray: "hsl(0, 0%, 27%)",
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
        },
    },
    variants: {},
    plugins: [],
};
