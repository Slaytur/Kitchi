module.exports = {
    mode: `jit`,
    content: [
        `./src/**/*.{js,ts,jsx,tsx,svelte}`
    ],
    prefix: `tw-`,
    theme: {
        extend: {},
        colors: {
            $black: `#1e1e1e`,
            $orange: `#da6525`,
            $green: `#58991f`,
            $lightgreen: `#b2d481`,
            $buff: `#c8a28d`,
            $sand: `#eacbaa`,
            $white: `#f9f2de`
        }
    },
    plugins: []
};
