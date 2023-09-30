/**
 * Log something to console.
 * @author DamienVesper
 * @param color The color to log as.
 * @param content The content to log.
 */
const log = (color: `black` | `red` | `green` | `yellow` | `blue` | `magenta` | `cyan` | `white`, ...content: string[]): void => {
    // Set timing variables.
    const time = new Date();
    const second = time.getSeconds().toString().padStart(2, `0`);
    const minute = time.getMinutes().toString().padStart(2, `0`);

    const hour = time.getHours().toString().padStart(2, `0`);
    const day = time.getDate().toString().padStart(2, `0`);

    const month = (time.getMonth() + 1).toString().padStart(2, `0`);
    const year = time.getFullYear().toString();

    const formattedTime = `[${month}-${day}-${year} ${hour}:${minute}:${second}]`;

    // Get specified color.
    let logColor: string;
    switch (color) {
        case `black`:
            logColor = `\x1b[30m`;
            break;
        case `red`:
            logColor = `\x1b[31m`;
            break;
        case `green`:
            logColor = `\x1b[32m`;
            break;
        case `yellow`:
            logColor = `\x1b[33m`;
            break;
        case `blue`:
            logColor = `\x1b[34m`;
            break;
        case `magenta`:
            logColor = `\x1b[35m`;
            break;
        case `cyan`:
            logColor = `\x1b[36m`;
            break;
        case `white`:
            logColor = `\x1b[37m`;
            break;
    }

    console.log(logColor, formattedTime, content.join(` `));
};

export default log;
