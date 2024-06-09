/**
     * Waits a certain amount of milliseconds, in the form of a promise.
     * @param {*} ms Time in milliseconds to wait for.
     * @returns The timeout promise.
     */
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

/**
 * Main function.
 */
const main = async () => {
    const docTitle = document.title;
    while(true){
        document.title = docTitle+' _';
        await sleep(500);
        document.title = docTitle;
        await sleep(500);
    }
}

main();