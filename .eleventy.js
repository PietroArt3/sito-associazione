module.exports = function(eleventyConfig) {
    // Copia CSS e Immagini nella cartella finale senza modificarli
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./img");
    eleventyConfig.addPassthroughCopy("doc");

    return {
        dir: {
            input: "src",    // Le tue bozze sono qui
            output: "public" // Il sito finito andrà qui
        },
    };
};