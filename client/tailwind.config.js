module.exports = {
    mode: `jit`,
    content: [
        `./src/**/*.{js,ts,jsx,tsx,svelte}`
    ],
    prefix: `tw-`,
    theme: {
        extend: {},
        colors: {
            offblack: `#1e1e1e`,
            redorange: `#da6525`,
            darkgreen: `#58991f`,
            lightgreen: `#b2d481`,
            buff: `#c8a28d`,
            sand: `#eacbaa`,
            offwhite: `#f9f2de`
        }
    },
    plugins: []
};
