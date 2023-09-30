export default {
    plugins: [
        `postcss-preset-env`,
        require(`tailwindcss`),
        require(`autoprefixer`),
        require(`postcss-import`)
    ]
};
