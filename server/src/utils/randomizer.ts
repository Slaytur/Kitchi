/**
 * Generate a random integer.
 * @param min The minimum amount specified for the range.
 * @param max The maximum amount specified for the range.
 */
const int = (min: number, max: number): number => Math.floor(Math.random() * ((max + 1) - min)) + min;

/**
 * Generate a random string.
 * @param length The length of the string.
 */
const string = (length: number): string => {
    const chars = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;

    let text = ``;
    for (let i = 0; i < length; i++) text += chars[Math.floor(Math.random() * chars.length)];

    return text;
};

export {
    int,
    string
};
